import { Sparkles } from "lucide-react";

const PageLoader = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-white">
      <div className="flex h-20 w-20 items-center justify-center rounded-full bg-violet-100 animate-pulse">
        <Sparkles size={40} className="text-violet-600 animate-spin" />
      </div>

      <h2 className="mt-6 text-xl font-semibold text-slate-800">Loading...</h2>

      <p className="mt-2 text-slate-500">Preparing your experience</p>
    </div>
  );
};

export default PageLoader;
