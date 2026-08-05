import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { Mail, Sparkles } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16">

        <div className="grid gap-12 md:grid-cols-4">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-3">

              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-600 text-white">
                <Sparkles size={20} />
              </div>

              <h2 className="text-2xl font-bold text-slate-900">
                Pixel<span className="text-violet-600">Mind</span>
              </h2>

            </div>

            <p className="mt-5 text-slate-600 leading-7">
              Create stunning AI-generated images from simple text prompts.
              Fast, creative, and powered by modern AI.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-5 text-lg font-semibold text-slate-900">
              Quick Links
            </h3>

            <ul className="space-y-3 text-slate-600">
              <li><a href="/" className="hover:text-violet-600">Home</a></li>
              <li><a href="/generate" className="hover:text-violet-600">Generate</a></li>
              <li><a href="#" className="hover:text-violet-600">Pricing</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="mb-5 text-lg font-semibold text-slate-900">
              Resources
            </h3>

            <ul className="space-y-3 text-slate-600">
              <li><a href="#" className="hover:text-violet-600">Documentation</a></li>
              <li><a href="#" className="hover:text-violet-600">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-violet-600">Terms of Service</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-5 text-lg font-semibold text-slate-900">
              Connect
            </h3>

            <div className="space-y-4">

              <div className="flex items-center gap-3 text-slate-600">
                <Mail size={18} />
                <span>support@pixelmind.ai</span>
              </div>

              <div className="flex gap-4 pt-2">

                <a
                  href="#"
                  className="rounded-lg bg-slate-100 p-3 transition hover:bg-violet-100 hover:text-violet-600"
                >
                  <FaGithub size={20} />
                </a>

                <a
                  href="#"
                  className="rounded-lg bg-slate-100 p-3 transition hover:bg-violet-100 hover:text-violet-600"
                >
                   <FaLinkedin size={20} />
                </a>

              </div>

            </div>
          </div>

        </div>

        <div className="mt-16 border-t border-slate-200 pt-8 text-center text-slate-500">
          © {new Date().getFullYear()} PixelMind. All rights reserved.
        </div>

      </div>
    </footer>
  );
};

export default Footer;