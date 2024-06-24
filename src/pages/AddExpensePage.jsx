import React, { useState } from "react";

const AddExpensePage = ({ onAddExpense }) => {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validación de los campos
    if (
      !name.trim() ||
      isNaN(parseFloat(amount)) ||
      parseFloat(amount) <= 0 ||
      !date.trim()
    ) {
      alert("Por favor, completa todos los campos correctamente.");
      return;
    }

    onAddExpense({
      name,
      amount: parseFloat(amount),
      date,
      id: Date.now(),
    });

    // Limpiar los campos del formulario
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
        required
      />
      <input
        className="mb-2 m-2"
        type="number"
        placeholder="Monto"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        required
      />
      <input
        className="mb-2 m-2"
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        required
      />
      <div className="py-4 w-full flex justify-center items-center">
        <button
          className="bg-sky-400 py-2 px-8 rounded-md shadow-md shadow-black w-[250px]"
          type="submit"
        >
          Agregar Gasto
        </button>
      </div>
    </form>
  );
};

export default AddExpensePage;
