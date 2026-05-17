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
    // Successful validation — FEATURE_004 will handle the success state.
  }

  const inputBaseClasses =
    "mt-2 block h-11 w-full rounded-lg border bg-white px-3 text-base text-slate-900 shadow-sm transition-colors placeholder:text-slate-400 focus:outline-none focus:ring-2 dark:bg-slate-950 dark:text-slate-100 dark:placeholder:text-slate-500";
  const inputNormalClasses =
    "border-slate-300 focus:border-slate-500 focus:ring-slate-300 dark:border-slate-700 dark:focus:border-slate-400 dark:focus:ring-slate-700";
  const inputErrorClasses =
    "border-red-500 focus:border-red-500 focus:ring-red-300 dark:border-red-500 dark:focus:border-red-400 dark:focus:ring-red-900";

  const nameError = showError("name");
  const emailError = showError("email");

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-10 w-full max-w-xl rounded-2xl border border-slate-200 bg-white p-6 text-left shadow-sm dark:border-slate-800 dark:bg-slate-900 sm:p-8"
      noValidate
    >
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <label
            htmlFor="lead-name"
            className="block text-sm font-medium text-slate-700 dark:text-slate-200"
          >
            Full name
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
            className="block text-sm font-medium text-slate-700 dark:text-slate-200"
          >
            Email
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
            className="block text-sm font-medium text-slate-700 dark:text-slate-200"
          >
            Phone
          </label>
          <input
            id="lead-phone"
            name="phone"
            type="tel"
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
            className="block text-sm font-medium text-slate-700 dark:text-slate-200"
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
            className="mt-2 block w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-base text-slate-900 shadow-sm transition-colors placeholder:text-slate-400 focus:border-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-300 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100 dark:placeholder:text-slate-500 dark:focus:border-slate-400 dark:focus:ring-slate-700"
          />
        </div>
      </div>

      <button
        type="submit"
        className="mt-6 inline-flex h-12 w-full items-center justify-center rounded-full bg-slate-900 px-8 text-base font-semibold text-white shadow-sm transition-colors hover:bg-slate-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 focus-visible:ring-offset-2 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200 dark:focus-visible:ring-white"
      >
        Request my consultation
      </button>
    </form>
  );
}
