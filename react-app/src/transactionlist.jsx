import React from "react";
import TransactionItem from "./transactions";

function TransactionList({ transactions, onDeleteTransaction }) {
    
  return (
    <div>
      <h2>My Transactions</h2>
      <ul>
        {transactions.map((transaction) => (
          <TransactionItem key={transaction.id} transaction={transaction} onDeleteTransaction={onDeleteTransaction} />
        ))}
      </ul>
    </div>
  );
}

export default TransactionList;