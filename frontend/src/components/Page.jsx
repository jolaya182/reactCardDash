/* eslint-disable react/prop-types */
// import { useState } from 'react';

export const UserHeader = () => {
  return <section className="">Welcome : user</section>;
};

export const MainMenu = () => {
  return (
    <section className="MainMenu">
      <div> Picture </div>
      <div className="colm">
        <div className="row">
          <div className="colm">1</div>
        </div>
        <div className="row">
          <div className="colm">2</div>
        </div>
      </div>
    </section>
  );
};

const PageTemplate = ({ children }) => {
  return (
    <div className="">
      <UserHeader />
      {children}
    </div>
  );
};

export const CardDetails = () => {
  return (
    <PageTemplate>
      <section />
    </PageTemplate>
  );
};

export const CardMetrics = () => {
  <PageTemplate>
    <section />
  </PageTemplate>;
};

export const CardOverview = () => {
  return (
    <PageTemplate>
      <section />
    </PageTemplate>
  );
};

export const Transaction = () => {
  return (
    <PageTemplate>
      <section />
    </PageTemplate>
  );
};
export const filterTool = () => {
  return (
    <PageTemplate>
      <section />
    </PageTemplate>
  );
};
export const Pagination = () => {
  return (
    <PageTemplate>
      <section />
    </PageTemplate>
  );
};
