import React, { useState } from "react";
import { Link } from "react-router-dom";
import AddExpensePage from "../pages/AddExpensePage";
import ExpenseList from "./ExpenseList";

const Dashboard = () => {
  const [expenses, setExpenses] = useState([]);
  const addExpense = (expense) => {
    setExpenses([...expenses, expense]);
  };
  return (
    <div>
      <nav className="bg-red-400">
        <Link to="/">Logout</Link>
      </nav>
      <h1>Bienvenido</h1>

      <div className="grid grid-cols-2 justify-center items-center h-screen w-full">
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
