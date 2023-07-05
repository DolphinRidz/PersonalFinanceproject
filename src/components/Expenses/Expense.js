import './Expense.css';
import Card from '../UI/Card'
import ExpenseFilter from './ExpenseFilter';
import { useState } from 'react';
import ExpenseList from './ExpenseList';
import ExpenseChart from './ExpenseChart';

function Expense(prop) {

  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  const filteredExpenses = prop.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });
  //declare--expense=expense[0](alt)
  return (
    <div>

      <Card className="expenses">
        <ExpenseFilter selected={filteredYear} onYearChange={filterChangeHandler}></ExpenseFilter>

        <ExpenseChart expenses={filteredExpenses} />
        <ExpenseList items={filteredExpenses} />

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
