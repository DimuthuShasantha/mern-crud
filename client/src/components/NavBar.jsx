import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { ArrowRightOnRectangleIcon } from "@heroicons/react/24/outline";
import { signOutSuccess } from "../redux/user/userSlice";
import toast, { Toaster } from "react-hot-toast";

const NavBar = () => {
  const { currentUser } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = async () => {
    try {
      const res = await fetch("/api/auth/signout");
      const data = res.json();
      if (data.success === false) {
        return;
      }
      toast.success("Successfully signed out!");
      dispatch(signOutSuccess());
      navigate("/signin");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="shadow-sm bg-slate-200">
      <div className="flex items-start justify-between max-w-6xl p-3 mx-auto">
        <Link to="/" className="text-lg font-bold text-slate-800">
          mernCrud
        </Link>
        <div className="flex gap-3">
          <Link
            to="/"
            className="cursor-pointer hover:opacity-95 text-slate-800"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="cursor-pointer hover:opacity-95 text-slate-800"
          >
            About
          </Link>
          {currentUser ? (
            <div className="flex items-center justify-between gap-2">
              <img
                src={currentUser.avatar}
                className="w-8 h-8 border-2 rounded-full hover:opacity-95"
                alt="Avatar"
              />
              <ArrowRightOnRectangleIcon
                className="w-5 h-5 cursor-pointer text-slate-800 "
                onClick={handleLogout}
              />
            </div>
          ) : (
            <Link
              to="/signin"
              className="cursor-pointer hover:opacity-95 text-slate-800"
            >
              Sign In
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
