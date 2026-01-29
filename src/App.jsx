import { useState, useEffect } from 'react'
import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import { IncomesPage } from "./pages/PageIncomes"
import { ExpensesPage } from "./pages/PageExpenses";
import { DebtsPage } from "./pages/PageDebts";
import { HistoryPage } from "./pages/HistoryPage";
import './App.css'

    /*<Route path="/expense" element={<FinanceForm type="expense" />} />
      <Route path="/income" element={<FinanceForm type="income" />} />
      <Route path="/debt" element={<FinanceForm type="debt" />} /> */

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path='/income' element={<IncomesPage/>}></Route>
      <Route path='/expense' element={<ExpensesPage/>}></Route>
      <Route path='/debt' element={<DebtsPage/>}></Route>
      <Route path='/history' element={<HistoryPage/>}></Route>
    </Routes>
  )
}

export default App