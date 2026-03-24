import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

type Email = {
  number: number;
  name: string;
  send: string;
  subject: string;
  preview: string;
  goal: string;
  cta: { text: string; url: string };
  body: string;
};

const sequenceOverview = {
  name: "Free Plan Welcome & Activation",
  trigger: "New free plan signup",
  goal: "Activate user (create + publish first form) → upgrade to Pro ($29/mo)",
  length: "7 emails over 14 days",
  exitConditions: [
    "User upgrades to Pro (move to New Customer series)",
    "User unsubscribes",
  ],
  metrics: [
    { name: "Activation rate", target: "60%+", description: "Users who create and publish at least one form within 14 days" },
    { name: "Open rate", target: "35-50%", description: "Higher early in sequence, tapering to 25-35% by email 7" },
    { name: "Click rate", target: "5-8%", description: "Template and builder links should drive highest clicks" },
    { name: "Free → Pro conversion", target: "8-12%", description: "Within 30 days of signup" },
    { name: "Unsubscribe rate", target: "< 0.3%", description: "Per email — if any email exceeds 0.5%, revisit copy or timing" },
  ],
};

const emails: Email[] = [
  {
    number: 1,
    name: "Welcome + First Step",
    send: "Immediately after signup",
    subject: "Welcome to FormFlow — let's build your first form",
    preview: "It takes 2 minutes. Seriously.",
    goal: "Get user into the builder. One clear action: create first form.",
    cta: { text: "Create your first form", url: "/dashboard/new" },
    body: `Hey {{first_name}},

You just signed up for FormFlow. Good call.

Here's the thing: most form builders make you watch a 20-minute tutorial before you can do anything. We think that's ridiculous.

So here's your one task: **create your first form.**

Click the button below and you'll land in the builder with a blank canvas. Drag a few fields in, hit publish, and you've got a live form with a shareable link.

The whole thing takes about 2 minutes.

[CTA: Create your first form →]

Want a head start? We've got 50+ templates for common use cases — lead gen, feedback surveys, job applications, event registration. Pick one and customize it.

Talk soon,
The FormFlow Team

P.S. Reply to this email anytime. A real person reads every one.`,
  },
  {
    number: 2,
    name: "Quick Win — Templates",
    send: "Day 1",
    subject: "The fastest way to a professional form",
    preview: "50+ templates, zero design skills needed.",
    goal: "Drive template usage. Lower the activation barrier for users who didn't create a form yet.",
    cta: { text: "Browse templates", url: "/templates" },
    body: `Hey {{first_name}},

Quick question: have you seen our template library yet?

Every template is pre-built for a real use case — not some generic "Untitled Form" with three text fields.

Here are the most popular ones:

• **Contact Form** — Name, email, message. Clean and simple.
• **Customer Feedback Survey** — NPS + follow-up questions based on score.
• **Job Application** — Resume upload, work history, screening questions.
• **Event Registration** — Meal preferences, t-shirt sizes, payment collection.
• **Lead Generation** — Company, role, budget. Straight to your CRM.

Pick one, swap in your logo and colors, and publish. You'll have a professional form live in under 60 seconds.

[CTA: Browse templates →]

— The FormFlow Team`,
  },
  {
    number: 3,
    name: "Story / Why We Built This",
    send: "Day 3",
    subject: "Why we built another form builder",
    preview: "We had 47 fields and a 12% completion rate.",
    goal: "Build emotional connection. Establish that FormFlow exists to solve a real problem, not just be another tool.",
    cta: { text: "Build a form", url: "/dashboard/new" },
    body: `Hey {{first_name}},

Fair question — the world doesn't need another form builder. So why did we build one?

Because we were tired of losing leads to our own forms.

Our marketing team had a lead capture form with 47 fields. It loaded slowly, looked generic, and had a 12% completion rate. For every 100 people who clicked "Get a Quote," 88 walked away.

We tried Typeform (too expensive at scale), Google Forms (too ugly for client-facing work), and JotForm (too complicated for our non-technical team).

None of them solved the actual problem: **forms that people don't finish are forms that don't work.**

So we built FormFlow around one idea — completion rate is the only metric that matters. Every design decision, every feature, every default setting is optimized to get more people from "start" to "submit."

And it's working. Our average user sees a 3.2x improvement in completion rate within the first month.

Want to see it for yourself?

[CTA: Build a form →]

— Jamie, Co-founder at FormFlow`,
  },
  {
    number: 4,
    name: "Social Proof — Customer Story",
    send: "Day 5",
    subject: "How TechCorp tripled their leads with one change",
    preview: "Same data. Fewer fields. 3x more completions.",
    goal: "Show proof that FormFlow delivers results. Introduce conditional logic as a reason to explore Pro.",
    cta: { text: "Start free Pro trial", url: "/pricing" },
    body: `Hey {{first_name}},

Sarah Johnson is a Marketing Manager at TechCorp. Last year, her team's lead form had a problem.

It was a 47-field Typeform with a 12% completion rate. They were paying for traffic that bounced at the very last step.

Here's what she did:

1. Rebuilt the form in FormFlow using a lead gen template
2. Added conditional logic to show only relevant fields
3. Cut visible fields from 47 to 9 (same data collected)

**The result: 68% completion rate. Lead volume tripled in one month.**

The form still collects the same information — it just asks for it smarter. Conditional logic means respondents only see questions that apply to them.

Sarah's words: "We didn't change our traffic, our offer, or our targeting. We just fixed the form. That's it."

Want to try conditional logic on your forms? It's available on the Pro plan — and you can start a free trial anytime.

[CTA: Start free Pro trial →]

— The FormFlow Team`,
  },
  {
    number: 5,
    name: "Overcome Objection — Time",
    send: "Day 7",
    subject: '"I haven\'t had time to set up my forms yet"',
    preview: "What if it only took 2 minutes?",
    goal: "Re-engage users who signed up but haven't activated. Reframe the time objection.",
    cta: { text: "Open a template and try it", url: "/templates" },
    body: `Hey {{first_name}},

I hear this a lot: "I signed up but haven't had time to really dig in."

Totally get it. But here's the thing — FormFlow doesn't require "digging in."

Here's what 2 minutes looks like:

**Minute 1:** Open a template. Swap the placeholder text for your own questions.

**Minute 2:** Click publish. Copy the link. Paste it wherever you need it — email, website, Slack.

Done. You have a live form collecting responses.

No tutorials. No configuration. No "onboarding wizard" that takes longer than the actual task.

The reason most form tools feel time-consuming is because they are. We built FormFlow to be the opposite.

[CTA: Open a template and try it →]

If you do get stuck, just reply to this email. Our team responds within 2 hours on weekdays.

— The FormFlow Team`,
  },
  {
    number: 6,
    name: "Feature Highlight — Integrations",
    send: "Day 10",
    subject: "Your forms are collecting data. Where is it going?",
    preview: "Slack, Salesforce, Sheets — responses arrive instantly.",
    goal: "Showcase integrations as a reason to upgrade. Plant the seed that manual data handling is the problem.",
    cta: { text: "Connect your first integration", url: "/pricing" },
    body: `Hey {{first_name}},

Here's the dirty secret of most form tools: they're great at collecting data and terrible at getting it where you need it.

You end up exporting CSVs, copying rows into spreadsheets, and manually updating your CRM. Every. Single. Time.

FormFlow connects to 100+ tools so responses arrive where you work — automatically.

Here are the most popular integrations:

• **Slack** — Get notified in a channel the moment someone submits
• **Google Sheets** — Every response becomes a new row, instantly
• **Salesforce** — Create leads or contacts without lifting a finger
• **HubSpot** — Sync form data to your CRM contacts
• **Zapier** — Connect to 5,000+ other tools

Set it up once, and every future response flows through automatically. No more copy-pasting between tabs.

Integrations are available on the Pro plan. Start a free trial to connect your tools.

[CTA: Connect your first integration →]

— The FormFlow Team`,
  },
  {
    number: 7,
    name: "Conversion — Upgrade to Pro",
    send: "Day 14",
    subject: "You've been on FormFlow for 2 weeks. Here's what you're missing.",
    preview: "Conditional logic, integrations, analytics — $29/mo.",
    goal: "Direct upgrade push. Summarize value, list what they're missing, make the ask with risk reversal.",
    cta: { text: "Start your free Pro trial", url: "/pricing" },
    body: `Hey {{first_name}},

You've been on FormFlow for two weeks now. Here's a quick look at what you've done:

• **{{form_count}} forms created**
• **{{response_count}} responses collected**

Not bad for a free plan.

But you're bumping into the limits. Here's what you're leaving on the table:

**Conditional logic** — Show different questions based on answers. Shorter forms, higher completion rates.

**Integrations** — Send responses to Slack, Salesforce, Sheets, and 100+ other tools automatically.

**File uploads** — Let respondents attach resumes, receipts, documents. Up to 25MB each.

**Remove branding** — Your forms, your brand. No "Powered by FormFlow" footer.

**Analytics** — See exactly where respondents drop off and why.

All of this is included in Pro for **$29/month**. That's less than the cost of one lost lead.

And there's no risk: you get a **14-day free trial**. If it's not worth it, downgrade back to Free. No questions asked.

[CTA: Start your free Pro trial →]

— The FormFlow Team

P.S. If you have questions about whether Pro is right for you, just reply. No sales pitch — I'll give you an honest answer.`,
  },
];

