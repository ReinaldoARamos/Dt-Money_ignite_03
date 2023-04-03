import { HeaderContainer, HeaderContent } from "./styles";
import HeaderLogo from "../../assets/Logo.svg"
export function Header() {
   
    return(

        <HeaderContainer>

        <HeaderContent>
        <img src={HeaderLogo}/>    
        </HeaderContent>

        </HeaderContainer>
    
    )
}