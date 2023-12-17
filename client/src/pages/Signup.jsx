import { LockClosedIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import toast, { Toaster } from 'react-hot-toast';
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {

  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  
  const handleChange = (ev) => {
    setFormData({ ...formData, [ev.target.id]: ev.target.value });
  }

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-type": "Application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        setLoading(false);
        toast.error(data.message);
        return;
      }
      navigate("/signin");
      setLoading(false);
      toast.success(data.message);
    } catch (error) {
      setLoading(false);
      toast.error(data.message);
    }
  };

  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="font-bold text-slate-800 text-3xl text-center my-7">
        Sign Up
      </h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          id="username"
          name="username"
          type="text"
          placeholder="Username"
          className="p-3 bg-slate-100"
          required
          minLength={3}
          onChange={handleChange}
        />
        <input
          id="email"
          name="email"
          type="email"
          placeholder="Email"
          className="p-3 bg-slate-100"
          // required
          onChange={handleChange}
        />
        <input
          id="password"
          name="password"
          type="password"
          placeholder="Password"
          className="p-3 bg-slate-100"
          required
          minLength={3}
          onChange={handleChange}
          disabled={loading}
        />
        <button className="p-3 bg-slate-800 text-white font-semibold uppercase hover:opacity-95 cursor: pointer items-center justify-center flex disabled:opacity-70">
        <LockClosedIcon className="w-5 h-5 mr-2" />
          { loading ? "loading" : "sign up" }
        </button>
      </form>
      <div className="mt-5 text-center">
        <span>Have an Account? <Link to="/signin" className="text-blue-700">Sign In</Link></span>
      </div>
    </div>
  );
};

export default Signup;
