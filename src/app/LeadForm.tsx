"use client";

import { useState, type FormEvent } from "react";

type Errors = {
  name?: string;
  email?: string;
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(values: { name: string; email: string }): Errors {
  const errors: Errors = {};
  if (!values.name.trim()) {
    errors.name = "Please enter your full name.";
  }
  const email = values.email.trim();
  if (!email) {
    errors.email = "Please enter your email address.";
  } else if (!EMAIL_PATTERN.test(email)) {
    errors.email = "Please enter a valid email address.";
  }
  return errors;
}

export default function LeadForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);
  const [succeeded, setSucceeded] = useState(false);

  const showError = (field: keyof Errors) =>
    submitted ? errors[field] : undefined;

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validate({ name, email });
    setErrors(nextErrors);
    setSubmitted(true);
    if (Object.keys(nextErrors).length > 0) {
      return;
    }
    setName("");
    setEmail("");
    setPhone("");
    setMessage("");
    setErrors({});
    setSubmitted(false);
    setSucceeded(true);
  }

  function handleSendAnother() {
    setSucceeded(false);
  }

  if (succeeded) {
    return (
      <div
        role="status"
        aria-live="polite"
        className="mt-8 w-full max-w-xl rounded-2xl border border-emerald-200 bg-emerald-50 p-5 text-left shadow-md dark:border-emerald-900 dark:bg-emerald-950/40 sm:mt-10 sm:p-8"
      >
        <div className="flex items-start gap-4">
          <span
            aria-hidden="true"
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald-600 text-white dark:bg-emerald-500"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </span>
          <div>
            <h3 className="text-lg font-semibold text-emerald-900 dark:text-emerald-100">
              Thanks — your request is in.
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-emerald-900/80 dark:text-emerald-100/80">
              A real estate specialist will follow up with you within one
              business day to walk through your free follow-up plan. Keep an eye
              on your email and phone.
            </p>
            <button
              type="button"
              onClick={handleSendAnother}
              className="mt-5 inline-flex h-10 items-center justify-center rounded-full border border-emerald-700/40 bg-white px-5 text-sm font-medium text-emerald-900 transition-colors hover:bg-emerald-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 focus-visible:ring-offset-2 dark:border-emerald-400/40 dark:bg-emerald-900/40 dark:text-emerald-50 dark:hover:bg-emerald-900/70"
            >
              Submit another request
            </button>
          </div>
        </div>
      </div>
    );
  }

  const inputBaseClasses =
    "mt-2 block h-12 w-full rounded-lg border bg-white px-3.5 text-base text-slate-900 shadow-sm transition-colors placeholder:text-slate-400 focus:outline-none focus:ring-2 dark:bg-slate-950 dark:text-slate-100 dark:placeholder:text-slate-500";
  const inputNormalClasses =
    "border-slate-300 focus:border-blue-500 focus:ring-blue-200 dark:border-slate-700 dark:focus:border-blue-400 dark:focus:ring-blue-900/60";
  const inputErrorClasses =
    "border-red-500 focus:border-red-500 focus:ring-red-200 dark:border-red-500 dark:focus:border-red-400 dark:focus:ring-red-900";

  const nameError = showError("name");
  const emailError = showError("email");

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-8 w-full max-w-xl rounded-2xl border border-slate-200 bg-white p-5 text-left shadow-md ring-1 ring-black/[0.02] dark:border-slate-800 dark:bg-slate-900 dark:ring-white/[0.02] sm:mt-10 sm:p-8"
      noValidate
    >
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <label
            htmlFor="lead-name"
            className="block text-sm font-medium text-slate-800 dark:text-slate-200"
          >
            Full name
            <span aria-hidden="true" className="ml-0.5 text-red-600 dark:text-red-400">
              *
            </span>
          </label>
          <input
            id="lead-name"
            name="name"
            type="text"
            autoComplete="name"
            placeholder="Jane Doe"
            value={name}
            onChange={(e) => setName(e.target.value)}
            aria-invalid={nameError ? true : undefined}
            aria-describedby={nameError ? "lead-name-error" : undefined}
            className={`${inputBaseClasses} ${nameError ? inputErrorClasses : inputNormalClasses}`}
          />
          {nameError ? (
            <p
              id="lead-name-error"
              role="alert"
              className="mt-2 text-sm text-red-600 dark:text-red-400"
            >
              {nameError}
            </p>
          ) : null}
        </div>

        <div>
          <label
            htmlFor="lead-email"
            className="block text-sm font-medium text-slate-800 dark:text-slate-200"
          >
            Email
            <span aria-hidden="true" className="ml-0.5 text-red-600 dark:text-red-400">
              *
            </span>
          </label>
          <input
            id="lead-email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="jane@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            aria-invalid={emailError ? true : undefined}
            aria-describedby={emailError ? "lead-email-error" : undefined}
            className={`${inputBaseClasses} ${emailError ? inputErrorClasses : inputNormalClasses}`}
          />
          {emailError ? (
            <p
              id="lead-email-error"
              role="alert"
              className="mt-2 text-sm text-red-600 dark:text-red-400"
            >
              {emailError}
            </p>
          ) : null}
        </div>

        <div>
          <label
            htmlFor="lead-phone"
            className="block text-sm font-medium text-slate-800 dark:text-slate-200"
          >
            Phone{" "}
            <span className="font-normal text-slate-500 dark:text-slate-400">
              (optional)
            </span>
          </label>
          <input
            id="lead-phone"
            name="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            placeholder="(555) 123-4567"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className={`${inputBaseClasses} ${inputNormalClasses}`}
          />
        </div>

        <div className="sm:col-span-2">
          <label
            htmlFor="lead-message"
            className="block text-sm font-medium text-slate-800 dark:text-slate-200"
          >
            What are you looking for?{" "}
            <span className="font-normal text-slate-500 dark:text-slate-400">
              (optional)
            </span>
          </label>
          <textarea
            id="lead-message"
            name="message"
            rows={4}
            placeholder="Tell us a bit about your goals or the kind of leads you'd like to revive."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="mt-2 block w-full rounded-lg border border-slate-300 bg-white px-3.5 py-3 text-base text-slate-900 shadow-sm transition-colors placeholder:text-slate-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100 dark:placeholder:text-slate-500 dark:focus:border-blue-400 dark:focus:ring-blue-900/60"
          />
        </div>
      </div>

      <button
        type="submit"
        className="mt-6 inline-flex h-12 w-full items-center justify-center rounded-full bg-blue-600 px-8 text-base font-semibold text-white shadow-md shadow-blue-600/20 transition-colors hover:bg-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 dark:shadow-blue-500/20 dark:focus-visible:ring-offset-slate-900"
      >
        Request my consultation
      </button>
      <p className="mt-3 text-center text-xs text-slate-500 dark:text-slate-400">
        Takes under a minute · We&apos;ll never spam you
      </p>
    </form>
  );
}
