import { Link } from "react-router-dom";
import { Home, Sparkles } from "lucide-react";

const NotFound = () => {
  return (
    <section className="flex min-h-[calc(100vh-160px)] items-center justify-center bg-gradient-to-b from-violet-50 via-white to-white px-6">
      <div className="max-w-2xl text-center my-12">
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-violet-100">
          <Sparkles className="text-violet-600" size={36} />
        </div>

        <h1 className="mt-8 text-8xl font-extrabold text-violet-600">404</h1>

        <h2 className="mt-4 text-4xl font-bold text-slate-900">
          Oops! Page Not Found
        </h2>

        <p className="mx-auto mt-5 max-w-xl text-lg leading-8 text-slate-600">
          The page you're looking for doesn't exist or may have been moved.
          Let's get you back to creating amazing AI-generated artwork.
        </p>

        <div className="mt-10">
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-xl bg-violet-600 px-8 py-4 font-semibold text-white shadow-lg transition hover:bg-violet-700"
          >
            <Home size={20} />
            Back to Home
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
