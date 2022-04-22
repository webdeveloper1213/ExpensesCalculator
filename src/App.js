import "./styles.css";
import { useState } from "react";
import ExpenseFilter from "./Expenses/ExpenseFilter";
import ExpensesList from "./Expenses/ExpensesList";
import Card from "./UI/Card";
import NewExpense from "./NewExpense/NewExpense";
const Dummy_Expenses = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14)
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28)
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12)
  }
];
export default function App() {
  const [expenses, setExpenses] = useState(Dummy_Expenses);

  const [filteredYear, setFilteredYear] = useState("2021");
  console.log(filteredYear);
  const filterChange = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  //get all the filtered Expenses

  const filteredExpenses = expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  // adding new expense

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpense) => {
      return [expense, ...prevExpense];
    });
  };

  return (
    <div className="App">
      <NewExpense onAdd={addExpenseHandler} />
      <Card className="all-expenses">
        <ExpenseFilter
          onFilterChange={filterChange}
          defaultYear={filteredYear}
        />
        <ExpensesList items={filteredExpenses} />
      </Card>
      {/* <Expenses items = {expenses} /> */}
    </div>
  );
}
