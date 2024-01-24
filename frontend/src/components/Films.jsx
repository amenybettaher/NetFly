import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Films() {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    const fetchAll = async () => {
      try {
        const res = await axios.get("http://localhost:4000/api/film/getAll");
        console.log('Response data:', res.data);
        setFilms(res.data);
      } catch (err) {
        console.log('Error fetching data:', err);
      }
    };
    fetchAll();
  }, []);
console.log("hello ");
  
    return (
        <div className='films'>
          {films.map((item) => (
            <div key={item.id}>
              <img src={item.img} alt={item.name} />
              <h1>Name: {item.name}</h1>
              <h1>Price: {item.price}</h1>
              <p>Description: {item.description}</p>
              <p>Category: {item.category}</p>
            </div>
          ))}
        </div>
      );
      

}

export default Films;
