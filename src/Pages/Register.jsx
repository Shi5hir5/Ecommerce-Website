import { useForm, Controller } from "react-hook-form";
import { useState } from "react";
import React from "react";
import { useNavigate } from "react-router-dom";

import Render from "../components/Render";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

export default function Register() {
  const navigate = useNavigate();

  const handleSignIN = () => {
    navigate("../login");
  };

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const validatePassword = (value) => {
    if (value.length < 8) {
      return "Password must be at least 8 characters!";
    } else if (value.length > 20) {
      return "Password must be less than 20 characters!";
    } else if (
      !/[a-z]/.test(value) ||
      !/[A-Z]/.test(value) ||
      !/[0-9]/.test(value) ||
      !/[^a-zA0-9]/.test(value)
    ) {
      return "*Password must contain at least one uppercase letter, one lowercase letter, and one number!";
    } else {
      return true;
    }
  };

  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>

      <div className="bg-gradient-to-tr from-slate-200 to-gray-400 flex justify-center items-center w-full h-[688px]  ">
        <form onSubmit={handleSubmit((data) => console.log(data))}>
          <div className=" w-[300px]  sm:w-[400px] sm:h-full bg-white  rounded-lg px-5 py-9 shadow-2xl bg-opacity-20 ">
            <div className="text-center text-[22px]  font-medium mb-6">
              Enter details to register.
            </div>

            <Controller
              name="Username"
              control={control}
              defaultValue=""
              rules={{
                required: {
                  value: true,
                  message: "*This field is required!",
                },
                minLength: {
                  value: 3,
                  message: "*Minium length is 3!",
                },
                maxLength: {
                  value: 30,
                  message: "*Maximum length is 30!",
                },
              }}
              render={({ field }) => (
                <div>
                  <Render
                    hName={"Username:"}
                    inputName={"Username"}
                    value={field.value}
                    onChange={field.onChange}
                    placeholder={"Enter your username."}
                    className={`${
                      errors.Email ? "border-red-600" : "border-black"
                    }`}
                    eName={errors.Username ? "Username" : ""}
                    message={errors.Username ? errors.Username.message : ""}
                  />
                </div>
              )}
            />

            <Controller
              name="Email"
              control={control}
              defaultValue=""
              rules={{
                required: {
                  value: true,
                  message: "*This field is required!",
                },
                minLength: {
                  value: 4,
                  message: "*Minium length is 4!",
                },
                maxLength: {
                  value: 30,
                  message: "*Maximum length is 30!",
                },
              }}
              render={({ field }) => (
                <div>
                  <Render
                    hName={"Email:"}
                    inputName={"Email"}
                    value={field.value}
                    onChange={field.onChange}
                    placeholder={"Enter your email."}
                    className={`${
                      errors.Email ? "border-red-600" : "border-black"
                    }`}
                    eName={errors.Email ? "Email" : ""}
                    message={errors.Email ? errors.Email.message : ""}
                  />
                </div>
              )}
            />
            <Controller
              name="Password"
              control={control}
              defaultValue=""
              rules={{
                required: {
                  value: true,
                  message: "*This field is required!",
                },
                minLength: {
                  value: 2,
                  message: "*Minium length is 2!",
                },
                maxLength: {
                  value: 10,
                  message: "*Maximum length is 10!",
                },
                validate: validatePassword,
              }}
              render={({ field }) => (
                <div>
                  <h5 className="m-2 ">Password:</h5>{" "}
                  <div className="flex items-center">
                    <input
                      {...field}
                      type={showPassword ? "text" : "password"}
                      className={`bg-slate-200  w-full p-4 rounded-md focus:outline-none border ${
                        errors.Password ? "border-red-600" : "border-black"
                      }`}
                      placeholder="Enter your password"
                    />
                    <div className="absolute  ml-[220px] sm:ml-[325px]">
                      {showPassword ? (
                        <FaRegEye
                          onClick={handleShowPassword}
                          className="h-5 w-5 "
                        />
                      ) : (
                        <FaRegEyeSlash
                          onClick={handleShowPassword}
                          className="h-5 w-5 "
                        />
                      )}
                    </div>
                  </div>
                  <div className="text-red-700 mt-2 w-56 sm:w-96">
                    {errors.Password && errors.Password.message}
                  </div>
                </div>
              )}
            />
              <div>
                <p className=" text-center mt-6 m text-lg">
                  Already have an account?
                  <span
                    className="p-2 text-black font-medium underline cursor-pointer hover:text-xl"
                    onClick={handleSignIN}
                  >
                    Sign in
                  </span>
                </p>
              </div>
            <input
              type="submit"
              className="bg-blue-700  text-white w-full rounded-lg  cursor-pointer p-2 mt-6 hover:opacity-90 "
            />
          </div>
        </form>
      </div>
    </>
  );
}