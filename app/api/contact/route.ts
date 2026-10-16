import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const TO_EMAIL = "admin@apdigitechsolutions.in";
const FROM_EMAIL = "AP Digitech Solutions Contact <onboarding@resend.dev>";
const SUBJECT = "New Contact Form Submission - AP Digitech Solutions";

const MAX_NAME = 120;
const MAX_EMAIL = 254;
const MAX_PHONE = 32;
const MAX_MESSAGE = 600;
const MIN_MESSAGE = 10;

type ContactPayload = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

type ParsedPayload =
  | { ok: true; data: ContactPayload }
  | { ok: false; error: string };

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// eslint-disable-next-line no-control-regex
const CONTROL_CHARS = /[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/g;

function sanitize(value: unknown, max: number): string {
  if (typeof value !== "string") return "";
  return value
    .replace(CONTROL_CHARS, "")
    .replace(/[ \t]+/g, " ")
    .trim()
    .slice(0, max);
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function parsePayload(body: unknown): ParsedPayload {
  if (!body || typeof body !== "object") {
    return { ok: false, error: "Invalid request payload." };
  }

  const raw = body as Record<string, unknown>;
  const name = sanitize(raw.name, MAX_NAME);
  const email = sanitize(raw.email, MAX_EMAIL).toLowerCase();
  const phone = sanitize(raw.phone, MAX_PHONE);
  const message = sanitize(raw.message, MAX_MESSAGE);

  if (!name) return { ok: false, error: "Name is required." };
  if (!email) return { ok: false, error: "Email is required." };
  if (!EMAIL_REGEX.test(email)) {
    return { ok: false, error: "Please provide a valid email address." };
  }
  if (!phone || phone.length < 5) {
    return { ok: false, error: "A valid phone number is required." };
  }
  if (!message || message.length < MIN_MESSAGE) {
    return {
      ok: false,
      error: `Message must be at least ${MIN_MESSAGE} characters long.`,
    };
  }

  return { ok: true, data: { name, email, phone, message } };
}

function buildHtml(data: ContactPayload, submittedAt: string): string {
  const messageHtml = escapeHtml(data.message).replace(/\n/g, "<br />");
  return `<!doctype html>
<html>
  <body style="margin:0;padding:24px;background:#f1f5f9;font-family:Inter,Arial,sans-serif;color:#0f172a;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;margin:0 auto;background:#ffffff;border-radius:16px;border:1px solid #e2e8f0;overflow:hidden;">
      <tr>
        <td style="padding:24px 28px;background:linear-gradient(135deg,#3b82f6,#60a5fa);color:#ffffff;">
          <p style="margin:0;font-size:12px;letter-spacing:0.18em;text-transform:uppercase;opacity:0.85;">AP Digitech Solutions</p>
          <h1 style="margin:6px 0 0;font-size:20px;font-weight:600;">New contact form submission</h1>
        </td>
      </tr>
      <tr>
        <td style="padding:24px 28px;">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="font-size:14px;line-height:1.55;">
            <tr><td style="padding:6px 0;color:#64748b;width:110px;">Name</td><td style="padding:6px 0;font-weight:500;">${escapeHtml(data.name)}</td></tr>
            <tr><td style="padding:6px 0;color:#64748b;">Email</td><td style="padding:6px 0;font-weight:500;"><a href="mailto:${escapeHtml(data.email)}" style="color:#2563eb;text-decoration:none;">${escapeHtml(data.email)}</a></td></tr>
            <tr><td style="padding:6px 0;color:#64748b;">Phone</td><td style="padding:6px 0;font-weight:500;">${escapeHtml(data.phone)}</td></tr>
            <tr><td style="padding:6px 0;color:#64748b;">Submitted</td><td style="padding:6px 0;font-weight:500;">${escapeHtml(submittedAt)}</td></tr>
          </table>
          <hr style="margin:20px 0;border:none;border-top:1px solid #e2e8f0;" />
          <p style="margin:0 0 8px;color:#64748b;font-size:12px;letter-spacing:0.12em;text-transform:uppercase;">Message</p>
          <div style="padding:16px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:12px;font-size:14px;line-height:1.6;color:#0f172a;white-space:pre-wrap;">${messageHtml}</div>
        </td>
      </tr>
      <tr>
        <td style="padding:16px 28px 24px;color:#94a3b8;font-size:12px;">
          Sent from the AP Digitech Solutions contact form.
        </td>
      </tr>
    </table>
  </body>
</html>`;
}

function buildText(data: ContactPayload, submittedAt: string): string {
  return [
    "New contact form submission - AP Digitech Solutions",
    "",
    `Name:      ${data.name}`,
    `Email:     ${data.email}`,
    `Phone:     ${data.phone}`,
    `Submitted: ${submittedAt}`,
    "",
    "Message:",
    data.message,
  ].join("\n");
}

export async function POST(request: Request): Promise<NextResponse> {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("[contact] RESEND_API_KEY is not configured.");
    return NextResponse.json(
      { error: "Email service is not configured. Please try again later." },
      { status: 500 },
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { error: "Request body must be valid JSON." },
      { status: 400 },
    );
  }

  const parsed = parsePayload(body);
  if (!parsed.ok) {
    return NextResponse.json({ error: parsed.error }, { status: 400 });
  }

  const submittedAt = new Date().toLocaleString("en-IN", {
    dateStyle: "full",
    timeStyle: "short",
    timeZone: "Asia/Kolkata",
  });

  try {
    const resend = new Resend(apiKey);
    const { data, error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: [TO_EMAIL],
      replyTo: parsed.data.email,
      subject: SUBJECT,
      html: buildHtml(parsed.data, submittedAt),
      text: buildText(parsed.data, submittedAt),
    });

    if (error) {
      console.error("[contact] Resend error:", error);
      return NextResponse.json(
        { error: "Could not send your message. Please try again shortly." },
        { status: 502 },
      );
    }

    return NextResponse.json(
      { success: true, id: data?.id ?? null },
      { status: 200 },
    );
  } catch (err) {
    console.error("[contact] Unexpected error:", err);
    return NextResponse.json(
      { error: "Something went wrong. Please try again later." },
      { status: 500 },
    );
  }
}
