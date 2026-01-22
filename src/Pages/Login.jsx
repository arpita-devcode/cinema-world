import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Link, useNavigate, useLocation } from "react-router";

const Login = () => {
  const { singinInUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  // redirect back to previous page or home
  const from = location.state?.from?.pathname || "/";

  const handlelogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    singinInUser(email, password)
      .then((result) => {
        console.log("Logged in:", result.user);
        form.reset();
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.error(error.message);
        alert("Invalid email or password");
      });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-base-100">
      <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
        <legend className="fieldset-legend text-4xl">Login</legend>

        <form onSubmit={handlelogin}>
          <label className="label">Email</label>
          <input
            type="email"
            name="email"
            className="input input-bordered w-full"
            placeholder="Email"
            required
          />

          <label className="label mt-2">Password</label>
          <input
            type="password"
            name="password"
            className="input input-bordered w-full"
            placeholder="Password"
            required
          />

          <button className="btn btn-neutral mt-4 w-full">
            Login
          </button>

          <p className="mt-3 text-sm text-center">
            Don’t have an account?{" "}
            <Link to="/register" className="text-blue-600 font-semibold">
              Register
            </Link>
          </p>
        </form>
      </fieldset>
    </div>
  );
};

export default Login;
