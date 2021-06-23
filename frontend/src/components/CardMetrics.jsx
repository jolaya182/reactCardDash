/**
 * @title: CardMetrics.jsx
 * @author: Javier Olaya
 * @date: 6/23/2021
 * @description: shows the card information such as total sum or purchased goods and average amount
 */
import { useContext } from 'react';
import StateContext from './StateContext';

export const CardMetrics = () => {
  const { state } = useContext(StateContext);
  const { transactions } = state;
  const { sum, average } = transactions;

  return (
    <section>
      <h1>CardMetrics</h1>
      <section>
        <div className="roww">
          <div className="colm">Sum: </div>
          <div className="colm">{sum} </div>
        </div>
        <div className="roww">
          <div className="colm">Average:</div>
          <div className="colm">{average}</div>
        </div>
      </section>
    </section>
  );
};
export default CardMetrics;
