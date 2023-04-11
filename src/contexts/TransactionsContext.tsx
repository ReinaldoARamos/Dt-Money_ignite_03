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

}

interface TransactionsProviderProps{ 
    children: ReactNode;
} 

export const TransactionContext = createContext({} as TransactionsContextType)  




export function TransactionsProvider( {children} : TransactionsProviderProps) {
    

const [transactions, setTransactions] = useState<Transactions[]>([])

async function LoadTransaction() {
  const response = await fetch("http://localhost:3000/transactions")
  const data = await response.json()

  setTransactions(data)
}


useEffect(() => {
  LoadTransaction();
}, []);
    return (
        <TransactionContext.Provider value={{transactions}}>
                    {children}
        </TransactionContext.Provider>
    )
}