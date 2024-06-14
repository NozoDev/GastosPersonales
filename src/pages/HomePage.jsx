import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <h1>Bienvenido a la Aplicación de Gastos</h1>
      <p>
        Gestiona y controla tus gastos diarios de manera eficiente y organizada.
      </p>
      <p>Debes registrarte para usar la aplicación y llevar tus gastos.</p>
      <div>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
      </div>
    </div>
  );
};

export default HomePage;
