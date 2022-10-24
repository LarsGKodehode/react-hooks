// Libraries
// Here we are importing functionality from React that is going to be used in this component
import { useState } from "react";


/**
 * Example component for showcasing useState
 */
const ExampleUseState = () => {
  // Here we are storing the various state
  const [ counter, setCounter ] = useState(0);
  const [ isLoading, setIsLoading ] = useState(true);
  const [ data, setData ] = useState("Hello");


  // This is a simple function for incrementing the value stored in counter
  function increment() {
    setCounter(() => {
      return counter + 1;
    });
  };

  // This is a function for toggling the boolean stored in isLoading
  function toggleLoading() {
    setIsLoading(() => {
      return !isLoading;
    });
  };

  // This is a function for storing the data from the input text element
  function handleInputChange(event) {
    console.log(event);
    setData(() => {
      return event.target.value;
    });
  };
  

  // DO NOT DO! This does note work. This is due to how React keeps track of the state of the application
  let myValue = 0;
  function incrementValue() {
    myValue++;
    console.log(`New value = ${myValue}`);
  };


  // Returned JSX
  return(
    <>
    <section>
      <button onClick={() => increment()}>Increment counter</button>
      <h1>{counter}</h1>
    </section>

    <section>
      <button onClick={() => toggleLoading()}>Toogle loading state</button>
      {
        // This is common way for displaying a UX hint to the user that the content is still loading
        // You can exhange the <h1> element with whatever custom component you choose
        isLoading
        ? <h1>Loading..</h1>
        : <h1>Loading is done</h1>
      }
    </section>

    <section>
      {/* Here we are using the state stored in data as the driver for the content of the input form, also known as a single source of truth arcitechrture */}
      <input type="text" value={data} onChange={(event) => {handleInputChange(event)}}></input>
      <h1>{data}</h1>
    </section>

    <section>
      {/* This does not work, due to how React keeps track of the application state */}
      <button onClick={() => incrementValue()}>Does not work</button>
      <h1>{myValue}</h1>
    </section>
    </>
  )
};

// We are following a one component per file convention, so we can use default export and import
export default ExampleUseState;