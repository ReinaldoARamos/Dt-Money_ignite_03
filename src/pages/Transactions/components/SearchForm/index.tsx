import { SearchButton, SearchContainer, SearchFormInput } from "./style";
import { MagnifyingGlass } from "phosphor-react";
export function SearchForm() {
  return (
    <SearchContainer>
      <SearchFormInput placeholder="Busque o seu dori" />

      <SearchButton>
        <MagnifyingGlass size={22} color="#00B37E" />
        <strong>Buscar</strong>
      </SearchButton>
    </SearchContainer>
  );
}
