import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import './App.css';

import Home from './Home';
import Most_Visited_Places from './Most_Visited_Places';
import Book_Now from './Book_Now';
import About_us from './About_us';
import Contect from './Contect';
// import Destination from './Destination';
import Flight from './Flight';
import Package from './Package'

function App() {
  return (
    <div>
      <Router>
      
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path='/Most_Visited_places' element={<Most_Visited_Places/>}></Route>
          <Route path='/book-now' element={<Book_Now/>}></Route>
          <Route path='/about' element={<About_us/> }></Route>
          <Route path='/contact' element={<Contect/>}></Route>
          <Route path='/packages' element={<Package/>}></Route>
          <Route path='/flights' element={<Flight/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
