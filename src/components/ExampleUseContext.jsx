// Libraries
import { useState, createContext } from "react";

// Components
import FormInput from "./FormInput";
import FormOutput from "./FormOutput";


// Here we create our context
// The argument we pass it is the default value
// A common practice is to set it to null
const FormContext = createContext(null);


const ExampleUseContext = () => {
  const [ formData, setFormData ] = useState({
    value: "Lars Gunnar",
    updateValue: updateValue,
  });

  // This needs to be a function so we can pass it as the default state
  function updateValue(value) {
    setFormData((oldFormData) => {
      return {
        ...oldFormData,
        value: value,
      };
    });
  };

  
  return(
    // FormContext.Provider is what is called a "Higer Order Component"
    // It only provides functionality, not anything visible on the web page
    // Here every child component has access to the Context provided
    // The value field/prop is the initial value we want it to have
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


// We need to export the context so we can use it in our other components
export {
  FormContext,
};

export default ExampleUseContext;