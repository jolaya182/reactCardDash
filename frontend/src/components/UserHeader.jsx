/**
 * @title: UserHeader.jsx
 * @author: Javier Olaya
 * @date: 6/23/2021
 * @description: top header displaying the user's information
 */
import { useContext } from 'react';
import Col from 'react-bootstrap/Col';
import StateContext from './StateContext';
import Bart from '../../images/bart1.png';

/**
 * @return {html}
 */
const UserHeader = () => {
  const { state } = useContext(StateContext);
  const { userData } = state;
  const { name } = userData;

  return (
    <section className="colm-user-header">
      <Col>
        <img src={Bart} className="pic" alt="pic" />
      </Col>
      Welcome : {name}
    </section>
  );
};
export default UserHeader;
