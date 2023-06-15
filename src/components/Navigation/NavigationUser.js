
import React from 'react';
import { StyledLink } from 'components/SharedLayout/SharedLayout.styled';


const Navigation = () => (
  <div>
    <StyledLink to="/"
     exact
     >
      Главная
    </StyledLink>

    <StyledLink
      to="/phonebook"
      exact
    >
      Phonebook
    </StyledLink>
  </div>
);

export default Navigation;