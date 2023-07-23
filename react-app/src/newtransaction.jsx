import React, { useState } from "react"

function NewTransaction({ onAddTransaction }) {
    const [date, setDate] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");
    const [amount, setAmount] = useState("");

    
    function handleSubmit(e) {
        e.preventDefault()
        const transactionObj = { 
            transaction: { 
                date: date,
                description: description,
                category: category,
                amount: amount,

            }
        }
        // persist todo on server
        fetch("http://localhost:3000/transactions", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(transactionObj)
        })
            .then(r => r.json())
            .then(data => console.log(data.transaction))
        // then use onAddTodo to add todo to state
    }
  
    return (
        <form onSubmit={handleSubmit}>
            <h2>Add Transaction</h2>
            <label htmlFor="date">date:</label>
            <input
                type="text"
                id="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
            />
            <label htmlFor="description">Description:</label>
            <input
                type="text"
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />
            <label htmlFor="category">category:</label>
            <input
                type="text"
                id="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
            />
            <label htmlFor="amount">amount:</label>
            <input
                type="text"
                id="amount"
                value={category}
                onChange={(e) => setAmount(e.target.value)}
            />
            <button type="submit">Add trasaction</button>
        </form>
    )
}

export default NewTransaction;