import { Routes, Route } from "react-router-dom";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import NavBar from "./components/NavBar";
import About from "./pages/About";
import toast, { Toaster } from "react-hot-toast";
import PrivateRoutes from "./components/PrivateRoutes";

const App = () => {
  return (
    <>
      <NavBar />
      <Toaster />
      <Routes>
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route element={<PrivateRoutes />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/about" element={<About />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
