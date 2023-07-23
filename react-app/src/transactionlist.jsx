import React from "react";
import TransactionItem from "./transactions";
import SearchBar from './searchBar'
import { useState } from "react";


function TransactionList({ transactions, onDeleteTransaction }) {
  const [search, setSearch] = useState("uua")

  return (
    <div>
      <h2>My Transactions</h2>
      <SearchBar search={search} />
      <ul>
        {transactions.map((transaction) => (
          <TransactionItem key={transaction.id} transaction={transaction} onDeleteTransaction={onDeleteTransaction} search={search}/>
        ))}
      </ul>
    </div>
  );
}

export default TransactionList;