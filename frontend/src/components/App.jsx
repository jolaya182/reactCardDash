// @refresh reset
/**
 * @title: Applcation.jsx
 * @author: Javier Olaya
 * @date: 6/23/2021
 * @description: Main container for page routing and inital fetch call
 */
import { useReducer, useEffect } from 'react';
import { Route, Switch } from 'react-router';
import { CardOverview, CardActivity, Whoops404 } from '../pages/Page';
import StateContext from './StateContext';
import AppReducers from '../reducers/AppReducers';
import FetchApi from './FetchApi';
import constants from '../constants/constants';

/**
 *
 *
 * @return {*} 
 */
const App = () => {
  const { URL } = constants;
  const [state, dispatch] = useReducer(AppReducers, constants);

  const receiveInitialData = (json) => {
    const { userData, card, transactions } = json;
    dispatch({ type: 'LOAD_INITIAL_USERDATA', userData });
    dispatch({ type: 'LOAD_INITIAL_CARD', card });
    dispatch({ type: 'LOAD_INITIAL_TRANSACTIONS', transactions });
  };

  useEffect(() => {
    const method = 'GET';
    FetchApi(`${URL}`, method, receiveInitialData, {});
  }, []);

  return (
    <StateContext.Provider value={{ state, dispatch }}>
      <Switch>
        <Route exact path="/" component={CardOverview} />
        <Route exact path="/CardActivity" component={CardActivity} />
        <Route component={Whoops404} />
      </Switch>
    </StateContext.Provider>
  );
};

export default App;
