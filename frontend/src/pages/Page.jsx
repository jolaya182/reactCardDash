/* eslint-disable camelcase */
/* eslint-disable react/prop-types */
import { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import StateContext from '../components/StateContext';
import FetchApi from '../components/FetchApi';
import constants from '../constants/constants';
import Pagination from '../components/Pagination';
import FilterTool from '../components/FilterTool';

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
  return (
    <section className="">
      <h1>CardDetails</h1>
      <div className="roww">
        <div className="colm card-height">Id:</div>
        <div className="colm card-height">{`${id}`}</div>
      </div>
      <div className="roww">
        <div className="colm card-height">User:</div>
        <div className="colm card-height">{`${user}`}</div>
      </div>
      <div className="roww">
        <div className="colm card-height">Card Number:</div>
        <div className="colm card-height">{`${number}`}</div>
      </div>
      <div className="roww">
        <div className="colm card-height"> Card Last four numbers:</div>
        <div className="colm card-height"> {`${last_four}`}</div>
      </div>
      <div className="roww">
        <div className="colm card-height">Spending Limit:</div>
        <div className="colm card-height">{`${spending_limit}`}</div>
      </div>
      <div className="roww">
        <div className="colm card-height">{}</div>
        <div className="colm card-height">{}</div>
      </div>
    </section>
  );
};

export const CardMetrics = () => {
  const { state } = useContext(StateContext);
  const { transactions } = state;
  const { sum, average } = transactions;

  return (
    <section>
      <h1>CardMetrics</h1>
      <section>
        <div className="roww">
          <div className="colm">Sum: </div>
          <div className="colm">{sum} </div>
        </div>
        <div className="roww">
          <div className="colm">Average:</div>
          <div className="colm">{average}</div>
        </div>
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

export const Transaction = ({ data }) => {
  return (
    <section>
      {data.map((record, recordIndx) => {
        const { id, card, amount, status, merchant, category, created_at } =
          record;
        return (
          <div key={`trans-${recordIndx}`} className="roww">
            <div className="colm">{id}</div>
            <div className="colm">{card}</div>
            <div className="colm">{`$${amount}`}</div>
            <div className="colm">{status}</div>
            <div className="colm">{merchant}</div>
            <div className="colm">{category}</div>
            <div className="colm">{created_at}</div>
          </div>
        );
      })}
    </section>
  );
};


export const CardActivity = () => {
  const { state } = useContext(StateContext);
  const { transactions } = state;
  const { data } = transactions;
  console.log('transaction', transactions);

  return (
    <PageTemplate>
      <FilterTool />
      <Transaction data={data} />
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
