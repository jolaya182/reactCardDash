import { useContext } from 'react';
import StateContext from './StateContext';

const UserHeader = () => {
  const { state } = useContext(StateContext);
  const { userData } = state;
  const { name } = userData;

  return <section className="user-header"> Welcome : {name} </section>;
};
export default UserHeader;
