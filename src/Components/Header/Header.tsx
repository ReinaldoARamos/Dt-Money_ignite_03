import { HeaderContainer, HeaderContent, TransactionButton } from "./styles";
import HeaderLogo from "../../assets/Logo.svg";
import * as Dialog from "@radix-ui/react-dialog";
export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={HeaderLogo} />
        <Dialog.Root>
            <Dialog.Trigger asChild>
          <TransactionButton>Nova Transação</TransactionButton>
          </Dialog.Trigger>
          <Dialog.Portal>
             <Dialog.Overlay />
                <Dialog.Content>
                    <Dialog.Title>
                    Nova Transação
                    </Dialog.Title>
                    <Dialog.Close />
                </Dialog.Content>
            
          </Dialog.Portal>
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  );
}
