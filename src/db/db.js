import { openDB } from 'idb'

export const DB_NAME = 'finance-db'
export const DB_VERSION = 1

export const dbPromise = openDB(DB_NAME, DB_VERSION, {
  upgrade(db) {
    if (!db.objectStoreNames.contains('debts')) {
      db.createObjectStore('debts', { keyPath: 'id' })
    }

    if (!db.objectStoreNames.contains('expenses')) {
      db.createObjectStore('expenses', { keyPath: 'id' })
    }

    if (!db.objectStoreNames.contains('income')) {
      db.createObjectStore('income', { keyPath: 'id' })
    }
  }
})
