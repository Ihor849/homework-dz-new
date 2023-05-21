import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

// import logoImage from 'images/logo-camera.png';
import background from 'components/img/zvezdnoe-nebo.jpg';
// import propTypes from 'prop-types';

export const Container = styled.div`
  display:block;
  height: 100vh;
  margin: 0 auto;
  padding: 0 16px;

  &:before {
    content: '';
    background-image: url(${background});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -10;
    opacity: 0.3;
  
  }
`;
export const NavLinkItems=styled.ul`
  display: flex;
  gap: 60px;
`

export const Header = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 16px;
  gap: 12px;
  height: 80px;
  overflow: visible;
  background-color: transparent;
  /* z-index: 1; */

  &:before {
    content: '';
    background-image: linear-gradient(
      225deg,
      rgba(255, 60, 172) 0%,
      rgba(120, 75, 160) 50%,
      rgba(43, 134, 197) 100%
    );
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 5rem;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
   
  }

  > nav {
    display: flex;
  }
`;


export const StyledLink = styled(NavLink)`
  display:flex;
  align-items: center;
  gap:10px;
  text-decoration: none;
  font-weight: 700;
  font-size: 1.5rem;
  color: rgb(255, 255, 255);
  transition: all 0.3s ease-in-out;
  position: relative;
  

  &:hover,
  &:focus {
    color: #2dd3d6;
    text-shadow: 3px 3px 20px #11da97, -2px 1px 30px  #11da97;
  }

  &.active:after {
    content: '';
    width: 100%;
    height: 3px;
    background: #11da97;
    display: block;
    border-radius: 2px;
    position: absolute;
    bottom: -5px;
    left: 0;
  }

`;

