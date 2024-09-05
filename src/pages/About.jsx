// import Header from "../component/Header";
import { Footer } from "../component/Footer";
import React from "react";
export const About = () => {
  return (
    <>
      <div>
        <Footer />
        <div className="flex justify-center items-center pt-8">
          <div className="w-3/5 p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-transparent dark:border-gray-700 dark:hover:bg-gray-700">
            <h1 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Welcome Buddy 😉
            </h1>
            <p className="mb-2 p-3 text-grey-700 dark:text-gray-400">
              After signup , you can easily calculate your BMI , which will
              detect whether you are fit or not
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
