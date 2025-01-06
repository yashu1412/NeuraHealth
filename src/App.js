import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import AI from './Pages/AI-Support';
import Login from './Pages/Login';
import Signup from './Pages/SignUp';
import DoctorSupportPage from './Pages/DoctorSupport';
import DoctorDetailsPage from './Components/Core/Doctor/DoctorDetails';
import './index.css';

function App() {
  return (
    <div className="App">
      {/* Define Routes */}
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/AI" element={<AI />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        
        {/* New Routes for Doctor Support Pages */}
        <Route path="/doctors" element={<DoctorSupportPage />} />
        <Route path="/doctors/:id" element={<DoctorDetailsPage />} />
        
      </Routes>
    </div>
  );
}

export default App;
