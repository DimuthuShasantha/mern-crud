import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="shadow-sm bg-slate-200">
      <div className="flex items-start justify-between max-w-6xl p-3 mx-auto">
        <Link to="/" className="text-lg font-bold text-slate-800">mernCrud</Link>
        <div className="flex gap-3">
          <Link to="/" className="cursor-pointer hover:opacity-95 text-slate-800">Home</Link>
          <Link to="/about" className="cursor-pointer hover:opacity-95 text-slate-800">About</Link>
          <Link to="/signin" className="cursor-pointer hover:opacity-95 text-slate-800">Sign In</Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
