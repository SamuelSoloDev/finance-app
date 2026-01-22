import { useState, useEffect } from 'react'
import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import { IncomesPage } from "./pages/PageIncomes"

import './App.css'

    /*<Route path="/expense" element={<FinanceForm type="expense" />} />
      <Route path="/income" element={<FinanceForm type="income" />} />
      <Route path="/debt" element={<FinanceForm type="debt" />} /> */

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path='/income' element={<IncomesPage/>}></Route>
    </Routes>
  )
}

export default App