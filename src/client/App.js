import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Home from './Components/Home/Home';
import CreateCard from './Components/CreateCard/CreateCard';
import Navbar from './Components/Navbar/Navbar';
import FlashCard from './Components/ShowCard/FlashCards';
import LandingPage from './Components/LandingPage/LandingPage';
import CollectionsDisplay from './Components/CollectionsDisplay/CollectionsDisplay.jsx'
import { setEmail, setUser_id } from './Redux/slices/userSlice';
import axios from 'axios';
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
        //what is in res.data
        // console.log('what is in res.data: ', res.data);
        //update logged in user_id to the state
        dispatch(setUser_id(res.data._id));
      }
    });
  }, []);
  const email = useSelector((state) => state.user.email);
  //we should be able to access user_id at any component by useSelector hook like below
  // const user_id = useSelector((state) => state.user.user_id);
  

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
              <Route exact path="/library" element={<CollectionsDisplay />} />
              <Route exact path='/cards' element={<Home />}/>
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
