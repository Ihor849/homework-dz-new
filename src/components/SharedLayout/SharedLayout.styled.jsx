import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

// import logoImage from 'images/logo-camera.png';
import background from '../../img/zvezdnoe-nebo.jpg';
// import propTypes from 'prop-types';


// ++++++++++++++++++++ NavigationUser +++++++++++++++++++++ //

export const StyledLink = styled(NavLink)`
  display:inline-block;
  padding: 5px 16px;
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



// ++++++++++++++++++++ UserMenu +++++++++++++++++++++ //
// 
export const ContainerUser = styled.div`
  display:flex;
  gap: 25px;
  align-items:center;
 z-index:100;
 /* padding-right:12px; */
  

`
export const IMG=styled.img`
width:32px;
/* margin-right:8px; */
`
export const Span=styled.span`
text-decoration: none;
  font-weight: 700;
  font-size: 1.5rem;
  color: rgb(255, 255, 255);
`
export const Button=styled.button`
text-decoration: none;
  font-weight: 700;
  font-size: 1.5rem;
  color: rgb(255, 255, 255);
  &:hover,
  &:focus {
    color: #2dd3d6;
    text-shadow: 3px 3px 20px #11da97, -2px 1px 30px  #11da97;
  }
`

export const Container = styled.div`
  display:block;
  height: 100vh;
  margin: 15px auto;
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


export const Header = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-around;
  
  
  overflow: visible;
  background-color: transparent;
  

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
    height: 4rem;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
   
  }
`;




