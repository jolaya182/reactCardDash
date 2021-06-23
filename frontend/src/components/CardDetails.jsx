/* eslint-disable camelcase */
/**
 * @title: CardDetails.jsx
 * @author: Javier Olaya
 * @date: 6/23/2021
 * @description: shows user's card information
 */
import { useContext } from 'react';
import Table from 'react-bootstrap/Table';
import StateContext from './StateContext';

/**
 * @return {html}
 */
const CardDetails = () => {
  const { state } = useContext(StateContext);
  const { card } = state;
  const { id, user, number, last_four, spending_limit } = card;
  return (
    <Table>
      <tbody>
        <tr>
          <td colSpan="2">
            <h1>CardDetails</h1>
          </td>
        </tr>

        <tr>
          <td className=" card-height">Id:</td>
          <td className=" card-height">{`${id}`}</td>
        </tr>

        <tr>
          <td className=" card-height">User:</td>
          <td className=" card-height">{`${user}`}</td>
        </tr>

        <tr>
          <td className=" card-height">Card Number:</td>
          <td className=" card-height">{`${number}`}</td>
        </tr>

        <tr>
          <td className=" card-height"> Card Last four numbers:</td>
          <td className=" card-height"> {`${last_four}`}</td>
        </tr>

        <tr>
          <td className=" card-height">Spending Limit:</td>
          <td className=" card-height">{`${spending_limit}`}</td>
        </tr>

        <tr>
          <td className=" card-height">{}</td>
          <td className=" card-height">{}</td>
        </tr>
      </tbody>
    </Table>
  );
};

export default CardDetails;
