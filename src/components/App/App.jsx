import { Routes, Route } from 'react-router-dom';

import SharedLayout from 'components/SharedLayout/SharedLayout';

import PhonebookPage from 'pages/PhonebookPage/PhonebookPage';
import LoginPage from 'pages/LoginPage/LoginPage';
import RegisterPage from 'pages/RegisterPage/RegisterPage';
import HomePage from 'pages/HomePage/HomePage';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { authOperations } from 'redux/auth';
import NotFoundPage from 'pages/NotFoundPage/NotFoundPage';
import PrivateRoute from 'components/routes/PrivateRoute';
import PublickRoute from 'components/routes/PublicRoute';

export const App = () => {
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(authOperations.fetchCurrentUser());
  // }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route exact="true" index element={<HomePage />} />

        <Route element={<PrivateRoute restricted redirectTo="/phonebook" />}>
          <Route path="/phonebook" element={<PhonebookPage />} />
        </Route>

        <Route element={<PublickRoute restricted redirectTo="/phonebook" />}>
          <Route path="login" element={<LoginPage />} />
        </Route>

        <Route element={<PublickRoute restricted redirectTo="/login" />}>
          <Route path="register" element={<RegisterPage />} />
        </Route>

        {/* <Route element={<PrivateRoute restricted redirectTo="/login" />}>
          <Route path="/phonebook" element={<PhonebookPage  />} />
        </Route>

        <Route element={<PublickRoute restricted redirectTo="/phonebook" />}>
          <Route path="login" element={<LoginPage />} />
        </Route>

        <Route element={<PublickRoute restricted redirectTo="/phonebook" />}>
          <Route path="register" element={<RegisterPage />} />
        </Route> */}

      </Route>
      <Route exact="true" path="*" element={<NotFoundPage />} />
    </Routes>
  );
};
