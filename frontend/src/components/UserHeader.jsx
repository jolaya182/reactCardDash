/**
 * @title: UserHeader.jsx
 * @author: Javier Olaya
 * @date: 6/23/2021
 * @description: top header displaying the user's information
 */
import { useContext } from 'react';
import StateContext from './StateContext';

/**
 * @return {html}
 */
const UserHeader = () => {
  const { state } = useContext(StateContext);
  const { userData } = state;
  const { name } = userData;

  return <section className="user-header"> Welcome : {name} </section>;
};
export default UserHeader;
