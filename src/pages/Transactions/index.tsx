import { Header } from "../../Components/Header/Header";
import { Summary } from "../../Components/Summary";
import { TransactionsContainer } from "./style";

export function Transactions() {
  return (
    <div>
      <Header />
      <Summary />

    <TransactionsContainer>
    <table>
        <tbody>
          <tr>
            <td width="50%">Desenvolvimento de site</td>
            <td>R$: 12.000</td>
            <td>Venda</td>
            <td>11/10/2022</td>
          </tr>

          <tr>
            <td width="50%">Hambúrguer</td>
            <td>- R$: 59.90</td>
            <td>Venda</td>
            <td>12/10/2022</td>
          </tr>
        </tbody>
      </table>
    </TransactionsContainer>
    </div>
  );
}
