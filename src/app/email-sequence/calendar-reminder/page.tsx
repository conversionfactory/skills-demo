import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

type Email = {
  number: number;
  name: string;
  send: string;
  trigger: string;
  subject: string;
  preview: string;
  goal: string;
  cta: { text: string; url: string };
  body: string;
};

const sequenceOverview = {
  name: "Google Calendar Integration Reminder",
  trigger:
    "User creates an event registration form but has not connected Google Calendar within 24 hours",
  goal: "Drive Google Calendar integration adoption to increase retention and demonstrate product value",
  length: "4 emails over 10 days (behavior-gated)",
  exitConditions: [
    "User connects Google Calendar (primary exit)",
    "User connects any calendar integration (Outlook, Calendly)",
    "User deletes their event registration form",
    "User unsubscribes",
  ],
  behaviorTriggers: [
    {
      event: "form.created",
      condition: 'form.type = "event_registration"',
      action: "Enter sequence, start 24-hour wait timer",
    },
    {
      event: "integration.connected",
      condition: 'integration.type = "google_calendar"',
      action: "Exit sequence immediately, send confirmation email",
    },
    {
      event: "form.response.received",
      condition: "form has no calendar integration && response_count >= 5",
      action: "Accelerate Email 2 — send within 1 hour instead of waiting",
    },
    {
      event: "user.visited_page",
      condition: 'page = "/integrations" && calendar not connected',
      action:
        "If between emails, send next email within 2 hours (interest signal)",
    },
  ],
  metrics: [
    {
      name: "Calendar connection rate",
      target: "35-45%",
      description:
        "Users who connect Google Calendar within 10 days of creating an event form",
    },
    {
      name: "Open rate",
      target: "40-55%",
      description:
        "Behavior-triggered emails typically see higher open rates than time-based",
    },
    {
      name: "Click rate",
      target: "8-12%",
      description:
        "One-click connection link should drive high click-through",
    },
    {
      name: "Time to connect",
      target: "< 3 days",
      description:
        "Median time from first email to calendar connection",
    },
  ],
};

