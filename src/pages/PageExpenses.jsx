import { useExpense } from "../hooks/useExpense";
import { useNavigate } from "react-router-dom";


export function ExpensesPage() {
  const {expenses} = useExpense()
  const navigate = useNavigate()

  function backToHome() {
    navigate("/")
  }
  return(
    <button className="px-4 py-2 bg-green-500 text-white rounded" onClick={backToHome}>
      regresar a Home
    </button>
  )

}