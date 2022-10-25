// Libraries
import { useContext } from "react";

// Context
import { FormContext } from "./ExampleUseContext";


const FormInput = () => {
  const formData = useContext(FormContext);

  return(
    <main>
      <h1>Form Input</h1>

      <input type="text" onChange={event => formData.updateValue(event.target.value)}/>
    </main>
  );
};

export default FormInput;