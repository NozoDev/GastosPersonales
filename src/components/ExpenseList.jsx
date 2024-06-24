import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";

const ExpenseList = ({ expenses }) => {
  const totalGastos = expenses.reduce((acc, curr) => acc + curr.amount, 0);
  return (
    <div className="bg-red-200">
      {expenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          name={expense.name}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
      <h2 className="px-2">Total de Gastos: {totalGastos}</h2>
    </div>
  );
};

export default ExpenseList;
