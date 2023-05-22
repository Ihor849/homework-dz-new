
import { Link } from 'react-router-dom'
import styled from "styled-components"

export const Box=styled.div`
display:flex;
    align-items: center;
    flex-direction: column;
  /* padding: 35px; */

`
export const StyledLink=styled(Link)`
  display:flex;
    align-items: center;
    justify-content:center;
`
export const BoxImg=styled.div`
  display:flex;
    align-items: center;
    flex-direction: column;
    
`
export const TitleBox=styled.div`
    padding:12px;
    text-align: center;

`
export const ImgWrapper=styled.div`
display:flex;
align-items:center;
justify-content: center;
  width: 350px;
  height: 525px;
`

export const FilmItem = styled.li`
    height: 700px;
    width: 400px;
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    background-color: rgb(86, 100, 100);
    border-radius: 6px;
    
  }
  :hover,
  :focus {
    background-color: #00ffff;
  
`
export const ListFilms = styled.ul`
   display:flex; 
  align-items: center;
  justify-content: center;
  flex-wrap: wrap; 
  gap:16px;
  padding: 20px;
  
`;


export const Title = styled.h2`
padding-top:15px;
    
    color: #ffffff
`
export const Img = styled.img`
    display:flex;
    width: 350px;
`

