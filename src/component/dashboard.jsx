import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

export default function Dashboard() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBmi] = useState(null);
  const [category, setCategory] = useState("");
  const [send, setSend] = useState(true);

  const backend_url = import.meta.env.VITE_BACKEND_URL;

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSend(false);
    console.log(backend_url);

    try {
      const res = await axios.post(
        `https://backend-bmi-plum.vercel.app/api/bmi/calculate-bmi`,
        {
          height,
          weight,
        }
      );

      console.log("data sent..");

      setBmi(res.data.bmi);
      setCategory(res.data.category);
    } catch (error) {
      console.error("Error calculating BMI:", error);
    } finally {
      setSend(true);
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center space-y-3 bg-gradient-to-b from-pink-500 via-white to-blue-500">
      <h2 className="text-xl font-bold font-serif">Calculate your BMI</h2>
      <form
        className="p-5 border rounded-xl backdrop-blur-3xl flex flex-col space-y-4"
        onSubmit={handleSubmit}
      >
        <div className="space-x-3">
          <label>Height (cm):</label>
          <input
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            required
            className="rounded-xl bg-inherit border border-black p-1"
          />
        </div>
        <div className="space-x-3">
          <label>Weight (kg):</label>
          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            required
            className="rounded-xl bg-inherit border border-black p-1"
          />
        </div>
        <button
          type="submit"
          className="bg-black text-white rounded-xl p-2 hover:bg-gray-700"
        >
          {send ? "Calculate" : "Calculating..."}
        </button>
      </form>
      {bmi && (
        <div className="result">
          <h3>Your BMI: {bmi}</h3>
          <p>Category: {category}</p>
        </div>
      )}
    </div>
  );
}
