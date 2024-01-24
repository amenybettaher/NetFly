import React, { useState } from 'react';
import axios from 'axios';
import '../index.css'

function UpdateFilm({ changeView }) {
  const [img, setImg] = useState('');
  const [name, setName] = useState('');
  const [description, setDesc] = useState('');
  const [price, setPrice] = useState(0);
  const [category , setCategory] =useState('')

  const handleUpdate = () => {
    axios.put(`http://localhost:4000/api/film/update/${name}`, {
        img :img ,
        name: name,
        price: price,
        description: description,
        category : category
      })
      .then((response) => {
        console.log('Cake updated successfully:', response.data);
        changeView('Cakes');
      })
      .catch((error) => {
        console.error('Error updating cake:', error);
      });
  };

  return (
    <div className="add">
      <label>ImageUrl:</label>
      <input type="text" value={img} onChange={(e) => setImg(e.target.value)} />
      <label>Name:</label>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      <label>Price:</label>
      <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} />
      <label>Description:</label>
      <input type="text" value={description} onChange={(e) => setDesc(e.target.value)} />
      <label>Category:</label>
      <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} />
      <button onClick={handleUpdate}>Update</button>
    </div>
  );
}

export default UpdateFilm;