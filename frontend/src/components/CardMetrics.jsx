/**
 * @title: CardMetrics.jsx
 * @author: Javier Olaya
 * @date: 6/23/2021
 * @description: shows the card information such as total sum or purchased goods and average amount
 */
import { useContext } from 'react';
import Table from 'react-bootstrap/Table';
import StateContext from './StateContext';

/**
 * @return {html}
 */
const CardMetrics = () => {
  const { state } = useContext(StateContext);
  const { transactions } = state;
  const { sum, average } = transactions;

  return (
    <Table>
      <tbody>
        <tr>
          <td colSpan="2">
            <h1>CardMetrics</h1>
          </td>
        </tr>

        <tr>
          <td className="card-height">Sum: </td>
          <td className="card-height">{sum} </td>
        </tr>
        <tr>
          <td className="card-height">Average:</td>
          <td className="card-height">{average}</td>
        </tr>
      </tbody>
    </Table>
  );
};
export default CardMetrics;
