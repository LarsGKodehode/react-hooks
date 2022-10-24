// Libraries
// For this component we are using:
// - React: for rendering an Array of components
// - useState: for storing some data
// - useEffect: for controlling when we want to fetch data
import React, { useState, useEffect } from "react";

// Components
import CatFactCard from "./CatFactCard";


/**
 * Example component for showcasing useEffect when fetching data
 */
const ExampleUseEffect = () => {
  const [ catFactsList, setCatFactsList] = useState([]);
  const [ inputData, setInputData] = useState("");

  useEffect(() => {
    fetch("https://catfact.ninja/breeds")
      .then((response) => response.json())
      .then((data) => {
        // Here we are storing a list of catfacts into a variable
        setCatFactsList(data.data);
      });
  }, []);


  function handleChange(event) {
    const value = event.target.value;
    setInputData(() => value)
  };

  // Here we take the information from the catFactsList
  // and creating a new list of react components
  const catFactJSXList = catFactsList.map((catInfo) => {
    return(
      <CatFactCard {...catInfo} />
    );
  });


  return(
    <>
      <h1>useEffect with dynamically creating a list of components from raw data</h1>

      <section>
        <input type="text" value={inputData} onChange={(event) => handleChange(event)}/>
      </section>
      
      <ul>
        {/* Here we are using a method from React to render a list of JSX/Components */}
        {React.Children.toArray(catFactJSXList)}
      </ul>
    </>
)};


export default ExampleUseEffect;