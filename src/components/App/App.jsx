import {Routes,Route} from 'react-router-dom'

import SharedLayout from 'components/SharedLayout/SharedLayout'

import PhonebookPage from 'pages/PhonebookPage/PhonebookPage'
import LoginPage from 'pages/LoginPage/LoginPage'
import RegisterPage from 'pages/RegisterPage/RegisterPage'
import HomePage from 'pages/HomePage/HomePage'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { authOperations } from 'redux/auth'





export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);


  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route exact index element={<HomePage />} />
        <Route path="/phonebook" element={<PhonebookPage/>} />
        <Route path="/register" element={<RegisterPage/>} />
        <Route path="/login" element={<LoginPage/>} />
        
         
      </Route>
    </Routes>
  );
};