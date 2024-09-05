import React from "react";
import Header from "./component/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import BrowerRoutes from "./component/Routes";

export default function App() {
  return (
    <div>
      <Header />
      <BrowerRoutes />
    </div>
  );
}
