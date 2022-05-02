import useInput from "../hooks/use-input";

const isNotEmpty = value => value.trim() !== "";
const isEmail = value => value.includes("@");

const BasicForm = (props) => {

  const {
    value: enteredFirstName,
    isValid: enteredFirstNameIsValid,
    hasError: firstNameInputHasError,
    handleChange: handleFirstNameInputChange,
    handleBlur: handleFirstNameInputBlur,
    reset: resetFirstNameInput } = useInput(isNotEmpty);

  const {
    value: enteredLastName,
    isValid: enteredLastNameIsValid,
    hasError: lastNameInputHasError,
    handleChange: handleLastNameInputChange,
    handleBlur: handleLastNameInputBlur,
    reset: resetLastNameInput } = useInput(isNotEmpty);


  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    handleChange: handleEmailInputChange,
    handleBlur: handleEmailInputBlur,
    reset: resetEmailInput } = useInput(isEmail);


  let formIsValid = false;

  if (enteredFirstNameIsValid && enteredLastNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }

  const handleFormSubmit = (event) => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }
    console.log(enteredFirstName, enteredLastName, enteredEmail);
    resetFirstNameInput();
    resetLastNameInput();
    resetEmailInput();
  };

  const nameInputClasses = firstNameInputHasError ? "form-control invalid" : "form-control";
  const emailInputClasses = emailInputHasError ? "form-control invalid" : "form-control";

  return (
    <form onSubmit={handleFormSubmit}>
      <div className='control-group'>
        <div className={nameInputClasses}>
          <label htmlFor='name'>First Name</label>
          <input type='text'
            id='name'
            onChange={handleFirstNameInputChange}
            onBlur={handleFirstNameInputBlur}
            value={enteredFirstName} />
          {firstNameInputHasError && <p className="error-text">Please enter a valid first name</p>}
        </div>
        <div className={nameInputClasses}>
          <label htmlFor='name'>Last Name</label>
          <input type='text'
            id='name'
            onChange={handleLastNameInputChange}
            onBlur={handleLastNameInputBlur}
            value={enteredLastName} />
          {lastNameInputHasError && <p className="error-text">Please enter a valid last name</p>}
        </div>
      </div>
      <div className={emailInputClasses}>
        <label htmlFor='name'>E-Mail Address</label>
        <input type='text'
          id='name'
          onChange={handleEmailInputChange}
          onBlur={handleEmailInputBlur}
          value={enteredEmail} />
        {emailInputHasError && <p className="error-text">Please enter a valid e-mail</p>}
      </div>
      <div className='form-actions'>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
