import './ExpenseDate.css';

function expenseDate(prop) {
    const month = prop.date.toLocaleString('en-IN', { month: 'long' });
    const day = prop.date.toLocaleString('en-IN', { day: '2-digit' });
    const year = prop.date.getFullYear();

    return (
        <div className='expense-date'>

            <div className='expense-date__month'>{month}</div>
            <div className='expense-date__day'>{day}</div>
            <div className='expense-date__year'>{year}</div>
        </div>
    )

}
export default expenseDate;


