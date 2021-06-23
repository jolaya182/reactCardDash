/**
 * @title: CardMetrics.jsx
 * @author: Javier Olaya
 * @date: 6/23/2021
 * @description: shows the card information such as total sum or purchased goods and average amount
 */
import { useContext } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import StateContext from './StateContext';
/**
 * @return {html}
 */
const CardMetrics = () => {
  const { state } = useContext(StateContext);
  const { transactions } = state;
  const { sum, average } = transactions;

  return (
    <>
      <h1>CardMetrics</h1>
      <Col>
        <Row>
          <Col className="textWrap card-height">Sum: </Col>
          <Col className="textWrap card-height">{sum} </Col>
        </Row>
        <Row>
          <Col className="textWrap card-height">Average:</Col>
          <Col className="textWrap card-height">{average}</Col>
        </Row>
      </Col>
    </>
  );
};
export default CardMetrics;
