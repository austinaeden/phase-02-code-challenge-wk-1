//importing components from different files
import React from "react";
import TransactionItem from "./transactions";

//creating function component for the transaction list 
function TransactionList({ transactions, onDeleteTransaction, setFilterdTansaction }) {
//returning the function of the transaction 
  return (
    <div>
      <h2>My Transactions</h2>
      <ul>
         {transactions.map((transaction) => (
          <TransactionItem key={transaction.id} transaction={transaction} onDeleteTransaction={onDeleteTransaction} setFilterdTansaction={setFilterdTansaction} />
         ))}
      </ul>
    </div>
  );
}

//exporting the transaction list components to other files 
export default TransactionList;