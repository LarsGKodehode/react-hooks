// React.useEffect makes a comparison between the values of every element you put in the dependency array
// We will not go into depth 

/**
 * Component for showcasing of what useEffect considers to be equal,
 * It is an aproximation and not what React.useEffect actually does 
 */
 const ComparisonExample = () => {
  return(
    <>
      <h2>Comparison Sample</h2>
      <p></p>

      <ul>
        <li>
          <p>Number: 3 === 3 is: <span>{3 === 3 ? "true" : "false"}</span></p>
        </li>
        <li>
          <p>String: "Hello" === "Hello" is: <span>{"Hello" === "Hello" ? "true" : "false"}</span></p>
        </li>
        <li>
          <p>Bool: false === false is: <span>{false === false ? "true" : "false"}</span></p>
        </li>
        <li>
          <p>Array: [1, 2] === [1, 2] is: <span>{[1, 2] === [1, 2] ? "true" : "false"}</span></p>
        </li>
        <li>
          <p>Object: {`{number: 9} === {number: 9}`} is: <span>{{number: 9} === {number: 9} ? "true" : "false"}</span></p>
        </li>
      </ul>
    </>
  );
};

export default ComparisonExample;