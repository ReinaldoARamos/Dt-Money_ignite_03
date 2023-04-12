import { useForm } from "react-hook-form";
import { SearchButton, SearchContainer, SearchFormInput } from "./style";
import { MagnifyingGlass } from "phosphor-react";
import * as z from 'zod'
import {zodResolver} from '@hookform/resolvers/zod'
import { useContext } from "react";
import { TransactionContext } from "../../../../contexts/TransactionsContext";

const searchFormSchema = z.object({
  query: z.string(),
})

type SearchFormInputs = z.infer<typeof searchFormSchema>;

export function SearchForm() {
  
  const {FetchTransactions} = useContext(TransactionContext)

  const { register, handleSubmit, formState: {isSubmitting} } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema)
  });
  
  
  async function handleSearchTransactions(data : SearchFormInputs) {
    await FetchTransactions(data.query)
  }
  return (
    <SearchContainer onSubmit={handleSubmit(handleSearchTransactions)}>
      <SearchFormInput placeholder="Busque uma transação"  {...register('query')} />

      <SearchButton disabled={isSubmitting}>
        <MagnifyingGlass size={22} color="#00B37E" />
        <strong>Buscar</strong>
      </SearchButton>
    </SearchContainer>
  );
}
