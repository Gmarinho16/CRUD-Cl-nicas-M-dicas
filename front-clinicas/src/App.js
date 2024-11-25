import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ClinicaList from './components/ClinicaList';
import ClinicaForm from './components/ClinicaForm';
import ClinicaDetails from './components/ClinicaDetails';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ClinicaList />} />
        <Route path="/criar" element={<ClinicaForm />} />
        <Route path="/editar/:id" element={<ClinicaForm />} />
        <Route path="/detalhes/:id" element={<ClinicaDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
