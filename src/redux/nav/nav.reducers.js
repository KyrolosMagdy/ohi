const INITIAL_STATE = {
  hidden: true
};

const mobileNavReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "TOGGLE_NAV_HIDDEN":
      return {
        ...state,
        hidden: !state.hidden
      };

    default:
      return state;
  }
};

export default mobileNavReducer;
