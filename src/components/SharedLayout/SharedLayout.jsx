import { Suspense } from 'react';
import { Outlet} from 'react-router-dom';
import { ReactComponent as Clapperboard } from 'components/img/icons/Clapperboard.svg';
import { ReactComponent as Popcorn } from 'components/img/icons/Popcorn.svg';
import {Container, Header, StyledLink,NavLinkItems} from './SharedLayout.styled';





const SharedLayouts = () => {
  return (
    <Container>
      <Header>
        <nav>
          <NavLinkItems>
            <li>
              <StyledLink to="/">
              <Popcorn/> Home
              </StyledLink>
            </li>
            <li>
              <StyledLink to="/register">
                <Clapperboard/> Register
              </StyledLink>
            </li>
            <li>
              <StyledLink to="/login">
                <Clapperboard/> Login
              </StyledLink>
            </li>
            <li>
              <StyledLink to="/contacts">
                <Clapperboard/>Contacts
              </StyledLink>
            </li>
          </NavLinkItems>
        </nav>
      </Header>
      <Suspense >
        <Outlet />
      </Suspense>
    </Container>
  );
};

export default SharedLayouts;

// fallback={<div>Loading page...</div>}