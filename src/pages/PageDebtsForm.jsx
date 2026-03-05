import { useDebt } from "../hooks/useDebt";
import FinanceForm from "../components/form/form";
import { prepareObject } from "../utils/prepareObject";

export function PageDebtsForm() {
  const {add} = useDebt()

  const DEBT_TYPE = "debt"

  async function eventOnSubmit(object){
     const formateObject = prepareObject(object, DEBT_TYPE)
     await add(formateObject)
    }


  return(
    <div className=" flex gap-4 flex-col">
      <FinanceForm
      transactionType={"Deudas"}
      eventSubmit={eventOnSubmit}>
      </FinanceForm>
    </div>
  )

}