function EmailCard({ email }: { email: Email }) {
  return (
    <Card id={`email-${email.number}`}>
      <CardHeader className="pb-3">
        <div className="flex items-center gap-3 mb-2">
          <Badge variant="outline" className="text-xs">
            Email {email.number}
          </Badge>
          <Badge variant="secondary" className="text-xs">
            {email.send}
          </Badge>
        </div>
        <h3 className="font-semibold text-lg">{email.name}</h3>
        <p className="text-sm text-muted-foreground">{email.goal}</p>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="rounded-lg border bg-muted/30 p-4 space-y-2">
          <div className="flex gap-2 text-sm">
            <span className="font-medium shrink-0 w-16">Subject:</span>
            <span>{email.subject}</span>
          </div>
          <div className="flex gap-2 text-sm">
            <span className="font-medium shrink-0 w-16">Preview:</span>
            <span className="text-muted-foreground">{email.preview}</span>
          </div>
        </div>

        <div className="rounded-lg border p-6 bg-white dark:bg-zinc-950">
          <div className="prose prose-sm dark:prose-invert max-w-none">
            {email.body.split("\n\n").map((paragraph, i) => {
              if (paragraph.startsWith("[CTA:")) {
                const buttonText = paragraph
                  .replace("[CTA: ", "")
                  .replace(" →]", "");
                return (
                  <div key={i} className="my-6 text-center">
                    <span className="inline-block rounded-md bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground">
                      {buttonText} →
                    </span>
                  </div>
                );
              }
              if (paragraph.startsWith("•")) {
                const items = paragraph.split("\n").filter((l) => l.startsWith("•"));
                return (
                  <ul key={i} className="my-3 space-y-1.5 list-none pl-0">
                    {items.map((item, j) => (
                      <li key={j} className="text-sm pl-0">
                        {renderBold(item)}
                      </li>
                    ))}
                  </ul>
                );
              }
              if (/^\d\./.test(paragraph)) {
                const items = paragraph.split("\n").filter((l) => /^\d/.test(l));
                return (
                  <ol key={i} className="my-3 space-y-1.5 list-decimal pl-5">
                    {items.map((item, j) => (
                      <li key={j} className="text-sm">
                        {renderBold(item.replace(/^\d\.\s*/, ""))}
                      </li>
                    ))}
                  </ol>
                );
              }
              return (
                <p key={i} className="text-sm my-2 leading-relaxed">
                  {renderBold(paragraph)}
                </p>
              );
            })}
          </div>
        </div>

        <div className="flex items-center gap-2 text-sm">
          <span className="font-medium">Primary CTA:</span>
          <Badge>{email.cta.text}</Badge>
          <span className="text-muted-foreground">→ {email.cta.url}</span>
        </div>
      </CardContent>
    </Card>
  );
}

