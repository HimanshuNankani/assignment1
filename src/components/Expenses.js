import ExpenseItem from "./ExpenseItem";

const Expenses = (props) => {
    return (
        <div className="expenses">
            {props.expenses.map(x => 
                <ExpenseItem key={x.id} details={x}/>
            )}
        </div>
    );
}

export default Expenses;