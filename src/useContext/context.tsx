import {
  createContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";

// Step 1: Create a Context
interface UserContextType {
  loggedIn: boolean;
  setLoggedIn: Dispatch<SetStateAction<boolean>>;
}

// Step 1: Create a Context
const UserContext = createContext<UserContextType>({
  loggedIn: false,
  setLoggedIn: () => {},
});

// Step 2: Create a Context Provider
interface UserProviderProps {
  children: ReactNode; // Explicitly define the type of children prop
}

// Step 2: Create a Context Provider
const UserProvider = ({ children }: UserProviderProps) => {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <UserContext.Provider value={{ loggedIn, setLoggedIn }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
