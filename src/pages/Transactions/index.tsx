import { useEffect, useState } from "react";
import { Header } from "../../Components/Header/Header";
import { Summary } from "../../Components/Summary";
import { SearchForm } from "./components/SearchForm";
import {
  PriceHightLight,
  TransactionsContainer,
  TransactionsTable,
} from "./style";


export function Transactions() {

const [transactions, setTransactions] = useState<TransactionsProps[]>([])

  async function LoadTransaction() {
    const response = await fetch("http://localhost:3000/transactions")
    const data = await response.json()

    setTransactions(data)
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
            {transactions.map(transaction => {
              return  (
                <tr>
                <td width="50%">{transaction.description}</td>
                <td>
                  <PriceHightLight variant={transaction.type}>  {transaction.price} </PriceHightLight>
                </td>
                <td>{transaction.caterogy}</td>
                <td>{transaction.CreatedAt}</td>
              </tr>
              )
             
            })}
           
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </div>
  );
}
