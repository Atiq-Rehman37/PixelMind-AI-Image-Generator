import { useState } from "react";
import { Sparkles, Download, LoaderCircle } from "lucide-react";

import api from "../api/imageApi";

const Generate = () => {
  const [prompt, setPrompt] = useState("");

  const [style, setStyle] = useState("Realistic");

  const [ratio, setRatio] = useState("1:1");

  const [loading, setLoading] = useState(false);

  const [image, setImage] = useState(null);

  const suggestions = [
    {
      title: "🏰 Fantasy Castle",
      prompt:
        "A fantasy castle floating above the clouds, cinematic lighting, ultra realistic, 8k",
    },
    {
      title: "🚀 Astronaut on Mars",
      prompt:
        "An astronaut walking on Mars during sunset, cinematic lighting, ultra realistic",
    },
    {
      title: "🌸 Anime Girl",
      prompt:
        "Beautiful anime girl under cherry blossoms, detailed, vibrant colors",
    },
    {
      title: "🌆 Cyberpunk City",
      prompt:
        "A futuristic cyberpunk city at night with neon lights, ultra detailed",
    },
    {
      title: "🐉 Fire Dragon",
      prompt:
        "A giant fire dragon flying above mountains, fantasy art, cinematic",
    },
  ];

  const handleGenerate = async () => {
    if (!prompt.trim()) {
      alert("Please enter a prompt.");
      return;
    }

    try {
      setLoading(true);
      setImage(null);

      const response = await api.post(
        "/image/generate",
        {
          prompt,
          style,
          ratio,
        },
        {
          responseType: "blob",
        },
      );

      const imageUrl = URL.createObjectURL(response.data);

      setImage(imageUrl);
    } catch (error) {
      console.error(error);

      alert(error.response?.data?.message || "Image generation failed.");
    } finally {
      setLoading(false);
    }
  };

  const handleDownload = () => {
    if (!image) return;

    const link = document.createElement("a");

    link.href = image;

    link.download = "pixelmind-image.png";

    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);
  };

  return (
    <section className="min-h-screen bg-gradient-to-b from-violet-50 via-white to-white py-16">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}

        <div className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-violet-200 bg-white px-4 py-2 shadow-sm">
            <Sparkles size={16} className="text-violet-600" />

            <span className="text-sm font-semibold text-violet-600">
              AI Image Generator
            </span>
          </div>

          <h1 className="mt-6 text-4xl font-bold text-slate-900 md:text-5xl">
            Bring Your Ideas To Life
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
            Describe anything you can imagine and PixelMind will transform your
            words into beautiful AI-generated artwork.
          </p>
        </div>

        {/* Main Content */}

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {/* LEFT CARD */}

          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-slate-900">
              Describe Your Image
            </h2>

            <p className="mt-2 text-slate-500">
              Write a detailed prompt to create your AI image.
            </p>

            {/* Prompt */}

            <div className="mt-8">
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Prompt
              </label>

              <textarea
                rows={8}
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="Example: A futuristic astronaut walking through a neon cyberpunk city at night..."
                className="w-full resize-none rounded-2xl border border-slate-300 px-5 py-4 outline-none transition focus:border-violet-500 focus:ring-4 focus:ring-violet-100"
              />
            </div>

            {/* Options */}

            <div className="mt-8 grid gap-5 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Style
                </label>

                <select
                  value={style}
                  onChange={(e) => setStyle(e.target.value)}
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-violet-500"
                >
                  <option>Realistic</option>
                  <option>Anime</option>
                  <option>Fantasy</option>
                  <option>Digital Art</option>
                  <option>Watercolor</option>
                </select>
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Aspect Ratio
                </label>

                <select
                  value={ratio}
                  onChange={(e) => setRatio(e.target.value)}
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-violet-500"
                >
                  <option>1:1</option>
                  <option>16:9</option>
                  <option>9:16</option>
                  <option>4:3</option>
                </select>
              </div>
            </div>

            {/* Suggestions */}

            <div className="mt-8">
              <h3 className="mb-4 text-sm font-semibold text-slate-700">
                Prompt Suggestions
              </h3>

              <div className="flex flex-wrap gap-3">
                {suggestions.map((item) => (
                  <button
                    key={item.title}
                    onClick={() => setPrompt(item.prompt)}
                    className="rounded-full bg-violet-100 px-4 py-2 text-sm font-medium text-violet-700 transition hover:bg-violet-200 cursor-pointer"
                  >
                    {item.title}
                  </button>
                ))}
              </div>
            </div>

            {/* Button */}

            <button
              onClick={handleGenerate}
              disabled={loading}
              className="mt-8 w-full rounded-2xl bg-violet-600 py-4 text-lg font-semibold text-white transition hover:bg-violet-700 disabled:cursor-not-allowed disabled:bg-violet-400 cursor-pointer"
            >
              {loading ? "Generating..." : "✨ Generate Image"}
            </button>
          </div>

          {/* RIGHT CARD */}

          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-lg">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold text-slate-900">
                Generated Image
              </h2>

              {image && (
                <button
                  onClick={handleDownload}
                  className="flex items-center gap-2 rounded-xl bg-violet-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-violet-700 cursor-pointer"
                >
                  <Download size={16} />
                  Download
                </button>
              )}
            </div>

            <div className="mt-6 flex min-h-[520px] items-center justify-center overflow-hidden rounded-2xl border-2 border-dashed border-slate-300 bg-slate-50">
              {loading ? (
                <div className="text-center">
                  <LoaderCircle
                    size={50}
                    className="mx-auto animate-spin text-violet-600"
                  />

                  <h3 className="mt-6 text-xl font-semibold text-slate-900">
                    Creating Your Artwork...
                  </h3>

                  <p className="mt-2 text-slate-500">
                    This usually takes a few seconds.
                  </p>
                </div>
              ) : image ? (
                <img
                  src={image}
                  alt="Generated"
                  className="h-full w-full rounded-2xl object-cover"
                />
              ) : (
                <div className="text-center">
                  <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-violet-100">
                    <Sparkles size={40} className="text-violet-600" />
                  </div>

                  <h3 className="mt-6 text-2xl font-bold text-slate-900">
                    Your masterpiece awaits
                  </h3>

                  <p className="mx-auto mt-3 max-w-sm text-slate-500">
                    Enter a prompt and click
                    <span className="font-semibold text-violet-600">
                      {" "}
                      Generate Image
                    </span>{" "}
                    to create amazing AI artwork.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Generate;
