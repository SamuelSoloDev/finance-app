import { dbPromise } from './db'

export async function getAllExpenses() {
  const db = await dbPromise
  return db.getAll('expenses')
}

export async function addExpense(expense) {
  const db = await dbPromise
  return db.add('expenses', expense)
}

export async function updateExpense(expense) {
  const db = await dbPromise
  return db.put('expenses', expense)
}

export async function deleteExpense(id) {
  const db = await dbPromise
  return db.delete('expenses', id)
}
