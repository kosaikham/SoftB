const initialState = {
  isAuth: false,
  isLoading: true,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SIGN_IN':
      return { ...state, isAuth: true, isLoading: false };
    case 'SIGN_OUT':
      return { ...state, isAuth: false, isLoading: false };
    default:
      return state;
  }
};

export default reducer;
