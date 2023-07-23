import React from 'react'
import SearchBar from './searchBar'
import NewTransaction from './newtransaction'
import { useEffect, useState } from 'react'

function FilterableProductTable() {
  const [transaction, setTransactions] = useState([]);
  
  useEffect(() => {
      fetch("http://localhost:3000/transactions")
        .then((r) => r.json())
        .then(transactions=>{
          transactions.forEach((transaction)=>setTransactions(transaction))
        })
  }, [])

  function addTransaction(newTransactions) {
    const updatedTransactions = [...transaction, newTransactions]
    setTransactions(updatedTransactions);
  }


  return (
    <div style={{ padding: "5px", border: "1px solid orange"}}>
      <SearchBar />
      <NewTransaction onAddTransaction={addTransaction} />
    </div>
  )
}

export default FilterableProductTable
