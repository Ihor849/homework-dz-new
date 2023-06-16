import { useSelector } from 'react-redux';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
// import { ReactComponent as Clapperboard } from '../../img/icons/Clapperboard.svg';
// import { ReactComponent as Popcorn } from '../../img/icons/Popcorn.svg';
import { Container, Header } from './SharedLayout.styled';
import Navigation from 'components/Navigation/NavigationUser';
import AuthNav from 'components/Navigation/AuthNav';
import UserMenu from 'components/Navigation/UserMenu';
import { authSelectors } from 'redux/auth';

const SharedLayouts = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <Container>
      <Header>
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </Header>
      <Suspense>
        <Outlet />
      </Suspense>
    </Container>
  );
};

export default SharedLayouts;
