"use client";

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-(--color-border) bg-(--color-surface) shadow-sm">
      <div className="mx-auto max-w-7xl px-6 py-12 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-semibold text-(--color-primary) mb-4">
              Company
            </h3>
            <p className="text-sm text-(--color-muted-text) leading-relaxed">
              A clean, approachable interface with a warm, friendly tone that
              prioritizes clarity and simplicity.
            </p>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="text-lg font-semibold text-(--color-primary) mb-4">
              Product
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-(--color-primary) text-sm hover:text-(--color-secondary) transition-colors"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-(--color-primary) text-sm hover:text-(--color-secondary) transition-colors"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-(--color-primary) text-sm hover:text-(--color-secondary) transition-colors"
                >
                  Documentation
                </a>
              </li>
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="text-lg font-semibold text-(--color-primary) mb-4">
              Support
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-(--color-primary) text-sm hover:text-(--color-secondary) transition-colors"
                >
                  Help Center
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-(--color-primary) text-sm hover:text-(--color-secondary) transition-colors"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-(--color-primary) text-sm hover:text-(--color-secondary) transition-colors"
                >
                  Status
                </a>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-lg font-semibold text-(--color-primary) mb-4">
              Legal
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-(--color-primary) text-sm hover:text-(--color-secondary) transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-(--color-primary) text-sm hover:text-(--color-secondary) transition-colors"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-(--color-primary) text-sm hover:text-(--color-secondary) transition-colors"
                >
                  Cookies
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 border-t border-(--color-border) pt-8 flex flex-col sm:flex-row items-center justify-between">
          <p className="text-sm text-(--color-muted-text)">
            © 2024 Hello World. All rights reserved.
          </p>
          <div className="flex gap-6 mt-6 sm:mt-0">
            <a
              href="#"
              className="text-(--color-secondary) text-sm hover:text-(--color-accent) transition-colors"
            >
              Twitter
            </a>
            <a
              href="#"
              className="text-(--color-secondary) text-sm hover:text-(--color-accent) transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="#"
              className="text-(--color-secondary) text-sm hover:text-(--color-accent) transition-colors"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
