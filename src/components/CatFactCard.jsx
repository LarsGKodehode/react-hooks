/**
 * Display catfacts
 */
const CatFactCard = (props) => {
  const { breed, country, origin, coat, pattern } = props;

  return(
    <div>
      <ul style={{"backgroundColor": "orange", "border": "1px solid black"}}>
        <li>Breed: {breed}</li>
        <li>Coat: {coat}</li>
        <li>Country: {country}</li>
        <li>Origin: {country}</li>
      </ul>
    </div>
  );
};

export default CatFactCard;