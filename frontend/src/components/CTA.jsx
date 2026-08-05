import React from "react";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const CTA = () => {
  const navigate = useNavigate();

  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-3xl bg-gradient-to-r from-violet-600 to-indigo-600 px-8 py-20 text-center shadow-2xl">

        <h2 className="text-4xl font-bold text-white md:text-5xl">
          Ready to Create Your First AI Image?
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-violet-100">
          Turn your imagination into stunning artwork with the power of AI.
          Start generating beautiful images in seconds.
        </p>

        <button
          onClick={() => navigate("/generate")}
          className="mt-10 inline-flex items-center gap-2 rounded-xl bg-white px-8 py-4 text-lg font-semibold text-violet-600 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl cursor-pointer"
        >
          Generate Image
          <ArrowRight size={20} />
        </button>

      </div>
    </section>
  );
};

export default CTA;