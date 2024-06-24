import React, { useState } from "react";
import { Link } from "react-router-dom";
import AddExpensePage from "../pages/AddExpensePage";
import ExpenseList from "./ExpenseList";
import Logout from "./Logout";

const Dashboard = () => {
  const [expenses, setExpenses] = useState([]);
  const addExpense = (expense) => {
    setExpenses([...expenses, expense]);
  };
  return (
    <div>
      <nav className="bg-blue-400 p-4 ">
        <Logout />
      </nav>
      <h1 className="text-center py-4 text-2xl">
        Bienvenido a tu espacio de cuentas 💱
      </h1>

      <div className="grid grid-cols-2 p-4 h-screen w-full">
        <div className="border">
          <AddExpensePage onAddExpense={addExpense} />
        </div>
        <div className="border">
          <ExpenseList expenses={expenses} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
