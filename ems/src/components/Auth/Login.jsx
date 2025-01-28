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
            className="border-2 p-4 flex flex-col rounded-3xl items-center justify-center"
          >
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="text-black border-2 h-2 bg-grey-600 border-red-600 py-4 px-3 my-2 rounded-full outline-none placeholder:text-black"
              type="email"
              placeholder="enter your email"
            />
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="text-black border-2 h-2 border-red-600 py-4 px-3 rounded-full outline-none placeholder:text-black "
              type="password"
              placeholder="enter password"
            />
            <button className="text-white my-4 border-2 h-9 border-blue-600 px-3 rounded-full outline-none placeholder:text-black ">
              Please Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
