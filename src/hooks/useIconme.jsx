import { useState, useEffect } from "react";
import { getAllIncomes, addIncome, deleteIncome } from "../db/income";


export function useIncome() {
  const [incomes, setIncomes] = useState([]);

  useEffect(() => {
    load()
  }, []);

  async function load() {
   const data = await getAllIncomes()
   if (!data) {
    setIncomes([])
   }
   else {
     setIncomes(data)
   }
  }

  async function add(income) {
    addIncome(income)
    setIncomes(prev => [...prev, income])
  }

  async function remove(id) {
    deleteIncome(id)
    setIncomes(prev => prev.filter(i => i.id !== id))
  }

  return {incomes, add, remove, reload: load}
}