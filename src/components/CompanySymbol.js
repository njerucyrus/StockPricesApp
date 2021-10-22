import React, { Fragment, useState } from "react";

import './CompanySymbol.css'

const CompanySymbol = (props) => {
  const [enteredSymbol, setEnteredSymbol] = useState('FB')
  const symbolChangeHandler =(event) => {
    setEnteredSymbol(event.target.value)
  }
  const submitHandler = (event) => {
    event.preventDefault();
    console.log(enteredSymbol)
    props.onSubmitSymbol(enteredSymbol);

  }
  return (
    <Fragment>
      <form className="container" onSubmit={submitHandler}>
        <input
          type="text"
          value={enteredSymbol}
          placeholder="Enter company Symbol eg. FB for facebook"
        onChange={symbolChangeHandler}/>
        <br />
        <button type="submit" className="button">Submit</button>
      </form>
    </Fragment>
  );
};
export default CompanySymbol
