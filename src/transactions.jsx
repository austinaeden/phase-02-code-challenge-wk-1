//importing components from other files
import React from "react"
//creating componenet function for transaction items
function TransactionItem({ transaction, onDeleteTransaction }) {
    const { id, date, description, category, amount } = transaction

    //deleting data from the json through fetch
    function handleDelete() {
        fetch(`https://api.npoint.io/0e80577facc8d4893334/transactions/${id}`,{
      method:"DELETE"
    })
    onDeleteTransaction(id)
    }
    //returning the component 
    return (
        <table>
            <tbody>
                <tr>
                <td><strong>{date} : </strong></td>
                <td>{description} : </td>
                <td>{category} : </td>
                <td><strong>{amount}</strong></td>
                <td>
                    <button onClick={handleDelete}>Delete</button>
                </td>
                </tr>
            </tbody>
        </table>

    )
}
//exporting the component to other files
export default TransactionItem