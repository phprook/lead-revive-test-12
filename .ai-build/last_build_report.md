# Build Report — FEATURE_003: Client-side form validation

**Status:** complete
**Date:** 2026-05-17

## What was built

Added on-submit client-side validation to the existing lead capture form so visitors can't submit empty or malformed required fields. Errors render inline beneath each invalid input. No backend, persistence, captcha, or success UI was introduced — the success state belongs to FEATURE_004.

## Files changed
- **Edited:** `src/app/LeadForm.tsx` — converted to a controlled form (one `useState` per field), added a pure `validate()` helper, an `errors` state, and a `submitted` flag so messages only appear after the first submission attempt.

## Validation rules
| Field      | Rule                                                       |
|------------|------------------------------------------------------------|
| Full name  | Required (trimmed, non-empty)                              |
| Email      | Required AND must match `^[^\s@]+@[^\s@]+\.[^\s@]+$`       |
| Phone      | Optional — no validation                                   |
| Message    | Optional — no validation                                   |

On submit:
1. `event.preventDefault()`.
2. Run `validate({ name, email })`.
3. Store result in `errors` state and set `submitted = true`.
4. If any errors exist, return early (no success state shown — and none exists yet).
5. Otherwise, fall through — FEATURE_004 will plug in the success state at that point.

## Accessibility / UX
- Each error `<p>` has `role="alert"` and an `id` linked from the input via `aria-describedby`.
- Invalid inputs receive `aria-invalid={true}` and a red border via Tailwind classes.
- Messages are user-friendly ("Please enter your full name.", "Please enter a valid email address.").
- Form retains `noValidate` so the browser's native popups don't compete with our messages.

## Done-when checklist
- [x] Name is required.
- [x] Email is required.
- [x] Email format is checked (regex).
- [x] Validation messages are clear and per-field.
- [x] Invalid form submissions do not show a success state (return-early before any success path).

## Do-not-do checklist (respected)
- [x] No backend validation.
- [x] No data storage.
- [x] No captcha.
- [x] No multi-step form behavior.

## Build verification
- `npx tsc --noEmit` → passes (no output).
- `npm run lint` → passes (no errors, no warnings).

## Notes for FEATURE_004
- The successful-submission path in `handleSubmit` currently falls through with a comment — drop the success-state logic in there.
- Field state setters (`setName`, `setEmail`, `setPhone`, `setMessage`) are already available for resetting the form on success, and `setSubmitted(false)` / `setErrors({})` can clear validation UI when the form is reset.
