import { ReactNode, createContext, useState, useEffect } from "react";
import { api } from "../lib/axios";

interface Transactions {

    id: Number,
  description: String
    price: number,
    category: String;
    type: "Income" | "Outcome"
    CreatedAt: Date
  }
  
  interface NewTransaction{
    description: String
    price: number,
    category: String;
    type: "Income" | "Outcome"
  }
  

interface TransactionsContextType{
    transactions: Transactions[];
    FetchTransactions: (query: string) => Promise<void>;
    CreateTransaction: (data : NewTransaction) => Promise<void>;
}

interface TransactionsProviderProps{ 
    children: ReactNode;
} 


export const TransactionContext = createContext({} as TransactionsContextType)  




export function TransactionsProvider( {children} : TransactionsProviderProps) {
    

const [transactions, setTransactions] = useState<Transactions[]>([])

async function FetchTransactions(query?: string) {
 
  const response = await api.get('/transactions', {
    params: {
      _sort: 'createdAt',
      _order: 'desc',
      q: query
    }
  })

  setTransactions(response.data)
}


async function CreateTransaction(data :NewTransaction ) {
  const {category, description, price, type} = data
  const response = await api.post('/transactions', {
    category,
    description,
    price ,
    type,
    createdAt: new Date()

  })
   setTransactions(state => [response.data, ...state])
  

}

useEffect(() => {
  FetchTransactions();
}, []);
    return (
        <TransactionContext.Provider 
        value={
          {transactions, 
            FetchTransactions,
            CreateTransaction
          }
          }>
                    {children}
        </TransactionContext.Provider>
    )
}