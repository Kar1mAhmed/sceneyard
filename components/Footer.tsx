'use client';

import { Twitter, Instagram, Youtube, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-12 px-6 border-t-2 border-[var(--border)] bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <div
                className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center font-bold text-white"
                aria-label="SceneYard logo"
              >
                SY
              </div>
              <span className="ml-3 text-xl font-bold text-foreground">
                SceneYard
              </span>
            </div>
            <p className="text-muted leading-relaxed max-w-md">
              Premium After Effects templates for professional motion designers and video editors. Ship faster, deliver better.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Product</h3>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() =>
                    document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })
                  }
                  className="text-muted hover:text-foreground transition-colors focus:outline-none"
                >
                  Features
                </button>
              </li>
              <li>
                <button
                  onClick={() =>
                    document.getElementById('demo')?.scrollIntoView({ behavior: 'smooth' })
                  }
                  className="text-muted hover:text-foreground transition-colors focus:outline-none"
                >
                  Demo
                </button>
              </li>
              <li>
                <button
                  onClick={() =>
                    document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })
                  }
                  className="text-muted hover:text-foreground transition-colors focus:outline-none"
                >
                  How it Works
                </button>
              </li>
              <li>
                <button
                  onClick={() =>
                    document.getElementById('faq')?.scrollIntoView({ behavior: 'smooth' })
                  }
                  className="text-muted hover:text-foreground transition-colors focus:outline-none"
                >
                  FAQ
                </button>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Legal</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="/terms"
                  className="text-muted hover:text-foreground transition-colors focus:outline-none"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  href="/privacy"
                  className="text-muted hover:text-foreground transition-colors focus:outline-none"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="/licenses"
                  className="text-muted hover:text-foreground transition-colors focus:outline-none"
                >
                  License Agreement
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Social & Copyright */}
        <div className="pt-8 border-t border-[var(--border)] flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="text-sm text-muted">
            © {currentYear} SceneYard. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <a
              href="https://twitter.com/sceneyard"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-foreground transition-colors focus:outline-none"
              aria-label="Twitter"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a
              href="https://instagram.com/sceneyard"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-foreground transition-colors focus:outline-none"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="https://youtube.com/@sceneyard"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-foreground transition-colors focus:outline-none"
              aria-label="YouTube"
            >
              <Youtube className="w-5 h-5" />
            </a>
            <a
              href="mailto:hello@sceneyard.com"
              className="text-muted hover:text-foreground transition-colors focus:outline-none"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
