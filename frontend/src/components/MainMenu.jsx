/**
 * @title: MainMenu.jsx
 * @author: Javier Olaya
 * @date: 6/23/2021
 * @description: side bar menu that helps the user navigate
 */
import { NavLink } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
/**
 * @return {html}
 */
const MainMenu = () => {
  return (
    <Container>
      <section className="sidebar">
        <Row>
          <Col>
            <div className="nav-link-wrapper">
              <NavLink
                to="/"
                style={{ textDecoration: 'none' }}
                className="navLinks"
              >
                Card Overview
              </NavLink>
            </div>
          </Col>
          <Col>
            <div className="nav-link-wrapper">
              <NavLink
                to="/CardActivity"
                style={{ textDecoration: 'none' }}
                className="navLinks"
              >
                Card Activity
              </NavLink>
            </div>
          </Col>
        </Row>
      </section>
    </Container>
  );
};
export default MainMenu;
