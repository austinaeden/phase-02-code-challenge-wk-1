import React from 'react'
import SearchBar from './searchBar'
import NewTransaction from './newtransaction'
import TransactionList from './transactionlist'
import { useEffect, useState } from 'react'

function FilterableProductTable() {
  const [transactions, setTransactions] = useState([]);
  
  useEffect(() => {
      fetch("http://localhost:3000/transactions")
        .then((r) => r.json())
        .then(data => setTransactions(data))
  }, [])

  function addTransaction(newTransactions) {
    const updatedTransactions = [...transactions, newTransactions]
    setTransactions(updatedTransactions);
  }


  return (
    <div style={{ padding: "5px", border: "1px solid orange"}}>
      <SearchBar />
      <NewTransaction onAddTransaction={addTransaction} />
      <TransactionList transactions={transactions}/>
    </div>
  )
}

export default FilterableProductTable
