// Libraries
import { useContext } from "react";

// Context
import { FormDataConsumer } from "./ExampleUseContext";

const FormOutput = () => {
  const formData = useContext(FormDataConsumer);

  return(
    <main>
      <h1>Form Output</h1>

      <p>We want show our variable here!</p>
      <p>{formData}</p>
    </main>
  );
};

export default FormOutput;