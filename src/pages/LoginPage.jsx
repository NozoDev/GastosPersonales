import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { appFirebase } from "../firebase/firebase";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
const auth = getAuth(appFirebase);

const LoginPage = () => {
  const [login, setLogin] = useState(false);
  const navigate = useNavigate();
  const handleLogin = async (e) => {
    e.preventDefault();
    const correo = e.target.email.value;
    const contraseña = e.target.password.value;

    if (login) {
      try {
        await signInWithEmailAndPassword(auth, correo, contraseña);

        navigate("/dashboard");
      } catch (error) {
        console.error("Error loguout", error);
      }
    }
  };
  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <input type="text" id="email" placeholder="Ingresa Email" required />
        <input
          type="password"
          id="password"
          placeholder="Ingresa Contraseña"
          required
        />
        <button type="submit" onClick={() => setLogin(true)}>
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
