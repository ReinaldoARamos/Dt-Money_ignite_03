import { useContext } from "react";
import { SummaryCard, SummaryContainer } from "./style";
import {
  ArrowCircleDown,
  ArrowCircleUp,
  CurrencyCircleDollar,
} from "phosphor-react";
import { TransactionContext } from "../../contexts/TransactionsContext";
import { PriceFormatter } from "../../utils/formatter";
import { useSummary } from "../../hooks/useSummary";


export function Summary() {

  const summary = useSummary()
  return (
    <SummaryContainer>
      <SummaryCard>
        <header>
          <span>Entradas</span>
          <ArrowCircleUp size={32} color="#00b37e" />
        </header>
        <strong>R$: {PriceFormatter.format(summary.income)}</strong>
      </SummaryCard>

      <SummaryCard>
        <header>
          <span>Saídas</span>
          <ArrowCircleDown size={32} color="#f75a68" />
        </header>
        <strong>R$: {PriceFormatter.format(summary.outcome)}</strong>
      </SummaryCard>

      <SummaryCard variant="green">
        <header>
          <span>Total</span>
          <CurrencyCircleDollar size={32} color="#fff" />
        </header>
        <strong>R$: {PriceFormatter.format(summary.total)}</strong>
      </SummaryCard>
    </SummaryContainer>
  );
}
