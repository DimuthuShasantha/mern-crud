import { LockClosedIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  signInFailure,
  signInStart,
  signInSuccess,
} from "../redux/user/userSlice";

const Signin = () => {
  const [formData, setFormData] = useState({});
  const { loading } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (ev) => {
    setFormData({ ...formData, [ev.target.id]: ev.target.value });
  };

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    dispatch(signInStart());
    try {
      const res = await fetch("/api/auth/signin", {
        method: "POST",
        headers: {
          "Content-type": "Application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        dispatch(signInFailure(data.messsage));
        toast.error(data.message);
        return;
      }
      dispatch(signInSuccess(data));
      toast.success(data.message);
      navigate("/");
    } catch (error) {
      dispatch(signInFailure());
      toast.error(error.message);
    }
  };

  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="font-bold text-slate-800 text-3xl text-center my-7">
        Sign In
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
        <button className="p-3 bg-slate-800 text-white font-semibold uppercase hover:opacity-95 cursor: pointer items-center justify-center flex disabled:opacity-80">
          <LockClosedIcon className="w-5 h-5 mr-2" />
          {loading ? "loading" : "sign in"}
        </button>
      </form>
      <div className="mt-5 text-center">
        <span>
          You dont have an Account?{" "}
          <Link to="/signup" className="text-blue-700">
            Sign Up
          </Link>
        </span>
      </div>
    </div>
  );
};

export default Signin;
