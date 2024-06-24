import React from "react";
import { Link } from "react-router-dom";

import img from "../images/img1.jpg";

const HomePage = () => {
  return (
    <div className="bg-[url('images/img1.jpg')] bg-no-repeat bg-cover text-white font-bold min-h-screen flex justify-center items-center flex-col">
      <div className="w-full p-10">
        <h1 className="text-4xl mb-4 text-left">
          Bienvenido a la Aplicación de Gastos
        </h1>
        <p className="text-left">
          Gestiona y controla tus gastos diarios de manera eficiente y
          organizada.
        </p>
        <p>Debes registrarte para usar la aplicación y llevar tus gastos.</p>
      </div>
      <div className="w-full p-10 flex gap-4 ">
        <Link
          className="bg-sky-400 py-2 px-8 rounded-md shadow-md shadow-black"
          to="/login"
        >
          Login
        </Link>
        <Link
          className="bg-sky-400 py-2 px-8 rounded-md shadow-md shadow-black"
          to="/register"
        >
          Register
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
