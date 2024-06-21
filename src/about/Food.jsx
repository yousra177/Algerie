import React, { useEffect, useState } from 'react'
import axios from 'axios';
import '../Components/About_feed'
import About_feed from '../Components/About_feed';
export default function Food() {
    const [donnes, setDonnes] = useState(null);

useEffect(() => {
  axios.get('https://jsonplaceholder.typicode.com/photos')
    .then((response) => {
      setDonnes(response.data); // Update the state with fetched data
    })
    .catch((error) => {
      console.log(error);
    });
}, []);
  return (
    <div>
      <h1>food</h1>

      {donnes ? (
      donnes.map((d) => (
        <About_feed key={d.id} data={d} /> // Assuming User component accepts 'data' prop
      ))
    ) : (
      <p>No data</p>
    )}
    </div>
  )
}
