// Category.jsx

import React, { useState, useEffect } from 'react';
import axios from 'axios';


function Category({ category }) {
  const [films, setFilms] = useState([]);

  const fetchCategory = async () => {
    try {
      if (category) {
        const res = await axios.get(`http://localhost:4000/api/film/getByCategory/${category}`);
        console.log('Response data:', res.data);
        setFilms(res.data);
      }
    } catch (err) {
      console.log('Error fetching data:', err);
    }
  };

  useEffect(() => {
    fetchCategory();
  }, [category]);

  if (!category) {
    return <div>Please select a category</div>;
  }

  return (
    <div>
      <h2>{category.charAt(0).toUpperCase() + category.slice(1)} in Category: {category}</h2>
      <div className="films-container">
        {films.map((item) => (
          <div key={item.id} className="film-card">
            <img src={item.img} alt={item.name} />
            <h1 id='catName'>Name: {item.name}</h1>
            <p id='catPrice'>Price: {item.price}</p>
            <p id='catDes'>Description: {item.description}</p>
            <p id='cat'>Category: {item.category}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Category;
