import { Children, ReactNode, createContext } from "react";

interface Transactions {
    id: Number,
  description: String
    price: number,
    caterogy: String;
    type: "income" | "outcome"
    CreatedAt: String
  }
  

interface TransactionsContextType{
    transactions: Transactions[];

}

const TransactionContext = createContext(
    {
             
    } as TransactionsContextType
)

interface TransactionsProviderProps{ 
    children: ReactNode;
}

export function TransactionsProvider( {children} : TransactionsProviderProps) {
    return (
        <TransactionContext.Provider value={{transactions: []}}>
                    {children}
        </TransactionContext.Provider>
    )
}