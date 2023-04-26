// import React, { useState, useEffect } from "react";

// const Veri =() => {
//   const [apodData, setApodData] = useState({});

//   useEffect(() => {
//     // fetch("https://api.nasa.gov/planetary/apod?api_key=damHKngoh3ySkAm6yEQjvqPlcQe6gx7Kf7iGdhJ3")
//     fetch("https://api.nasa.gov/planetary/apod?api_key=damHKngoh3ySkAm6yEQjvqPlcQe6gx7Kf7iGdhJ3&date=2012-03-14")
//     .then((response) => response.json())
//       .then((data) => setApodData(data))
//       .catch((error) => console.log(error));
//   }, []);

//   return (
//     <div>
//       <h1>{apodData.title}</h1>
//       <p>{apodData.explanation}</p>
//       <img src={apodData.url} alt={apodData.title} />
//     </div>
//   );
// }

// export default Veri;

import React, { useEffect, useState } from "react";
import axios from "axios";
import "./veri.css"

const veri =() => {
  const [arama, setArama] = useState("");
  const [data, setData] = useState({});
  
  useEffect(() => {
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=V5NbdIolfEEpLwqGgrGoqWDxVGI1a7if27rIzmVZ&date=${arama}`)
      .then(res => setData(res.data))
      .catch(err => console.log(err))
  }, [data, arama]);

  return (
    <div className="bar">
      <div className="deneme123">
      <input className="deneme" placeholder="YYYY-AA-GG" type="date" onChange={(e) => setArama(e.target.value)} />
      </div>
      <div>
      <h2>{data.title}</h2>
     <p>{data.explanation}</p>
     <div className="resim">
       <img  src={data.url} alt={data.title} />
       </div>
      </div>
    </div>
  )
}

export default veri;