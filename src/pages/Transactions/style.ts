import styled, { css } from "styled-components";

export const TransactionsContainer = styled.main`
    width: 100%;
    max-width: 1120px;
    margin: 0 auto;
    padding: 0 1.5rem;
   
    
`

export const TransactionsTable = styled.table`

width: 100%;
border-collapse: separate;
border-spacing: 0 0.5rem;
//margin-top: 1.5rem

td{
    padding: 1rem 2rem;
    background: ${props => props.theme["gray-700"]};


    &:first-child {
        border-top-left-radius:  6px;
        border-bottom-left-radius: 6px
    }

    &:last-child {
        border-top-right-radius:  6px;
        border-bottom-right-radius: 6px
    }
}

`
interface PriceHightLightProps{
    variant: 'Income' | 'Outcome'
}
export const PriceHightLight = styled.span<PriceHightLightProps>`
color: ${props => props.variant === 'Income' ? props.theme["green-300"] :  props.theme["red-300"] }

`