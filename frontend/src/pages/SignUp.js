import React, { useState } from "react";
import signupIcons from "../assest/signin.gif";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import imageTobase64 from "../helper/imageToBase64";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState("");

  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    profilePic: "",
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleUploadPic = async (e) => {
    const file = e.target.files[0];
    if (file) {
      const imagePic = await imageTobase64(file);
      setData((prev) => ({
        ...prev,
        profilePic: imagePic,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (data.password !== data.confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    setError("");
    console.log("Sign-up data", data);
    // Add logic to handle sign-up
  };

  return (
    <section id="sign-up">
      <div className="mx-auto container p-4">
        <div className="bg-white p-2 py-5 w-full mx-auto max-w-sm">
          <div className="w-20 h-20 mx-auto mb-4 relative overflow-hidden rounded-full">
            <img src={data.profilePic || signupIcons} alt="sign-up icon" />
            <form>
              <label>
                <div className="cursor-pointer bg-opacity-80 bg-slate-200 text-xs pb-4 pt-2 absolute bottom-0 w-full text-center">
                  Upload Photo
                </div>
                <input
                  type="file"
                  className="hidden"
                  onChange={handleUploadPic}
                />
              </label>
            </form>
          </div>
          <form className="pt-6 flex flex-col gap-3" onSubmit={handleSubmit}>
            <div className="grid mb-4">
              <label>Username:</label>
              <div className="bg-slate-100 p-2">
                <input
                  type="text"
                  placeholder="Enter username"
                  name="username"
                  value={data.username}
                  onChange={handleOnChange}
                  required
                  className="w-full h-full outline-none bg-transparent"
                />
              </div>
            </div>

            <div className="grid mb-4">
              <label>Email:</label>
              <div className="bg-slate-100 p-2">
                <input
                  type="email"
                  placeholder="Enter email"
                  name="email"
                  value={data.email}
                  onChange={handleOnChange}
                  required
                  className="w-full h-full outline-none bg-transparent"
                />
              </div>
            </div>

            <div className="grid mb-4">
              <label>Password:</label>
              <div className="bg-slate-100 p-2 flex">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter password"
                  name="password"
                  value={data.password}
                  onChange={handleOnChange}
                  required
                  className="w-full h-full outline-none bg-transparent"
                />
                <div
                  className="cursor-pointer text-xl"
                  onClick={() => setShowPassword((prev) => !prev)}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </div>
              </div>
            </div>

            <div className="grid mb-4">
              <label>Confirm Password:</label>
              <div className="bg-slate-100 p-2 flex">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Confirm password"
                  name="confirmPassword"
                  value={data.confirmPassword}
                  onChange={handleOnChange}
                  required
                  className="w-full h-full outline-none bg-transparent"
                />
                <div
                  className="cursor-pointer text-xl"
                  onClick={() => setShowConfirmPassword((prev) => !prev)}
                >
                  {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                </div>
              </div>
            </div>

            {error && <p className="text-red-600 text-sm">{error}</p>}

            <button
              type="submit"
              className="bg-red-700 hover:bg-red-900 text-white px-6 py-2 w-full max-w-[150px] rounded-full hover:scale-110 transition-all mx-auto block mt-6"
            >
              Sign Up
            </button>
          </form>

          <p className="my-5 text-center">
            Already have an account?
            <Link
              to="/login"
              className="text-red-700 hover:underline hover:text-red-900 ml-1"
            >
              Log In
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
