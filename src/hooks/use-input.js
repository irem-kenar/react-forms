import { useState } from "react";

const useInput = (validateValue) => {
    const [enteredValue, setEnteredValue] = useState("");
    const [isTouched, setIsTouched] = useState(false);
    // inferred state
    const valueIsValid = validateValue(enteredValue)
    const hasError = !valueIsValid && isTouched;

    const handleChange = (event) => {
        setEnteredValue(event.target.value);
    };

    const handleBlur = (event) => {
        setIsTouched(true);
    };

    const reset = () => {
        setEnteredValue("");
        setIsTouched(false);
    };

    return {
        value: enteredValue,
        hasError,
        isValid: valueIsValid,
        handleChange,
        handleBlur,
        reset
    };

};

export default useInput;