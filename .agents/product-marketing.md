# Product Marketing Context

*Last updated: 2026-05-27*
*Status: Assumption-based V1 — needs validation against customer interviews, support tickets, and G2/Capterra reviews before production use.*

## Product Overview

**One-liner:** The form builder that finishes the job — logic, payments, and CRM sync without the Zapier glue.

**What it does:** FormCraft is a drag-and-drop form builder for marketing, ops, and RevOps teams. It combines a no-code visual builder with conditional logic, native Stripe payments, and direct integrations to HubSpot, Salesforce, Slack, and 60+ other tools — so a form can capture, qualify, charge, and route a lead in one step instead of three or four.

**Product category:** Online form builder / lead capture & workflow tool. Customers search for it as "Typeform alternative," "form builder with payments," or "form builder with conditional logic."

**Product type:** B2B SaaS, self-serve with PLG motion.

**Business model:** Freemium subscription.
- **Free:** Up to 100 submissions/month, FormCraft branding
- **Starter:** ~$29/mo — branded forms, basic integrations, 1,000 submissions
- **Pro:** ~$79/mo — full logic, payments, all integrations, 10,000 submissions
- **Business:** ~$199/mo — multi-user, SSO, analytics, unlimited submissions
*(pricing assumed; needs confirmation)*

## Target Audience

**Target companies:**
- B2B SaaS companies, 10–500 employees
- Marketing agencies serving SMBs
- Event organizers, nonprofits, course creators
- E-commerce brands collecting non-checkout data (waitlists, returns, custom orders)

**Decision-makers:**
- Head of Marketing / Demand Gen Lead (most common buyer)
- Marketing Ops / RevOps Manager (technical evaluator)
- Founders at <50-person companies (final approver)

**Primary use case:** Capture a lead, qualify it, and route it to the right place in the stack — without an engineer or a Zapier subscription.

