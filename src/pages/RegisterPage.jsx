import React, { useState } from "react";

import { appFirebase } from "../firebase/firebase";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
const auth = getAuth(appFirebase);

const RegisterPage = () => {
  const [register, setRegister] = useState(false);

  const handleRegister = async (e) => {
    e.preventDefault();
    const correo = e.target.email.value;
    const contraseña = e.target.password.value;

    if (register) {
      try {
        await createUserWithEmailAndPassword(auth, correo, contraseña);
        console.log("User registered successfully");
      } catch (error) {
        console.error("Error registering user:", error);
      }
    }
  };
  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
        <input type="text" id="email" placeholder="Email" required />
        <input type="password" id="password" placeholder="Password" required />
        <button type="submit" onClick={() => setRegister(true)}>
          Register
        </button>
      </form>
    </div>
  );
};

export default RegisterPage;
