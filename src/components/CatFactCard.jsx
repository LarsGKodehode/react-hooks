/**
 * Display catfacts
 */
const CatFactCard = (props) => {
  // When destructuring props and there is
  const {
    breed,
    country,
    origin,
    coat,
    pattern
  } = props;

  return(
    // This form of inline styling is generally frowned upon
    // We heavly advise to choose one styling library and use that one throughout your application
    <div style={{"marginTop": "1em"}}>
      <ul style={{
        "backgroundColor": "orange",
        "border": "1px solid black",
        "textAlign": "left",
        }}
      >
        <li>Breed: {breed}</li>
        <li>Country: {country}</li>
        <li>Origin: {origin}</li>
        <li>Coat: {coat}</li>
        <li>Pattern: {pattern}</li>
      </ul>
    </div>
  );
};

export default CatFactCard;