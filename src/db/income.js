import { dbPromise } from './db'

export async function getAllIncomes() {
  const db = await dbPromise
  return db.getAll("income")
}

export async function addIncome(income) {
  const db = await dbPromise
  return db.add("incomes", income)
}

export async function updateIncome(income) {
  const db = await dbPromise
  return db.put("incomes", income)
}

export async function deleteIncome(id) {
  const db = await dbPromise
  return db.delete("incomes", id)
}
