import styled from "styled-components"

// export const <GoBackLink>GoBackLink</GoBackLink> = styled.span`
//   a {
//     position: relative;
//     padding-left: 12px;
//   }

//   a::before {
//     content: '';
//     display: block;

//     border-color: #ffc700;
//     border-style: solid;
//     border-width: 0 0 2px 2px;
//     height: 6px;
//     left: 0;
//     position: absolute;
//     width: 6px;
//     margin-top: -4px;
//     top: 50%;

//     transform: rotate(45deg);
//     -webkit-transform: rotate(45deg);
//   }

//   /* span {
//     color: #ffc700;
//   } */

//   :hover,
//   :focus {
//     color: #ffc700;
//     a::before {
//       border-color: white;
//     }
//     /* span {
//       color: white;
//     } */
//   }
// `;
export const GoBackLink = styled.div`
  display: flex;
  align-items: center;
  cursor:pointer;
  &:hover,
  &:focus {
    color: #c312b7;
    text-shadow: 3px 3px 20px #0a9ab3, -2px 1px 30px  #0ca3c4;
  }
  
`
export const Wrapper=styled.span`
  font-size: 26px;
  font-weight: bold;
  
  
`

export const FilmWrapper = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 12px;
  margin-bottom: 12px;
`;

export const FilmImg = styled.img`
  max-width: 182px;
  background: #424242;
  border-radius: 15px;
`;

export const FilmTitle = styled.h2`
  font-size: 26px;
  margin-bottom: 12px;
`;

export const FilmSubTitle = styled.h3`
  font-size: 16px;
  margin-bottom: 6px;
`;

export const FilmDescr = styled.p`
  font-size: 16px;
  color: #141313;
  margin-bottom: 12px;
`;

export const StyledListDescr = styled.ul`
  font-size: 16px;
  display: flex;
  gap: 18px;
  padding: 0;

  border-radius: 20px;
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