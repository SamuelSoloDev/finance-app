import { useIncome } from "../hooks/useIconme";
import { useExpense } from "../hooks/useExpense";
import { useDebt } from "../hooks/useDebt";
import { useNavigate } from "react-router-dom";
import FinanceForm from "../components/form/form"
import { HistoryList } from "../components/ul/ul";
import { prepareObject } from "../utils/prepareObject";


export function IncomesPage() {
  const {incomes, add, remove} = useIncome()
  const {debts} = useDebt()
  const {expenses} = useExpense()
  const navigate = useNavigate()
  const globalHIstory = [...expenses, ...incomes, ...debts]


  const INCOME_TYPE = "income"

  function deleteIncome(type, id) {
    // la función pide un type, no lo usa, pero por alguna razón, si se lo quito deja de funcionar.
    remove(id)
  }

  async function eventOnSubmit(object){
    const formateObject = prepareObject(object, INCOME_TYPE)
    await add(formateObject)
  }

  function backToHome() {
    navigate("/")
  }
  return(
  <h1>cum</h1>
  )

}