import React from "react"

function TransactionItem({ transaction, onUpdateTodo, onDeleteTodo }) {
    const { id, date, description, category, amount } = transaction
    
    function handleCompleted(e) {
        
    }
    
    function handleDelete() {
        
    }
    
    return (
        <table>
            <tbody>
                <td><strong>{date} : </strong></td>
                <td>{description} : </td>
                <td>{category} : </td>
                <td><strong>{amount}</strong></td>
                <td>
                    <button>Delete</button>
                </td>
            </tbody>
        </table>

    )
}

export default TransactionItem