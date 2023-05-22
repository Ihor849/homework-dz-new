import { NavLink } from "react-router-dom";
import styled from "styled-components"

export const Wrapper=styled.div`
  display: flex;
  align-items: center;
`

export const  Linkback=styled(NavLink)`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width:150px;
  padding: 5px 10px;
  margin-top: 10px;
  border:1px solid  #0a9ab3;
  border-radius: 15px;
  font-size: 26px;
  font-weight: bold;
  margin-right: auto;
  &:hover,
  &:focus {
    color: #c312b7;
    text-shadow: 3px 3px 20px #0a9ab3, -2px 1px 30px  #0ca3c4;
  } 
`
export const CastNavLink=styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width:150px;
  padding: 5px 10px;
  
  border:1px solid  #0a9ab3;
  border-radius: 15px;
  font-size: 26px;
  font-weight: bold;
  margin-right: auto;
  &:hover,
  &:focus {
    color: #c312b7;
    text-shadow: 3px 3px 20px #0a9ab3, -2px 1px 30px  #0ca3c4;
  } 
`

export const FilmWrapper = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 12px;
  margin-bottom: 12px;
`;
export const Description=styled.div`
width: 800px;
  display: flex;
  flex-direction: column;
  background-color:#ffffff;
  padding:12px;
  border: 5px solid #c312b7;
  border-radius: 6px;

`
export const FilmImg = styled.img`
  max-width: 450px;
  background: #424242;
  border-radius: 15px;
`;

export const FilmTitle = styled.h2`

  font-size: 26px;
  margin-bottom: 12px;
  text-align: center;
`;

export const FilmSubTitle = styled.h3`
  font-size: 20px;
  margin-bottom: 6px;
`;

export const FilmDescr = styled.p`
  font-size: 20px;
  color: #141313;
  margin-bottom: 12px;
`;

export const StyledListDescr = styled.ul`
  font-size: 20px;
  display: flex;
  gap: 18px;
  padding: 0;


  /* border-radius: 20px; */
  color: #141313;
  margin-bottom: 12px;
`;
export const StyledList = styled.ul`
  display: flex;
  gap: 18px;
  padding: 14px;

  border-radius: 20px;
`;
export const ListItem = styled.li`
  span {
    color: #0fdfd5;
  }

  a:hover,
  a:focus,
  a:active {
    color: #0fdfd5;
    span {
      color: white;
    }
  } 
`;
export const Genre=styled.li`

padding: 5px 10px;
  
   border-radius:15px;
   font-size: 20px;
   font-weight: bold;
   background-color: #c312b7;
   color: #ffffff;

`
export const Release=styled.p`
display:flex;
gap: 15px;
align-items:center;
font-size: 20px;
font-weight: bold;
  
  & > span{
    padding: 5px 10px;
    border-radius:15px;
    background-color: #c312b7;
    color: #ffffff;
  }
`