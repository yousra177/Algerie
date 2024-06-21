import React from 'react'
import { Link } from 'react-router-dom'
import sps from "../assets/2.jpg";
import evnt from "../assets/3.jpg";
import prog from "../assets/4.jpg";

export default function About() {
  return (
    <>

     <br />
     <br />
      <h1>Know Algerian tardictionnel things</h1>
      <br />
      <br />
      <br />
<div className="cardsContainer">
        <div className="card" style={{ width: "18rem" }}>
          <img className="card-img-top" src={sps} alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">tardictionnel cloth</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </p>
            <Link to="/cloth" className="btn btn-primary">Go somewhere</Link>          </div>
        </div>
        <div className="card" style={{ width: "18rem" }}>
          <img className="card-img-top" src={evnt} alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">tardictionnel Musique</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </p>
            <Link to="/musq" className="btn btn-primary">Go somewhere</Link>          </div>
        </div>
        <div className="card" style={{ width: "18rem" }}>
          <img className="card-img-top" src={prog} alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">tardictionnel food</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </p>
            <Link to="/food" className="btn btn-primary">Go somewhere</Link>          </div>
        </div>
      </div>   
       </>
  );
}
