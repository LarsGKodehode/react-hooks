import { useState } from "react";

/**
 * Example component for showcasing useState
 * @return 
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

  // Here we use 
  function updateData(event) {
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
      <button onClick={() => increment()}>Increase</button>
      <h1>{counter}</h1>

      <button onClick={() => toggleLoading()}>Finished Loading</button>
      {
        // This is common practise for displaying a hint to the user that the content is still loading
        isLoading
        ? <h1>Loading..</h1>
        : <h1>Loading is done</h1>
      }

      {/* Here we are using the state stored in data as the driver for the content of the input form, also known as a single source of truth design pattern */}
      <input type="text" value={data} onChange={(event) => {updateData(event)}}></input>
      <h1>{data}</h1>

      {/* The button here does not work */}
      <button onClick={() => incrementValue()}>Does not work</button>
      <h1>{myValue}</h1>
    </>
  )
};

export default ExampleUseState;