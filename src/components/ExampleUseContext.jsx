// Libraries
import { useState, createContext } from "react";

// Components
import FormInput from "./FormInput";
import FormOutput from "./FormOutput";


// Here we our context
const FormContext = createContext("");


const ExampleUseContext = () => {
  const [ formData, setFormData ] = useState("Lars Gunnar");

  return(
    <FormContext.Provider value="Placeholder">
      <main>
        <h1>Parent Component</h1>

        <section>
          <FormInput updateFormData={setFormData}/>
          <FormOutput formData={formData}/>
        </section>
      </main>
    </FormContext.Provider>
  );
};

export const FormDataConsumer = FormContext.Consumer;

export default ExampleUseContext;