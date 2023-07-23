import React from "react";
import TransactionItem from "./transactions";

function TransactionList({ transactions }) {
    
  return (
    <div>
      <h2>My Transactions</h2>
      <ul>
        {transactions.map((transaction) => (
          <TransactionItem key={transaction.id} transaction={transaction} />
        ))}
      </ul>
    </div>
  );
}

export default TransactionList;