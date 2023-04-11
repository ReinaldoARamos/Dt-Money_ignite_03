import styled from "styled-components";

export const SearchContainer = styled.form `
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

&::placeholder{
    color:${props => props.theme["gray-500"]};
    padding: 1rem
}


`

export const SearchButton = styled.button`
width: 9.188rem;
height: 3.375rem;
border: 1px solid ${props => props.theme["green-300"]};
background: none;
color:${props => props.theme["green-300"]};
border-radius: 6px;
display: flex ;
align-items: center;
justify-content: center;
gap: 0.375rem;
transition: 0.2s;

:disabled{
    opacity: 0.7;
    cursor: not-allowed;
}
&:not(:disabled):hover{
    border: 1px solid ${props => props.theme["green-500"]};
    color:${props => props.theme["green-500"]};
    cursor: pointer;
}

`