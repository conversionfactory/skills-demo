#!/bin/bash
set -e

REPO_DIR="$(cd "$(dirname "$0")" && pwd)"
PARENT_DIR="$(dirname "$REPO_DIR")"

DEMOS=(
  "copywriting:3030"
  "seo-audit:3031"
  "programmatic-seo:3032"
  "email-sequence:3033"
)

echo "🚀 Setting up demo worktrees..."

for entry in "${DEMOS[@]}"; do
  branch="${entry%%:*}"
  port="${entry##*:}"
  dir="$PARENT_DIR/skills-demo-$branch"

  if [ -d "$dir" ]; then
    echo "  ✓ Worktree already exists: skills-demo-$branch"
  else
    git -C "$REPO_DIR" worktree add "$dir" "demo/$branch"
    echo "  ✓ Created worktree: skills-demo-$branch"
  fi

  # Copy .env.local into each worktree (it's gitignored)
  if [ -f "$REPO_DIR/.env.local" ] && [ ! -f "$dir/.env.local" ]; then
    cp "$REPO_DIR/.env.local" "$dir/.env.local"
    echo "    → copied .env.local"
  fi
done

echo ""
echo "🌐 Starting dev servers..."

for entry in "${DEMOS[@]}"; do
  branch="${entry%%:*}"
  port="${entry##*:}"
  dir="$PARENT_DIR/skills-demo-$branch"

  (cd "$dir" && npm run dev -- -p "$port" > "/tmp/skills-demo-$branch.log" 2>&1) &
  echo "  ✓ demo/$branch → http://localhost:$port (log: /tmp/skills-demo-$branch.log)"
done

echo ""
echo "⏳ Waiting for servers to be ready..."
sleep 6

echo ""
echo "✅ All demo servers running:"
echo ""
echo "  Copywriting       → http://localhost:3030"
echo "  SEO Audit         → http://localhost:3031"
echo "  Programmatic SEO  → http://localhost:3032"
echo "  Email Sequence    → http://localhost:3033"
echo ""
echo "To stop all servers: kill \$(lsof -ti :3030,:3031,:3032,:3033)"
