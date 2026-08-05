import React from "react";

import image1 from "../assets/showcase/image1.jpg";
import image2 from "../assets/showcase/image2.jpg";
import image3 from "../assets/showcase/image3.jpg";
import image4 from "../assets/showcase/image4.jpg";

const images = [
  { img: image1, title: "A futuristic cyberpunk city at night with neon lights" },
  { img: image2, title: "A magical castle floating above the clouds" },
  { img: image3, title: "A friendly robot reading a book in a cozy library" },
  { img: image4, title: "An astronaut standing on a colorful alien planet" },
];

const Showcase = () => {
  return (
    <section className="py-24 px-6">
      <div className="mx-auto max-w-7xl">

        <div className="text-center">
          <h2 className="text-4xl font-bold text-slate-900">
            Explore AI Creations
          </h2>

          <p className="mt-4 text-lg text-slate-600">
            Discover the amazing artwork PixelMind can generate from simple text prompts.
          </p>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {images.map((item, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-2xl bg-white shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <img
                src={item.img}
                alt={item.title}
                className="h-70 w-full object-cover"
              />

              <div className="p-5">
                <h3 className="text-slate-700 leading-8 text-center">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Showcase;