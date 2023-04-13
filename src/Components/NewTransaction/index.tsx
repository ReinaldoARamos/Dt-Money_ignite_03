import * as Dialog from "@radix-ui/react-dialog";
import {
  
  Overlay,
  Content,
  CloseButton,
  TransactionType,
  TransactionTypeButton,
} from "./style";
import { ArrowCircleDown, ArrowCircleUp, X } from "phosphor-react";
import * as z from "zod";
import { Controller, useForm,  } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { api } from "../../lib/axios";
import {useContextSelector} from 'use-context-selector'
import { TransactionContext } from "../../contexts/TransactionsContext";

const newTransactionFormSchema = z.object({
  description: z.string(),
  price: z.number(),
  category: z.string(),
 type: z.enum(["Income", "Outcome"]),
});

type newTransactionFormInputs = z.infer<typeof newTransactionFormSchema>;

export function NewTransactionModal() {
  const {
    control,
    register,
    handleSubmit,
    formState: { isSubmitting },
    reset
  } = useForm<newTransactionFormInputs>({
    resolver: zodResolver(newTransactionFormSchema),
    defaultValues: {
      type: 'Income'
    }
  });

  const CreateTransaction = useContextSelector(TransactionContext, (context) => {

    return context.CreateTransaction
  })

const  handleCreateNewTransaction = async (data: newTransactionFormInputs) => {
    
    const {category, description, price, type} = data
    await CreateTransaction({
      category,
      description,
      price,
      type
    })
    

    reset();
  }

  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        <Dialog.Title>Nova Transação</Dialog.Title>
        <CloseButton>
          <X size={22} />
        </CloseButton>
        <form action="" onSubmit={handleSubmit(handleCreateNewTransaction)}>
          <input
            type="text"
            placeholder="descrição"
            {...register("description")}
          />
          <input
            type="number"
            placeholder="preço"
            {...register("price", { valueAsNumber: true })}
          />
          <input
            type="text"
            placeholder="catergoria"
            {...register("category")}
          />

<Controller 
        control={control}
        name="type"
        render={({field}) => {
       
          return(
            
          <TransactionType onValueChange={field.onChange} value={field.value}>
          <TransactionTypeButton variant="Income" value="Income">
            Entrada <ArrowCircleUp size={24} />
          </TransactionTypeButton>

          <TransactionTypeButton variant="Outcome" value="Outcome">
            Saída <ArrowCircleDown size={24} />
          </TransactionTypeButton>
        </TransactionType>
          )
        } }
        />

          <button type="submit" disabled={isSubmitting}>
            Cadastrar
          </button>
        </form>
      </Content>
    </Dialog.Portal>
  );
}
