import { HeaderContainer, HeaderContent, TransactionButton } from "./styles";
import HeaderLogo from "../../assets/Logo.svg"
export function Header() {
   
    return(
        
        <HeaderContainer>

        <HeaderContent>
        <img src={HeaderLogo}/>    
        <TransactionButton>Nova Transação</TransactionButton>
        </HeaderContent>

        </HeaderContainer>
    
    )
}