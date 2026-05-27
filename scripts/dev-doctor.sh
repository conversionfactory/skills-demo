#!/usr/bin/env bash
# Project-local wrapper — delegates to the global dev-doctor.
# Edit ~/.claude/scripts/dev-doctor.sh to change checks for all projects.
exec bash ~/.claude/scripts/dev-doctor.sh "$@"
