/* eslint-disable camelcase */
/* eslint-disable react/prop-types */
/**
 * @title: Page.jsx
 * @author: Javier Olaya
 * @date: 6/23/2021
 * @description: main component that holds the page sections
 */
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Pagination from '../components/Pagination';
import CardMetrics from '../components/CardMetrics';
import CardDetails from '../components/CardDetails';
import MainMenu from '../components/MainMenu';
import Transaction from '../components/Transaction';
import UserHeader from '../components/UserHeader';

/**
 * @param {component} { children }
 * @return {html}
 */
const PageTemplate = ({ children }) => {
  return (
    <Container>
      <Row>
        <Col>
          <Row>
            <Col>
              <UserHeader />
            </Col>
          </Row>
          <Row>
            <Col>
              <MainMenu />
            </Col>
          </Row>
          <Row>{children}</Row>
        </Col>
      </Row>
    </Container>
  );
};

export const CardOverview = () => {
  return (
    <PageTemplate>
      <Col>
        <CardDetails />
      </Col>
      <Col>
        <CardMetrics />
      </Col>
    </PageTemplate>
  );
};

export const CardActivity = () => {
  return (
    <PageTemplate>
      <Col>
        <Transaction />
      </Col>
      <Col>
        <Pagination />
      </Col>
    </PageTemplate>
  );
};

export const Whoops404 = ({ location }) => {
  return (
    <div>
      <h1>
        Resources not found at
        {`${location.pathname}`}
      </h1>
    </div>
  );
};
