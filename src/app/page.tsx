import LeadForm from "./LeadForm";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col bg-gradient-to-b from-slate-50 to-white font-sans text-slate-900 dark:from-slate-950 dark:to-slate-900 dark:text-slate-100">
      <header className="w-full border-b border-slate-200/60 dark:border-slate-800/60">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <span className="text-lg font-semibold tracking-tight">
            Lead Revive
          </span>
          <span className="hidden text-sm text-slate-500 dark:text-slate-400 sm:inline">
            Real Estate Follow-Up
          </span>
        </div>
      </header>

      <main className="flex flex-1 flex-col">
        <section className="mx-auto flex w-full max-w-6xl flex-1 flex-col items-center px-6 py-16 text-center sm:py-24 lg:py-32">
          <span className="mb-6 inline-flex items-center rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium uppercase tracking-wider text-slate-600 shadow-sm dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300">
            For agents and brokerages
          </span>

          <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Reignite cold leads and book more showings — without lifting a
            finger.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-600 dark:text-slate-300 sm:text-xl">
            Tell us a little about your business and we&apos;ll show you how to
            turn forgotten contacts into your next closing. A real estate
            specialist will reach out within one business day.
          </p>

          <div className="mt-10 flex w-full flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href="#get-started"
              className="inline-flex h-12 w-full items-center justify-center rounded-full bg-slate-900 px-8 text-base font-semibold text-white shadow-sm transition-colors hover:bg-slate-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 focus-visible:ring-offset-2 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200 dark:focus-visible:ring-white sm:w-auto"
            >
              Get my free follow-up plan
            </a>
            <a
              href="#how-it-works"
              className="inline-flex h-12 w-full items-center justify-center rounded-full border border-slate-300 px-8 text-base font-medium text-slate-700 transition-colors hover:border-slate-400 hover:bg-slate-100 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800 sm:w-auto"
            >
              See how it works
            </a>
          </div>

          <p className="mt-6 text-sm text-slate-500 dark:text-slate-400">
            No credit card required · 1-day response · 100% confidential
          </p>
        </section>

        <section className="border-t border-slate-200/60 dark:border-slate-800/60">
          <div className="mx-auto w-full max-w-6xl px-6 py-16 sm:py-20">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                Why agents choose Lead Revive
              </h2>
              <p className="mt-4 text-base text-slate-600 dark:text-slate-300">
                A simple, low-pressure way to get more out of the contacts
                you already have.
              </p>
            </div>

            <ul className="mx-auto mt-12 grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-3">
              <li className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
                <div
                  aria-hidden="true"
                  className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-slate-900 text-white dark:bg-white dark:text-slate-900"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M12 2v4" />
                    <path d="M12 18v4" />
                    <path d="m4.93 4.93 2.83 2.83" />
                    <path d="m16.24 16.24 2.83 2.83" />
                    <path d="M2 12h4" />
                    <path d="M18 12h4" />
                    <path d="m4.93 19.07 2.83-2.83" />
                    <path d="m16.24 7.76 2.83-2.83" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold">No tech setup</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                  You don&apos;t need new tools or software. We work with what
                  you already use to manage your contacts.
                </p>
              </li>
              <li className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
                <div
                  aria-hidden="true"
                  className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-slate-900 text-white dark:bg-white dark:text-slate-900"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold">Quick response</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                  A real estate specialist gets back to you within one business
                  day — not a robot, and not a week from now.
                </p>
              </li>
              <li className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
                <div
                  aria-hidden="true"
                  className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-slate-900 text-white dark:bg-white dark:text-slate-900"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold">No pressure</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                  It&apos;s a friendly conversation. No commitments, no hard
                  sell — just clear next steps you can take or leave.
                </p>
              </li>
            </ul>
          </div>
        </section>

        <section
          id="how-it-works"
          className="border-t border-slate-200/60 bg-white dark:border-slate-800/60 dark:bg-slate-950"
        >
          <div className="mx-auto w-full max-w-5xl px-6 py-16 sm:py-20">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                How it works
              </h2>
              <p className="mt-4 text-base text-slate-600 dark:text-slate-300">
                Three simple steps from filling out the form to your next
                conversation.
              </p>
            </div>

            <ol className="mx-auto mt-12 grid max-w-4xl grid-cols-1 gap-6 sm:grid-cols-3">
              <li className="rounded-2xl border border-slate-200 p-6 dark:border-slate-800">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-slate-900 text-sm font-semibold text-white dark:bg-white dark:text-slate-900">
                  1
                </span>
                <h3 className="mt-4 text-lg font-semibold">
                  Share a few details
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                  Fill out the short form below with your name, email, and what
                  you&apos;re hoping to accomplish.
                </p>
              </li>
              <li className="rounded-2xl border border-slate-200 p-6 dark:border-slate-800">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-slate-900 text-sm font-semibold text-white dark:bg-white dark:text-slate-900">
                  2
                </span>
                <h3 className="mt-4 text-lg font-semibold">
                  We review your goals
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                  A real estate specialist looks at what you&apos;ve shared and
                  prepares a tailored follow-up plan.
                </p>
              </li>
              <li className="rounded-2xl border border-slate-200 p-6 dark:border-slate-800">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-slate-900 text-sm font-semibold text-white dark:bg-white dark:text-slate-900">
                  3
                </span>
                <h3 className="mt-4 text-lg font-semibold">
                  We reach out to you
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                  Within one business day, we&apos;ll contact you to walk
                  through the plan and answer any questions.
                </p>
              </li>
            </ol>
          </div>
        </section>

        <section
          id="get-started"
          className="border-t border-slate-200/60 dark:border-slate-800/60"
        >
          <div className="mx-auto flex w-full max-w-4xl flex-col items-center px-6 py-16 text-center sm:py-20">
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              Ready to revive your pipeline?
            </h2>
            <p className="mt-4 max-w-xl text-base text-slate-600 dark:text-slate-300">
              Request a free consultation. We&apos;ll review your existing
              contacts and outline the fastest path to your next deal. After
              you submit the form, a specialist will email or call you within
              one business day.
            </p>
            <LeadForm />
            <p className="mt-4 max-w-xl text-xs leading-relaxed text-slate-500 dark:text-slate-400">
              Your information is kept private. We&apos;ll only use it to
              follow up about your request — we don&apos;t sell or share your
              details with third parties.
            </p>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200/60 dark:border-slate-800/60">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-6 py-6 text-sm text-slate-500 dark:text-slate-400 sm:flex-row">
          <span>© {new Date().getFullYear()} Lead Revive</span>
          <span>Built for real estate professionals</span>
        </div>
      </footer>
    </div>
  );
}
