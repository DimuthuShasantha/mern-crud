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
      toast.success("Welcome... Successfully signed in!");
      navigate("/");
    } catch (error) {
      dispatch(signInFailure());
      toast.error(error.message);
    }
  };

  return (
    <div className="max-w-lg p-3 mx-auto">
      <h1 className="text-3xl font-bold text-center text-slate-800 my-7">
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
        <button className="flex items-center justify-center p-3 font-semibold text-white uppercase bg-slate-800 hover:opacity-95 cursor: pointer disabled:opacity-80">
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
