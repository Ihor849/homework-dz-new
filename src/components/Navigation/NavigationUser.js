
import React from 'react';
import { StyledLink } from 'components/SharedLayout/SharedLayout.styled';
import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth';
import AuthNav from './AuthNav';


const Navigation = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return(
    <div>
    <StyledLink to="/"
     exact="true"
     >
      Главная
    </StyledLink>
    {isLoggedIn && <StyledLink
      to="/phonebook"
      exact="true"
    >
      Phonebook
    </StyledLink> }
    
  </div>
  )
  
}
  


export default Navigation;