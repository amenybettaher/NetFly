import React, { useState } from 'react';
import axios from 'axios';

const AddProduct = ({ onAddProduct, onBuyFilm }) => {
  const [product, setProduct] = useState({ name: '', price: '', description: '' });
  const [boughtFilms, setBoughtFilms] = useState([]);

  const handleInputChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleAddProduct = async () => {
    try {
      const response = await axios.post('http://localhost:4000/api/film/add', product);

      if (response.status === 201) {
        onAddProduct();
        setProduct({ name: '', price: '', description: '' });
      } else {
        console.error('Error adding product:', response.statusText);
      }
    } catch (error) {
      console.error('Error adding product:', error.message);
    }
  };

  const handleBuyFilm = (film) => {
    // Add the bought film to the state
    setBoughtFilms((prevBoughtFilms) => [...prevBoughtFilms, film]);
    // Call the onBuyFilm function to update the Films component state
    onBuyFilm(film);
  };

  return (
    <div>
      <h2>Add Film</h2>
      <div>
        <label>Name:</label>
        <input type="text" name="name" value={product.name} onChange={handleInputChange} />
      </div>
      <div>
        <label>Price:</label>
        <input type="number" name="price" value={product.price} onChange={handleInputChange} />
      </div>
      <div>
        <label>Description:</label>
        <textarea name="description" value={product.description} onChange={handleInputChange}></textarea>
      </div>
      <button className="add-button" onClick={handleAddProduct}>
        Add Film
      </button>
      
      {/* Display the bought films */}
      <div>
        <h2>Bought Films</h2>
        <ul>
          {boughtFilms.map((film) => (
            <li key={film.id}>
              {film.name} - ${film.price}{' '}
              <button onClick={() => handleBuyFilm(film)}>Buy Again</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AddProduct;
