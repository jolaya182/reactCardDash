/* eslint-disable camelcase */
/**
 * @title: Transaction.jsx
 * @author: Javier Olaya
 * @date: 6/23/2021
 * @description: lists all transaction
 */
import { useContext } from 'react';
import { Table } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import StateContext from './StateContext';
import FilterTool from './FilterTool';
import ExoPagination from './ExoPagination';
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
                <td>{id}</td>
                <td>{card}</td>
                <td>{`$${amount}`}</td>
                <td>{status}</td>
                <td>{merchant}</td>
                <td>{category}</td>
                <td>{created_at}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      <Row>
        <Col>
          <ExoPagination />
        </Col>
      </Row>
    </section>
  );
};
export default Transaction;
