import styled from "styled-components"

// export const ListFilms = styled.ul`
//   margin-top: 12px;
// `;
// export const ItemFilms = styled.li`
//   font-weight: 400;
//   font-size: 14px;

//   background-color: #2a2a2a;
//   border-radius: 14px;

//   :not(:last-child) {
//     margin-bottom: 6px;
//   }

//   a:hover,
//   a:focus {
//     background-color: #ffc700;
//     color: #111111;
//   }

//   a {
//     display: block;
//     padding: 16px 16px;
//   }
// `;
export const Box=styled.div`
  padding: 35px;

`
export const Wrapper = styled.div`
  display:flex;
  justify-content: center;
  align-items: center;
  max-width: 350px;
  font-weight: 400;
  font-size: 14px;

  a:hover,
  a:focus {
    background-color: #00ffff;
    color: #111111;
  }

  a {
    display: block;
    align-items: center;
    gap: 6px;
    padding: 16px 16px;
  }
`;
export const ListFilms = styled.ul`
  display:flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap:10px;
 
`;
export const FilmItem = styled.li`
    display:flex;
    align-items: center;
`
export const Img = styled.img`
    display:flex
`
export const Title = styled.h2`
    text-align:left;
`
