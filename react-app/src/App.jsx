//importing components fro other files
import React from 'react'
import NewTransaction from './newtransaction'
import TransactionList from './transactionlist'
import SearchBar from './searchBar'
import { useEffect, useState } from 'react'

//creating a function for displaying the transactions
function FilterableProductTable() {
  const [transactions, setTransactions] = useState([]);
  const [filterdTansaction, setFilterdTansaction ] = useState(transactions)
  const [searchQuery, setSearchQuery]= useState("")
  
  //use effect for fetch by getting data
  useEffect(() => {
      fetch("http://localhost:3000/transactions")
        .then((r) => r.json())
        .then(data => {
          setFilterdTansaction(data)
          setTransactions(data)
        })
  }, [])

  //creating function for handling search
  function handleSearch(event){
    const query= event.target.value;
    setSearchQuery(query)
    const filterd = transactions.filter(item=>{
      return item.description.toLowerCase().includes(query.toLowerCase())
    })
    setFilterdTansaction(filterd)
  }

  //creating function for adding transaction
  function addTransaction(newTransactions) {
    const updatedTransactions = [...transactions, newTransactions]
    setTransactions(updatedTransactions);
  }

  //creating function for deleting transction 
  function deleteTransaction(id) {
    const updatedTransactions = transactions.filter(transactions => transactions.id !== id)
    setTransactions(updatedTransactions)
}
  //returning the function of the displaying the transaction
  return (
    <div style={{ padding: "5px", border: "1px solid orange"}}>
      <h1>Bank of Flatiron</h1>
      <NewTransaction onAddTransaction={addTransaction} />
      <SearchBar  setFilterdTansaction={handleSearch} search={searchQuery}/>
      <TransactionList transactions={filterdTansaction} onDeleteTransaction={deleteTransaction}/>
    </div>
  )
}

//exporting the component of transactions to the main.jsx file
export default FilterableProductTable
