import { NextRequest, NextResponse } from "next/server";

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function validateContactForm(data: unknown): data is ContactFormData {
  if (typeof data !== "object" || data === null) {
    return false;
  }

  const form = data as Record<string, unknown>;

  if (
    typeof form.name !== "string" ||
    !form.name.trim() ||
    typeof form.email !== "string" ||
    !form.email.trim() ||
    typeof form.subject !== "string" ||
    !form.subject.trim() ||
    typeof form.message !== "string" ||
    !form.message.trim()
  ) {
    return false;
  }

  if (!validateEmail(form.email)) {
    return false;
  }

  return true;
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    if (!validateContactForm(body)) {
      return NextResponse.json(
        { error: "Invalid form data. Please check all fields and try again." },
        { status: 400 }
      );
    }

    // Form validation passed; in a real app, you would:
    // - Send an email using a service like SendGrid, Mailgun, or Resend
    // - Log the message to a database
    // - Send a confirmation email to the user
    // For now, we simply return a success response

    return NextResponse.json(
      {
        success: true,
        message: "Thank you for contacting us. We'll be in touch soon.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "An error occurred while processing your request. Please try again." },
      { status: 500 }
    );
  }
}