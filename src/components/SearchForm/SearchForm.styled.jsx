import styled from 'styled-components';
export const Form = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 500px;
  /* background-color: #fff; */
  background-image: linear-gradient(
      337deg,
      rgba(255, 60, 172) 0%,
      rgba(120, 75, 160) 50%,
      rgba(43, 134, 197) 100%
    );
  border-radius: 5px;
  padding: 0 5px 0 25px;
    margin:0 auto;
`;
export const FormButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 60px;
  border: 0;

  background-repeat: no-repeat;
  background-position: center;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
  :hover {
    opacity: 1;
  }
`;
export const ButtonLabel = styled.span`
  width: 30px;
  height: 30px;
  padding: 15px;
`;
export const FormInput = styled.input`
  display: inline-block;
  width: 600px;
  font: inherit;
  font-size: 30px;
  border: none;
  outline: none;
  padding-left: 4px;
  padding-right: 4px;
`;
