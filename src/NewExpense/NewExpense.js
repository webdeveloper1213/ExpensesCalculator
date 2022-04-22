import ExpenseForm from "./ExpenseForm";
import { useState } from "react";
const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState("");
  const startEditingHandler = () => {
    setIsEditing(true);
  };
  const stopEditingHandler = () => {
    setIsEditing(false);
  };
  const saveExpenseDataHandler = (enteredExpenses) => {
    const expenseData = {
      ...enteredExpenses,
      id: Math.random().toString()
    };
    props.onAdd(expenseData);
  };
  return (
    <>
      <div className="addnew-expense">
        {!isEditing && (
          <button onClick={startEditingHandler} className="btn-add-expense">
            Add New Expense Form
          </button>
        )}
        {isEditing && (
          <ExpenseForm
            onSaveExpenseData={saveExpenseDataHandler}
            onCacel={stopEditingHandler}
          />
        )}
      </div>
    </>
  );
};
export default NewExpense;
