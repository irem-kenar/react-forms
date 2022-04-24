import { useState } from "react";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);

  let formIsValid = false;

  //add any other input validities to if condition 
  if (enteredName) {
    formIsValid = true;
  }

  const enteredNameIsValid = enteredName.trim() !== "";
  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;

  const handleNameInputChange = (event) => {
    setEnteredName(event.target.value);
  };

  const handleNameInputBlur = (event) => {
    setEnteredNameTouched(true);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    setEnteredNameTouched(true);

    if (!enteredNameIsValid) {
      return;
    }
    console.log(enteredName);
    setEnteredName("");
    setEnteredNameTouched(false);
  };

  const nameInputClasses = nameInputIsInvalid ? "form-control invalid" : "form-control";
  return (
    <form onSubmit={handleFormSubmit} >
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input
          type='text'
          id='name'
          onChange={handleNameInputChange}
          onBlur={handleNameInputBlur}
          value={enteredName} />
        {nameInputIsInvalid && <p className="error-text">Please enter a valid name</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid} >Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
