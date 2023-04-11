import { useForm } from "react-hook-form";
import { SearchButton, SearchContainer, SearchFormInput } from "./style";
import { MagnifyingGlass } from "phosphor-react";
import * as z from 'zod'
import {zodResolver} from '@hookform/resolvers/zod'

const searchFormSchema = z.object({
  query: z.string(),
})

type SearchFormInputs = z.infer<typeof searchFormSchema>;

export function SearchForm() {
  

  const { register, handleSubmit } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema)
  });
  
  
  function handleSearchTransactions(data : SearchFormInputs) {
    console.log(data)
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
