import styled from 'styled-components';

export const StyledList = styled.ul`
  margin-top: 12px;
`;
export const ListItem = styled.li`
  font-size: 20px;
  padding: 6px;
  background-color:  #0bd2edce;;
  border-radius: 14px;

  :not(:last-child) {
    margin-bottom: 12px;
  }

  span {
    font-size: 25px;
    color: #2117db;
  }
`;
export const ReviewsDescr = styled.p`
  color: #000000;
  margin-top: 6px;
`;