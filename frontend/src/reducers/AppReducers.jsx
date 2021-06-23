/**
 * @title: AppReducers.jsx
 * @author: Javier Olaya
 * @date: 6/23/2021
 * @description: main applications reducers to handle all the transactions and user's information
 */

/**
 * updates the old set of chunks with the new requested chunks
 * @param {obj} state
 * @param {obj} action
 * @return {obj}
 */
const digestChunk = (state, action) => {
  const { data, currentIndex } = action;
  const newTransactions = {
    ...state.transactions,
    currentIndex,
    data
  };
  return newTransactions;
};

const userDataReducer = (state, action) => {
  switch (action.type) {
    case 'LOAD_INITIAL_USERDATA':
      return action.userData;
    default:
      return state.userData;
  }
};

const cardReducer = (state, action) => {
  switch (action.type) {
    case 'LOAD_INITIAL_CARD':
      return action.card;
    default:
      return state.card;
  }
};

const transactionsReducer = (state, action) => {
  switch (action.type) {
    case 'LOAD_INITIAL_TRANSACTIONS':
      return action.transactions;
    case 'GET_CHUNK':
      return digestChunk(state, action);
    case 'SORT_BY_TYPE':
      return { ...state.transactions, data: action.data };
    default:
      return state.transactions;
  }
};

/**
 * Main reducer of the application
 * @param {obj} state
 * @param {obj} action
 * @return {obj}
 */
const AppReducers = (state, action) => {
  return {
    userData: userDataReducer(state, action),
    card: cardReducer(state, action),
    transactions: transactionsReducer(state, action)
  };
};
export default AppReducers;
