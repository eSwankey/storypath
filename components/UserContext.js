// This page is used for storing the state of the username and profile pictre of the user
import React, { createContext, useContext, useState } from 'react';

const UserContext = createContext();
// Sets to "" and null before selected by user
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    username: '',
    photo: null,
  });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  return useContext(UserContext);
};
