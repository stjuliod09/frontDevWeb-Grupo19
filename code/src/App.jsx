import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import CatList from './components/CatList';
import CatDetail from './components/CatDetail';
import EditCat from './components/EditCat';
import AdoptionForm from './components/AdoptionForm';
import AdoptionRequests from './components/AdoptionRequests';
import Donations from './components/Donations';
import PostCat from './components/PostCat';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login-admin" element={<Login />} />
        <Route path="/" element={<CatList />} />
        <Route path="/cats/:id" element={<CatDetail />} />
        <Route path="/edit-cat/:id" element={<EditCat />} />
        <Route path="/adoption" element={<AdoptionForm />} />
        <Route path="/adoption-requests" element={<AdoptionRequests />} />
        <Route path="/donations" element={<Donations />} />
        <Route path="/cats/create" element={<PostCat />} />
      </Routes>
    </Router>
  );
}

export default App;
