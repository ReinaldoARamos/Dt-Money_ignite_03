import styled from "styled-components";

export const SearchContainer = styled.section`
   width: 100%;
    max-width: 1120px;
    margin: 0 auto;
    padding: 0 1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    padding: 16px;

`

export const SearchFormInput = styled.input`
width: 957px;
height: 54px;
background: ${props => props.theme["gray-900"]};
border-radius: 6px;
border: transparent;
color:${props => props.theme["gray-300"]};
gap: 12px;


`

export const SearchButton = styled.button`
width: 9.188rem;
height: 3.375rem;
border: 1px solid ${props => props.theme["green-300"]};
background: none;
color:${props => props.theme["green-300"]};
border-radius: 6px;

`