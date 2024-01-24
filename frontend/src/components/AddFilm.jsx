import React, { useState } from 'react';
import axios from 'axios';

function AddFilm({ changeView }) {
  const [name, setName] = useState('');
  const [description, setDesc] = useState('');
  const [cover, setCover] = useState('');
  const [price, setPrice] = useState(0);
  const [category, setCategory] = useState('');

  const handleAddFilm = () => {
    axios
      .post('http://localhost:4000/api/film/add', {
        name: name,
        cover: cover,
        description: description,
        price: price,
        category: category,
      })
      .then((response) => {
        console.log('Cake added successfully:', response.data);
        changeView('Cakes');
      })
      .catch((error) => {
        console.error('Error adding cake:', error);
      });
  };

  return (
    <div className="add">
      <label>Name:</label>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      <label>Cover:</label>
      <input type="text" value={cover} onChange={(e) => setCover(e.target.value)} />
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
