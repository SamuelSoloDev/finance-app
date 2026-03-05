import {useState} from "react"
import {DebtIcon} from "./DebtIcon"
import { useDebt } from "../../hooks/useDebt";
import  Modal  from "../Modal";
import { DebtHistoryItem } from "./debtLi";
import {TransactionModal} from "./debtsDetailsModal"

export function DebtHistoryList({ list, deleteTransaction }) {
   const [modalIsOpen, setModalIsOpen] = useState(false)
   const {remove} = useDebt()
   const [details, setDetails] = useState({
    name: "",
    note: "",
    amount: 0,
    date: "",
    id: "",
  });

  function openModal({ name, note = "", amount, date, id }) {
  setDetails({
    name,
    note,
    amount,
    date,
    id
  });

  setModalIsOpen(true);
}
  function deleteDebt(id){
    deleteTransaction(id)
    closeModal()
  }

  function closeModal(){
    setModalIsOpen(false)
  }
  return (
    <div>
      <ul className="space-y-4">
        {list.map((item) => (
          <DebtHistoryItem
            key={item.id}
            id={item.id}
            icon={<DebtIcon></DebtIcon>}
            amount={item.amount}
            name={item.name}
            note={item.note}
            type={item.type}
            date={item.date}
            showDetails={openModal}
          />
        ))}
      </ul>
      {modalIsOpen && (
        <TransactionModal
        name={details.name}
      note={details.note}
      amount={details.amount}
      date={details.date}
      type={details.type}
      id={details.id}
      onDelete={deleteDebt}
      onClose={closeModal}>

        </TransactionModal>
      )}
    </div>
  );
}

/* */