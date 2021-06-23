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
    // case 'SORT_BY_CATEGORY':
    //   return;
    // case 'SORT_BY_AMOUNT':
    //   return;
    // case 'SORT_BY_MERCHANT':
    //   return;
    default:
      return state.transactions;
  }
};

const AppReducers = (state, action) => {
  return {
    userData: userDataReducer(state, action),
    card: cardReducer(state, action),
    transactions: transactionsReducer(state, action)
  };
};
export default AppReducers;
