//importing react from the react file
import React, { useState } from "react"
//creating the function component for new transaction update
function NewTransaction({ onAddTransaction }) {
    const [date, setDate] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");
    const [amount, setAmount] = useState("");

    //creating a function for handling the submit button
    function handleSubmit(e) {
        e.preventDefault()
        const transactionObj = { 
                date: date,
                description: description,
                category: category,
                amount: amount,
        }
        // persist transaction on server
        fetch("https://api.npoint.io/0e80577facc8d4893334/transactions", {
            method: "POST",
            headers: {
                "Content-Type": "application/json; charset=UTF-8"
            },
            body: JSON.stringify(transactionObj)
        })
            .then(r => r.json())
            .then(data => onAddTransaction(data.transaction))
        // then use onAddTransaction to add transaction to state
    }
  //returning the component function
    return (
        <form onSubmit={handleSubmit}>
            <h2>Add Transaction</h2>
            <label htmlFor="date">date:</label>
            <input
                type="text"
                id="date"
                placeholder="Year--Month--Day"
                value={date}
                onChange={(e) => setDate(e.target.value)}
            />
            <br/>
            <br/>
            <label htmlFor="description">Description:</label>
            <input
                type="text"
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />
            <br/>
            <br/>
            <label htmlFor="category">category:</label>
            <input
                type="text"
                id="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
            />
            <br/>
            <br/>
            <label htmlFor="amount">amount:</label>
            <input
                type="text"
                id="amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
            />
            <br/>
            <br/>
            <button type="submit">Add trasaction</button>
        </form>
    )
}
//exporting the new transaction component to other files 
export default NewTransaction;