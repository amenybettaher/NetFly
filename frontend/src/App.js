import React, { useState } from 'react';
import axios from 'axios';
import Films from './components/Films.jsx';
import Category from './components/Category.jsx';
import logo from './logo/logo.png';
import Search from './components/Search.jsx';

function App() {
  const [view, setView] = useState('Films');
  const [category, setSelectedCategory] = useState('');
  const [filteredData, setFilteredData] = useState(null);

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
      setFilteredData(res.data ? [res.data] : []);
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

        <select onChange={handleCategoryChange} value={category}>
        <option value="">Show all</option>
          <option value="Action">Action</option>
          <option value="Comedy">Comedy</option>
          <option value="Horror">Horror</option>
          <option value="Drama">Drama</option>
          <option value="Animated">Animated</option>
          <option value="Romantic">Romantic</option>
        </select>
      </nav>
      <div>
        <Search handleSearch={handleSearch} />
        {view === 'Category' && <Category category={category} />}
        {view === 'Films' && <Films data={filteredData || []} />}
        {/* {view === 'AddFilm' && <AddFilm changeView={changeView} />}
        {view === 'UpdateFilm' && <UpdateFilm changeView={changeView} />} */}
      </div>
    </div>
  );
}

export default App;


