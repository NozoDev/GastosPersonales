import React, { useState } from "react";

const AddExpensePage = ({ onAddExpense }) => {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddExpense({
      name,
      amount: parseFloat(amount),
      date,
      id: Date.now(),
    });
    setName("");
    setAmount("");
    setDate("");
  };
  return (
    <form className="" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="nombnre del gastos"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Monto"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <button type="submit">Agregar Gastos</button>
    </form>
  );
};

export default AddExpensePage;
