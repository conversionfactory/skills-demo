export type TemplatePage = {
  slug: string;
  keyword: string;
  title: string;
  h1: string;
  metaDescription: string;
  intro: string;
  category: string;
  monthlySearchVolume: number;
  kd: number;
  trafficPotential: number;
  parentTopic: string;
  fields: string[];
  useCases: string[];
  faqs: { q: string; a: string }[];
  relatedSlugs: string[];
};

export const templatePages: TemplatePage[] = [
  {
    slug: "waiver-form-template",
    keyword: "waiver form template",
    title: "Free Waiver Form Template (with E-Signature) | FormCraft",
    h1: "Waiver Form Template",
    metaDescription:
      "A free, e-signature-ready waiver form template. Collect liability releases online in minutes — no printing, scanning, or paperwork.",
    intro:
      "A waiver form lives or dies on two things: a legible signature and a record you can find six months later. This template handles both. Send a link, collect the signature on a phone, and store every signed waiver in one searchable place.",
    category: "Legal & Release",
    monthlySearchVolume: 250,
    kd: 2,
    trafficPotential: 9800,
    parentTopic: "liability waiver form",
    fields: [
      "Participant full name",
      "Date of birth",
      "Address",
      "Phone & email",
      "Emergency contact (name + phone)",
      "Activity or event being waived",
      "Acknowledgment of risk (checkbox)",
      "E-signature",
      "Date signed",
    ],
    useCases: [
      "Gyms, yoga studios, and CrossFit boxes",
      "Adventure tours, climbing gyms, ski schools",
      "Youth sports leagues and summer camps",
      "Fitness classes, races, and charity runs",
      "Photography releases for events",
    ],
    faqs: [
      {
        q: "Is an electronic waiver legally valid?",
        a: "Yes. In the US (ESIGN Act) and EU (eIDAS), electronic signatures are legally equivalent to ink signatures when intent and consent are captured. FormCraft timestamps every signature and stores the IP address.",
      },
      {
        q: "Can a parent sign on behalf of a minor?",
        a: "Yes. Add a 'Signing as parent or guardian' checkbox and conditional fields for the minor's name and date of birth. The template includes this logic out of the box.",
      },
      {
        q: "Where do signed waivers get stored?",
        a: "Every submission is stored in your FormCraft dashboard with the signature, timestamp, and IP. Export to PDF anytime, or auto-sync to Google Drive or Dropbox.",
      },
      {
        q: "Can I send the signed waiver back to the person who signed it?",
        a: "Yes. Turn on the auto-reply email and FormCraft sends a PDF copy of the signed waiver to the participant's email immediately after submission.",
      },
    ],
    relatedSlugs: [
      "emergency-contact-form-template",
      "registration-form-template",
      "rsvp-form-template",
    ],
  },
  {
    slug: "intake-form-template",
    keyword: "intake form template",
    title: "Free Intake Form Template (No Download Required) | FormCraft",
    h1: "Intake Form Template",
    metaDescription:
      "A free online intake form template — fill it out, customize the fields, and start collecting client info today. No Word docs, no PDFs.",
    intro:
      "Most intake form templates ship as a Word doc you have to print, scan, and chase down. This one is a live online form. Send a link, get a structured submission, and let it flow straight into your CRM or spreadsheet.",
    category: "Service Business",
    monthlySearchVolume: 800,
    kd: 3,
    trafficPotential: 6900,
    parentTopic: "intake form",
    fields: [
      "Full name",
      "Email & phone",
      "Company or organization",
      "Reason for reaching out",
      "Project description",
      "Budget range",
      "Desired timeline",
      "How did you hear about us?",
      "Anything else we should know?",
    ],
    useCases: [
      "Consultants and coaches qualifying new clients",
      "Freelancers gathering project briefs",
      "Service businesses replacing email-tag intake",
      "Therapy and wellness practitioners (with HIPAA on Pro)",
      "Law firms and accountants collecting case details",
    ],
    faqs: [
      {
        q: "Can I customize the fields in the intake form?",
        a: "Yes — every field can be renamed, removed, made required, or replaced with your own. Add dropdowns, file uploads, conditional questions, anything you need.",
      },
      {
        q: "Can the form send the intake straight to my CRM?",
        a: "Yes. Native connectors for HubSpot, Salesforce, Pipedrive, and Notion. For anything else, the webhook or Zapier covers it.",
      },
      {
        q: "Can I require certain fields before someone can submit?",
        a: "Yes. Mark any field required and FormCraft will block submission until it's filled. You can also use validation rules (email format, phone format, minimum length).",
      },
      {
        q: "How is this different from a Word or PDF intake form?",
        a: "A Word doc collects unstructured text in inboxes. This is a structured online form — every response is searchable, exportable, and pushed to your tools automatically.",
      },
    ],
    relatedSlugs: [
      "client-intake-form-template",
      "contact-form-template",
      "feedback-form-template",
    ],
  },
  {
    slug: "registration-form-template",
    keyword: "registration form template",
    title: "Free Registration Form Template (with Payment Option) | FormCraft",
    h1: "Registration Form Template",
    metaDescription:
      "A free registration form template that takes payment, sends confirmations, and exports to a spreadsheet. For events, classes, memberships.",
    intro:
      "Whether it's a Saturday workshop or a 500-person conference, the registration form is the same shape: collect details, take payment if needed, confirm by email, then hand off the attendee list to whoever's running the day-of. This template covers all four.",
    category: "Events & Membership",
    monthlySearchVolume: 800,
    kd: 4,
    trafficPotential: 6500,
    parentTopic: "registration form",
    fields: [
      "Full name",
      "Email & phone",
      "Ticket type / pricing tier",
      "Number of attendees",
      "Dietary requirements",
      "T-shirt size (optional)",
      "Special accommodations",
      "Payment (Stripe)",
      "Consent to receive event emails",
    ],
    useCases: [
      "Conferences and workshops",
      "Membership and club signups",
      "Class registrations (fitness, education, kids)",
      "Webinars and virtual events",
      "Sports leagues and tournaments",
    ],
    faqs: [
      {
        q: "Can I charge for registration through the form?",
        a: "Yes. Connect Stripe in two clicks, set tiered pricing (early bird, full price, VIP), and FormCraft handles the charge as part of submission. No separate checkout page.",
      },
      {
        q: "Can I cap the number of registrations?",
        a: "Yes. Set a max-submissions limit per ticket type and the form auto-closes when full. Optionally add a waitlist field that appears once spots run out.",
      },
      {
        q: "Will attendees get a confirmation email?",
        a: "Yes. Auto-reply emails include their registration details, calendar invite, and any link or location info you add (Zoom URL, venue address, parking info).",
      },
      {
        q: "Can I export the attendee list?",
        a: "Anytime. Download as CSV or Excel, or sync attendees live to Google Sheets, Airtable, or your CRM.",
      },
    ],
    relatedSlugs: [
      "rsvp-form-template",
      "waiver-form-template",
      "donation-form-template",
    ],
  },
  {
    slug: "contact-form-template",
    keyword: "contact form template",
    title: "Free Contact Form Template (Embed Anywhere) | FormCraft",
    h1: "Contact Form Template",
    metaDescription:
      "A free contact form template that embeds on any site, notifies you instantly, and never lands in spam. Customize in 30 seconds.",
    intro:
      "The contact form is the most-overlooked piece of a website — until a lead disappears into your spam folder. This one notifies you the moment it's submitted, blocks spam without a CAPTCHA wall, and works on any site, including the one your designer built on Webflow last year.",
    category: "Website Essentials",
    monthlySearchVolume: 350,
    kd: 3,
    trafficPotential: 3000,
    parentTopic: "contact form",
    fields: [
      "Full name",
      "Email address",
      "Phone (optional)",
      "Subject or reason for contacting",
      "Message",
      "Preferred contact method",
    ],
    useCases: [
      "Marketing site contact page",
      "Footer-embedded contact form",
      "Agency 'work with us' page",
      "Personal portfolio / freelancer site",
      "Local business inquiry form",
    ],
    faqs: [
      {
        q: "Where can I embed the contact form?",
        a: "Anywhere. WordPress, Webflow, Squarespace, Framer, Shopify, plain HTML — copy one line of code and paste it in. Or send people a hosted FormCraft URL.",
      },
      {
        q: "How do I stop spam without using a CAPTCHA?",
        a: "FormCraft has invisible spam protection on by default — honeypot fields, rate limiting, and bot detection. No CAPTCHA puzzle for real visitors.",
      },
      {
        q: "Will I get notified about new submissions?",
        a: "Instantly. Pick email, Slack, SMS, or a webhook to your own system. Most users start with email-to-self and add Slack once volume grows.",
      },
      {
        q: "Can I route different inquiries to different inboxes?",
        a: "Yes. Use conditional logic on the 'reason for contacting' field — sales inquiries go to sales@, support requests go to support@, partnerships to founders@.",
      },
    ],
    relatedSlugs: [
      "intake-form-template",
      "feedback-form-template",
      "rsvp-form-template",
    ],
  },
  {
    slug: "client-intake-form-template",
    keyword: "client intake form template",
    title: "Free Client Intake Form Template for Agencies & Consultants | FormCraft",
    h1: "Client Intake Form Template",
    metaDescription:
      "A free client intake form template built for agencies, freelancers, and consultants. Collect briefs, budgets, and brand assets in one go.",
    intro:
      "The right intake form turns your first client call into a working session instead of a fact-finding mission. This template asks the questions that surface scope, budget, and red flags before you've quoted a number — and collects the brand assets you'd otherwise be emailing back and forth for two weeks.",
    category: "Agency & Freelance",
    monthlySearchVolume: 500,
    kd: 6,
    trafficPotential: 2000,
    parentTopic: "intake form",
    fields: [
      "Company name",
      "Primary contact (name, email, role)",
      "Website URL",
      "Project description / what you need",
      "Goals and success criteria",
      "Target audience",
      "Budget range",
      "Timeline / target launch",
      "Existing brand assets (file upload)",
      "Competitors or examples you admire",
      "Anything else we should know?",
    ],
    useCases: [
      "Marketing and creative agencies",
      "Web designers and developers",
      "Freelance writers, designers, photographers",
      "Consultants and coaches",
      "PR firms and brand strategists",
    ],
    faqs: [
      {
        q: "Can clients upload brand assets and reference files?",
        a: "Yes. File uploads support images, PDFs, ZIP files, and design files up to 25MB each, with unlimited files per submission on Pro.",
      },
      {
        q: "Can I white-label the form with my agency's branding?",
        a: "Yes. On Pro, remove all FormCraft branding, use your own domain (forms.youragency.com), and match your fonts and colors.",
      },
      {
        q: "Can the form auto-create a project in my project management tool?",
        a: "Yes. Native connectors push submissions to Notion, Asana, ClickUp, Trello, and Linear — a new client filling out the form can trigger a new project automatically.",
      },
      {
        q: "Can I ask different questions based on the type of project?",
        a: "Yes. Use conditional logic — a 'website project' submission can show different fields than a 'brand identity project'. One form, many use cases.",
      },
    ],
    relatedSlugs: [
      "intake-form-template",
      "client-feedback-form-template",
      "contact-form-template",
    ],
  },
  {
    slug: "emergency-contact-form-template",
    keyword: "emergency contact form template",
    title: "Free Emergency Contact Form Template | FormCraft",
    h1: "Emergency Contact Form Template",
    metaDescription:
      "A free emergency contact form template for employees, students, members, or event attendees. Collect contacts, allergies, and medical info securely.",
    intro:
      "Emergency contact forms only matter if someone can find them in 30 seconds when it counts. This template stores responses centrally, lets the right people search by name on a phone, and can be filled out once — not re-collected every year on a clipboard.",
    category: "HR & Safety",
    monthlySearchVolume: 350,
    kd: 1,
    trafficPotential: 1700,
    parentTopic: "emergency contact form",
    fields: [
      "Employee or participant name",
      "Date of birth",
      "Primary emergency contact (name + relationship)",
      "Primary contact phone",
      "Secondary emergency contact (name + relationship)",
      "Secondary contact phone",
      "Known medical conditions",
      "Allergies",
      "Current medications",
      "Preferred hospital (optional)",
      "Consent for emergency treatment",
    ],
    useCases: [
      "Employee onboarding paperwork",
      "Youth sports leagues and summer camps",
      "Schools and after-school programs",
      "Gyms, studios, and athletic clubs",
      "Volunteer organizations",
    ],
    faqs: [
      {
        q: "Is the medical info on this form stored securely?",
        a: "Yes. All submissions are encrypted in transit and at rest. On Pro, you can enable HIPAA-friendly storage with a Business Associate Agreement.",
      },
      {
        q: "Can people update their info if it changes?",
        a: "Yes. Send them a 'edit my submission' link — they can update their emergency contacts, phone numbers, or medications without filing a new form.",
      },
      {
        q: "Can I limit who can see the submitted responses?",
        a: "Yes. On Pro, role-based permissions let you restrict response access to specific team members (HR, coaches, camp directors).",
      },
      {
        q: "Can I export the contact list for offline use?",
        a: "Yes. Export to CSV, PDF, or sync to a private Google Sheet so the on-call coach or HR lead has access even without internet.",
      },
    ],
    relatedSlugs: [
      "waiver-form-template",
      "registration-form-template",
      "intake-form-template",
    ],
  },
  {
    slug: "feedback-form-template",
    keyword: "feedback form template",
    title: "Free Feedback Form Template | FormCraft",
    h1: "Feedback Form Template",
    metaDescription:
      "A free feedback form template for collecting honest opinions from customers, employees, or event attendees. Ratings, NPS, and open-ended in one form.",
    intro:
      "The hard part of feedback isn't the form — it's getting people to fill it out. This template is short, looks like part of your brand, and works on mobile so the response rate doesn't collapse. Use it post-purchase, post-event, post-anything.",
    category: "Survey & Research",
    monthlySearchVolume: 600,
    kd: 9,
    trafficPotential: 1600,
    parentTopic: "feedback form",
    fields: [
      "Overall satisfaction (1–5 stars)",
      "What did we do well?",
      "What could we improve?",
      "Would you recommend us? (yes/no/maybe)",
      "Name (optional)",
      "Email (optional, for follow-up)",
      "Permission to share as testimonial",
    ],
    useCases: [
      "Post-purchase customer feedback",
      "Post-event attendee surveys",
      "Internal team retros",
      "Product feature feedback",
      "Course or training evaluation",
    ],
    faqs: [
      {
        q: "Can I make this anonymous?",
        a: "Yes. Mark name and email as optional, or remove them entirely. Submissions still capture the timestamp but no identifying info.",
      },
      {
        q: "Can I show different follow-up questions based on the rating?",
        a: "Yes. Use conditional logic — a 1-star rating can show 'what went wrong?' while a 5-star rating shows 'can we use this as a testimonial?'. Different paths, one form.",
      },
      {
        q: "How do I analyze the open-ended responses?",
        a: "FormCraft's analytics dashboard shows word clouds and sentiment for text fields, plus you can export to CSV for deeper analysis.",
      },
      {
        q: "Can I send the feedback form automatically after a purchase or event?",
        a: "Yes. Trigger it from your email tool, CRM, or via webhook — Mailchimp, HubSpot, Klaviyo, or any Zapier-connected app can send the form link automatically.",
      },
    ],
    relatedSlugs: [
      "client-feedback-form-template",
      "contact-form-template",
      "registration-form-template",
    ],
  },
  {
    slug: "rsvp-form-template",
    keyword: "rsvp form template",
    title: "Free RSVP Form Template (Online & Mobile) | FormCraft",
    h1: "RSVP Form Template",
    metaDescription:
      "A free RSVP form template for weddings, parties, and events. Track attendance, meal preferences, and plus-ones — all in one place.",
    intro:
      "Paper RSVPs go missing. Email RSVPs go to spam. This one lives at one link, shows you the headcount in real time, and lets guests update their answer if their plans change. Send it once and stop chasing replies.",
    category: "Events & Celebrations",
    monthlySearchVolume: 200,
    kd: 1,
    trafficPotential: 1500,
    parentTopic: "rsvp template",
    fields: [
      "Guest name",
      "Will you attend? (yes/no/maybe)",
      "Number in your party",
      "Names of additional guests",
      "Meal preference",
      "Dietary restrictions or allergies",
      "Song requests (optional)",
      "Address (for save-the-date follow-ups)",
    ],
    useCases: [
      "Weddings and engagement parties",
      "Birthday parties and milestone events",
      "Baby showers and bridal showers",
      "Corporate offsites and holiday parties",
      "Dinner parties and informal gatherings",
    ],
    faqs: [
      {
        q: "Can guests RSVP for the whole household at once?",
        a: "Yes. The 'number in party' field reveals additional name and meal fields with conditional logic — one submission per household, all guests captured.",
      },
      {
        q: "Can I see a live headcount as RSVPs come in?",
        a: "Yes. Your FormCraft dashboard shows total responses, breakdown by yes/no/maybe, meal counts, and dietary restrictions in real time.",
      },
      {
        q: "Can guests change their RSVP after submitting?",
        a: "Yes. Turn on 'editable submissions' and guests get a personal link they can use to update their response if plans change.",
      },
      {
        q: "Can I send a confirmation message after they RSVP?",
        a: "Yes. Auto-reply with the event details, address, dress code, parking info, or any other reminder — sent immediately on RSVP.",
      },
    ],
    relatedSlugs: [
      "registration-form-template",
      "contact-form-template",
      "waiver-form-template",
    ],
  },
  {
    slug: "donation-form-template",
    keyword: "donation form template",
    title: "Free Donation Form Template (with Stripe) | FormCraft",
    h1: "Donation Form Template",
    metaDescription:
      "A free donation form template for nonprofits. Accept one-time or recurring gifts via Stripe, with tribute and dedication fields built in.",
    intro:
      "Donors give more when the form gets out of the way. This one accepts one-time or monthly gifts, lets people give in memory or in honor of someone, and sends an automatic tax receipt — no plugins, no fees beyond Stripe's, no chasing your developer.",
    category: "Nonprofit & Fundraising",
    monthlySearchVolume: 450,
    kd: 0,
    trafficPotential: 1400,
    parentTopic: "donation form",
    fields: [
      "Donation amount (preset buttons + custom amount)",
      "One-time or monthly recurring",
      "Donor name",
      "Email address",
      "Mailing address (for tax receipt)",
      "Donation in honor or memory of (optional)",
      "Anonymous donation? (checkbox)",
      "Payment (Stripe)",
      "Cover the processing fee? (optional)",
    ],
    useCases: [
      "Nonprofit donation pages",
      "Church and faith community giving",
      "Memorial and tribute giving",
      "Crowdfunding for a specific cause",
      "Recurring sustainer / membership programs",
    ],
    faqs: [
      {
        q: "Can donors give monthly recurring donations?",
        a: "Yes. A toggle on the form lets donors choose one-time or monthly. Recurring donations run automatically through Stripe — donors can cancel anytime via a self-serve link.",
      },
      {
        q: "Can donors cover the credit card processing fee?",
        a: "Yes. Add a 'cover the 2.9% processing fee' checkbox — most donors say yes when asked, and your nonprofit nets the full amount.",
      },
      {
        q: "Do donors get a tax receipt automatically?",
        a: "Yes. Auto-reply emails can include your nonprofit's EIN, the donation amount, and tax-deductible language. Customize the template once and it sends with every gift.",
      },
      {
        q: "Can I let people give in memory of or in honor of someone?",
        a: "Yes. The optional 'tribute' field captures the honoree's name and lets the donor add a message — perfect for memorial gifts and birthday fundraisers.",
      },
    ],
    relatedSlugs: [
      "registration-form-template",
      "rsvp-form-template",
      "waiver-form-template",
    ],
  },
  {
    slug: "client-feedback-form-template",
    keyword: "client feedback form template",
    title: "Free Client Feedback Form Template | FormCraft",
    h1: "Client Feedback Form Template",
    metaDescription:
      "A free client feedback form template for agencies, consultants, and freelancers. Collect honest project reviews and use them as testimonials.",
    intro:
      "The post-project email asking 'so how did it go?' is the hardest one to write. This template does it for you — five questions a client can answer in two minutes, with a built-in field that asks permission to use their words as a testimonial.",
    category: "Agency & Freelance",
    monthlySearchVolume: 150,
    kd: 8,
    trafficPotential: 1400,
    parentTopic: "customer feedback form template",
    fields: [
      "How would you rate working with us? (1–5)",
      "What did we do well?",
      "What could we have done better?",
      "Would you hire us again?",
      "Would you recommend us to a colleague?",
      "Can we use your response as a testimonial? (with name + company)",
      "Anything else to share?",
    ],
    useCases: [
      "End-of-project agency reviews",
      "Freelancer post-delivery surveys",
      "Consultant engagement wrap-ups",
      "Coaching program completion feedback",
      "Quarterly client check-ins",
    ],
    faqs: [
      {
        q: "How do I turn feedback into a testimonial I can publish?",
        a: "The template includes a 'can we use this as a testimonial?' field with optional name, role, and company. When a client says yes, you have permission and a quote ready to go.",
      },
      {
        q: "Can the feedback form auto-send when a project ends?",
        a: "Yes. Trigger it from your project management tool (Notion, Asana, ClickUp) or CRM the moment a project moves to 'completed'.",
      },
      {
        q: "Can I make this anonymous if the client prefers?",
        a: "Yes. Mark name and email as optional. You'll still get the feedback even if the client wants to stay anonymous.",
      },
      {
        q: "How do I follow up on harsh feedback without seeming defensive?",
        a: "Set up conditional auto-replies — a 5-star response gets a 'thank you!' and a referral ask, while a 2-star response gets a personal 'I'd love to talk this through, are you free to chat?' from you.",
      },
    ],
    relatedSlugs: [
      "feedback-form-template",
      "client-intake-form-template",
      "contact-form-template",
    ],
  },
];

export function getTemplatePage(slug: string): TemplatePage | undefined {
  return templatePages.find((p) => p.slug === slug);
}
