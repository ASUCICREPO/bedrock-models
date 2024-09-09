// UserContext.js
import React, { createContext, useState } from "react";
import { adminUsers } from "../utilities/constants";

// Create context
export const UserContext = createContext();

// Create provider component
export const UserProvider = ({ children }) => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [username, setUsername] = useState("");

  const login = (user) => {
    setUsername(user);
    if (adminUsers.includes(user)) {
      setIsAdmin(true);
    }
    // Store the username and admin status in localStorage to persist it
    localStorage.setItem("username", user);
    localStorage.setItem("isAdmin", adminUsers.includes(user));
  };

  const logout = () => {
    setUsername("");
    setIsAdmin(false);
    localStorage.removeItem("username");
    localStorage.removeItem("isAdmin");
  };

  return (
    <UserContext.Provider value={{ isAdmin, username, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};
