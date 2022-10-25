// Libraries
import { useContext } from "react";

// Context
// We have to import the context to use it
import { FormContext } from "./ExampleUseContext";


const FormOutput = () => {
  // Here we are destructuring the wanted fields from the object stored in FormContext
  const { value } = useContext(FormContext);

  return(
    <div>
      <h1>Form Output</h1>

      <p>We want to show the content FormContext here!</p>
      <p>{value}</p>
    </div>
  );
};


export default FormOutput;