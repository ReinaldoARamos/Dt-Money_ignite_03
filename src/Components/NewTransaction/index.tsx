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
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const newTransactionFormSchema = z.object({
  description: z.string(),
  price: z.number(),
  category: z.string(),
  //type?: z.enum(["income", "outcome"]),
});

type newTransactionFormInputs = z.infer<typeof newTransactionFormSchema>;

export function NewTransactionModal() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<newTransactionFormInputs>({
    resolver: zodResolver(newTransactionFormSchema),
  });

  async function handleCreateNewTransaction(data: newTransactionFormInputs) {
    await new Promise((resolve) => setTimeout(resolve, 2000));

    console.log(data);
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

          <TransactionType>
            <TransactionTypeButton variant="Income" value="Income">
              Entrada <ArrowCircleUp size={24} />
            </TransactionTypeButton>

            <TransactionTypeButton variant="Outcome" value="Outcome">
              Saída <ArrowCircleDown size={24} />
            </TransactionTypeButton>
          </TransactionType>

          <button type="submit" disabled={isSubmitting}>
            Cadastrar
          </button>
        </form>
      </Content>
    </Dialog.Portal>
  );
}
