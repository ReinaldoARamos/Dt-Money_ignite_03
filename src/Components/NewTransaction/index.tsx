import * as Dialog from "@radix-ui/react-dialog";
import { Overlay, Content, CloseButton, TransactionType, TransactionTypeButton } from "./style";
import { ArrowCircleDown, ArrowCircleUp, X } from "phosphor-react";


export function NewTransactionModal() {
  return (
    <Dialog.Portal>
     <Overlay/>
      <Content>
        <Dialog.Title>Nova Transação</Dialog.Title>
        <CloseButton>
            <X size={22}/>
        </CloseButton>
        <form action=""> 
            <input type="text" placeholder="descrição"/>
            <input type="number" placeholder="preço"/>
            <input type="text" placeholder="catergoria"/>


            <TransactionType>
                <TransactionTypeButton variant="Income" value="Income">
                    Entrada <ArrowCircleUp size={24}/>
                </TransactionTypeButton>

                <TransactionTypeButton variant="Outcome" value="Outcome">
                Saída <ArrowCircleDown size={24}/>
                </TransactionTypeButton>
            </TransactionType>
           
            <button type="submit">
                Cadastrar
            </button>



        </form>
     
      </Content>
    </Dialog.Portal>
  );
}
