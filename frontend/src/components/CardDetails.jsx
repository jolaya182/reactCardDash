/* eslint-disable camelcase */
/**
 * @title: CardDetails.jsx
 * @author: Javier Olaya
 * @date: 6/23/2021
 * @description: shows user's card information
 */
import { useContext } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import StateContext from './StateContext';

/**
 * @return {html}
 */
const CardDetails = () => {
  const { state } = useContext(StateContext);
  const { card } = state;
  const { id, user, number, last_four, spending_limit } = card;
  return (
    <>
      <h1>CardDetails</h1>
      <Col>
        <Row>
          <Col className="textWrap card-height">Id:</Col>
          <Col className="textWrap card-height">{`${id}`}</Col>
        </Row>

        <Row>
          <Col className="textWrap card-height">User:</Col>
          <Col className="textWrap card-height">{`${user}`}</Col>
        </Row>

        <Row>
          <Col className="textWrap card-height">Card Number:</Col>
          <Col className="textWrap card-height">{`${number}`}</Col>
        </Row>

        <Row>
          <Col className="textWrap card-height"> Card Last four numbers:</Col>
          <Col className="textWrap card-height"> {`${last_four}`}</Col>
        </Row>

        <Row>
          <Col className="textWrap card-height">Spending Limit:</Col>
          <Col className="textWrap card-height">{`${spending_limit}`}</Col>
        </Row>

        <Row>
          <Col className="textWrap card-height">{}</Col>
          <Col className="textWrap card-height">{}</Col>
        </Row>
      </Col>
    </>
  );
};

export default CardDetails;
