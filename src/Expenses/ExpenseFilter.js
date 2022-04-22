const ExpenseFilter = (props) => {
  const filterChangeHandler = (e) => {
    props.onFilterChange(e.target.value);
  };
  return (
    <>
      <div className="filter">
        <label>Filter by Year</label>
        <form className="expense-form">
          <select
            className="filter-select"
            onChange={filterChangeHandler}
            value={props.defaultYear}
          >
            <option value="2022">2022</option>
            <option value="2021">2021</option>
            <option value="2020">2020</option>
            <option value="2019">2019</option>
          </select>
        </form>
      </div>
    </>
  );
};
export default ExpenseFilter;
