import { useState } from "react";
import { useAddTransaction } from "../hooks/useAddTransaction";
import { useGetTransactions } from "../hooks/useGetTransactions";
import "./style.css";

import { useNavigate } from "react-router-dom";

export const ExpenseTracker = () => {
  const { addTransaction } = useAddTransaction();
  const { transactions, transactionTotals } = useGetTransactions();

  const [description, setDescription] = useState("");
  const [transactionAmount, setTransactionAmount] = useState(0);
  const [transactionType, setTransactionType] = useState("expense");

  const { balance, expenses, income } = transactionTotals;

  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    addTransaction({
      description,
      transactionAmount,
      transactionType,
    });
  };

  return (
    <>
      <div className="expense-tracker">
        <div className="container">
          <h1>支出計算器</h1>
          <div className="balance">
            <h3> 餘額</h3>
            <h2>${balance}</h2>
          </div>

          <div className="summary">
            <div className="income">
              <h4>收入</h4>
              <p>${income}</p>
            </div>
            <div className="expenses">
              <h4>支出</h4>
              <p>${expenses}</p>
            </div>
          </div>
          <form className="add-transaction" onSubmit={onSubmit}>
            <input
              type="text"
              placeholder="Description"
              required
              onChange={(e) => setDescription(e.target.value)}
            />
            <input
              type="number"
              placeholder="Amount"
              required
              onChange={(e) => setTransactionAmount(e.target.value)}
            />
            <input
              type="radio"
              id="expense"
              value="expense"
              checked={transactionType === "expense"}
              onChange={(e) => setTransactionType(e.target.value)}
            />
            <label htmlFor="expense">Expenses</label>
            <input
              type="radio"
              id="income"
              value="income"
              checked={transactionType === "income"}
              onChange={(e) => setTransactionType(e.target.value)}
            />
            <label htmlFor="income">Income</label>

            <button type="submit">Add Transition</button>
          </form>
        </div>
      </div>
      <div className="transactions">
        <h3>交易記錄</h3>
        <ul>
          {transactions.map((transaction) => {
            const { description, transactionAmount, transactionType } =
              transaction;

            return (
              <li>
                <h4>{description}</h4>
                <p>
                  ${transactionAmount} 。{" "}
                  <label
                    style={{
                      color: transactionType === "expense" ? "red" : "green",
                    }}
                  >
                    {transactionType}
                  </label>
                </p>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="expense-return-button">
        <button
          onClick={() => {
            navigate("/");
          }}
        >
          返回
        </button>
      </div>
    </>
  );
};
