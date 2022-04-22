import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
const ExpenseItem = (props) => {
  return (
    <>
      <li>
        <Card className="expenses">
          <ExpenseDate date={props.date} />
          <div className="expense-item">{props.title}</div>
          <div className="expense-item-price">${props.amount}</div>
        </Card>
      </li>
    </>
  );
};
export default ExpenseItem;
