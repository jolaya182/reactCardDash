const userDataReducer = (state, action) => {
  // console.log('userDataReducer', action.userData);
  switch (action.type) {
    case 'LOAD_INITIAL_USERDATA':
      return action.userData;
    default:
      return state.userData;
  }
};
const cardReducer = (state, action) => {
  // console.log('cardReducer', action.card);
  switch (action.type) {
    case 'LOAD_INITIAL_CARD':
      return action.card;
    default:
      return state.card;
  }
};
const transactionsReducer = (state, action) => {
  // console.log('transactionsReducer', action.transactions);
  switch (action.type) {
    case 'LOAD_INITIAL_TRANSACTIONS':
      return action.transactions;
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
