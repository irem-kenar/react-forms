import { useRef, useState } from "react";


const SimpleInput = (props) => {
  const nameInputRef = useRef();
  const [enteredName, setEnteredName] = useState("");
  // if below is set to false initially, the error show up before submit
  // if we set it false initially it would be like cheating, hence touched state below
  const [enteredIsNameValid, setEnteredIsNameValid] = useState(false);
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);

  const handleNameInputChange = (event) => {
    setEnteredName(event.target.value);
    // cannot use enteredName here, as it is not updated yet
    if (event.target.value.trim() !== "") {
      setEnteredIsNameValid(true);
    }
  };

  const handleNameInputBlur = (event) => {
    setEnteredNameTouched(true);
    if (enteredName.trim() === "") {
      setEnteredIsNameValid(false);
    }
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    setEnteredNameTouched(true);

    if (enteredName === "") {
      setEnteredIsNameValid(false);
      return;
    }

    setEnteredIsNameValid(true);

    console.log(enteredName);
    const enteredValue = nameInputRef.current.value;


    //nameInputRef.current.value =""; // DON'T MANIPULATE THE DOM
    console.log(enteredValue);
    setEnteredName("");
  };


  const nameInputIsInvalid = !enteredIsNameValid && enteredNameTouched;
  const nameInputClasses = nameInputIsInvalid ? "form-control invalid" : "form-control";
  return (
    <form onSubmit={handleFormSubmit} >
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input
          ref={nameInputRef}
          type='text'
          id='name'
          onChange={handleNameInputChange}
          onBlur={handleNameInputBlur}
          value={enteredName} />
        {nameInputIsInvalid && <p className="error-text">Please enter a valid name</p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
