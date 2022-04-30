import { useState } from "react";
import useInput from "../hooks/use-input";

const SimpleInput = (props) => {
  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    handleChange: handleNameInputChange,
    handleBlur: handleNameInputBlur,
    reset: resetNameInput } = useInput(value => value.trim() !== "");


  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);


  const enteredEmailIsValid = enteredEmail.includes("@");
  const emailInputIsInvalid = !enteredEmailIsValid && enteredEmailTouched;

  let formIsValid = false;

  if (enteredNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }

  const handleEmailInputChange = (event) => {
    setEnteredEmail(event.target.value);
  };

  const handleEmailInputBlur = (event) => {
    setEnteredEmailTouched(true);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    if (!enteredNameIsValid) {
      return;
    }
    console.log(enteredName);
    resetNameInput();

    setEnteredEmail("");
    setEnteredEmailTouched(false);
  };

  const nameInputClasses = nameInputHasError ? "form-control invalid" : "form-control";
  const emailInputClasses = emailInputIsInvalid ? "form-control invalid" : "form-control";

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
        {nameInputHasError && <p className="error-text">Please enter a valid name</p>}
      </div>
      <div className={emailInputClasses}>
        <label htmlFor='name'>Your E-mail</label>
        <input
          type='email'
          id='name'
          onChange={handleEmailInputChange}
          onBlur={handleEmailInputBlur}
          value={enteredEmail} />
        {emailInputIsInvalid && <p className="error-text">Please enter a valid e-mail</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid} >Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
