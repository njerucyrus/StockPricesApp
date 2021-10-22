import React, { Fragment, useState } from "react";

import "./CompanySymbol.css";

const formatDate = (dateInput, formatStr) => {
  const  z = {
      M: dateInput.getMonth() + 1,
      d: dateInput.getDate(),
      h: dateInput.getHours(),
      m: dateInput.getMinutes(),
      s: dateInput.getSeconds()
  };
  formatStr = formatStr.replace(/(M+|d+|h+|m+|s+)/g, function(v) {
      return ((v.length > 1 ? "0" : "") + z[v.slice(-1)]).slice(-2)
  });

  return formatStr.replace(/(y+)/g, function(v) {
      return dateInput.getFullYear().toString().slice(-v.length)
  });
};
const CompanySymbol = (props) => {
  const [enteredSymbol, setEnteredSymbol] = useState("FB");
  const [enteredStartDate, setEnteredStartDate] = useState('');
  const [enteredEndDate, setEnteredEndDate] = useState('');

  const symbolChangeHandler = (event) => {
    setEnteredSymbol(event.target.value);
  };

  const startDateChangeHandler = (event) => {
    setEnteredStartDate(formatDate(new Date(event.target.value),"yyyy-MM-dd"))
  }

  const endDateChangeHandler = (event) => {
    setEnteredEndDate(formatDate(new Date(event.target.value),"yyyy-MM-dd"))
  }
  const submitHandler = (event) => {
    event.preventDefault();
    console.log(`Input Date: ${enteredSymbol}, ${enteredStartDate}, ${enteredEndDate}`);
    props.onSubmitSymbol(enteredSymbol, enteredStartDate, enteredEndDate);
  };
  return (
    <Fragment>
      <form className="form-inline" onSubmit={submitHandler}>
        <label htmlFor="symbol">Company Symbol:</label>
        <input
          type="text"
          id="symbol"
          placeholder="Enter company Symbol eg. FB for facebook"
          onChange={symbolChangeHandler}
        />
        <label htmlFor="start_date">Start Date:</label>
        <input type="date" value={enteredStartDate} id="start_date" placeholder="Start Date" onChange={startDateChangeHandler} />

        <label htmlFor="end_date">End Date:</label>
        <input type="date" value={enteredEndDate} id="end_date" placeholder="End Date"  onChange={endDateChangeHandler}/>

        <button type="submit">Submit</button>
      </form>
    </Fragment>
  );
};


export default CompanySymbol;
