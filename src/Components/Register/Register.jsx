import React, { use, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router";
import { toast } from "react-toastify";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { GoogleAuthProvider } from "firebase/auth";

const passwordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^a-zA-Z\d\s]).{6,}$/;

const Register = () => {
  const [passwordError, setPasswordError] = useState("");

  const { user, signInWithGoogle, setUser, createWithEmailPass } =
    use(AuthContext);

  const googleProvider = new GoogleAuthProvider();

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "password") {
      if (!passwordRegex.test(value)) {
        setPasswordError(
          "Password must be 6+ characters, and include both uppercase and lowercase letters."
        );
      } else {
        setPasswordError("");
      }
    }
  };

  const handleRegister = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photoURL = form.photoURL.value;

    console.log(name, email, password, photoURL);

    createWithEmailPass(email, password, photoURL)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });

    toast.success("Registration successful! Proceeding...");
  };

  const handleGoogleLogin = () => {
    signInWithGoogle(googleProvider)
      .then((result) => {
        toast.success("Signing Successful with google !");
      })
      .catch((error) => {
        console.log(error);
        toast.error(error);
      });
  };

  return (
    <div className="min-h-[70vh] flex items-center justify-center p-4 bg-gray-100">
      <div className="card w-full max-w-lg shadow-2xl bg-white">
        <form className="card-body" onSubmit={handleRegister}>
          <h2 className="text-center text-3xl font-extrabold text-secondary mb-6">
            Create an Account
          </h2>

          {/* 1. Name Input */}
          <div className="form-control">
            <label className="label">
              <span className="label-text text-secondary">Name</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="name"
                placeholder="Your Full Name"
                className="input input-bordered w-full"
                required
              />
            </label>
          </div>

          {/* 2. Email Input */}
          <div className="form-control">
            <label className="label">
              <span className="label-text text-secondary">Email</span>
            </label>
            <label className="input-group">
              <input
                type="email"
                name="email"
                onChange={handleChange}
                placeholder="you@example.com"
                className="input input-bordered w-full"
                required
              />
            </label>
          </div>

          {/* 3. photoURL Input */}
          <div className="form-control">
            <label className="label">
              <span className="label-text text-secondary">Photo URL</span>
            </label>
            <label className="input-group">
              <input
                type="url"
                name="photoURL"
                onChange={handleChange}
                placeholder="https://example.com/profile.jpg"
                className="input input-bordered w-full"
                required
              />
            </label>
          </div>

          {/* 4. Password Input */}
          <div className="form-control">
            <label className="label">
              <span className="label-text text-secondary">Password</span>
            </label>
            <label className="input-group">
              <input
                type="password"
                name="password"
                onChange={handleChange}
                placeholder="********"
                className="input input-bordered w-full"
                required
              />
            </label>

            {/* Link to Login Page */}
            <label className="label justify-center pt-4">
              <p className="label-text-alt text-gray-600">
                Already have an account?
                <Link
                  to={"/auth/login"} // Change to your actual login route
                  className="link link-hover link-secondary ml-1 font-semibold"
                >
                  Login here
                </Link>
              </p>
            </label>
          </div>

          {/* Register Button */}
          <div className="form-control mt-4">
            <button
              type="submit"
              className="btn btn-secondary text-base-100 w-full"
            >
              Register Account
            </button>
          </div>

          <div className="divider text-sm text-gray-500">OR</div>

          {/* Google Login Button */}
          <div className="form-control">
            <button
              type="button"
              onClick={handleGoogleLogin}
              className="btn bg-white border w-full border-gray-300 text-secondary hover:bg-gray-50 flex items-center justify-center space-x-2 transition duration-150"
            >
              <FcGoogle className="text-xl" />
              <span>Sign Up with Google</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
