import React, { useContext } from "react";
import { Link } from "react-router-dom";
import img from "../../../assets/images/register.jpg";
import { AuthContext } from "../../../Contexts/AuthProviders";
import { toast } from "react-toastify";

const Register = () => {
  const { createUser } = useContext(AuthContext);

  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const image = form.imgUrl.value;

    createUser(email, password, name, image)
      .then((result) => {
        const user = result.user;
        console.log(user);
        form.reset();
        toast.success("Registration successfully, Thank you");
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className=" w-full mx-auto xl:my-10 lg:my-8 my-6 px-2">
      <div className=" grid gap-x-4 md:grid-cols-2 flex-col lg:flex-row xl:w-[1100px] md:w-10/12 w-11/12  h-full mx-auto  lg:py-4 py-2 lg:px-4 px-2 border border-green-600 shadow-lg shadow-green-600">
        <div className="text-center  border rounded-lg w-full">
          <img
            className="w-full"
            src="https://i.ibb.co/phh3R5C/119048-login-verification.gif"
            alt=""
          />
        </div>
        <div className=" w-full font-serif  border lg:py-4 py-4">
          <h1 className="xl:text-3xl lg:text-xl text-lg text-center font-serif font-semibold">
            Please Register
          </h1>
          <div className="flex items-center justify-center pt-2">
            <h1 className="lg:w-[60px] md:w-[45px] sm:w-[30px] w-[25px] h-[1px] bg-green-400"></h1>
            <h1 className="lg:w-[60px] md:w-[45px] sm:w-[30px] w-[25px] h-[1px] bg-orange-300"></h1>
            <h1 className="lg:w-[60px] md:w-[45px] sm:w-[30px] w-[25px] h-[1px] bg-green-400"></h1>
          </div>
          <form
            onSubmit={handleRegister}
            className=" lg:px-6 md:px-4 px-2 w-full"
          >
            <div className="flex sm:flex-row flex-col items-center gap-x-2 w-full">
              <div className="w-full">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="input input-bordered w-full"
                />
              </div>
              <div className=" w-full">
                <label className="label">
                  <span className="label-text">Last Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your last name"
                  className="input input-bordered w-full"
                />
              </div>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Image URL</span>
              </label>
              <input
                type="url"
                name="imgUrl"
                placeholder="Img URL"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
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
                required
              />
            </div>
            <div className="form-control mt-2">
              <input
                className="py-2 rounded-lg font-serif text-xl font-semibold bg-green-600 hover:bg-green-400 hover:text-black transition-all duration-500 "
                type="submit"
                value="Sign Up"
              />
            </div>
          </form>
          <p className="text-center font-serif mt-2">
            Already have an account?{" "}
            <Link to="/login" className="text-orange-600 font-bold">
              Login
            </Link>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
