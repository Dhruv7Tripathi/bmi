import React, { useState } from "react";
import axios from "axios";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(email, password);
    try {
      const res = await axios.post(
        "https://backend-bmi-plum.vercel.app/api/auth/login",
        {
          email,
          password,
        }
      );
      console.log("Sent details to backend!!");
      window.location.replace("/dashboard");
    } catch (error) {
      console.error("error in sending details...", error);
      alert("backend erorr");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-500 via-white to-pink-500 flex justify-center items-center">
      <form
        className="flex flex-col rounded-lg border p-5 space-y-3 backdrop-blur-3xl"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col space-y-3 items-start justify-center">
          <label className="text-gray-500">Email</label>
          <input
            type="email"
            value={email}
            className="rounded-xl border p-2 px-3"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="flex flex-col space-y-3 items-start justify-center">
          <label className="text-gray-500">Password</label>
          <input
            type="password"
            value={password}
            className="rounded-xl border p-2 px-3"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button
          type="submit"
          className="bg-black text-white rounded-xl p-2 hover:bg-gray-700"
        >
          Login
        </button>
        <a href="/signup" className="text-sky-600 text-center">
          New user ?
        </a>
      </form>
    </div>
  );
}
