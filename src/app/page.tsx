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

        <section
          id="get-started"
          className="border-t border-slate-200/60 bg-white dark:border-slate-800/60 dark:bg-slate-950"
        >
          <div className="mx-auto flex w-full max-w-4xl flex-col items-center px-6 py-16 text-center sm:py-20">
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              Ready to revive your pipeline?
            </h2>
            <p className="mt-4 max-w-xl text-base text-slate-600 dark:text-slate-300">
              Request a free consultation. We&apos;ll review your existing
              contacts and outline the fastest path to your next deal.
            </p>
            <a
              href="#get-started"
              className="mt-8 inline-flex h-12 items-center justify-center rounded-full bg-slate-900 px-8 text-base font-semibold text-white shadow-sm transition-colors hover:bg-slate-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 focus-visible:ring-offset-2 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200 dark:focus-visible:ring-white"
            >
              Request my consultation
            </a>
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
