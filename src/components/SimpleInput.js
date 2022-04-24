import { useRef, useState } from "react";


const SimpleInput = (props) => {

  const [enteredName, setEnteredName] = useState("");

  const changeInputNameHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    console.log(enteredName);
  };

  return (
    <form onSubmit={formSubmitHandler} >
      <div className='form-control'>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' onChange={changeInputNameHandler} />
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
