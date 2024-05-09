import React, { createContext, useContext, useEffect, useState }  from "react";



const UserContext = createContext();

export const UserProvider = ({children}) =>{
    const [currentUser, setCurrentUser] = useState('');
   
  useEffect(() => {
    // Retrieve user from localStorage
    let storedUser = localStorage.getItem('userInfo');
    if (storedUser) {
     
      storedUser = JSON.parse(storedUser);
      
      setCurrentUser(storedUser.user);
     
    } 
  }, []);

  
  // Function to update user and store in localStorage


  return (
    <UserContext.Provider value={{ currentUser }}>
      {children}
    </UserContext.Provider>
  );

}

export const useUser = () => {
    const context = useContext(UserContext);
    if (!context) {
      throw new Error('useUser must be used within a UserProvider');
    }
    return context;
  };