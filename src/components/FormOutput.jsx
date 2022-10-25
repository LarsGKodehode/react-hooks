// Libraries
import { useContext } from "react";

// Context
import { FormContext } from "./ExampleUseContext";

const FormOutput = () => {
  const formData = useContext(FormContext);

  return(
    <main>
      <h1>Form Output</h1>

      <p>We want show our variable here!</p>
      <p>{formData.inputValue}</p>
    </main>
  );
};

export default FormOutput;