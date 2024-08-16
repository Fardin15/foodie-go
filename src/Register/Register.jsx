import React, { useContext } from "react";
// import { useForm } from "react-hook-form";
import { AuthContext } from "../Providers/AuthProvider";
import { updateProfile } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Register = () => {
  // const {
  //   register,
  //   handleSubmit,
  //   watch,
  //   reset,
  //   formState: { errors },
  // } = useForm();
  const { createUser, auth } = useContext(AuthContext);
  const navigate = useNavigate();

  const handelRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    // user register
    createUser(email, password)
      .then(() => {
        alert("successful");
        updateProfile(auth.currentUser, { displayName: name });
        navigate("/home");
      })
      .catch(() => {
        alert("error");
      });

    e.target.reset();
  };

  // const handleRegister = (e) => {
  //   e.preventDefault();
  //   const form = e.target;
  //   const name = form.name.value;
  //   const email = form.email.value;
  //   const password = form.password.value;
  //   console.log(email, password);
  // };
  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Register now!</h1>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handelRegister} className="card-body">
              {/* name */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Your Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  // {...register("name")}
                  placeholder="Your Name"
                  className="input input-bordered"
                  required
                />
              </div>
              {/* email */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  // {...register("email")}
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
                  // {...register("password")}
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn btn-primary"
                  type="submit"
                  value="Register"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
