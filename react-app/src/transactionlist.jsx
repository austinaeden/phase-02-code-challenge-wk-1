import React from "react";
import TransactionItem from "./transactions";
import { useState } from "react";


function TransactionList({ transactions, onDeleteTransaction, setFilterdTansaction }) {

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

export default TransactionList;