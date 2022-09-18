const ExpenseItem = (props) => {

    const date = props.details.date.toISOString();
    return (
        <div className="expenses myexpenseclass">
            <p>{date}</p>
            <p>{props.details.title}</p>
            <p>{props.details.amount}</p>
        </div>
    );
}

export default ExpenseItem;