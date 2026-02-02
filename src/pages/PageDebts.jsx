import { useDebt } from "../hooks/useDebt";
import { useNavigate } from "react-router-dom";
import {DetailsModal} from "../components/li/detailsModa"


export function DebtsPage() {
  const {debts} = useDebt()
  const navigate = useNavigate()

  function backToHome() {
    navigate("/")
  }
  return(
    <div>
      <button className="px-4 py-2 bg-green-500 text-white rounded" onClick={backToHome}>
      regresar a Home
    </button>
    </div>
  )

}