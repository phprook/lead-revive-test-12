# MASTER_PRODUCT_BRIEF

## Product Vision

Build a simple, polished real estate lead follow-up landing page that helps a real estate agent, broker, or investor capture interested leads and encourage them to take the next step.

The page should feel trustworthy, direct, and easy to use. It should clearly answer:

- Who is this for?
- What should the visitor do?
- Why should they submit their information?
- What happens after they submit?

This is not a full real estate website. It is a focused landing page for lead follow-up.

## Target User

The primary user is a real estate professional who needs a simple page to send prospects after an ad, text message, email, phone call, or social media campaign.

Examples:

- Real estate agent following up with buyer or seller leads
- Realtor collecting appointment requests
- Investor asking homeowners if they want a cash offer
- Brokerage team collecting consultation requests

## Core Problem

Real estate leads often go cold because follow-up is scattered, unclear, or too manual. A focused landing page gives the prospect one clear action: submit their information so the real estate professional can contact them.

## V1 Goal

Create a clean single-page landing page with:

- Strong headline
- Short supporting explanation
- Simple lead capture form
- Clear call to action
- Trustworthy visual layout
- Mobile-friendly design
- Basic form submission behavior

V1 should prioritize clarity and conversion over complexity.

No login, dashboard, CRM, database, payments, or automation are required in the first version unless explicitly approved later.

# PRODUCT_ROADMAP

## FEATURE_001 — Basic Landing Page Shell

Create the first public homepage with a simple landing page structure.

Includes:

- Header/hero section
- Headline
- Short explanation text
- Primary call-to-action area
- Responsive layout foundation

Purpose: establish the visual and content foundation.

---

## FEATURE_002 — Lead Capture Form UI

Add a simple lead form to the landing page.

Recommended fields:

- Full name
- Email
- Phone number
- Interest type or message

Purpose: allow visitors to enter their contact information.

---

## FEATURE_003 — Client-Side Form Validation

Add basic validation before submission.

Validation should check:

- Name is required
- Email is required and looks valid
- Phone is optional or required depending on chosen direction
- Message/interest field is optional unless approved otherwise

Purpose: improve lead quality and avoid empty submissions.

---

## FEATURE_004 — Form Submission Success State

Add simple submission handling without a database.

When the user submits valid information:

- Show a clear success message
- Reset the form or show confirmation state
- Do not actually store data yet unless approved

Purpose: complete the user experience while keeping V1 simple.

---

## FEATURE_005 — Trust and Conversion Content

Add lightweight trust-building sections below or near the hero.

Possible content:

- “How it works” with 3 simple steps
- Benefits of submitting the form
- Short reassurance text
- Privacy note

Purpose: increase visitor confidence without making the page too long.

---

## FEATURE_006 — Visual Polish and Mobile Responsiveness

Refine styling for a professional landing page feel.

Includes:

- Spacing
- Typography
- Button styling
- Mobile layout
- Form usability on small screens
- Basic accessibility improvements

Purpose: make the page feel complete and usable across devices.

---

## FEATURE_007 — Optional Backend Lead Storage

Only build this if approved later.

Use Supabase to store submitted leads.

Possible fields:

- name
- email
- phone
- interest_type
- message
- source
- created_at

Purpose: preserve submitted leads for later follow-up.

This is intentionally not part of the initial build unless Alon/ChatGPT approves moving to backend functionality.

# TECH_ARCHITECTURE

## Recommended Stack

Use the default simple stack:

- Next.js
- Vercel
- GitHub
- Supabase later only if needed

## Architecture Direction

This should be a simple Next.js app with a single public landing page.

Recommended structure:

- `app/page.tsx` for the main landing page
- Reusable components only if the page starts becoming hard to manage
- Local component state for form handling
- No database in the initial version
- No authentication
- No admin panel
- No CRM integration
- No payment system

## Deployment

Use Vercel for preview and production deployment.

Important:

- Claude must not touch production directly.
- Build and test changes in a development branch or preview environment.
- Production deployment should happen only after approval.

## Styling

Keep styling simple.

Preferred options:

- Tailwind CSS if already configured
- Otherwise use standard CSS modules or global CSS depending on the existing project setup

The design should be:

- Clean
- Modern
- Mobile-first
- Conversion-focused
- Fast-loading

## Form Handling

Initial V1 form handling should be client-side only.

The form should:

- Validate required fields
- Show inline errors or a clear error message
- Show a success confirmation after submission
- Not store or send data anywhere until backend storage is approved

Later, if approved, add Supabase or another lead destination.

# DATA_MODEL_SKETCH

## Database Requirement for Initial V1

No database is needed for the first version.

The first version can use local client-side form state and a simulated success message after submission.

## Future Lead Data Model Sketch

If lead storage is approved later, use a `leads` table.

Suggested fields:

```text
leads
- id: uuid
- full_name: text
- email: text
- phone: text
- interest_type: text
- message: text
- source: text
- status: text
- created_at: timestamp
- updated_at: timestamp
```

## Field Notes

- `full_name`: visitor’s name
- `email`: visitor’s email address
- `phone`: visitor’s phone number
- `interest_type`: buyer, seller, investor, general inquiry, or similar
- `message`: optional free-text note
- `source`: optional tracking field, such as landing page, ad campaign, or manual follow-up
- `status`: optional lead status, such as new, contacted, qualified, closed
- `created_at`: time the lead was submitted
- `updated_at`: last update time

