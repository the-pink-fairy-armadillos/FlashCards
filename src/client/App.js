import './styles.scss';
import './index.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import CreateCard from './Components/CreateCard/CreateCard';
import FlashCard from './Components/ShowCard/FlashCards';
import Home from './Components/Home/Home';
import LandingPage from './Components/LandingPage/LandingPage';
import Navbar from './Components/Navbar/Navbar';
import axios from 'axios';
import { setEmail } from './Redux/slices/userSlice';

const App = () => {
  const leftItems = {
    home: '/library',
  };

  // On first render, get user data
  const dispatch = useDispatch();
  useEffect(() => {
    const response = axios({
      method: 'get',
      withCredentials: true,
      url: 'http://localhost:8080/auth/user',
    }).then((res) => {
      if (res.data) {
        dispatch(setEmail(res.data.email));
      }
    });
  }, []);
  const email = useSelector((state) => state.user.email);

  return (
    <>
      {!email ? (
        <LandingPage />
      ) : (
        <BrowserRouter>
          {/* Component 'Navbar' must be placed within browser router so that navbar links work */}
          <Navbar leftItems={leftItems} />
          <div>
            <Routes>
              <Route exact path="/" element={<LandingPage />} />
              <Route exact path="/library" element={<Home />} />
              <Route exact path="/createCard" element={<CreateCard />} />
              <Route exact path="/flashcard/:id" element={<FlashCard />} />
            </Routes>
          </div>
        </BrowserRouter>
      )}
    </>
  );
};

export default App;
