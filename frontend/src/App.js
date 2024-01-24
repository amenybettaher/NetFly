import React, { useState } from 'react';
import Films from './components/Films.jsx';
import Category from './components/Category.jsx'
import logo from './logo/logo.png'
import Search from './components/Search.jsx'
function App() {
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

  return (
    <div className="App">
      <nav>
      <img src={logo}/>
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
        {view === 'Films' && <Films />}
        {/* {view === 'AddFilm' && <AddFilm changeView={changeView} />}
        {view === 'UpdateFilm' && <UpdateFilm changeView={changeView} />} */}
        {view=== 'Category' && <Category  category={category} />}
        <Search/>
      </div>
    </div>
  );
}

export default App;