function renderBold(text: string): React.ReactNode {
  const parts = text.split(/(\*\*[^*]+\*\*)/);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={i} className="font-semibold text-foreground">
          {part.slice(2, -2)}
        </strong>
      );
    }
    return <span key={i}>{part}</span>;
  });
}

export default function EmailSequencePage() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge className="mb-4">Email Sequence</Badge>
          <h1 className="text-4xl font-bold mb-4">
            Free Plan Welcome &amp; Activation
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A 7-email onboarding sequence that activates free users and drives
            upgrades to Pro. Triggered on new free plan signup.
          </p>
        </div>

        {/* Sequence overview */}
        <Card className="mb-8">
          <CardHeader>
            <h2 className="font-semibold text-lg">Sequence Overview</h2>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid sm:grid-cols-2 gap-4 text-sm">
              <div>
                <span className="font-medium">Trigger:</span>{" "}
                <span className="text-muted-foreground">
                  {sequenceOverview.trigger}
                </span>
              </div>
              <div>
                <span className="font-medium">Length:</span>{" "}
                <span className="text-muted-foreground">
                  {sequenceOverview.length}
                </span>
              </div>
              <div className="sm:col-span-2">
                <span className="font-medium">Goal:</span>{" "}
                <span className="text-muted-foreground">
                  {sequenceOverview.goal}
                </span>
              </div>
              <div className="sm:col-span-2">
                <span className="font-medium">Exit conditions:</span>
                <ul className="mt-1 text-muted-foreground list-disc pl-5 space-y-1">
                  {sequenceOverview.exitConditions.map((condition) => (
                    <li key={condition}>{condition}</li>
                  ))}
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Timeline */}
        <Card className="mb-8">
          <CardHeader>
            <h2 className="font-semibold text-lg">Sequence Timeline</h2>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-0">
              {emails.map((email, i) => (
                <div key={email.number} className="flex gap-4 items-start">
                  <div className="flex flex-col items-center">
                    <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-semibold shrink-0">
                      {email.number}
                    </div>
                    {i < emails.length - 1 && (
                      <div className="w-px h-8 bg-border" />
                    )}
                  </div>
                  <div className="pb-4">
                    <a
                      href={`#email-${email.number}`}
                      className="font-medium text-sm hover:underline"
                    >
                      {email.name}
                    </a>
                    <p className="text-xs text-muted-foreground">{email.send}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Separator className="my-8" />

        {/* Emails */}
        <div className="space-y-8">
          <h2 className="text-2xl font-bold">Full Email Copy</h2>
          {emails.map((email) => (
            <EmailCard key={email.number} email={email} />
          ))}
        </div>

        <Separator className="my-8" />

        {/* Metrics */}
        <Card>
          <CardHeader>
            <h2 className="font-semibold text-lg">Metrics &amp; Benchmarks</h2>
            <p className="text-sm text-muted-foreground">
              Track these metrics to measure sequence performance and identify
              emails that need optimization.
            </p>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {sequenceOverview.metrics.map((metric) => (
                <div
                  key={metric.name}
                  className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-3"
                >
                  <div className="flex items-baseline gap-2">
                    <span className="font-medium text-sm">{metric.name}</span>
                    <Badge variant="outline" className="text-xs">
                      {metric.target}
                    </Badge>
                  </div>
                  <span className="text-sm text-muted-foreground">
                    {metric.description}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Segmentation notes */}
        <Card className="mt-8">
          <CardHeader>
            <h2 className="font-semibold text-lg">Segmentation &amp; Branching Notes</h2>
          </CardHeader>
          <CardContent className="space-y-3 text-sm text-muted-foreground">
            <p>
              <strong className="text-foreground">If user creates a form before Email 2:</strong>{" "}
              Skip Email 2 (templates) and Email 5 (time objection). They&apos;re
              already activated — focus on feature discovery and upgrade.
            </p>
            <p>
              <strong className="text-foreground">If user publishes a form before Email 5:</strong>{" "}
              Replace Email 5 with a &ldquo;congrats on publishing&rdquo; email that
              introduces analytics and suggests connecting an integration.
            </p>
            <p>
              <strong className="text-foreground">If user upgrades at any point:</strong>{" "}
              Exit this sequence immediately and move to the New Customer Welcome
              series (separate sequence focused on adoption, not conversion).
            </p>
            <p>
              <strong className="text-foreground">High-engagement users:</strong>{" "}
              If a user has created 3+ forms and is hitting the free plan limit,
              trigger the upgrade email (Email 7) earlier — don&apos;t wait until
              day 14.
            </p>
          </CardContent>
        </Card>

        {/* A/B testing suggestions */}
        <Card className="mt-8">
          <CardHeader>
            <h2 className="font-semibold text-lg">A/B Testing Suggestions</h2>
          </CardHeader>
          <CardContent className="space-y-3 text-sm text-muted-foreground">
            <p>
              <strong className="text-foreground">Email 1 subject line:</strong>{" "}
              Test &ldquo;Welcome to FormFlow — let&apos;s build your first form&rdquo; vs.
              &ldquo;Your FormFlow account is ready (takes 2 min to set up)&rdquo;
            </p>
            <p>
              <strong className="text-foreground">Email 4 (social proof) timing:</strong>{" "}
              Test sending on day 5 vs. day 3. Earlier social proof may accelerate
              activation for hesitant users.
            </p>
            <p>
              <strong className="text-foreground">Email 7 subject line:</strong>{" "}
              Test usage-personalized (&ldquo;You&apos;ve built 2 forms...&rdquo;)
              vs. benefit-focused (&ldquo;Unlock conditional logic, integrations,
              and analytics&rdquo;).
            </p>
            <p>
              <strong className="text-foreground">CTA button text:</strong>{" "}
              Test &ldquo;Start free Pro trial&rdquo; vs. &ldquo;Try Pro free for
              14 days&rdquo; on Emails 4, 6, and 7.
            </p>
          </CardContent>
        </Card>

        <Separator className="my-8" />

        {/* Related sequences */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Related Sequences</h2>
          <Link href="/email-sequence/calendar-reminder">
            <Card className="hover:border-primary transition-colors">
              <CardHeader>
                <div className="flex items-center gap-2 mb-1">
                  <Badge variant="outline">Behavior-Triggered</Badge>
                </div>
                <h3 className="font-semibold text-lg">
                  Google Calendar Integration Reminder
                </h3>
                <p className="text-sm text-muted-foreground">
                  A 4-email behavior-triggered sequence that nudges users to
                  connect Google Calendar after creating an event registration
                  form. Demonstrates how emails respond to real user actions, not
                  just time delays.
                </p>
              </CardHeader>
            </Card>
          </Link>
        </div>
      </div>
    </section>
  );
}
