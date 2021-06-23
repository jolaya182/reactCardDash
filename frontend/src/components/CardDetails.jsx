/* eslint-disable camelcase */
/**
 * @title: CardDetails.jsx
 * @author: Javier Olaya
 * @date: 6/23/2021
 * @description: shows user's card information
 */
import { useContext } from 'react';
import StateContext from './StateContext';

const CardDetails = () => {
  const { state } = useContext(StateContext);
  const { card } = state;
  const { id, user, number, last_four, spending_limit } = card;
  return (
    <section className="">
      <h1>CardDetails</h1>
      <div className="roww">
        <div className="colm card-height">Id:</div>
        <div className="colm card-height">{`${id}`}</div>
      </div>
      <div className="roww">
        <div className="colm card-height">User:</div>
        <div className="colm card-height">{`${user}`}</div>
      </div>
      <div className="roww">
        <div className="colm card-height">Card Number:</div>
        <div className="colm card-height">{`${number}`}</div>
      </div>
      <div className="roww">
        <div className="colm card-height"> Card Last four numbers:</div>
        <div className="colm card-height"> {`${last_four}`}</div>
      </div>
      <div className="roww">
        <div className="colm card-height">Spending Limit:</div>
        <div className="colm card-height">{`${spending_limit}`}</div>
      </div>
      <div className="roww">
        <div className="colm card-height">{}</div>
        <div className="colm card-height">{}</div>
      </div>
    </section>
  );
};

export default CardDetails;
