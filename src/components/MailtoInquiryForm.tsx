"use client";

import { FormEvent, useMemo, useState } from "react";
import { CONTACT_EMAIL } from "@/lib/site";

type TextField = {
  name: string;
  label: string;
  type: "text" | "email" | "tel" | "textarea";
  required?: boolean;
  hint?: string;
  placeholder?: string;
};

type SelectField = {
  name: string;
  label: string;
  type: "select";
  required?: boolean;
  hint?: string;
  options: { value: string; label: string }[];
};

type CheckboxField = {
  name: string;
  label: string;
  type: "checkbox";
  required?: boolean;
  hint?: string;
};

export type InquiryField = TextField | SelectField | CheckboxField;

type MailtoInquiryFormProps = {
  subject: string;
  fields: InquiryField[];
  submitLabel: string;
  confirmation: string;
  footnote?: string;
};

const inputClass =
  "mt-1.5 w-full rounded-md border border-navy/20 bg-ivory px-3 py-2.5 text-base text-navy outline-none transition-colors focus:border-forest";

function fieldValue(form: HTMLFormElement, field: InquiryField): string {
  if (field.type === "checkbox") {
    const input = form.elements.namedItem(field.name) as HTMLInputElement | null;
    return input?.checked ? "Yes" : "No";
  }
  const el = form.elements.namedItem(field.name) as
    | HTMLInputElement
    | HTMLTextAreaElement
    | HTMLSelectElement
    | null;
  return el?.value.trim() ?? "";
}

export function MailtoInquiryForm({
  subject,
  fields,
  submitLabel,
  confirmation,
  footnote,
}: MailtoInquiryFormProps) {
  const [status, setStatus] = useState<"idle" | "opened">("idle");
  const [draftHref, setDraftHref] = useState("");

  const fallbackMailto = useMemo(
    () => `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}`,
    [subject],
  );

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const lines = fields
      .map((field) => `${field.label}: ${fieldValue(form, field) || "—"}`)
      .join("\n");
    const href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(lines)}`;
    setDraftHref(href);
    setStatus("opened");
    window.location.href = href;
  }

  if (status === "opened") {
    return (
      <div className="rounded-md border border-navy/15 bg-ivory-deep/50 px-5 py-6 sm:px-6">
        <p className="font-display text-xl text-navy">Draft ready in your email app</p>
        <p className="mt-3 text-base leading-relaxed text-ink-muted">{confirmation}</p>
        <p className="mt-4 text-sm leading-relaxed text-ink-muted">
          If nothing opened,{" "}
          <a
            href={draftHref || fallbackMailto}
            className="font-medium text-forest underline-offset-4 hover:underline"
          >
            tap here to try again
          </a>{" "}
          or write {CONTACT_EMAIL} directly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      {fields.map((field) => {
        if (field.type === "checkbox") {
          return (
            <label
              key={field.name}
              className="flex cursor-pointer items-start gap-3 text-sm leading-relaxed text-navy-soft"
            >
              <input
                type="checkbox"
                name={field.name}
                className="mt-0.5 h-4 w-4 shrink-0 rounded border-navy/30 text-forest"
              />
              <span>
                {field.label}
                {field.hint ? (
                  <span className="mt-1 block text-ink-muted">{field.hint}</span>
                ) : null}
              </span>
            </label>
          );
        }

        return (
          <div key={field.name}>
            <label htmlFor={field.name} className="block text-sm font-medium text-navy">
              {field.label}
              {field.required ? (
                <span className="text-forest"> *</span>
              ) : (
                <span className="font-normal text-ink-muted"> (optional)</span>
              )}
            </label>
            {field.type === "select" ? (
              <select
                id={field.name}
                name={field.name}
                required={field.required}
                defaultValue=""
                className={inputClass}
              >
                <option value="" disabled>
                  Choose one
                </option>
                {field.options.map((option) => (
                  <option key={option.value} value={option.label}>
                    {option.label}
                  </option>
                ))}
              </select>
            ) : field.type === "textarea" ? (
              <textarea
                id={field.name}
                name={field.name}
                required={field.required}
                rows={5}
                placeholder={field.placeholder}
                className={inputClass}
              />
            ) : (
              <input
                id={field.name}
                name={field.name}
                type={field.type}
                required={field.required}
                placeholder={field.placeholder}
                autoComplete={
                  field.name === "name"
                    ? "name"
                    : field.name === "email"
                      ? "email"
                      : field.name === "phone"
                        ? "tel"
                        : field.name === "organization"
                          ? "organization"
                          : field.name === "city"
                            ? "address-level2"
                            : undefined
                }
                className={inputClass}
              />
            )}
            {field.hint ? (
              <p className="mt-1.5 text-sm text-ink-muted">{field.hint}</p>
            ) : null}
          </div>
        );
      })}

      <button
        type="submit"
        className="inline-flex items-center justify-center rounded-md bg-forest px-5 py-3 text-base font-medium text-ivory transition-colors hover:bg-forest-deep"
      >
        {submitLabel}
      </button>

      {footnote ? (
        <p className="text-sm leading-relaxed text-ink-muted">{footnote}</p>
      ) : null}
    </form>
  );
}
