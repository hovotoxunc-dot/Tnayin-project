import React from "react";

export default function Register() {
  return (
    <div className="w-full h-[700px] bg-[#606794] flex items-center justify-center">
      
      <form className="flex flex-col items-center gap-5 text-center">

        <h1 className="text-white text-4xl font-bold">
          Register
        </h1>

        <input
          type="text"
          placeholder="Username"
          className="w-[500px] h-[50px] px-4 rounded-[6px] text-lg outline-none border border-gray-300"
        />

        <input
          type="email"
          placeholder="Email"
          className="w-[500px] h-[50px] px-4 rounded-[6px] text-lg outline-none border border-gray-300"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-[500px] h-[50px] px-4 rounded-[6px] text-lg outline-none border border-gray-300"
        />

        <input
          type="submit"
          value="Register"
          className="bg-[#8a2be2] w-[500px] h-[50px] rounded-[6px] text-[30px] text-pink-400 hover:bg-[#7FFFD4] cursor-pointer border border-white"
        />

      </form>

    </div>
  );
}