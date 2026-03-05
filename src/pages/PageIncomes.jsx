import { useIncome } from "../hooks/useIconme";
import { useNavigate } from "react-router-dom";
import FinanceForm from "../components/form/form"
import { prepareObject } from "../utils/prepareObject";


export function IncomesPage() {
  const {add} = useIncome()
  const navigate = useNavigate()



  const INCOME_TYPE = "income"


  async function eventOnSubmit(object){
    const formateObject = prepareObject(object, INCOME_TYPE)
    await add(formateObject)
  }

  function backToHome() {
    navigate("/")
  }
  return(
  <div className=" flex gap-4 flex-col">
        <FinanceForm
        transactionType={"Ingresos"}
        eventSubmit={eventOnSubmit}>
        </FinanceForm>
      </div>
  )

}
