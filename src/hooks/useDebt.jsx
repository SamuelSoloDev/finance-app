import {useState, useEffect} from "react"
import { addDebt, deleteDebt, getAllDebts } from "../db/debts";


export function useDebt() {
  const [debts, setDebts] = useState([]);

  useEffect(() => {
   load()
  }, []);

 async function load() {
    const data = await getAllDebts()
    if (!data) {
      setDebts([])
    }
    else {
      setDebts(data)
    }
  }

  async function add(debt) {
    await addDebt(debt)
    setDebts(prev => [...prev, debt])
  }

  async function remove(id) {
    await deleteDebt(id);
    setDebts(prev => prev.filter(d => d.id !== id))
  }

  return {debts, add, remove, relodad: load}
}