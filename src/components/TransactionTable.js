import React from 'react';

const TransactionTable = ({ transactions }) => {
  return (
    <div className="transaction-table">
      <table className="ui celled  striped padded table">
        <thead>
          <tr>
            <th><h3 className='ui center aligned header'>Date</h3></th>
            <th><h3 className='ui center aligned header'>Description</h3></th>
            <th><h3 className='ui center aligned header'>Category</h3></th>
            <th><h3 className='ui center aligned header'>Amount</h3></th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction.id}>
              <td>{transaction.date}</td>
              <td>{transaction.description}</td>
              <td>{transaction.category}</td>
              <td>{transaction.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionTable;
