import { useEffect, useReducer, createContext } from "react";

// Global initial state. Before a user has logged in, the state is null.
const initialState = {
  user: null,
};

// Define the reducer. Recieves the current state and performs an action, returning a new state based on the action.
const rootReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return { ...state, user: action.payload };
    case "LOGOUT":
      return { ...state, user: null };
    default:
      return state;
  }
};

// Create context.
const AuthContext = createContext();

// Create provider.
const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(rootReducer, initialState);

  useEffect(() => {
    dispatch({
      type: "LOGIN",
      payload: JSON.stringify(window.localStorage.getItem("user")),
    });
  }, []);

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
