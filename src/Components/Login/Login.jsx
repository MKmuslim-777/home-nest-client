import { GoogleAuthProvider } from "firebase/auth";
import { use, useRef } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router";
import { toast } from "react-toastify";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { useForm } from "react-hook-form";
import SocialLogin from "../../Shared/SocialLogin/SocialLogin";

const Login = () => {
  const { user, signInWithGoogle, setUser, signIn, forgetPassword } =
    use(AuthContext);
  const emailRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleForget = (event) => {
    const email = emailRef.current.value;
    console.log(email);
    forgetPassword(email)
      .then(() => {
        toast.success("Check Your Email!");
      })
      .catch((error) => {
        console.log(error);
      });

    // console.log(email);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then((result) => {
        console.log(result.user);
        setUser(result.user);
        toast.success("You are Successfully Sign In");
        navigate(`${location.state ? location.state : "/"}`);
      })
      .catch((error) => {
        toast.error(error.massage);
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
              <Link
                onClick={handleForget}
                className="label-text-alt link link-hover"
              >
                Forgot password?
              </Link>
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
            <SocialLogin></SocialLogin>
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