**Jobs to be done:**
- Capture and qualify leads from a website without manual triage
- Take payment at the moment of signup (event registration, deposits, donations)
- Replace a messy Typeform + Zapier + Stripe Checkout stack with one tool
- Get visibility into *why* a form converts (or doesn't)

**Use cases:**
- Inbound lead capture with auto-routing to HubSpot/Salesforce
- Event registration with payment + waiver + Slack alert to ops
- Multi-step demo request that qualifies and books a call
- Customer onboarding intake (kickoff questionnaire → CRM record)
- Job applications with screening logic
- Waitlists and beta signups

## Personas

| Persona | Cares about | Challenge | Value we promise |
|---------|-------------|-----------|------------------|
| **User** — Marketing Manager / Demand Gen | Shipping a form *today* without filing a dev ticket | "I need conditional logic but the builder is too clunky / requires a developer" | Build a real working form in 20 minutes, no engineer needed |
| **Champion** — Marketing Ops / RevOps | Clean data in the CRM, fewer broken Zaps | Stitching forms → Zapier → CRM is fragile and expensive | Native integrations that don't break and don't need a Zapier seat |
| **Decision Maker** — Head of Marketing | Conversion rate, lead quality, team velocity | Team is bottlenecked on form changes; data is messy | Faster experimentation, better data, fewer dependencies on engineering |
| **Financial Buyer** — VP Marketing or Founder | Total cost (form tool + Zapier + payment tool) | Paying for 3 tools to do one job | One subscription replaces 2–3 |
| **Technical Influencer** — Engineer or RevOps | Will this create tech debt? Is the API real? | Doesn't trust no-code tools; worried about lock-in | Webhooks, full API, data export — no hostage situation |

## Problems & Pain Points

**Core problem:** Marketing teams need forms that do real work — qualify leads, take money, sync to systems — but every existing tool stops at "submit" and forces them to bolt on 2–3 other tools to finish the job.

**Why alternatives fall short:**
- **Typeform:** Beautiful, but conditional logic is limited, payments are clunky, integrations require Zapier for anything real, and pricing scales painfully with submissions
- **Jotform:** Has the features but the builder feels like 2014 and the output looks dated; not what a modern brand wants to embed
- **Tally:** Cheap and simple but caps out fast — no real payments, weak logic, limited integrations
- **Google Forms:** Free but unbranded, no logic, no integrations, embarrassing on a marketing site
- **HubSpot/Salesforce native forms:** Locked to one CRM, ugly, can't take payments, limited logic

**What it costs them:**
- 3–6 hours per week of marketing-ops time maintaining Zapier flows that break
- $20–$50/mo on Zapier just to connect a form to a CRM
- Lost leads when the Zap silently fails
- Bottlenecked experimentation — every form change is a half-day project

**Emotional tension:** *"I'm a marketer, not an engineer, but somehow I'm debugging Zaps at 9pm again."* Frustration with being held back by tooling, plus quiet anxiety about whether the data even made it to the CRM.

## Competitive Landscape

**Direct:**
- **Typeform** — Falls short on real conditional logic, native payments, and value at scale. Pretty, but expensive once you grow.
- **Jotform** — Falls short on modern design and brand quality. Has the features, looks like a 2014 IT tool.
- **Tally** — Falls short on payments, advanced logic, and integration depth. Great for hobby use, hits a ceiling at scale.
- **Paperform / Formstack** — Falls short on price-to-value and modern UX.

**Secondary:**
- **HubSpot / Salesforce native forms** — Same problem (lead capture) but locked to one CRM, no payments, weak design.
- **Webflow forms** — Capture-only; no logic, no payments, no native CRM sync.
- **Custom-built forms (in-house)** — Engineering time, ongoing maintenance, no analytics out of the box.

**Indirect:**
- **Zapier + Google Forms + Stripe Checkout duct tape** — The DIY status quo we're explicitly displacing.
- **Doing it manually** — Email intake forms, copy/pasting into CRM, manually invoicing in Stripe.

## Differentiation

**Key differentiators:**
- **Real conditional logic** — branching, skip logic, calculations, dynamic field values — set up in plain English
- **Native Stripe payments inside the form** — no separate checkout, no redirect, fewer abandoned carts
- **60+ native integrations** — HubSpot, Salesforce, Slack, Mailchimp, Notion — no Zapier required for the common cases
- **Built-in drop-off analytics** — see exactly which field is killing conversion without standing up GA events
- **Modern, on-brand design** — looks like part of your site, not a hosted form

**How we do it differently:** Most form builders are either "pretty but limited" (Typeform) or "powerful but ugly" (Jotform). FormCraft is the first that's both — and the only one that includes payments and native CRM sync at every tier instead of paywalling them at $99+.

**Why that's better:** A marketing team can replace 3 tools with 1, cut Zapier costs, ship faster, and stop losing leads to broken integrations.

**Why customers choose us:** "It was the only one where I could build the whole flow — form, logic, payment, CRM sync — in one place, in one afternoon, without filing an engineering ticket." *(placeholder verbatim)*

## Objections

| Objection | Response |
|-----------|----------|
| "We already use Typeform / Jotform / [tool] — switching is a pain." | One-click form import from Typeform, Jotform, and Google Forms. Most teams are migrated in under an hour. |
| "How is this different from [Typeform/Tally]?" | Real logic + native payments + native CRM sync at every plan — no Zapier, no upcharge. We're the only builder where the whole stack is in the box. |
| "Will it work with our CRM?" | Native integrations with HubSpot, Salesforce, Pipedrive, ActiveCampaign, and 60+ more. If yours isn't on the list, the webhook + API will do it in 10 minutes. |
| "Can I trust a no-code tool with my data?" | SOC 2 Type II, GDPR-compliant, daily backups, full data export, real API. You're never locked in. |
| "It's another subscription to manage." | It replaces 2–3 (form tool + Zapier + payment tool). Most customers reduce monthly tool spend by $40–$80. |

**Anti-persona:**
- Enterprise teams needing deep custom dev work — they'll outgrow us; better fit with FormAssembly or custom build
- Solo creators who only need a contact form — overkill; Tally or Google Forms is fine
- Teams without any CRM or marketing automation — they don't need our core value yet

## Switching Dynamics

**Push (away from current solution):**
- Zaps keep breaking; leads silently lost
- Form builder doesn't support the logic they need
- Hidden costs: paying for form tool + Zapier + Stripe + maintenance time
- Form looks off-brand and clunky on the site
- Can't take payments inside the form

**Pull (toward FormCraft):**
- "One tool instead of three"
- Real logic without Zapier
- Native payments
- Drop-off analytics built in
- Looks like part of the site

**Habit (what keeps them stuck):**
- Existing form is "good enough"
- Team is trained on Typeform
- Don't want to redo all their forms
- Inertia + the assumption that switching tools is always painful

**Anxiety (what worries them about switching):**
- Will the new forms perform as well?
- Will historical submission data be lost?
- Will integrations actually work?
- Is the new tool going to stick around (vendor risk)?

## Customer Language

> ⚠️ All verbatim quotes below are *plausible placeholders* — pull real ones from customer interviews, sales call recordings, G2/Capterra reviews, and support tickets before relying on these.

**How they describe the problem:**
- *"Our form is just Typeform + Zapier + Stripe Checkout all duct-taped together."*
- *"Every time I want to add a field, I have to ping engineering."*
- *"Our Zap broke last week and we lost like 40 leads before anyone noticed."*
- *"I just want a form that takes a payment."*

**How they describe us:**
- *"It's the only form builder where everything's already in the box."*
- *"I built the whole event registration in an afternoon — payment, conditional waivers, Slack alerts to ops."*
- *"It replaced three of our tools."*

**Words to use:**
- Ship, launch, finish, route, capture, qualify, payment, integration, conditional, drop-off, in the box
- "Without a developer" / "without Zapier" / "without an engineer"

**Words to avoid:**
- "Solution," "innovative," "next-generation," "synergy," "leverage," "robust," "best-in-class," "cutting-edge," "comprehensive suite"
- "Empower," "transform," "unlock"
- "Submit" (use "ship," "send," "publish" instead where possible)

**Glossary:**
| Term | Meaning |
|------|---------|
| Form | A single FormCraft asset (one URL, one set of fields) |
| Submission | One completed entry to a form |
| Logic / branching | Conditional rules that show/hide/route fields based on previous answers |
| Connector | Native integration to another tool (HubSpot, Slack, etc.) |
| Workspace | A team account, contains forms + members + billing |

## Brand Voice

**Tone:** Confident, plain-spoken, mildly cheeky. Friendly but not chummy. Respects the reader's time.

**Style:**
- Short sentences. Active voice. Specific over abstract.
- Concrete examples instead of category names ("HubSpot, Salesforce, Slack" not "CRM integrations")
- Anti-jargon: kill "leverage," "utilize," "solution," "empower"
- Occasional rhetorical question or pointed aside is welcome

**Personality:** Direct, capable, anti-bloat, quietly opinionated, respects practitioners.

**Inspiration:** Linear's clarity, Basecamp/37signals' anti-bloat stance, Stripe's developer respect.

## Proof Points

> ⚠️ Metrics and logos below are *placeholders* — replace with real customer data, retention numbers, and signed-off logos before public use.

**Metrics:**
- *12,000+ teams use FormCraft* (placeholder)
- *2M+ forms submitted last month* (placeholder)
- *Average customer saves $47/mo on Zapier* (placeholder — pull from churn surveys)
- *Average build time: 22 minutes for a working form with logic + integration* (placeholder — pull from product analytics)

**Customers:**
- *Notable logos:* TBD — need to confirm 5–8 known customers with permission

**Testimonials:** See homepage copy doc for placeholder structures. Replace with real quotes pulled from G2, NPS responses, and recorded sales calls.

**Value themes:**
| Theme | Proof |
|-------|-------|
| One tool replaces three | Customer story: replaced Typeform + Zapier + Stripe Checkout |
| Built for non-engineers | Customer story: events manager built full registration flow in one afternoon |
| Drop-off analytics that pay for the plan | Customer story: found the field killing conversion, fixed it same day |
| No Zapier required | Native integrations list (60+) |
| Doesn't look like a form | Side-by-side: FormCraft form vs. Jotform form on a brand site |

## Goals

**Business goal:** Grow MRR to $X by Y date *(needs real numbers)*. Reduce CAC payback by improving free → paid conversion.

**Conversion action:** Free signup (email + workspace name). Activation moment = first published form with a connected integration.

**Current metrics:**
- *Visitor → signup:* TBD
- *Signup → activated (first form published):* TBD
- *Activated → paid:* TBD
- *Monthly churn:* TBD
