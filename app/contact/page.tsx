export const metadata = {
  title: "Contact - Hello World",
  description: "Get in touch with us. We'd love to hear from you.",
};

export default function ContactPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-(--color-background) transition-colors py-12 px-6">
      <div className="w-full max-w-2xl">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-(--color-primary) mb-4 transition-colors">
            Get in Touch
          </h1>
          <p className="text-lg text-(--color-muted-text) transition-colors">
            We'd love to hear from you. Send us a message and we'll respond as soon as we can.
          </p>
        </div>
        <div className="bg-(--color-surface) rounded-lg border border-(--color-border) shadow-sm p-8 transition-colors">
          {/* ContactForm component will be imported and rendered here */}
          <ContactForm />
        </div>
      </div>
    </div>
  );
}

import ContactForm from "@/components/ContactForm";