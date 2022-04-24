import { useRef, useState } from "react";


const SimpleInput = (props) => {
  const nameInputRef = useRef();
  const [enteredName, setEnteredName] = useState("");

  const changeInputNameHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    console.log(enteredName);
    const enteredValue = nameInputRef.current.value;

    //nameInputRef.current.value =""; // DON'T MANIPULATE THE DOM
    console.log(enteredValue);
    setEnteredName("");
  };



  return (
    <form onSubmit={formSubmitHandler} >
      <div className='form-control'>
        <label htmlFor='name'>Your Name</label>
        <input
          ref={nameInputRef}
          type='text'
          id='name'
          onChange={changeInputNameHandler}
          value={enteredName} />
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
