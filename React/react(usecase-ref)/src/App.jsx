// App.jsx
// import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Counter from './components/Counter'; // Adjust the import path as necessary
import Navbar from './components/Navbar';
import Refex from './components/Refex';
const App = () => {
  return (
<>
      <Navbar/>
        <Routes>
          <Route path="/counter" element={<Counter/>} />
          <Route path="/refex" element={<Refex/>} />
        </Routes>
</>

  );
};

export default App;