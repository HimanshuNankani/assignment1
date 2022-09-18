import Card from "./Card";
import ExpenseItem from "./ExpenseItem";

const Expenses = (props) => {
    return (
        <Card className="expenses">
            {props.expenses.map(x => 
                <ExpenseItem key={x.id} details={x}/>
            )}
        </Card>
    );
}

export default Expenses;