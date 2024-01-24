import React, { useState } from 'react';
import Films from './components/Films.jsx';

function App() {
  const [view, setView] = useState('Films');

  const changeView = (newView) => {
    setView(newView);
  };

  return (
    <div className="App">
      <nav>
      
        <h2 onClick={() => changeView('Films')}>Home</h2>
        <h2 onClick={() => changeView('AddFilm')}>Add Film</h2>
        <h2 onClick={() => changeView('UpdateFilm')}>Update Film</h2>
      </nav>
      <div>
        {view === 'Films' && <Films />}
        {/* {view === 'AddFilm' && <AddFilm changeView={changeView} />}
        {view === 'UpdateFilm' && <UpdateFilm changeView={changeView} />} */}
      </div>
    </div>
  );
}

export default App;



