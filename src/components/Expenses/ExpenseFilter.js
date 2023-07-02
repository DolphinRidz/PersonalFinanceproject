import './ExpenseFilter.css';

const ExpenseFilter = (props) => {
 const FilterHandler=(event)=>{
    props.onYearChange(event.target.value);
 }
  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label className='expenses-filter label'>Filter by year</label>
        <select value = {props.selected} onChange={FilterHandler}>
        <option value='2022'>2023</option>
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpenseFilter;