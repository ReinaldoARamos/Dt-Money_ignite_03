import { HeaderContainer, HeaderContent, TransactionButton } from "./styles";
import HeaderLogo from "../../assets/Logo.svg";
import * as Dialog from "@radix-ui/react-dialog";
import { NewTransactionModal } from "../NewTransaction";
export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={HeaderLogo} />
        <Dialog.Root> 
            <Dialog.Trigger asChild>
          <TransactionButton>Nova Transação</TransactionButton>
          </Dialog.Trigger>
            <NewTransactionModal />

          
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  );
}
