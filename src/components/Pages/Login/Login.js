import React, { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Contexts/AuthProviders";
import { toast } from "react-toastify";

const Login = () => {
  const { login, signInWithGoogle } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    login(email, password)
      .then((result) => {
        const user = result.user;
        const currentUser = {
          email: user.email,
        };
        console.log(currentUser);
        form.reset();

        fetch("https://assignment-11-server-projects.vercel.app/jwt", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(currentUser),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            localStorage.setItem("travel-Token", data.token);
            form.reset();

            navigate("/");
          });
      })
      .catch((err) => console.error(err));
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast.success("Login is Successfully,Thank you.");
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="hero w-full h-full py-4 shadow-lg ">
      <div className="hero-content grid  md:grid-cols-2 border shadow-md ">
        <div className="text-center lg:text-left">
          <img
            className="xl:w-[400px] w-full"
            src="https://i.ibb.co/C2rVLwC/142230-login.gif"
            alt=""
          />
        </div>
        <div className="card flex-shrink-0 w-full py-2 border">
          <h1 className="lg:text-5xl md:text-3xl sm:text-xl text-lg text-center lg:font-bold font-semibold font-serif animate-pulse">
            Login
          </h1>
          <form onSubmit={handleLogin} className=" lg:px-6 px-4 font-serif">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                name="email"
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>

            <div className="form-control mt-4">
              <input
                className=" py-2 rounded-lg font-serif text-xl font-semibold bg-green-600 hover:bg-green-400 hover:text-black transition-all duration-500 "
                type="submit"
                value="Login"
              />{" "}
              <br />
              <span className="text-center lg:text-2xl md:text-xl text-lg font-semibold pb-1">
                <h2>Or</h2>
              </span>
              <button
                onClick={handleGoogleSignIn}
                className="flex items-center justify-center gap-x-2 py-2 rounded-lg  lg:text-xl text-md bg-green-600 hover:bg-green-400 hover:text-black transition-all duration-500"
              >
                {" "}
                <span className="mr-2  ">
                  {" "}
                  <FaGoogle></FaGoogle>{" "}
                </span>{" "}
                Sign Up with Google
              </button>
            </div>
          </form>
          <p className="text-center font-serif md:mt-2 mt-1">
            New to Sign in{" "}
            <Link className="text-orange-600 font-bold" to="/register">
              {" "}
              Sign in
            </Link>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
