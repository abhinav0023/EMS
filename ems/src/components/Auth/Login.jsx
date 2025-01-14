import React from "react";

function Login() {
  return (
    <>
      <div className="h-screen w-screen flex items-center justify-center">
        <div className="border-3 border-yellow-500 ">
          <form className="border-2 p-4 flex flex-col rounded-3xl items-center justify-center">
            <input className="text-white border-2 h-2 bg-grey-600 border-red-600 py-4 px-3 my-2 rounded-full outline-none placeholder:text-black" type="email" placeholder="enter your email" />
            <input className="text-black border-2 h-2 border-red-600 py-4 px-3 rounded-full outline-none placeholder:text-black " type="password" placeholder="enter password" />
            <button className="text-white my-4 border-2 h-9 border-blue-600 px-3 rounded-full outline-none placeholder:text-black "> Please Login</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
