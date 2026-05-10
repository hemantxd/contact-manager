"use client";
import React from "react";
import { loginAction } from "../actions/auth";

const LoginForm = () => {
  return (
    <form action={loginAction} 
     className="space-x-4">
      <div>
        <label className="block text-sm font-medium leading-6 text-gray-900">Email</label>
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          required
          className="mt-4 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
      </div>
      <div className="mt-3">
         <label className="block text-sm font-medium leading-6 text-gray-900">Password</label>
        <input
          type="password"
          name="password"
          placeholder="Enter your password"
          required
          className="mt-4 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
      </div>
      <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Login
      </button>
    </form>
  );
};

export default LoginForm;
