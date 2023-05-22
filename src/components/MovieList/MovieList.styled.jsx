import styled from "styled-components";

export const Box=styled.div`
  padding: 35px;

`

export const Title = styled.h1`
  font-size: 50px;
  
  text-transform: uppercase;
  background: linear-gradient(
    337deg,
    rgba(255, 60, 172) 0%,
      rgba(120, 75, 160) 50%,
      rgba(43, 134, 197) 100%);
  display: table;
  margin: 0 auto;
  color: white;
  border-radius: 6px;
  mix-blend-mode: multiply;
  padding: 5px 10px;
`;

export const ListFilms = styled.ul`
  display:flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap:16px;
  padding: 20px;
  
`;

export const WrapperBtn=styled.div`
   display:flex;
  justify-content: center;
  align-items: center;
  
  
`
export const ButtonLoad = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 8px 16px;
  border-radius: 2px;
  background: linear-gradient(
    337deg,
    rgba(255, 60, 172) 0%,
      rgba(120, 75, 160) 50%,
      rgba(43, 134, 197) 100%);
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  text-align: center;
  color:#ffffff;
  border: 0;
  text-decoration: none;
  cursor: pointer;
  font-family: inherit;
  font-size: 18px;
  line-height: 24px;
  font-style: normal;
  font-weight: 500;
  min-width: 180px;
   margin: 0 auto;
  
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
`;