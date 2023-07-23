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

  function deleteTransaction(id) {
    const updatedTransactions = transactions.filter(transactions => transactions.id !== id)
    setTransactions(updatedTransactions)
}

  return (
    <div style={{ padding: "5px", border: "1px solid orange"}}>
      <SearchBar />
      <NewTransaction onAddTransaction={addTransaction} />
      <TransactionList transactions={transactions} onDeleteTransaction={deleteTransaction}/>
    </div>
  )
}

export default FilterableProductTable
