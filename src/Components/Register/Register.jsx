import React, { use, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router";
import { toast } from "react-toastify";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { GoogleAuthProvider, updateProfile } from "firebase/auth";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const useRegEx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^a-zA-Z\d\s]).{6,}$/;

const Register = () => {
  const navigate = useNavigate();
  const [checkPassword, setCheckPassword] = useState(false);
  const [eye, setEye] = useState(false);

  const { user, signInWithGoogle, setUser, createWithEmailPass } =
    use(AuthContext);

  const googleProvider = new GoogleAuthProvider();

  const handleChange = (e) => {
    const { name, value } = e.target;

    const password = event.target.value;
    if (!useRegEx.test(password)) {
      setCheckPassword(true);
    } else {
      setCheckPassword(false);
    }
  };

  const handleRegister = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photoUrl = form.photoURL.value;

    console.log(name, email, password);

    createWithEmailPass(email, password)
      .then((result) => {
        console.log(result);
        toast.success("Registration successful! Proceeding...");
      })
      .catch((error) => {
        console.log(error);
      });

    updateProfile(user, {
      displayName: name,
      email: email,
      password: password,
      photoURL: photoUrl,
    });
    const userInfo = {
      displayName: name,
      email: email,
      password: password,
      photoURL: photoUrl,
    };
    setUser(userInfo);
  };

  const handleGoogleLogin = () => {
    signInWithGoogle(googleProvider)
      .then((result) => {
        const newUser = {
          name: result.user.displayName,
          email: result.user.email,
          image: result.user.photoURL,
        };

        fetch("https://home-nest-server-ivory.vercel.app/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(newUser),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log("data after user save", data);
          });

        toast.success("Signing Successful with google !");
        navigate(`${location.state ? location.state : "/"}`);
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
            <label className="input-group relative">
              <input
                type={eye ? "text" : "password"}
                name="password"
                onChange={handleChange}
                placeholder="********"
                className="input input-bordered w-full z-1"
                required
              />

              <span
                onClick={() => setEye(!eye)}
                className="absolute top-1 left-110 z-10"
              >
                {eye ? (
                  <FaEyeSlash className="text-sm" />
                ) : (
                  <FaEye className="text-sm" />
                )}
              </span>
            </label>
            {checkPassword && (
              <p className="text-red-500 mt-2.5">
                Weak password! Try mixing letters, numbers & symbols.
              </p>
            )}
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
