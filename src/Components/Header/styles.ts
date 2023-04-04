import styled from "styled-components";

export const HeaderContainer = styled.div`
  background:${props => props.theme["gray-900"]};
  padding: 2.5rem 0 7.5rem 0;
`;

export const HeaderContent = styled.div`
width: 100%
max-width: 1120px
margin: 0 auto;
padding: 0 1.5rem;
display: flex;
align-items: center;
justify-content: space-around;

`;

export const TransactionButton = styled.button`
 
  height: 50px;
  border-radius: 6px;
  font-weight: bold;
  border: 0;
  color:${props => props.theme["white"]};
  background: ${props => props.theme["green-500"]};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.4s;

  &:hover{
    background: ${props => props.theme["green-700"]};
  }
`;
