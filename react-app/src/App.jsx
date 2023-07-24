import React from 'react'
import NewTransaction from './newtransaction'
import TransactionList from './transactionlist'
import SearchBar from './searchBar'
import { useEffect, useState } from 'react'

function FilterableProductTable() {
  const [transactions, setTransactions] = useState([]);
  const [filterdTansaction, setFilterdTansaction ] = useState(transactions)
  const [searchQuery, setSearchQuery]= useState("")
  
  useEffect(() => {
      fetch("http://localhost:3000/transactions")
        .then((r) => r.json())
        .then(data => {
          setFilterdTansaction(data)
          setTransactions(data)
        })
  }, [])

  function handleSearch(event){
    const query= event.target.value;
    setSearchQuery(query)
    const filterd = transactions.filter(item=>{
      return item.description.toLowerCase().includes(query.toLowerCase())
    })
    setFilterdTansaction(filterd)
  }

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
      <h1>Bank of Flatiron</h1>
      <NewTransaction onAddTransaction={addTransaction} />
      <SearchBar  setFilterdTansaction={handleSearch} search={searchQuery}/>
      <TransactionList transactions={filterdTansaction} onDeleteTransaction={deleteTransaction}/>
    </div>
  )
}

export default FilterableProductTable
