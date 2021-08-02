import React from "react";
import { auth } from "../firebase";
import "./css.css";

function SignOut() {
  return (
    <div className="flex h-16 w-full justify-between fixed justify bg-gray-900 top-0 border-b-2 border-gray-300 ">
      <h1 className="text-4xl font-bold text-white">Room Chat</h1>
      <button
        className="text-base text-white w-24 h-10 place-self-center rounded-lg  bg-gray-800 font-semibold hover:bg-gray-700 transform hover:scale-99 motion-reduce:transform-none ..."
        onClick={() => auth.signOut()}
      >
        Log Out
      </button>
    </div>
  );
}

export default SignOut;
