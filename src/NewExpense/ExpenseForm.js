import { useState } from "react";
const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    const enteredData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate + "T00:00:00")
    };
    props.onSaveExpenseData(enteredData);
    setEnteredAmount("");
    setEnteredDate("");
    setEnteredTitle("");
  };
  const titleChangeHandler = (e) => {
    setEnteredTitle(e.target.value);
  };
  const dateChangeHandler = (e) => {
    setEnteredDate(e.target.value);
  };
  const amountChangeHandler = (e) => {
    setEnteredAmount(e.target.value);
  };
  return (
    <>
      <form onSubmit={submitHandler} className="new-expense-form">
        <div className="new-expense-control">
          <label htmlFor="title"> Title </label>
          <input
            type="text"
            onChange={titleChangeHandler}
            value={enteredTitle}
          />
        </div>
        <div className="new-expense-control">
          <label htmlFor="date"> Date </label>
          <input type="date" onChange={dateChangeHandler} value={enteredDate} />
        </div>

        <div className="new-expense-control">
          <label htmlFor="amount"> Amount </label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
            value={enteredAmount}
          />
        </div>
        <div className="new-expense-actions">
          <div className="btn-container">
            <button onClick={props.onCacel} className="btn btn-cancel">
              Cancel
            </button>
            <button className="btn" type="submit">
              Add Expense
            </button>
          </div>
        </div>
      </form>
    </>
  );
};
export default ExpenseForm;
