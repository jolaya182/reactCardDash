/**
 * @title: MainMenu.jsx
 * @author: Javier Olaya
 * @date: 6/23/2021
 * @description: side bar menu that helps the user navigate
 */
import { NavLink } from 'react-router-dom';

/**
 * @return {html}
 */
const MainMenu = () => {
  return (
    <section className="main-menu">
      <div> Picture </div>
      <div className="colm">
        <div className="roww">
          <div className="colm">
            <NavLink
              to="/"
              style={{ textDecoration: 'none' }}
              className="navLinks"
            >
              Card Overview
            </NavLink>
          </div>
        </div>
        <div className="roww">
          <div className="colm">
            <NavLink
              to="/CardActivity"
              style={{ textDecoration: 'none' }}
              className="navLinks"
            >
              Card Activity
            </NavLink>
          </div>
        </div>
      </div>
    </section>
  );
};
export default MainMenu;
