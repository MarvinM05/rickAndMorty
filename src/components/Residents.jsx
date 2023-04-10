import axios from "axios";
import { useState, useEffect } from "react";

const Residents = ({ rickData }) => {
  const [reseidentDetail, setResidentDetail] = useState([]);

  console.log(reseidentDetail)

  
  
  useEffect(() => {
    axios
      .get(rickData)
      .then((res) => setResidentDetail(res.data))
      .catch((error) => console.log(error));
    

  }, []);

  return (
    <li className="card">
      <div className="header-card">
        <img className="card-img" src={reseidentDetail.image} alt="" />
        <div className="status">
          <i className="bx bxs-circle"
          style={{color:reseidentDetail.status === 'Alive' ? '#8EFF8B' : reseidentDetail.status && reseidentDetail.status === 'Dead' ? 'red' : 'grey'}}></i>
          <h4>{reseidentDetail.status}</h4>
        </div>
      </div>
      <div className="name">
        <h2>{reseidentDetail.name}</h2>
      </div>
      <div className="line">-</div>
      <div className="info">
        <div className="label-titles">
          <samp>Species</samp>
          <span>Origin</span>
          <span>Times appear</span>
        </div>
        <div className="label-info">
          <h4>{reseidentDetail.species}</h4>
          <h4>{reseidentDetail.origin?.name}</h4>
          <h4>{reseidentDetail.episode?.length}</h4>
        </div>
      </div>
    </li>
  );
};

export default Residents;
