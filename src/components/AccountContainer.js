import React, { useState, useEffect } from 'react';
import TransactionTable from './TransactionTable'; 
import Search from './Search';
import AddTransactionForm from './AddTransactionForm';
const App = () => {
  const [transactions, setTransactions] = useState([]);
  const [filteredTransactions, setFilteredTransactions] = useState([]);

  useEffect(() => {
    fetchTransactions();
  }, []);

  const fetchTransactions = async () => {
    try {
      const response = await fetch('http://localhost:8001/transactions');
      if (!response.ok) {
        throw new Error( "Failed to fetch transaction");
      }
      const data = await response.json();
      setTransactions(data);
      setFilteredTransactions(data);

    } catch (error) {
      console.error('Error fetching transactions:', error);
      
    }
  };

  const handleAddTransaction = async (newTransaction) => {
    try {
      const response = await fetch('http://localhost:8001/transactions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newTransaction),
      });
      const data = await response.json();
      setTransactions([...transactions, data]);
      setFilteredTransactions([...filteredTransactions, data]);
    } catch (error) {
      console.error('Error adding transaction:', error);
    }
  };

  const handleSearch = (searchTerm) => {
    const filtered = transactions.filter((transaction) =>
      transaction.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredTransactions(filtered);
  };

  return (
    <div>
      <Search onSearch={handleSearch} />
      <TransactionTable transactions={filteredTransactions} /> 
      <AddTransactionForm onAddTransaction={handleAddTransaction} />
    </div>
  );
};

export default App;
