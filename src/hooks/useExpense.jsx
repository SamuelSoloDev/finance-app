import {useState, useEffect} from "react"
import { getAllExpenses, addExpense, deleteExpense } from "../db/expenses";



export function useExpense() {
  const [expenses, setExpenses] = useState([]);


  useEffect(() => {
    load();
  }, []);

  async function load() {
    const data = await getAllExpenses();
    if (!data) {
      setExpenses([])
    }
    else {
      setExpenses(data);
    }
  }

  async function add(expense) {
    await addExpense(expense);
    setExpenses(prev => [...prev, expense])
  }

  async function remove(id) {
    await deleteExpense(id);
    setExpenses(prev => prev.filter(e => e.id !== id))
  }

  return {expenses, add, remove, reload: load}
}