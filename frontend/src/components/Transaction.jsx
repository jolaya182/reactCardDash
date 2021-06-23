/* eslint-disable camelcase */
/**
 * @title: Transaction.jsx
 * @author: Javier Olaya
 * @date: 6/23/2021
 * @description: lists all transaction
 */
import { useContext } from 'react';
import StateContext from './StateContext';

const Transaction = () => {
  const { state } = useContext(StateContext);
  const { transactions } = state;
  const { data } = transactions;
  return (
    <section>
      {data.map((record, recordIndx) => {
        const { id, card, amount, status, merchant, category, created_at } =
          record;
        return (
          <div key={`trans-${recordIndx}`} className="roww">
            <div className="colm">{id}</div>
            <div className="colm">{card}</div>
            <div className="colm">{`$${amount}`}</div>
            <div className="colm">{status}</div>
            <div className="colm">{merchant}</div>
            <div className="colm">{category}</div>
            <div className="colm">{created_at}</div>
          </div>
        );
      })}
    </section>
  );
};
export default Transaction;
