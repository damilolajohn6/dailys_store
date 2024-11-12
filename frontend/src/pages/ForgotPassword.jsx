import React, { useState } from "react";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const handleOnChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Forgot Password Email:", email);
    // Add logic here to handle password reset request
  };

  return (
    <section id="forgot-password">
      <div className="mx-auto container p-4">
        <div className="bg-white p-2 py-5 w-full mx-auto max-w-sm shadow-md rounded-md">
          <h2 className="text-center text-2xl font-bold mb-4 text-gray-800">
            Forgot Password
          </h2>
          <p className="text-center text-gray-500 mb-6">
            Enter your email address, and we'll send you instructions to reset
            your password.
          </p>
          <form onSubmit={handleSubmit}>
            <div className="grid mb-4">
              <label>Email:</label>
              <div className="bg-slate-100 p-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={handleOnChange}
                  className="w-full h-full outline-none bg-transparent"
                />
              </div>
            </div>

            <button
              type="submit"
              className="bg-red-700 hover:bg-red-900 text-white px-6 py-2 w-full max-w-[150px] rounded-full hover:scale-110 transition-all mx-auto block mt-6"
            >
              Reset Link
            </button>
          </form>

          <p className="my-5 text-center">
            <Link to="/login" className="text-red-700 hover:underline">
              Back to Login
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ForgotPassword;
