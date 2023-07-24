//importing react from the react file
import React from "react"

//creating function component for the transaction item
function TransactionItem({ transaction, onDeleteTransaction,  }) {

    //creating variabble for the objects in the json file array
    const { id, date, description, category, amount } = transaction
    

    //deleteng transactions through fetch
    function handleDelete() {
        fetch(`http://localhost:3000/transactions/${id}`,{
      method:"DELETE"
    })
    onDeleteTransaction(id)
    }
    //returning the function comonents that are to be rendered
    return (

        <table>
            <tbody>
                <tr>
                <td><strong>{date} : :</strong></td>
                <td>{description} <strong>: :</strong> </td>
                <td>{category} <strong>: :</strong> </td>
                <td><strong>{amount}</strong></td>
                <td>
                    <button onClick={handleDelete}>Delete</button>
                </td>
                </tr>
            </tbody>
        </table>

    )
}

//exporting component to other files 
export default TransactionItem