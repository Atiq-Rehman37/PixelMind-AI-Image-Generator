import React from "react";
import {
  Zap,
  Image,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

const features = [
  {
    icon: <Zap size={32} />,
    title: "Lightning Fast",
    description:
      "Generate stunning AI images within seconds using powerful image generation models.",
  },
  {
    icon: <Image size={32} />,
    title: "High Quality",
    description:
      "Create sharp, detailed, and professional-quality images from simple prompts.",
  },
  {
    icon: <ShieldCheck size={32} />,
    title: "Secure & Private",
    description:
      "Your prompts stay private and are processed securely through our backend.",
  },
  {
    icon: <Sparkles size={32} />,
    title: "Easy to Use",
    description:
      "Simply type your idea, click Generate, and watch your imagination come to life.",
  },
];

const Features = () => {
  return (
    <section className="py-24 px-6">
      <div className="mx-auto max-w-7xl">

        <div className="text-center">
          <h2 className="text-4xl font-bold text-slate-900">
            Why Choose PixelMind?
          </h2>

          <p className="mt-4 text-lg text-slate-600">
            Powerful AI features designed to help you create amazing artwork effortlessly.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-100 text-violet-600">
                {feature.icon}
              </div>

              <h3 className="text-xl font-semibold text-slate-900">
                {feature.title}
              </h3>

              <p className="mt-3 text-slate-600 leading-7">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Features;