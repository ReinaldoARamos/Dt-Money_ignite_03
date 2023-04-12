import { ReactNode, createContext, useState, useEffect } from "react";

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
    FetchTransactions: () => Promise<void>
}

interface TransactionsProviderProps{ 
    children: ReactNode;
} 

export const TransactionContext = createContext({} as TransactionsContextType)  




export function TransactionsProvider( {children} : TransactionsProviderProps) {
    

const [transactions, setTransactions] = useState<Transactions[]>([])

async function FetchTransactions() {
  const response = await fetch("http://localhost:3000/transactions")
  const data = await response.json()

  setTransactions(data)
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