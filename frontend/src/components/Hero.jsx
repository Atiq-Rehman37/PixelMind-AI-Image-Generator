import { Sparkles, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

import heroImage from "../assets/hero.png";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="relative overflow-hidden py-20">
      {/* Background Blur */}
      <div className="absolute -left-24 top-10 h-80 w-80 rounded-full bg-violet-300/20 blur-3xl"></div>
      <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-blue-300/20 blur-3xl"></div>

      <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-2">
        {/* LEFT SIDE */}
        <div>
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-violet-200 bg-white px-4 py-2 shadow-sm">
            <Sparkles size={16} className="text-violet-600" />

            <span className="text-sm font-semibold text-violet-600">
              AI Powered Image Generator
            </span>
          </div>

          {/* Heading */}
          <h1 className="mt-8 text-4xl font-bold leading-tight tracking-tight text-slate-900 md:text-5xl lg:text-[54px]">
            Turn Your Ideas Into
            <span className="mt-2 block bg-gradient-to-r from-violet-600 via-fuchsia-500 to-blue-500 bg-clip-text text-transparent">
              Stunning AI Artwork
            </span>
          </h1>

          {/* Description */}
          <p className="mt-6 max-w-lg text-base leading-8 text-slate-600 md:text-lg">
            Transform simple text prompts into beautiful AI-generated artwork.
            Create realistic images, portraits, fantasy worlds, digital
            illustrations, and more with PixelMind.
          </p>

          {/* Button */}
          <div className="mt-8">
            <button
              onClick={() => navigate("/generate")}
              className="group flex items-center gap-2 rounded-xl bg-violet-600 px-8 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-violet-700 hover:shadow-xl cursor-pointer"
            >
              Start Creating
              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </button>
          </div>

          {/* Stats */}
          <div className="mt-10 flex flex-wrap gap-10">
            <div>
              <h3 className="text-2xl font-bold text-slate-900">50K+</h3>

              <p className="mt-1 text-sm text-slate-500">Images Generated</p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-slate-900">10K+</h3>

              <p className="mt-1 text-sm text-slate-500">Happy Creators</p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-slate-900">4.9★</h3>

              <p className="mt-1 text-sm text-slate-500">User Rating</p>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="relative flex justify-center">
          <img
            src={heroImage}
            alt="AI Generated Artwork"
            className="w-full max-w-lg rounded-3xl border border-white/40 shadow-2xl"
          />

          {/* Floating Card 1 */}
          <div className="absolute left-0 top-10 rounded-2xl bg-white/90 px-5 py-4 shadow-xl backdrop-blur">
            <p className="text-xs text-slate-500">Prompt</p>

            <h3 className="mt-1 text-sm font-semibold text-slate-800">
              Fantasy Castle
            </h3>
          </div>

          {/* Floating Card 2 */}
          <div className="absolute -right-4 top-1/2 rounded-2xl bg-white/90 px-5 py-4 shadow-xl backdrop-blur">
            <p className="text-xs text-slate-500">Style</p>

            <h3 className="mt-1 text-sm font-semibold text-slate-800">
              Photorealistic
            </h3>
          </div>

          {/* Floating Card 3 */}
          <div className="absolute bottom-6 left-12 rounded-2xl bg-white/90 px-5 py-4 shadow-xl backdrop-blur">
            <p className="text-xs text-slate-500">Quality</p>

            <h3 className="mt-1 text-sm font-semibold text-slate-800">
              Ultra HD
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
