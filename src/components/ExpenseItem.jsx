import React from "react";

const ExpenseItem = ({ name, amount, date }) => {
  return (
    <div className="p-3">
      <div className="border">
        <h3>{name}</h3>
        <p>{amount}</p>
        <p>{date}</p>
      </div>
    </div>
  );
};

export default ExpenseItem;
