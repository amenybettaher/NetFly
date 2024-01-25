import React, { useState } from 'react';
import axios from 'axios';
import Films from './components/Films.jsx';
import AddFilm from './components/AddFilm.jsx';
import UpdateFilm from './components/UpdateFilm.jsx';
import Category from './components/Category.jsx';
import Search from './components/Search.jsx';
import logo from './logo/logo.png';

import Footer from './components/Footer.jsx';

function App() {
  const [term, setTerm] = useState("");

  const [view, setView] = useState('Films');
  const [category, setSelectedCategory] = useState('');

  const changeView = (newView) => {
    setView(newView);
  };

  const handleCategoryChange = (event) => {
    const newCategory = event.target.value;
    setSelectedCategory(newCategory);

    if (newCategory) {
      changeView('Category');
    }
  };

  const handleSearch = async (searchTerm) => {
    try {
      const res = await axios.get(`http://localhost:4000/api/film/getOne/${searchTerm}`);
    } catch (err) {
      console.log('Error searching films:', err);
    }
  };
  
    
  

  return (
    <div className="App">
      <nav className='navbar'>
        <img className='logo' src={logo} alt="Logo" />
        <h2 onClick={() => changeView('Films')}>Home</h2>
        <h2 onClick={() => changeView('AddFilm')}>Add Film</h2>
        <h2 onClick={() => changeView('UpdateFilm')}>Update Film</h2>
        <h2 onClick={() => changeView('FavoriteList')}>FavoriteList</h2>


        <select onChange={handleCategoryChange} value={category}>
        <option value="">Show all</option>
          <option value="Action">Action</option>
          <option value="Comedy">Comedy</option>
          <option value="Horror">Horror</option>
          <option value="Animated">Animated</option>
          <option value="Romantic">Romantic</option>
        </select>
      </nav>
      <div>
        <Search handleSearch={handleSearch}  set={setTerm}/>
        {view === 'Category' && <Category category={category} />}
        {view === 'Films' && <Films term={term} />}
        {view === 'AddFilm' && <AddFilm changeView={changeView} />}
        {view === 'UpdateFilm' && <UpdateFilm changeView={changeView} />}
      </div>
      <Footer />
    </div>
  );
}

export default App;


