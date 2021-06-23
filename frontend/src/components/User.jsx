/**
 * @title: User.jsx
 * @author: Javier Olaya
 * @date: 6/23/2021
 * @description: User information displayed
 */
import { useContext } from 'react';
import Table from 'react-bootstrap/Table';
import StateContext from './StateContext';

const User = () => {
  const { state } = useContext(StateContext);
  const { userData } = state;
  const { user, name, email } = userData;

  return (
    <Table>
      <tbody>
        <tr>
          <td colSpan="2">
            <h1> Owner </h1>
          </td>
        </tr>
        <tr>
          <td className="card-height">User:</td>
          <td className="card-height">{user}</td>
        </tr>
        <tr>
          <td className="card-height">Name</td>
          <td className="card-height">{name}</td>
        </tr>
        <tr>
          <td className="card-height">Email</td>
          <td className="card-height">{email}</td>
        </tr>
      </tbody>
    </Table>
  );
};
export default User;
