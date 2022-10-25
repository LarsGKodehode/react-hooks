// Libraries
import { useState, createContext } from "react";

// Components
import FormInput from "./FormInput";
import FormOutput from "./FormOutput";


// Here we our context
const FormContext = createContext("");


const ExampleUseContext = () => {
  const [ formData, setFormData ] = useState({
    inputValue: "Lars Gunnar",
    updateValue: updateValue,
  });


  function updateValue(value) {
    console.log(value)
    setFormData((oldFormData) => {
      return {
        ...oldFormData,
        inputValue: value,
      };
    });
  };

  
  return(
    <FormContext.Provider value={formData}>
      <main>
        <h1>Parent Component</h1>

        <section>
          <FormInput />
          <FormOutput />
        </section>
      </main>
    </FormContext.Provider>
  );
};

export {
  FormContext,
};

export default ExampleUseContext;