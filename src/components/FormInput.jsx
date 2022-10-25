// Libraries
import { useContext } from "react";

// Context
// We have to import the context to use it
import { FormContext } from "./ExampleUseContext";


const FormInput = () => {
  // Here we are destructuring the wanted fields from the object stored in FormContext
  const { value, updateValue } = useContext(FormContext);

  return(
    <div>
      <h1>Form Input</h1>

      <input
        type="text"
        value={value}
        onChange={event => updateValue(event.target.value)
      }/>
    </div>
  );
};


export default FormInput;