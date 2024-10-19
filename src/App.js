import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import HomePage from './pages/HomePage';
import DetailPage from './pages/DetailPage';
import './App.css'

function App() {
  return (
    <RecoilRoot>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/detail/:id" element={<DetailPage />} />
        </Routes>
      </Router>
    </RecoilRoot>
  );
}

export default App;
