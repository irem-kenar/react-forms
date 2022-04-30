import { useState } from "react";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);

  const enteredNameIsValid = enteredName.trim() !== "";
  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;

  const enteredEmailIsValid = enteredEmail.includes("@");
  const emailInputIsInvalid = !enteredEmailIsValid && enteredEmailTouched;

  let formIsValid = false;

  if (enteredNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }

  const handleNameInputChange = (event) => {
    setEnteredName(event.target.value);
  };

  const handleEmailInputChange = (event) => {
    setEnteredEmail(event.target.value);
  };

  const handleNameInputBlur = (event) => {
    setEnteredNameTouched(true);
  };

  const handleEmailInputBlur = (event) => {
    setEnteredEmailTouched(true);
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

    setEnteredEmail("");
    setEnteredEmailTouched(false);
  };

  const nameInputClasses = nameInputIsInvalid ? "form-control invalid" : "form-control";
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
        {nameInputIsInvalid && <p className="error-text">Please enter a valid name</p>}
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
