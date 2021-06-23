/* eslint-disable camelcase */
/* eslint-disable react/prop-types */
/**
 * @title: Page.jsx
 * @author: Javier Olaya
 * @date: 6/23/2021
 * @description: main component that holds the page sections
 */
import Pagination from '../components/Pagination';
import FilterTool from '../components/FilterTool';
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
    <section className="page-template">
      <MainMenu />
      <section className="right-content">
        <UserHeader />
        {children}
      </section>
    </section>
  );
};

export const CardOverview = () => {
  return (
    <PageTemplate>
      <CardDetails />
      <CardMetrics />
    </PageTemplate>
  );
};

export const CardActivity = () => {
  return (
    <PageTemplate>
      <FilterTool />
      <Transaction />
      <Pagination />
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
