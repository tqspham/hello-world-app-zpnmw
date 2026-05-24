"use client";

import { useState, useRef } from "react";
import { AlertCircle, CheckCircle, Loader } from "lucide-react";
import { useLanguage } from "@/lib/language-context";
import { translations } from "@/lib/translations";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface ValidationErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export default function ContactForm() {
  const { language } = useLanguage();
  const t = translations[language];
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<ValidationErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const liveRegionRef = useRef<HTMLDivElement>(null);

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateField = (name: string, value: string): string | undefined => {
    if (!value.trim()) {
      const fieldLabels: Record<string, string> = {
        name: t.contactForm.nameLabel,
        email: t.contactForm.emailLabel,
        subject: t.contactForm.subjectLabel,
        message: t.contactForm.messageLabel,
      };
      return `${fieldLabels[name]} ${t.contactForm.nameRequired.split(" ")[1]}`;
    }
    if (name === "email" && !validateEmail(value)) {
      return t.contactForm.invalidEmail;
    }
    return undefined;
  };

  const handleBlur = (field: keyof FormData) => {
    const error = validateField(field, formData[field]);
    setErrors((prev) => {
      if (error) {
        return { ...prev, [field]: error };
      } else {
        const newErrors = { ...prev };
        delete newErrors[field];
        return newErrors;
      }
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormData]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name as keyof FormData];
        return newErrors;
      });
    }
  };

  const validateForm = (): boolean => {
    const newErrors: ValidationErrors = {};
    Object.entries(formData).forEach(([key, value]) => {
      const error = validateField(key, value);
      if (error) {
        newErrors[key as keyof FormData] = error;
      }
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMessage("");
    setSuccessMessage("");

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSuccessMessage(t.contactForm.successMessage);
        setFormData({ name: "", email: "", subject: "", message: "" });
        setErrors({});
        if (liveRegionRef.current) {
          liveRegionRef.current.focus();
        }
      } else {
        setErrorMessage(t.contactForm.errorServer);
      }
    } catch (error) {
      setErrorMessage(t.contactForm.errorGeneral);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* ARIA live region for success/error announcements */}
      <div
        ref={liveRegionRef}
        role="status"
        aria-live="polite"
        aria-atomic="true"
        className="sr-only"
      >
        {successMessage && `Success: ${successMessage}`}
        {errorMessage && `Error: ${errorMessage}`}
      </div>

      {/* Success Message */}
      {successMessage && (
        <div className="mb-6 p-4 bg-green-50 border border-(--color-success) rounded-lg flex gap-3 items-start animate-in fade-in duration-200">
          <CheckCircle
            size={20}
            className="text-(--color-success) flex-shrink-0 mt-0.5"
          />
          <div>
            <p className="text-(--color-primary) font-medium">{t.contactForm.successTitle}</p>
            <p className="text-(--color-muted-text) text-sm mt-1">
              {successMessage}
            </p>
          </div>
        </div>
      )}

      {/* Error Message */}
      {errorMessage && (
        <div className="mb-6 p-4 bg-red-50 border border-(--color-danger) rounded-lg flex gap-3 items-start animate-in fade-in duration-200">
          <AlertCircle
            size={20}
            className="text-(--color-danger) flex-shrink-0 mt-0.5"
          />
          <div>
            <p className="text-(--color-primary) font-medium">{t.contactForm.errorTitle}</p>
            <p className="text-(--color-muted-text) text-sm mt-1">
              {errorMessage}
            </p>
          </div>
        </div>
      )}

      {/* Contact Form */}
      <form onSubmit={handleSubmit} className="space-y-6" noValidate>
        {/* Name Field */}
        <div>
          <label htmlFor="name" className="block text-(--color-primary) font-medium mb-2 transition-colors">
            {t.contactForm.nameLabel}
          </label>
          <input
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            onBlur={() => handleBlur("name")}
            className={`w-full px-4 py-3 border rounded-lg bg-(--color-surface) text-(--color-text) transition-colors focus:outline-none focus:ring-2 focus:ring-(--color-accent) focus:ring-offset-2 ${
              errors.name ? "border-(--color-danger)" : "border-(--color-border)"
            }`}
            placeholder={t.contactForm.namePlaceholder}
            disabled={isSubmitting}
          />
          {errors.name && (
            <p className="mt-2 text-sm text-(--color-danger) flex gap-1 items-center">
              <AlertCircle size={16} />
              {errors.name}
            </p>
          )}
        </div>

        {/* Email Field */}
        <div>
          <label htmlFor="email" className="block text-(--color-primary) font-medium mb-2 transition-colors">
            {t.contactForm.emailLabel}
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            onBlur={() => handleBlur("email")}
            className={`w-full px-4 py-3 border rounded-lg bg-(--color-surface) text-(--color-text) transition-colors focus:outline-none focus:ring-2 focus:ring-(--color-accent) focus:ring-offset-2 ${
              errors.email ? "border-(--color-danger)" : "border-(--color-border)"
            }`}
            placeholder={t.contactForm.emailPlaceholder}
            disabled={isSubmitting}
          />
          {errors.email && (
            <p className="mt-2 text-sm text-(--color-danger) flex gap-1 items-center">
              <AlertCircle size={16} />
              {errors.email}
            </p>
          )}
        </div>

        {/* Subject Field */}
        <div>
          <label htmlFor="subject" className="block text-(--color-primary) font-medium mb-2 transition-colors">
            {t.contactForm.subjectLabel}
          </label>
          <input
            id="subject"
            name="subject"
            type="text"
            value={formData.subject}
            onChange={handleChange}
            onBlur={() => handleBlur("subject")}
            className={`w-full px-4 py-3 border rounded-lg bg-(--color-surface) text-(--color-text) transition-colors focus:outline-none focus:ring-2 focus:ring-(--color-accent) focus:ring-offset-2 ${
              errors.subject ? "border-(--color-danger)" : "border-(--color-border)"
            }`}
            placeholder={t.contactForm.subjectPlaceholder}
            disabled={isSubmitting}
          />
          {errors.subject && (
            <p className="mt-2 text-sm text-(--color-danger) flex gap-1 items-center">
              <AlertCircle size={16} />
              {errors.subject}
            </p>
          )}
        </div>

        {/* Message Field */}
        <div>
          <label htmlFor="message" className="block text-(--color-primary) font-medium mb-2 transition-colors">
            {t.contactForm.messageLabel}
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            onBlur={() => handleBlur("message")}
            className={`w-full px-4 py-3 border rounded-lg bg-(--color-surface) text-(--color-text) transition-colors focus:outline-none focus:ring-2 focus:ring-(--color-accent) focus:ring-offset-2 resize-none ${
              errors.message ? "border-(--color-danger)" : "border-(--color-border)"
            }`}
            placeholder={t.contactForm.messagePlaceholder}
            rows={6}
            disabled={isSubmitting}
          />
          {errors.message && (
            <p className="mt-2 text-sm text-(--color-danger) flex gap-1 items-center">
              <AlertCircle size={16} />
              {errors.message}
            </p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-3 px-4 bg-(--color-secondary) text-(--color-surface) font-medium rounded-lg transition-colors hover:bg-(--color-accent) disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-(--color-accent) focus:ring-offset-2 flex items-center justify-center gap-2"
        >
          {isSubmitting ? (
            <>
              <Loader size={18} className="animate-spin" />
              {t.contactForm.sendingButton}
            </>
          ) : (
            t.contactForm.submitButton
          )}
        </button>
      </form>
    </>
  );
}
