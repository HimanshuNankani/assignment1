import ExpenseDate from "./ExpenseDate";
import Card from "./Card";

const ExpenseItem = (props) => {
  return (
    <Card className="expense-item myexpenseclass">
      <ExpenseDate date={props.details.date} />
      <div className="expense-item__description">
        <h2>{props.details.title}</h2>
        <div className="expense-item__price">₹ {props.details.amount}</div>
      </div>
    </Card>
  );
};

export default ExpenseItem;
