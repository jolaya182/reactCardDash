/* eslint-disable camelcase */
/* eslint-disable react/prop-types */
import { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import StateContext from '../components/StateContext';

export const UserHeader = () => {
  const { state } = useContext(StateContext);
  const { userData } = state;
  const { name } = userData;

  return <section className="user-header"> Welcome : {name} </section>;
};

export const MainMenu = () => {
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

export const CardDetails = () => {
  const { state } = useContext(StateContext);
  const { card } = state;
  const { id, user, number, last_four, spending_limit } = card;
  console.log('card', card);
  return (
    <section className="">
      <h1>CardDetails</h1>
      <div className="roww">
        <div className="colm cardHeight">Id:</div>
        <div className="colm cardHeight">{`${id}`}</div>
      </div>
      <div className="roww">
        <div className="colm cardHeight">User:</div>
        <div className="colm cardHeight">{`${user}`}</div>
      </div>
      <div className="roww">
        <div className="colm cardHeight">Card Number:</div>
        <div className="colm cardHeight">{`${number}`}</div>
      </div>
      <div className="roww">
        <div className="colm cardHeight"> Card Last four numbers:</div>
        <div className="colm cardHeight"> {`${last_four}`}</div>
      </div>
      <div className="roww">
        <div className="colm cardHeight">Spending Limit:</div>
        <div className="colm cardHeight">{`${spending_limit}`}</div>
      </div>
      <div className="roww">
        <div className="colm cardHeight">{}</div>
        <div className="colm cardHeight">{}</div>
      </div>
    </section>
  );
};

export const CardMetrics = () => {
  return <section> CardMetrics </section>;
};

export const CardOverview = () => {
  const { card } = useContext(StateContext);
  // const { userData } = state;
  // const { name } = userData;
  return (
    <PageTemplate>
      <CardDetails />
      <CardMetrics />
    </PageTemplate>
  );
};

export const Transaction = () => {
  return <section>Transaction</section>;
};
export const FilterTool = () => {
  return <section>FilterTool</section>;
};
export const Pagination = () => {
  return <section>Pagination</section>;
};

export const CardActivity = () => {
  const { transactions } = useContext(StateContext);
  // const { userData } = state;
  // const { name } = userData;
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
