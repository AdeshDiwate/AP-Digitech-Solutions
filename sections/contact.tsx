"use client";

import { useState } from "react";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import { toast } from "sonner";
import { ArrowUpRight, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

const MAX_CHARS = 600;
const MIN_MESSAGE = 10;
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const initialFormState = {
  firstName: "",
  lastName: "",
  email: "",
  phoneNumber: "",
  message: "",
};

export default function Contact() {
  const [formData, setFormData] = useState(initialFormState);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (isSubmitting) return;

    if (!formData.firstName.trim()) {
      toast.error("First name is required");
      return;
    }

    if (!formData.email.trim()) {
      toast.error("Email address is required");
      return;
    }

    if (!EMAIL_REGEX.test(formData.email.trim())) {
      toast.error("Please enter a valid email address");
      return;
    }

    if (!formData.phoneNumber.trim() || formData.phoneNumber.length < 5) {
      toast.error("Phone number is required");
      return;
    }

    const trimmedMessage = formData.message.trim();
    if (!trimmedMessage) {
      toast.error("Message is required");
      return;
    }

    if (trimmedMessage.length < MIN_MESSAGE) {
      toast.error(`Message must be at least ${MIN_MESSAGE} characters`);
      return;
    }

    const fullName = `${formData.firstName.trim()} ${formData.lastName.trim()}`.trim();

    setIsSubmitting(true);
    const loadingToast = toast.loading("Sending your message...");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: fullName,
          email: formData.email.trim(),
          phone: formData.phoneNumber.trim(),
          message: trimmedMessage,
        }),
      });

      const result = (await response
        .json()
        .catch(() => ({}))) as { success?: boolean; error?: string };

      if (!response.ok || !result.success) {
        throw new Error(
          result.error ?? "We couldn't send your message. Please try again.",
        );
      }

      toast.success("Message sent successfully! We'll get back to you soon.", {
        id: loadingToast,
      });
      setFormData(initialFormState);
    } catch (err) {
      const message =
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again.";
      toast.error(message, { id: loadingToast });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[linear-gradient(180deg,#e3ebf4_0%,#dde7f3_100%)] px-4 py-20 sm:px-6 lg:px-8"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-75 [background-size:20px_20px] [background-image:radial-gradient(rgba(71,85,105,0.18)_1px,transparent_1px)]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.4)_0%,rgba(233,238,245,0.18)_22%,rgba(221,231,243,0)_42%),radial-gradient(circle_at_top,rgba(191,219,254,0.3),transparent_38%)]"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-[1.5rem] sm:rounded-[2.25rem] border border-white/90 bg-white text-neutral-950 shadow-[0_28px_90px_rgba(37,99,235,0.10),0_20px_44px_rgba(15,23,42,0.10)]">
          <div className="px-6 pt-10 sm:px-8 md:px-12 md:pt-12 lg:px-16">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-blue-500 sm:text-sm">
              Contact
            </p>
            <h2 className="mt-5 text-3xl font-semibold tracking-tight text-slate-900 text-balance sm:text-4xl md:text-5xl lg:text-6xl">
              Let's Build Something
              <span className="mt-1 block text-sky-500">Exceptional Together</span>
            </h2>
          </div>

          <div className="grid gap-10 p-6 sm:p-8 md:p-10 lg:grid-cols-[0.85fr_1.15fr] lg:p-12 lg:pt-10">

            {/* Left Column: Contact Info Card (The Blue Gradient Card) */}
            <div className="relative h-full overflow-hidden rounded-[1.5rem] sm:rounded-[2rem] bg-[linear-gradient(180deg,#3b82f6_0%,#60a5fa_50%,#93c5fd_100%)] p-7 sm:p-8 text-white shadow-xl lg:p-10">
              {/* Decorative blurry spots similar to the image */}
              <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-blue-400/30 blur-3xl" />
              <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-blue-300/20 blur-3xl" />

              <div className="relative z-10 flex flex-col h-full">
                <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                  Get in Touch
                </h2>

                <div className="mt-10 space-y-8 sm:mt-12 sm:space-y-10">
                  <div>
                    <h3 className="text-[10px] font-semibold uppercase tracking-[0.22em] text-blue-100/80 sm:text-xs">
                      Visit us
                    </h3>
                    <div className="mt-3">
                      <a
                        href="https://www.google.com/maps/search/?api=1&query=Gera's+Imperium+Rise+Hinjewadi+Phase+II+Pune+411057"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/link block text-base font-medium leading-relaxed text-white transition-all duration-300 hover:text-white/90 sm:text-lg"
                      >
                        Office No. 733, Gera's Imperium Rise, <br className="hidden sm:block" />
                        Hinjewadi Phase II, Pune, 411057
                        <span className="ml-2 inline-flex align-middle rounded-full bg-white/10 p-1 transition-all duration-300 group-hover/link:bg-white/20 group-hover/link:rotate-45">
                          <ArrowUpRight className="w-3.5 h-3.5 text-blue-50" />
                        </span>
                      </a>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-[10px] font-semibold uppercase tracking-[0.22em] text-blue-100/80 sm:text-xs">
                      Chat to us
                    </h3>
                    <p className="mt-2 text-base font-medium text-white sm:text-lg">
                      hr@raveblue.in
                    </p>
                  </div>

                  <div>
                    <h3 className="text-[10px] font-semibold uppercase tracking-[0.22em] text-blue-100/80 sm:text-xs">
                      Call us
                    </h3>
                    <p className="mt-2 text-base font-medium text-white sm:text-lg">
                      (+91) 826-506-8879 <br />
                      (+91) 866-861-9751
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Contact Form */}
            <div className="flex flex-col">
              <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                <fieldset disabled={isSubmitting} className="space-y-4 disabled:opacity-90">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-1">
                    <label htmlFor="firstName" className="text-sm font-medium text-slate-900">First Name</label>
                    <input
                      type="text"
                      id="firstName"
                      placeholder="John"
                      required
                      maxLength={60}
                      autoComplete="given-name"
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 disabled:cursor-not-allowed"
                    />
                  </div>
                  <div className="space-y-1">
                    <label htmlFor="lastName" className="text-sm font-medium text-slate-900">Last Name</label>
                    <input
                      type="text"
                      id="lastName"
                      placeholder="Doe"
                      maxLength={60}
                      autoComplete="family-name"
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 disabled:cursor-not-allowed"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label htmlFor="email" className="text-sm font-medium text-slate-900">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    placeholder="hello@example.com"
                    required
                    maxLength={254}
                    autoComplete="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 disabled:cursor-not-allowed"
                  />
                </div>

                <div className="space-y-1">
                  <label htmlFor="phoneNumber" className="text-sm font-medium text-slate-900">Phone Number</label>
                  <div className="phone-input-wrapper">
                    <PhoneInput
                      defaultCountry="in"
                      value={formData.phoneNumber}
                      onChange={(phone) => setFormData({ ...formData, phoneNumber: phone })}
                      disabled={isSubmitting}
                      className="w-full"
                      inputClassName="!w-full !h-[42px] !rounded-r-xl !border-y !border-r !border-slate-200 !bg-slate-50 !px-4 !py-2.5 !text-sm focus:!border-blue-500 focus:!outline-none focus:!ring-1 focus:!ring-blue-500 !transition-all"
                      countrySelectorStyleProps={{
                        buttonClassName: "!rounded-l-xl !border-y !border-l !border-slate-200 !bg-slate-50 !px-3 !h-[42px] !transition-all hover:!bg-slate-100",
                      }}
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label htmlFor="message" className="text-sm font-medium text-slate-900">Message</label>
                  <div className="relative">
                    <textarea
                      id="message"
                      rows={4}
                      required
                      minLength={MIN_MESSAGE}
                      maxLength={MAX_CHARS}
                      placeholder="Tell us about your project, goals, or requirements..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 pb-8 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 resize-none transition-all duration-200 disabled:cursor-not-allowed"
                    />
                    <div className={cn(
                      "absolute bottom-2.5 right-3 text-[10px] font-medium transition-colors duration-200 pointer-events-none",
                      formData.message.length >= 500 ? "text-orange-500" : "text-slate-400"
                    )}>
                      {formData.message.length} / {MAX_CHARS}
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  aria-busy={isSubmitting}
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-500 py-3.5 text-sm font-semibold text-white shadow-lg transition-colors hover:bg-blue-600 disabled:cursor-not-allowed disabled:bg-blue-400"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
                      Sending...
                    </>
                  ) : (
                    "Send Message"
                  )}
                </button>
                </fieldset>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
