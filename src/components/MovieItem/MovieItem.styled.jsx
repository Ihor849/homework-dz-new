import styled from 'styled-components';

export const Item = styled.li`
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
export const Img = styled.img`
    display:flex;
    width: 350px;
`
export const TitleBox=styled.div`
width: 350px;
 display:flex;
 justify-content: center;
 align-items: center;

`
export const Title = styled.h2`
padding-top:15px;
text-align:center;
    color: #ffffff
`