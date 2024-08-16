import React, { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";

const Login = () => {
  const { signIn, signInWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    signIn(email, password).then((result) => {
      const user = result.user;
      console.log(user);
      navigate("/home");
    });
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle().then((result) => {
      navigate("/home");
    });
  };
  return (
    <div className="hero bg-base-200">
      <div className="hero-content flex-col">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleLogin} className="card-body">
            {/* email */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            {/* password */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <input
                className="btn btn-primary bg-slate-500"
                type="submit"
                value="Login"
              />
            </div>
          </form>
          <p className="text-center font-bold text-xl text-black">
            <small>
              New Here?{" "}
              <Link to="/register" className="text-black">
                Create an Account
              </Link>
            </small>
          </p>
          <p className="text-center font-medium text-[#444444] text-xl mt-3">
            or sign in with
          </p>
          <button
            onClick={handleGoogleSignIn}
            className="btn font-semibold bg-slate-500 mt-3 text-xl"
          >
            <FaGoogle></FaGoogle>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
