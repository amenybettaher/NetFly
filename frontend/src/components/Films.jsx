

import React, { useState, useEffect } from 'react';
import axios from 'axios';


function Films() {
  const [films, setFilms] = useState([]);
  const [selectedFilm, setSelectedFilm] = useState(null);
  const [hoverRating, setHoverRating] = useState(0);

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

  const handleDelete = async (name) => {
    try {
      await axios.delete(`http://localhost:4000/api/film/${encodeURIComponent(name)}`);
      setFilms((prevFilms) => prevFilms.filter((film) => film.name !== name));
      // Optionally, you can clear the selectedFilm state here
    } catch (error) {
      console.error('Error deleting film:', error);
    }
  };

  const handleCloseDetails = () => {
    setSelectedFilm(null);
  };

  const handleRatingChange = (film, rating) => {
    // Update the film's rating on the server
    axios.post(`http://localhost:4000/api/film/rate`, { name: film.name, rating })
      .then(() => {
        // Update the rating in the local state
        setFilms((prevFilms) =>
          prevFilms.map((prevFilm) =>
            prevFilm.name === film.name ? { ...prevFilm, rating } : prevFilm
          )
        );
        // Update the selectedFilm state to reflect the new rating
        setSelectedFilm((prevSelectedFilm) =>
          prevSelectedFilm ? { ...prevSelectedFilm, rating } : null
        );
      })
      .catch((error) => {
        console.error('Error updating film rating:', error);
      });
  };

  const handleStarHover = (film, index) => {
    // Set the hoverRating state when hovering over a star
    setHoverRating(index + 1);
  };

  const handleStarLeave = () => {
    // Clear the hoverRating state when leaving the star area
    setHoverRating(0);
  };

  return (
    <div className='all-product'>
      {films.map((item) => (
        <div key={item.id} className={`product-list-item ${selectedFilm && selectedFilm.name !== item.name ? 'blur' : ''}`} onClick={() => handleFilmClick(item)}>
          <img src={item.img} alt={item.name} />
          <h1 className='product-list-item-title'>Name: {item.name}</h1>
          <h1 className='product-list-item-price'>Price: {item.price}</h1>
          <p className='product-list-item-description'>Description: {item.description.slice(0, 100)}...</p>
          <p className='product-list-item-category'>Category: {item.category}</p>

          {/* Conditionally render the rating stars only when a card is selected */}
          {selectedFilm && selectedFilm.name === item.name && (
            <div className='rating'>
              <p>Rating: {hoverRating || selectedFilm.rating}</p>
              {[...Array(5)].map((star, index) => (
                <span
                  key={index}
                  className={index < (hoverRating || selectedFilm.rating) ? 'star-filled' : 'star-empty'}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleRatingChange(selectedFilm, index + 1);
                  }}
                  onMouseEnter={() => handleStarHover(selectedFilm, index)}
                  onMouseLeave={handleStarLeave}
                >
                  &#9733;
                </span>
              ))}
            </div>
          )}

          <button onClick={() => handleDelete(item.name)}>Delete</button>
        </div>
      ))}

      {selectedFilm && (
        <div className='detailed-view'>
          <img src={selectedFilm.img} alt={selectedFilm.name} />
          <h1 className='product-list-item-title'>Name: {selectedFilm.name}</h1>
          <h1 className='product-list-item-price'>Price: {selectedFilm.price}</h1>
          <p className='product-list-item-description'>Description: {selectedFilm.description}</p>
          <p className='product-list-item-category'>Category: {selectedFilm.category}</p>

          <div className='rating'>
            <p>Rating: {hoverRating || selectedFilm.rating}</p>
            {[...Array(5)].map((star, index) => (
              <span
                key={index}
                className={index < (hoverRating || selectedFilm.rating) ? 'star-filled' : 'star-empty'}
                onClick={(e) => {
                  e.stopPropagation();
                  handleRatingChange(selectedFilm, index + 1);
                }}
                onMouseEnter={() => handleStarHover(selectedFilm, index)}
                onMouseLeave={handleStarLeave}
              >
                &#9733;
              </span>
            ))}
          </div>

          <button onClick={handleCloseDetails}>Close</button>
        </div>
      )}
    </div>
  );
}

export default Films;
