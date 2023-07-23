import React from "react";
import TransactionItem from "./transactions";
import SearchBar from './searchBar'


function TransactionList({ transactions, onDeleteTransaction }) {
  //const [search, setSearch] = useState("")

  return (
    <div>
      <h2>My Transactions</h2>
      <SearchBar />
      <ul>
        {transactions.map((transaction) => (
          <TransactionItem key={transaction.id} transaction={transaction} onDeleteTransaction={onDeleteTransaction} />
        ))}
      </ul>
    </div>
  );
}

export default TransactionList;