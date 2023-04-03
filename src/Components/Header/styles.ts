import styled from "styled-components";

export const HeaderContainer = styled.div`
  background: ${(props) => props.theme["gray-900"]};
  padding: 2.5rem 0 7.5rem 0;
`;

export const HeaderContent = styled.div`
width: 100%
max-width: 1120px
margin: 0 auto;
padding: 0 1.5rem;
display: flex;
align-items: center;
justify-content: space-between;
`;

export const TransactionButton = styled.button`
  width: 4rem;
  height: 1rem;
  background: ${(props) => props.theme["green-500"]};
  display: flex;
  align-items: center;
  justify-content: center;
`;
