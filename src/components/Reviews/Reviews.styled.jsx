import styled from 'styled-components';

export const StyledList = styled.ul`
  margin-top: 12px;
`;
export const ListItem = styled.li`
  font-size: 20px;
  padding: 6px;
  background-color: rgb(86, 100, 100);
  border-radius: 14px;

  :not(:last-child) {
    margin-bottom: 12px;
  }
  &>.description{
      background-color: transparent; 
    }
  &>p{
    display:-webkit-inline-flex;
    background-color: #c312b7;
    padding: 5px 10px;
    border-radius: 14px;
    color: #ffffff;
    
    
  }
  
  
`;
export const ReviewsDescr = styled.p`
  
  color: #ffffff;
  margin-top: 6px;
`;