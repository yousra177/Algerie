import React, { createContext, useState, useContext } from 'react';

// Create a context
const ContactContext = createContext();

// Create a provider component
export const ContactProvider = ({ children }) => {
  const [list, setList] = useState([]);

  return (
    <ContactContext.Provider value={{ list, setList }}>
      {children}
    </ContactContext.Provider>
  );
};

// Hook to use the contact context
export const useContact = () => useContext(ContactContext);
