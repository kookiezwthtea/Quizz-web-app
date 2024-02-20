import './App.css';
import React, { useState, useEffect } from 'react';
import NavBar from './components/NavBar.js';
import Footer from './components/Footer.js';
import { BrowserRouter, Route, Routes, Switch } from 'react-router-dom';
import PrivacyPage from './pages/PrivacyPage';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import QuizDetail from './pages/MathsQuizzes/QuizDetail';
import QuizDetail1 from './pages/TimeLimitQuizzes/QuizDetail';
import QuizDetail2 from './pages/FunQuizzes/QuizDetail';
import QuizDetail3 from './pages/CSQuizzes/QuizDetail';
import MathQuizzes from './pages/MathsQuizzes';
import TimeLimitQuizzes from './pages/TimeLimitQuizzes';
import FunQuizzes from './pages/FunQuizzes';
import CSQuizzes from './pages/CSQuizzes';
import SearchComponent from './components//SearchComponent';
import allData from './components/allData';

const App = () => {
  
  return (
   
    <>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route
          path='/'
          element={<HomePage />} />
        <Route
          path='/privacy'
          element={<PrivacyPage />} />
        <Route
          path='/*'
          element={<NotFoundPage />} />
        <Route path="/maths" exact element={<MathQuizzes />} />
        <Route path="/quiz1/:id" element={<QuizDetail />} />

        <Route path="/timelimit" exact element={<TimeLimitQuizzes />} />
        <Route path="/quiz2/:id" element={<QuizDetail1 />} />

        <Route path="/fun" exact element={<FunQuizzes />} />
        <Route path="/quiz3/:id" element={<QuizDetail2 />} />

        <Route path="/cs" exact element={<CSQuizzes />} />
        <Route path="/quiz4/:id" element={<QuizDetail3 />} />
      </Routes>
    </BrowserRouter><Footer /></>
  );
};

export default App;
