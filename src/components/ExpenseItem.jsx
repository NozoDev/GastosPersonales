import React from 'react'

const ExpenseItem = ({name, amount, date}) => {
  return (
    <div>
      <h3>{name}</h3>
      <p>{amount}</p>
      <p>{date}</p>
    </div>
  )
}

export default ExpenseItem
