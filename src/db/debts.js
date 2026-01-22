import { dbPromise } from './db'

export async function getAllDebts() {
  const db = await dbPromise
  return db.getAll('debts')
}

export async function addDebt(debt) {
  const db = await dbPromise
  return db.add("debts", debt)
}

export async function updateDebts(debt) {
  const db = await dbPromise
  return db.put("debts", debt)
}

export async function deleteDebt(id) {
  const db = await dbPromise
  return db.delete('debts', id)
}