import { ReactNode, createContext, useState, useEffect } from "react";
import { api } from "../lib/axios";

interface Transactions {
    id: Number,
  description: String
    price: number,
    caterogy: String;
    type: "Income" | "Outcome"
    CreatedAt: Date
  }
  

interface TransactionsContextType{
    transactions: Transactions[];
    FetchTransactions: (query: string) => Promise<void>
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
      q: query
    }
  })

  setTransactions(response.data)
}


useEffect(() => {
  FetchTransactions();
}, []);
    return (
        <TransactionContext.Provider 
        value={
          {transactions, 
            FetchTransactions
          }
          }>
                    {children}
        </TransactionContext.Provider>
    )
}