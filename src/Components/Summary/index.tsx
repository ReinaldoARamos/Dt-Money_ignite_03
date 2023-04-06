import { SummaryContainer } from "./style";
import {ArrowCircleDown, ArrowCircleUp, CurrencyCircleDollar} from 'phosphor-react'

export function Summary() {
    return (
        <SummaryContainer>
            <div>
                 <header>
                    <span>
                        Entradas
                        <ArrowCircleUp size={32} color="#00b37e" />
                    </span>
                </header>
                <strong>R$: 17.400</strong>
                </div>

                <div>
                 <header>
                    <span>
                        Saídas
                        <ArrowCircleDown size={32} color="#f75a68" />
                    </span>
                </header>
                <strong>R$: 2000,00</strong>
                </div>

                <div>
                 <header>
                    <span>
                        Total
                        <CurrencyCircleDollar size={32} color="#fff" />
                    </span>
                </header>
                <strong>R$: 14.400</strong>
                </div>
        </SummaryContainer>
    )
}