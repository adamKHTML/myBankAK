import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import * as React from 'react'
import Homepage from "./pages/Homepage"
import TransactionPage from "./pages/TransactionsPage"


function App() {


  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/transactions" element={<TransactionPage />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
