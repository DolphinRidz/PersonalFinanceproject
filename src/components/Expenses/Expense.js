import './Expense.css';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card'
import ExpenseFilter from './ExpenseFilter';
import { useState } from 'react';

function Expense(prop) {

  const [filteredYear, setFilteredYear] = useState('2020')

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  }
  const filteredExpenses = prop.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  })

  let expensesContent = <p> No expenses found. </p>;

  if (filteredExpenses.length > 0) {
    expensesContent = filteredExpenses.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date} />));
  }
  //declare--expense=expense[0](alt)
  return (
    <div>
      
      <Card className="expenses">
      <ExpenseFilter selected={filteredYear} onYearChange={filterChangeHandler}></ExpenseFilter>

      {expensesContent}

        {/* /* <ExpenseItem 
          title={prop.expenses[0].title} 
          amount={prop.expenses[0].amount} 
          date={prop.expenses[0].date}>
  
          </ExpenseItem>
          <ExpenseItem title={prop.expenses[1].title} amount={prop.expenses[1].amount} date={prop.expenses[1].date}></ExpenseItem>
          <ExpenseItem title={prop.expenses[2].title} amount={prop.expenses[2].amount} date={prop.expenses[2].date}></ExpenseItem>
          <ExpenseItem title={prop.expenses[3].title} amount={prop.expenses[3].amount} date={prop.expenses[3].date}></ExpenseItem> */}
      </Card>
    </div>)
}

export default Expense;
