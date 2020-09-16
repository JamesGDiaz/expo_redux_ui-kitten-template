const initState = {
  user: null,
  authenticated: false,
  notification: null,
  paypal: null,
  theme: "light",
  isLoading: true,
};

const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case "setUrl":
      return {
        ...state,
        url: action.url,
      };
    case "setNotifications":
      return {
        ...state,
        notification: action.notification,
      };
    case "setAuth":
      return {
        ...state,
        authenticated: action.authenticated,
      };
    case "setUser":
      return {
        ...state,
        user: action.user,
      };
    case "setPaypal":
      return {
        ...state,
        paypal: action.paypal,
      };
    case "setTheme":
      return {
        ...state,
        theme: action.theme,
      };
    case "setLoading":
      return {
        ...state,
        isLoading: action.loading,
      };
    default:
      return state;
  }
};

export default rootReducer;
