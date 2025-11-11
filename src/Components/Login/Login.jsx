import { GoogleAuthProvider } from "firebase/auth";
import { use } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router";
import { toast } from "react-toastify";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Login = () => {
  const { user, signInWithGoogle, setUser } = use(AuthContext);

  const googleProvider = new GoogleAuthProvider();

  const handleLogin = (e) => {
    e.preventDefault();

    toast.success("Attempting to log in...");
  };

  const handleGoogleLogin = () => {
    signInWithGoogle(googleProvider)
      .then((result) => {
        toast.success("Signing Successful with google!");
      })
      .catch((error) => {
        console.log(error);
        toast.error(error);
      });
  };

  return (
    <div className="min-h-[70vh] flex items-center justify-center p-4 bg-gray-100">
      <div className="card w-full max-w-sm shadow-2xl bg-white">
        <form className="card-body" onSubmit={handleLogin}>
          <h2 className="text-center text-2xl font-bold text-secondary mb-4">
            Sign In
          </h2>

          <div className="form-control">
            <label className="label">
              <span className="label-text text-secondary">Email</span>
            </label>
            <label className="input-group">
              {/* <span className="bg-gray-200 border-r-0  text-gray-600">
                <HiOutlineMail className="text-lg" />
              </span> */}
              <input
                type="email"
                name="email"
                placeholder="you@example.com"
                className="input input-bordered w-full"
                required
              />
            </label>
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text text-secondary">Password</span>
            </label>
            <label className="input-group">
              {/* <span className="bg-gray-200 border-r-0 text-gray-600">
                <HiLockClosed className="text-lg" />
              </span> */}
              <input
                type="password"
                name="password"
                placeholder="********"
                className="input input-bordered w-full"
                required
              />
            </label>
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>

          <div className="form-control mt-6">
            <button
              type="submit"
              className="btn btn-secondary text-base-100 w-full"
            >
              Login
            </button>
          </div>

          <div className="divider text-sm text-gray-500">OR</div>

          <div className="form-control">
            <button
              type="button"
              onClick={handleGoogleLogin}
              className="btn bg-white border w-full border-gray-300 text-secondary hover:bg-gray-50 flex items-center justify-center space-x-2 transition duration-150"
            >
              <FcGoogle className="text-xl" />
              <span>Continue with Google</span>
            </button>
            <label className="label justify-center pt-4">
              <p className="label-text-alt text-gray-600">
                Have not any account?
                <Link
                  to={"/auth/register"} // Change to your actual login route
                  className="link link-hover link-secondary ml-1 font-semibold"
                >
                  Register here
                </Link>
              </p>
            </label>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