Do not create this database table until backend lead storage is explicitly approved.

# AI_BUILD_RULES

- Claude must read the full project packet before coding.
- Claude must build only the current feature.
- Claude should not build future roadmap items early.
- Claude must list files it wants to edit before editing.
- ChatGPT makes the final decision.
- Claude and Gemini are advisory only.
- If the same issue fails 3 times, stop and alert Alon.
- Do not touch production.
- Do not expand scope without approval.
- Keep the product simple and focused.
- Do not add authentication unless approved.
- Do not add a dashboard unless approved.
- Do not add Supabase or any database unless the current approved feature requires it.
- Do not add analytics, email notifications, CRM integrations, or automations unless approved.
- Prefer small, testable changes.
- After each feature, Claude should summarize what changed and how to test it.

# FEATURES

```json
[
  {
    "id": "FEATURE_001",
    "name": "Basic landing page shell",
    "goal": "Create the first public real estate lead follow-up landing page with a clear hero section and call to action.",
    "done_when": [
      "Homepage loads successfully",
      "Page has a strong real estate-focused headline",
      "Page has a short explanation of what the visitor should do",
      "Page has a visible primary call-to-action area",
      "Layout works on desktop and mobile at a basic level"
    ],
    "do_not_do": [
      "Do not add a working lead form yet",
      "Do not add backend storage",
      "Do not add login",
      "Do not add dashboard",
      "Do not add extra pages"
    ],
    "status": "pending"
  },
  {
    "id": "FEATURE_002",
    "name": "Lead capture form UI",
    "goal": "Add a simple lead form to collect visitor contact information.",
    "done_when": [
      "Form appears clearly on the landing page",
      "Form includes full name field",
      "Form includes email field",
      "Form includes phone field",
      "Form includes an optional message or interest field",
      "Form includes a clear submit button"
    ],
    "do_not_do": [
      "Do not connect the form to a database",
      "Do not send emails",
      "Do not add CRM integration",
      "Do not add advanced validation yet"
    ],
    "status": "pending"
  },
  {
    "id": "FEATURE_003",
    "name": "Client-side form validation",
    "goal": "Add basic validation so visitors cannot submit incomplete or invalid required information.",
    "done_when": [
      "Name is required",
      "Email is required",
      "Email format is checked",
      "Validation messages are clear",
      "Invalid form submissions do not show a success state"
    ],
    "do_not_do": [
      "Do not add backend validation yet",
      "Do not store submitted data",
      "Do not add captcha",
      "Do not add complex multi-step form behavior"
    ],
    "status": "pending"
  },
  {
    "id": "FEATURE_004",
    "name": "Form submission success state",
    "goal": "Create a simple confirmation experience after a valid form submission.",
    "done_when": [
      "Valid submission shows a clear success message",
      "Success message explains that someone will follow up",
      "Form either resets or clearly shows submission completed",
      "No data is stored or sent externally"
    ],
    "do_not_do": [
      "Do not connect Supabase",
      "Do not send notification emails",
      "Do not create an admin area",
      "Do not add lead management features"
    ],
    "status": "pending"
  },
  {
    "id": "FEATURE_005",
    "name": "Trust and conversion content",
    "goal": "Add simple supporting content that helps visitors feel confident submitting the form.",
    "done_when": [
      "Page includes a short 'How it works' section",
      "Page explains what happens after submitting the form",
      "Page includes at least three simple benefits or reassurance points",
      "Page includes a brief privacy reassurance near the form"
    ],
    "do_not_do": [
      "Do not add testimonials unless provided",
      "Do not invent specific company claims",
      "Do not add a long blog-style page",
      "Do not add extra routes"
    ],
    "status": "pending"
  },
  {
    "id": "FEATURE_006",
    "name": "Visual polish and mobile responsiveness",
    "goal": "Improve the page design so it feels professional, trustworthy, and easy to use on all screen sizes.",
    "done_when": [
      "Spacing and typography are polished",
      "Primary CTA button is visually clear",
      "Form is easy to use on mobile",
      "Page has a clean real estate landing page feel",
      "Basic accessibility is considered, including labels and readable contrast"
    ],
    "do_not_do": [
      "Do not redesign into a multi-page website",
      "Do not add heavy animations",
      "Do not add large media assets unless approved",
      "Do not add unrelated sections"
    ],
    "status": "pending"
  },
  {
    "id": "FEATURE_007",
    "name": "Optional backend lead storage",
    "goal": "If approved later, connect the form to Supabase so submitted leads are stored securely.",
    "done_when": [
      "Supabase project details are configured through environment variables",
      "Leads table exists with approved fields",
      "Valid form submissions are saved to Supabase",
      "User still sees a clear success or error message",
      "No secrets are exposed in the frontend"
    ],
    "do_not_do": [
      "Do not build this unless explicitly approved",
      "Do not hardcode Supabase keys",
      "Do not add authentication unless separately approved",
      "Do not build a CRM dashboard",
      "Do not send automated emails unless separately approved"
    ],
    "status": "pending"
  }
]
```