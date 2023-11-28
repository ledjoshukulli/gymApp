import React, { useState } from 'react';
import Navbar from "../src/components/reusable-components/Navbar.tsx";
import LoginForm from "./LoginForm.tsx";
import Cover2 from "./materials/cover2.jpg";
import useAuthStore from './context';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ExerciseList from "./components/exerciseList/ExerciseList.tsx";
import Home from './components/home/Home.tsx';

const appStyle = {
  backgroundImage: `url(${Cover2})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

const formContainerStyle = {
  padding: "20px",
  borderRadius: "8px",
  marginTop: "20px",
};

const mockUser = {
  username: 'ledjoshukulli',
  password: 'Ledjo1999$',
};

function App() {
 // Access isLoggedIn from Zustand store
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exerciseList" element={<ExerciseList />} />
      </Routes>
  </Router>
  );
};

export default App;
