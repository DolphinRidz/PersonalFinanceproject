import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

function ExpenseItem(prop) {
    //const expenseDate = new Date(2023, 6, 26);
    //const expenseTitle = 'Furniture';
    //const expenseAmount = 2000.50;
    

    return (
        <li>
        <Card className='expense-item'>
            <ExpenseDate date={prop.date}/>
            <div className='expense-item__description'> <h2 className='expense-item__description h2'>{prop.title}</h2>
            <div className='expense-item__price'>&#8377; {prop.amount}</div>
            </div>
        </Card>
        </li>
    )
}

export default ExpenseItem;