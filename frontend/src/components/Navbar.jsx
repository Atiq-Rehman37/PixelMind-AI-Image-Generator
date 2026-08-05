import React from "react";
import { Sparkles } from "lucide-react";

import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { User, LogOut, ChevronDown } from "lucide-react";

const Navbar = () => {
 const { user, logout } = useContext(AuthContext);

const navigate = useNavigate();

const [open, setOpen] = useState(false);

const handleLogout = () => {

    logout();

    navigate("/");

};
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 sm:h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-10">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 sm:gap-3 cursor-pointer">
          <div className="flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-lg sm:rounded-xl bg-violet-600 text-white">
            <Sparkles size={16} className="sm:w-5 sm:h-5" />
          </div>

          <h1 className="text-lg sm:text-2xl font-bold text-slate-900">
            Pixel<span className="text-violet-600">Mind</span>
          </h1>
        </Link>


        {/* Right Side */}
        <div className="flex items-center gap-2 sm:gap-4">

          <Link to="/pricing">
            <button className="rounded-md sm:rounded-lg border border-slate-300 px-3 py-1.5 sm:px-5 sm:py-2 text-sm sm:text-base font-medium text-slate-700 transition hover:border-violet-600 hover:text-violet-600 cursor-pointer">
              Pricing
            </button>
          </Link>


          {
    user ? (

        <div className="relative">

            <button
                onClick={() => setOpen(!open)}
                className="flex items-center gap-2 rounded-xl border border-slate-200 px-4 py-2 hover:bg-slate-50"
            >

                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-violet-100">

                    <User size={18} className="text-violet-600" />

                </div>

                <span className="font-medium">
                    {user.name}
                </span>

                <ChevronDown size={18} />

            </button>

            {
                open && (

                    <div className="absolute right-0 mt-3 w-48 rounded-xl border border-slate-200 bg-white shadow-lg">

                        <button
                            onClick={handleLogout}
                            className="flex w-full items-center gap-3 px-4 py-3 text-left hover:bg-slate-50"
                        >

                            <LogOut size={18} />

                            Logout

                        </button>

                    </div>

                )
            }

        </div>

    ) : (

        <Link
            to="/login"
            className="rounded-xl bg-violet-600 px-5 py-2.5 font-semibold text-white transition hover:bg-violet-700"
        >
            Sign In
        </Link>

    )
}

        </div>

      </div>
    </nav>
  );
};

export default Navbar;