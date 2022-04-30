import useInput from "../hooks/use-input";

const SimpleInput = (props) => {
  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    handleChange: handleNameInputChange,
    handleBlur: handleNameInputBlur,
    reset: resetNameInput } = useInput(value => value.trim() !== "");

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    handleChange: handleEmailInputChange,
    handleBlur: handleEmailInputBlur,
    reset: resetEmailInput } = useInput(value => value.includes("@"));

  let formIsValid = false;

  if (enteredNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }

  const handleFormSubmit = (event) => {
    event.preventDefault();

    if (!enteredNameIsValid) {
      return;
    }
    console.log(enteredName);
    resetNameInput();
    resetEmailInput();
  };

  const nameInputClasses = nameInputHasError ? "form-control invalid" : "form-control";
  const emailInputClasses = emailInputHasError ? "form-control invalid" : "form-control";

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
        {emailInputHasError && <p className="error-text">Please enter a valid e-mail</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid} >Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
