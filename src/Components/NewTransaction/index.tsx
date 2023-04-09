import * as Dialog from "@radix-ui/react-dialog";
import { Overlay, Content } from "./style";


export function NewTransactionModal() {
  return (
    <Dialog.Portal>
     <Overlay/>
      <Content>
        <Dialog.Title>Nova Transação</Dialog.Title>
        <form action=""> 
            <input type="text" placeholder="descrição"/>
            <input type="number" placeholder="preço"/>
            <input type="text" placeholder="catergoria"/>

            <button type="submit">
                Cadastrar
            </button>
        </form>
        <Dialog.Close />
      </Content>
    </Dialog.Portal>
  );
}
