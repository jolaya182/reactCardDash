import { NavLink } from 'react-router-dom';

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
