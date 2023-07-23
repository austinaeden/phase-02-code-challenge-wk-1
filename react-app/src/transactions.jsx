import React from "react"

function TransactionItem({ transaction, onUpdateTodo, onDeleteTodo }) {
    const { id, date, description, category, amount } = transaction
    
    function handleCompleted(e) {
        
    }
    
    function handleDelete() {
        
    }
    
    return (
        <li>
            <strong>{ date }</strong>
            <strong>{ description }</strong>
            <strong>{ category }</strong>
            <strong>{ amount }</strong>            
            <button onClick={handleDelete}>Delete</button>
        </li>
    )
}

export default TransactionItem