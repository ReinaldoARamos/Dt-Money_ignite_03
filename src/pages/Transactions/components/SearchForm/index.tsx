import { useForm } from "react-hook-form";
import { SearchButton, SearchContainer, SearchFormInput } from "./style";
import { MagnifyingGlass } from "phosphor-react";
import * as z from 'zod'

const searchFormSchema = z.object({
  query: z.string(),
})

type SearchFormInputs = z.infer<typeof searchFormSchema>

export function SearchForm() {
  

  const { register, handleSubmit } = useForm();
  
  
  function handleSearchTransactions() {

  }
  return (
    <SearchContainer onSubmit={handleSubmit(handleSearchTransactions)}>
      <SearchFormInput placeholder="Busque uma transação"  {...register('query')} />

      <SearchButton>
        <MagnifyingGlass size={22} color="#00B37E" />
        <strong>Buscar</strong>
      </SearchButton>
    </SearchContainer>
  );
}
