/* eslint-disable camelcase */
/**
 * @title: Transaction.jsx
 * @author: Javier Olaya
 * @date: 6/23/2021
 * @description: lists all transaction
 */
import { useContext } from 'react';
import { Table } from 'react-bootstrap';
import StateContext from './StateContext';
import TransCell from './TransCell';
import FilterTool from './FilterTool';
/**
 * @return {html}
 */
const Transaction = () => {
  const { state } = useContext(StateContext);
  const { transactions } = state;
  const { data } = transactions;
  return (
    <section className="transactions colm">
      <Table hover>
        <FilterTool />
        <tbody>
          {data.map((record, recordIndx) => {
            const { id, card, amount, status, merchant, category, created_at } =
              record;
            return (
              <tr key={`trans-${recordIndx}`}>
                <TransCell>{id}</TransCell>
                <TransCell>{card}</TransCell>
                <TransCell>{`$${amount}`}</TransCell>
                <TransCell>{status}</TransCell>
                <TransCell>{merchant}</TransCell>
                <TransCell>{category}</TransCell>
                <TransCell>{created_at}</TransCell>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </section>
  );
};
export default Transaction;
