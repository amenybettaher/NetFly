

import React, { useState } from 'react';
import axios from 'axios';
import '../addFilm.css'; 

function AddFilm({ changeView }) {
  const [img, setImg] = useState('');
  const [name, setName] = useState('');
  const [description, setDesc] = useState('');

  const [price, setPrice] = useState(0);
  const [category, setCategory] = useState('');

  const handleAddFilm = () => {
    axios
      .post('http://localhost:4000/api/film/add', {
        img: img,
        name: name,
        description: description,
        price: price,
        category: category,
      })
      .then((response) => {
        console.log('Film added successfully:', response.data);
        changeView('Films');
      })
      .catch((error) => {
        console.error('Error adding film:', error);
      });
  };

  return (
    <div className="add-form">
      <label>ImageUrl:</label>
      <input type="text" value={img} onChange={(e) => setImg(e.target.value)} />

      <label>Name:</label>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />

      <label>Description:</label>
      <input type="text" value={description} onChange={(e) => setDesc(e.target.value)} />

      <label>Price:</label>
      <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} />

      <label>Category:</label>
      <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} />

      <button onClick={handleAddFilm}>Add Now</button>
      <div className="image-overlay">
        <div className="overlay"></div>
      </div>
    </div>
  );
}

export default AddFilm;

