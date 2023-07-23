import React from "react"

function TransactionItem({ transaction, onUpdateTransaction, onDeleteTransaction }) {
    const { id, date, description, category, amount } = transaction
    
    function handleCompleted(e) {
        
    }
    
    function handleDelete() {
        fetch(`http://localhost:3000/transactions/${id}`,{
      method:"DELETE"
    })
    onDeleteTransaction(id)
    }
    
    return (
        <table>
            <tbody>
                <td><strong>{date} : </strong></td>
                <td>{description} : </td>
                <td>{category} : </td>
                <td><strong>{amount}</strong></td>
                <td>
                    <button onClick={handleDelete}>Delete</button>
                </td>
            </tbody>
        </table>

    )
}

export default TransactionItem