import {useEffect, useState } from "react";
import { Header } from "../../Components/Header/Header";
import { Summary } from "../../Components/Summary";
import { SearchForm } from "./components/SearchForm";
import {useContextSelector} from 'use-context-selector'
import {
  PriceHightLight,
  TransactionsContainer,
  TransactionsTable,
} from "./style";
import { TransactionContext } from "../../contexts/TransactionsContext";
import { PriceFormatter, DateFormatter } from "../../utils/formatter";


export function Transactions() {
const transactions = useContextSelector(TransactionContext, (context) => {
  return  context.transactions
})
 
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
               
                  <PriceHightLight variant={transaction.type}> 
                  {transaction.type === "Outcome" && '- '}
                   {PriceFormatter.format(transaction.price)} </PriceHightLight>
                
                </td>
                <td>{transaction.category}</td>
                <td>{DateFormatter.format(transaction.CreatedAt)}</td>
              </tr>
              )
             
            })}
           
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </div>
  );
}
