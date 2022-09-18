import ExpenseDate from "./ExpenseDate";

const ExpenseItem = (props) => {
  return (
    <div className="expense-item myexpenseclass">
      <ExpenseDate date={props.details.date} />
      <div className="expense-item__description">
        <h2>{props.details.title}</h2>
        <div className="expense-item__price">₹ {props.details.amount}</div>
      </div>
    </div>
  );
};

export default ExpenseItem;