const emails: Email[] = [
  {
    number: 1,
    name: "Gentle Nudge",
    send: "24 hours after event form creation",
    trigger:
      "User created an event registration form but hasn't connected Google Calendar",
    subject: "Your event form is live — want RSVPs on your calendar?",
    preview: "One click to sync registrations with Google Calendar.",
    goal: "Introduce the integration at the moment it's most relevant. Low-pressure, high-value.",
    cta: {
      text: "Connect Google Calendar",
      url: "/dashboard/integrations/google-calendar",
    },
    body: `Hey {{first_name}},

Your event registration form is live and collecting responses — nice work.

Quick thought: every time someone registers, you probably want to know about it. And if you're managing the event through Google Calendar, you definitely want attendees there too.

Good news — FormFlow syncs directly with Google Calendar. Here's what happens when you connect:

• **New registrations** automatically create calendar events for attendees
• **You get a summary** of who's coming, dietary preferences, and any notes — right on the event
• **Cancellations** update the calendar instantly (no manual cleanup)

It takes about 30 seconds to connect. One click to authorize, pick which calendar, and you're done.

[CTA: Connect Google Calendar →]

No pressure — your form works great without it. But if you're juggling registrations and a calendar separately, this saves a surprising amount of time.

— The FormFlow Team`,
  },
  {
    number: 2,
    name: "Social Proof + Pain Point",
    send: "Day 4 (or accelerated: 1 hour after 5th response received)",
    trigger:
      "Still no calendar connected AND (4 days elapsed OR form has received 5+ responses)",
    subject: "You have {{response_count}} registrations. Your calendar has zero.",
    preview: "Here's what happens when you manage events without sync.",
    goal: "Use their own data to create urgency. The more responses they have, the more painful manual management becomes.",
    cta: {
      text: "Sync registrations to calendar",
      url: "/dashboard/integrations/google-calendar",
    },
    body: `Hey {{first_name}},

Your event form has **{{response_count}} registrations** so far. That's great.

But right now, those registrations live in FormFlow and your calendar lives in Google Calendar. That means you're probably doing one of these:

1. Manually adding each attendee to the calendar event
2. Keeping a separate spreadsheet to track who's coming
3. Hoping you'll remember to check FormFlow before the event

Lisa Park, an Operations Director at GrowthCo, used to do option 3. She told us: "I missed two dietary restrictions at our last event because I forgot to check the form the day before. Never again."

Now her FormFlow registrations sync to Google Calendar automatically. Attendee names, meal preferences, notes — all visible right on the calendar event.

**It takes 30 seconds to set up. And it's retroactive** — your existing {{response_count}} registrations will sync immediately.

[CTA: Sync registrations to calendar →]

— The FormFlow Team`,
  },
  {
    number: 3,
    name: "Feature Deep-Dive",
    send: "Day 7 (or 2 hours after user visits /integrations page)",
    trigger:
      "Still no calendar connected AND (7 days elapsed OR user visited integrations page)",
    subject: "3 things Google Calendar sync does that you might not expect",
    preview: "Auto-reminders, attendee notes, cancellation handling.",
    goal: "Show depth of the integration. Address the 'is it worth connecting?' hesitation with concrete features.",
    cta: {
      text: "Connect in 30 seconds",
      url: "/dashboard/integrations/google-calendar",
    },
    body: `Hey {{first_name}},

Most people think Google Calendar sync just adds events to your calendar. It does — but it also does a few things you might not expect:

**1. Automatic attendee reminders**

When a registration syncs to Google Calendar, the attendee gets a Google Calendar invite. That means Google handles the reminder emails for you — 1 day before, 1 hour before, whatever you set. You don't need to build a separate reminder workflow.

**2. Attendee details on the event**

Dietary preferences? T-shirt size? Special requests? Every form field maps to the calendar event description. When you open the event the morning of, everything you need is right there.

**3. Cancellation handling**

If someone updates their registration or cancels, the calendar event updates automatically. No stale attendee lists. No ghost registrations.

The setup is a single OAuth click — no API keys, no configuration, no IT department.

[CTA: Connect in 30 seconds →]

If Google Calendar isn't your thing, we also sync with **Outlook**, **Apple Calendar**, and **Calendly**. Same one-click setup.

— The FormFlow Team`,
  },
  {
    number: 4,
    name: "Last Chance + Alternative",
    send: "Day 10",
    trigger: "Still no calendar connected AND 10 days elapsed",
    subject: "Last reminder: your event is {{days_until_event}} days away",
    preview: "Connect now or download the attendee list as a backup.",
    goal: "Final push with urgency tied to their actual event date. Offer an alternative (CSV export) so the email is useful even if they don't connect.",
    cta: {
      text: "Connect Google Calendar",
      url: "/dashboard/integrations/google-calendar",
    },
    body: `Hey {{first_name}},

Your event is coming up {{#if days_until_event}}in **{{days_until_event}} days**{{else}}soon{{/if}}, and you have **{{response_count}} registrations** waiting.

I'll keep this short — two options:

**Option A: Connect Google Calendar (30 seconds)**
All registrations sync to your calendar instantly. Attendees get calendar invites. Cancellations update automatically. You show up to your event knowing exactly who's coming.

[CTA: Connect Google Calendar →]

**Option B: Download your attendee list**
If calendar sync isn't for you, no worries. You can export all registrations as a CSV from your dashboard. Names, emails, meal preferences, everything — in one spreadsheet.

[Link: Download attendee CSV →]

Either way, make sure you have your attendee list somewhere accessible before the event. I've seen too many organizers scramble the morning of.

This is my last email about calendar sync — I won't bug you about it again. But the option is always there in your integrations dashboard if you change your mind.

— The FormFlow Team`,
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
        <div className="rounded-md bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 p-3 mt-2">
          <p className="text-xs font-medium text-amber-800 dark:text-amber-200 mb-1">
            Behavior Trigger
          </p>
          <p className="text-xs text-amber-700 dark:text-amber-300">
            {email.trigger}
          </p>
        </div>
        <p className="text-sm text-muted-foreground mt-2">{email.goal}</p>
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
              if (paragraph.startsWith("[Link:")) {
                const linkText = paragraph
                  .replace("[Link: ", "")
                  .replace(" →]", "");
                return (
                  <p key={i} className="text-sm my-2">
                    <span className="text-primary underline cursor-pointer">
                      {linkText} →
                    </span>
                  </p>
                );
              }
              if (paragraph.startsWith("•")) {
                const items = paragraph
                  .split("\n")
                  .filter((l) => l.startsWith("•"));
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
                const items = paragraph
                  .split("\n")
                  .filter((l) => /^\d/.test(l));
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

export default function CalendarReminderPage() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Breadcrumb */}
        <div className="mb-8">
          <Link
            href="/email-sequence"
            className="text-sm text-muted-foreground hover:text-foreground"
          >
            ← All email sequences
          </Link>
        </div>

        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Badge>Email Sequence</Badge>
            <Badge variant="outline">Behavior-Triggered</Badge>
          </div>
          <h1 className="text-4xl font-bold mb-4">
            Google Calendar Integration Reminder
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A 4-email behavior-triggered sequence that nudges users to connect
            Google Calendar after creating an event registration form. Every
            email is gated on real user actions — not just time delays.
          </p>
        </div>

        {/* Sequence overview */}
        <Card className="mb-8">
          <CardHeader>
            <h2 className="font-semibold text-lg">Sequence Overview</h2>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid sm:grid-cols-2 gap-4 text-sm">
              <div className="sm:col-span-2">
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
              <div>
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

        {/* Behavior triggers */}
        <Card className="mb-8">
          <CardHeader>
            <h2 className="font-semibold text-lg">
              Behavior Triggers &amp; Signals
            </h2>
            <p className="text-sm text-muted-foreground">
              This sequence responds to real user behavior — not just time
              delays. Here are the events that control when emails send.
            </p>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {sequenceOverview.behaviorTriggers.map((bt, i) => (
                <div
                  key={i}
                  className="rounded-lg border p-4 space-y-2"
                >
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className="text-xs font-mono">
                      {bt.event}
                    </Badge>
                  </div>
                  <p className="text-sm">
                    <span className="font-medium">When:</span>{" "}
                    <code className="text-xs bg-muted px-1.5 py-0.5 rounded">
                      {bt.condition}
                    </code>
                  </p>
                  <p className="text-sm text-muted-foreground">
                    <span className="font-medium text-foreground">Action:</span>{" "}
                    {bt.action}
                  </p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Timeline */}
        <Card className="mb-8">
          <CardHeader>
            <h2 className="font-semibold text-lg">Sequence Flow</h2>
            <p className="text-sm text-muted-foreground">
              Timing adapts based on user behavior. Emails can accelerate or
              skip based on actions taken.
            </p>
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
                    <p className="text-xs text-muted-foreground">
                      {email.send}
                    </p>
                  </div>
                </div>
              ))}
              {/* Exit node */}
              <div className="flex gap-4 items-start">
                <div className="flex flex-col items-center">
                  <div className="w-8 h-8 rounded-full bg-green-600 text-white flex items-center justify-center text-sm shrink-0">
                    ✓
                  </div>
                </div>
                <div>
                  <p className="font-medium text-sm text-green-700 dark:text-green-400">
                    Calendar connected — exit sequence
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Send confirmation email, stop all pending sends
                  </p>
                </div>
              </div>
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
            <h2 className="font-semibold text-lg">
              Metrics &amp; Benchmarks
            </h2>
            <p className="text-sm text-muted-foreground">
              Behavior-triggered emails typically outperform time-based
              sequences because they arrive at moments of high relevance.
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

        {/* Implementation notes */}
        <Card className="mt-8">
          <CardHeader>
            <h2 className="font-semibold text-lg">Implementation Notes</h2>
          </CardHeader>
          <CardContent className="space-y-3 text-sm text-muted-foreground">
            <p>
              <strong className="text-foreground">
                Event tracking required:
              </strong>{" "}
              This sequence requires your app to emit{" "}
              <code className="text-xs bg-muted px-1.5 py-0.5 rounded">
                form.created
              </code>
              ,{" "}
              <code className="text-xs bg-muted px-1.5 py-0.5 rounded">
                form.response.received
              </code>
              ,{" "}
              <code className="text-xs bg-muted px-1.5 py-0.5 rounded">
                integration.connected
              </code>
              , and{" "}
              <code className="text-xs bg-muted px-1.5 py-0.5 rounded">
                user.visited_page
              </code>{" "}
              events to your email automation tool (Customer.io, Braze, etc.).
            </p>
            <p>
              <strong className="text-foreground">
                Merge fields needed:
              </strong>{" "}
              <code className="text-xs bg-muted px-1.5 py-0.5 rounded">
                {"{{first_name}}"}
              </code>
              ,{" "}
              <code className="text-xs bg-muted px-1.5 py-0.5 rounded">
                {"{{response_count}}"}
              </code>
              ,{" "}
              <code className="text-xs bg-muted px-1.5 py-0.5 rounded">
                {"{{days_until_event}}"}
              </code>{" "}
              (calculated from the event date in the form settings, if set).
            </p>
            <p>
              <strong className="text-foreground">Suppression rules:</strong>{" "}
              Do not send if the user has connected any calendar integration
              (not just Google). Do not send Email 4 if the event date has
              already passed. Suppress entirely if user has unsubscribed from
              product emails.
            </p>
            <p>
              <strong className="text-foreground">
                Coordination with welcome sequence:
              </strong>{" "}
              This sequence can run concurrently with the Free Plan Welcome
              sequence. However, never send both sequences&apos; emails on the
              same day. If there&apos;s a collision, delay this sequence&apos;s
              email by 24 hours.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
