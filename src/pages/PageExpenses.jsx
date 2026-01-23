import { useExpense } from "../hooks/useExpense";
import { useNavigate } from "react-router-dom";
import FinanceForm from "../components/form/form";
import { prepareObject } from "../utils/prepareObject";

export function ExpensesPage() {
  const {expenses, add} = useExpense()
  const navigate = useNavigate()

  const EXPENSE_TYPE = "expense"

  async function eventOnSubmit(object){
     const formateObject = prepareObject(object, EXPENSE_TYPE)
     await add(formateObject)
    }

  function backToHome() {
    navigate("/")
  }
  return(
    <div className=" flex gap-4 flex-col">
      <FinanceForm eventSubmit={eventOnSubmit}>

      </FinanceForm>
      <button className="px-4 py-2 bg-green-500 text-white rounded" onClick={backToHome}>
      regresar a Home
    </button>
    </div>
  )

}