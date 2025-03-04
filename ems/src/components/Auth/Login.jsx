import React, { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    // prevent default action of form
    e.preventDefault();
    console.log("Hello guys, form submitted!");
    console.log(email);
    console.log(password);
// reset after submission
    setEmail("");
    setPassword("");
  };
  return (
    <>
      <div className="h-screen w-screen flex items-center justify-center">
        <div className="border-3 border-yellow-500 ">
          <form
            onSubmit={(e) => {
              submitHandler(e);
            }}
            className="border-2 p-4 flex flex-col rounded-3xl items-center justify-center h-[300px] bg-gray-400  "
          >
        <h3 className="text-xl mb-6 font-bold text-center text-black font-mono">
          EMS - Login
        </h3>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="text-black border-2 h-2 bg-grey-600 border-gray-600 py-4 px-3 my-2 placeholder:text-sm rounded-full outline-none  placeholder:text-gray-400"
              type="email"
              placeholder="enter your email"
            />
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="text-black border-2 h-2 border-gray-600 py-4 px-3 rounded-full outline-none placeholder:text-gray-400 placeholder:text-sm "
              type="password"
              placeholder="enter password"
            />
            <button className="text-sm my-2 mt-9 bg-green-200 text-gray-800 font-serif border-2 h-9 border-gray-900 px-3 rounded-full outline-none ">
              Please Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
