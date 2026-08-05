import React from "react";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "/month",
    button: "Current Plan",
    highlighted: false,
    description: "Perfect for getting started with AI image generation.",
    features: [
      "10 AI Images / day",
      "Standard Image Quality",
      "Basic AI Styles",
      "Community Support",
    ],
  },
  {
    name: "Pro",
    price: "$19",
    period: "/month",
    button: "Get Started",
    highlighted: true,
    description: "Best for creators who generate images every day.",
    features: [
      "Unlimited Images",
      "HD Image Quality",
      "Priority Generation",
      "No Watermark",
      "Commercial License",
    ],
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    button: "Contact Sales",
    highlighted: false,
    description: "For businesses and teams requiring custom solutions.",
    features: [
      "Unlimited Images",
      "Dedicated API Access",
      "Team Workspace",
      "24/7 Priority Support",
      "Custom Integrations",
    ],
  },
];

const Pricing = () => {
  return (
    <section className="bg-gradient-to-b from-violet-50 via-white to-white py-24">
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <div className="mb-16 text-center">

          <span className="rounded-full bg-violet-100 px-4 py-2 text-sm font-semibold text-violet-600">
            Pricing
          </span>

          <h1 className="mt-6 text-4xl font-bold text-slate-900 md:text-5xl">
            Our Plans
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-600">
            Whether you're just exploring AI or building professionally,
            PixelMind has a plan that fits your needs.
          </p>

        </div>

        {/* Cards */}

        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-3">

          {plans.map((plan, index) => (

            <div
              key={index}
              className={`relative rounded-3xl bg-white p-7 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${
                plan.highlighted
                  ? "scale-105 border-2 border-violet-600 shadow-2xl"
                  : "border border-slate-200 shadow-md"
              }`}
            >

              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="rounded-full bg-violet-600 px-5 py-2 text-sm font-semibold text-white shadow-lg">
                    ⭐ Most Popular
                  </span>
                </div>
              )}

              <h2 className="mt-4 text-2xl font-bold text-slate-900">
                {plan.name}
              </h2>

              <p className="mt-3 text-sm leading-6 text-slate-500">
                {plan.description}
              </p>

              <div className="mt-6 flex items-end gap-1">
                <span className="text-5xl font-bold text-slate-900">
                  {plan.price}
                </span>

                <span className="pb-2 text-slate-500">
                  {plan.period}
                </span>
              </div>

              <button
                className={`mt-8 w-full rounded-xl py-3 font-semibold transition cursor-pointer ${
                  plan.highlighted
                    ? "bg-violet-600 text-white hover:bg-violet-700"
                    : "bg-slate-100 text-slate-900 hover:bg-slate-200"
                }`}
              >
                {plan.button}
              </button>

              <div className="my-8 h-px bg-slate-200"></div>

              <div className="space-y-4">

                {plan.features.map((feature, i) => (

                  <div
                    key={i}
                    className="flex items-center gap-3"
                  >
                    <div className="rounded-full bg-green-100 p-1">
                      <Check
                        size={14}
                        className="text-green-600"
                      />
                    </div>

                    <span className="text-sm text-slate-700">
                      {feature}
                    </span>

                  </div>

                ))}

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
};

export default Pricing;