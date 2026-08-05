import React from "react";
import { PencilLine, Wand2, Download } from "lucide-react";

const steps = [
  {
    icon: <PencilLine size={32} />,
    title: "Write a Prompt",
    description:
      "Describe the image you want to create using natural language.",
  },
  {
    icon: <Wand2 size={32} />,
    title: "Generate Image",
    description:
      "PixelMind uses AI to transform your prompt into a stunning image.",
  },
  {
    icon: <Download size={32} />,
    title: "Download",
    description:
      "Save your generated image in high quality and use it anywhere.",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-24 px-6">
      <div className="mx-auto max-w-7xl">

        <div className="text-center">
          <h2 className="text-4xl font-bold text-slate-900">
            How It Works
          </h2>

          <p className="mt-4 text-lg text-slate-600">
            Create amazing AI images in just three simple steps.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative rounded-3xl bg-white p-8 shadow-sm border border-slate-200 text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-violet-100 text-violet-600">
                {step.icon}
              </div>

              <div className="mb-3 text-sm font-semibold uppercase tracking-widest text-violet-600">
                Step {index + 1}
              </div>

              <h3 className="text-2xl font-bold text-slate-900">
                {step.title}
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                {step.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default HowItWorks;