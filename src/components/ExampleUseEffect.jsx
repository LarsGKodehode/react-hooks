import React from "react";

import ComparisonExample from "./ComparisonExample";
import CatFactCard from "./CatFactCard";


// For this component we are using:
// - useState: for storing some data
// - useEffect: for controlling when we want to fetch data
import { useState, useEffect } from "react";


/**
 * Example component for showcasing useEffect when fetching data
 */
const ExampleUseEffect = () => {
  const [ catFactsList, setCatFactsList] = useState([]);
  const [ inputData, setInputData] = useState("");


  // We use useEffect for javascript logic we only want
  // to run at certain point in a components lifcycle
  // useEffect takes two varibles, first is a callback function, the second is an array of dependencies
  useEffect(() => {

    // Logic that we want to control when is run is placed inside the callback argument to useEffect
    console.log("fetching data")

    // Fetch request are a common example of logic we want to have control of
    fetch("https://catfact.ninja/breeds")
      .then((response) => response.json())
      .then((data) => {
        setCatFactsList(data.data);
      })
  
    // The second argument, here an empty array is the dependency list
    // An empty list is used when we only want the logic in the callback to only be run when the components mounts
    // Only put JS primitives inside this ie. number, string or boolean, see ComparisonExample.jsx for why
  }, []);


  // This handles changes in text input
  function handleChange(event) {
    const value = event.target.value;
    setInputData(() => value)
  };


  // Here we take the information from the catFactsList and create a new list
  // of react components
  const catFactJSXList = catFactsList.map((catInfo) => {
    return(
      <CatFactCard {...catInfo} />
    );
  });

  return(
    <>
      <h1>useEffect example</h1>

      <section>
        <input type="text" value={inputData} onChange={(event) => handleChange(event)}/>
      </section>
      
      <ul>
        {catFactJSXList}
      </ul>

      {/* <ComparisonExample /> */}
    </>
  )
};


export default ExampleUseEffect;