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
    <form className="grid items-center m-2" onSubmit={handleSubmit}>
      <input
        className="mb-2 m-2"
        type="text"
        placeholder="Gasto"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        className="mb-2 m-2"
        type="number"
        placeholder="Monto"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <input
        className="mb-2 m-2"
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <div className="py-4 w-full flex justify-center items-center">
        <button
          className=" bg-sky-400 py-2 px-8 rounded-md shadow-md shadow-black w-[250px]"
          type="submit"
        >
          Agregar Gastos
        </button>
      </div>
    </form>
  );
};

export default AddExpensePage;
