import { useState, useEffect } from "react";

/**
 * Example component for showcasing useEffect
 */
const ExampleUseEffect = () => {
  const [ data, setData] = useState(null);
  const [ inputData, setInputData] = useState("");


  // We use useEffect for javascript logic we only want
  // to run at certain point in a components lifcycle
  useEffect(() => {
    console.log("fetching data")

    fetch("https://catfact.ninja/breeds")
      .then((response) => response.json())
      .then((data) => setData(data.data[0].breed))
  
  }, []);


  function handleChange(event) {
    const value = event.target.value;
    setInputData(() => value)
  };


  return(
    <>
      <h1>useEffect example</h1>
      <p>{data}</p>

      <section>
        <input type="text" value={inputData} onChange={(event) => handleChange(event)}/>
      </section>
    </>
  )
};


export default ExampleUseEffect;