import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Films() {
  const [films, setFilms] = useState([]);
  const [selectedFilm, setSelectedFilm] = useState(null);

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

  const handleFilmClick = (film) => {
    setSelectedFilm(film);
  };

  const handleCloseDetails = () => {
    setSelectedFilm(null);
  };

  return (
    <div className='all-product'>
      {films.map((item) => (
        <div key={item.id} className='product-list-item' onClick={() => handleFilmClick(item)}>
          <img src={item.img} alt={item.name} />
          <h1 className='product-list-item-title'>Name: {item.name}</h1>
          <h1 className='product-list-item-price'>Price: {item.price}</h1>
          <p className='product-list-item-description'>Description: {item.description.slice(0, 100)}...</p>
          <p className='product-list-item-category'>Category: {item.category}</p>
        </div>
      ))}

      {selectedFilm && (
        <div className='detailed-view'>
          <img src={selectedFilm.img} alt={selectedFilm.name} />
          <h1 className='product-list-item-title'>Name: {selectedFilm.name}</h1>
          <h1 className='product-list-item-price'>Price: {selectedFilm.price}</h1>
          <p className='product-list-item-description'>Description: {selectedFilm.description}</p>
          <p className='product-list-item-category'>Category: {selectedFilm.category}</p>
          <button onClick={handleCloseDetails}>Close</button>
        </div>
      )}
    </div>
  );
}

export default Films;
