function CityList(props) {
  // const cities = props.cities;
  const { cities } = props;

  const kk = {
  	color: "blue",
  	fontFamily: "serif"
  }

  return (
    <div style={kk}>
      <h1>CityList</h1>

      <ul>
        {cities.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ul>
    </div>
  );
}

export default CityList;
