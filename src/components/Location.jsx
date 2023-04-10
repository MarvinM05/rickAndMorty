import axios from "axios";

const Location = ({ locationData }) => {

  return (
    <div className="location">
      <div className="label-location">
        <samp>Nombre:</samp>
        <h3>{locationData?.name}</h3>
      </div>
      <div className="label-location">
        <samp>Tipo:</samp>
        <h3>{locationData?.type}</h3>
      </div>
      <div className="label-location">
        <samp>Dimensión:</samp>
        <h3>{locationData?.dimension}</h3>
      </div>
      <div className="label-location">
        <samp>Población:</samp>
        <h3>{locationData?.residents?.length}</h3>
      </div>
    </div>
  );
};

export default Location;
