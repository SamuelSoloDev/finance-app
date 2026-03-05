import { dbPromise } from './db'

export async function getName() {
  const db = await dbPromise
  const data = await db.get("profile", 1)
  return data?.name || null
}

export async function saveName(name) {
  const db = await dbPromise
  return db.put("profile", { id: 1, name })
}

export async function deleteName() {
  const db = await dbPromise
  return db.delete("profile", 1)
}
