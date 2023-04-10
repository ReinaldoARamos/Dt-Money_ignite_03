import { useEffect } from "react";
import { Header } from "../../Components/Header/Header";
import { Summary } from "../../Components/Summary";
import { SearchForm } from "./components/SearchForm";
import {
  PriceHightLight,
  TransactionsContainer,
  TransactionsTable,
} from "./style";



export function Transactions() {

  async function LoadTransaction() {
    const response = await fetch("http://localhost:3000/transactions")
    const data = response.json()

    console.log(data)
  }

  useEffect(() => {
    LoadTransaction();
  }, []);
 
  return (
    <div>
      <Header />
      <Summary />
      <SearchForm />
      <TransactionsContainer>
        <TransactionsTable>
          <tbody>
            <tr>
              <td width="50%">Desenvolvimento de site</td>
              <td>
                <PriceHightLight variant="income"> R$: 12.000</PriceHightLight>
              </td>
              <td>Venda</td>
              <td>11/10/2022</td>
            </tr>

            <tr>
              <td width="50%">Hambúrguer</td>
              <td>
                <PriceHightLight variant="outcome">- R$: 59.00</PriceHightLight>
              </td>
              <td>Venda</td>
              <td>12/10/2022</td>
            </tr>
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </div>
  );
}
