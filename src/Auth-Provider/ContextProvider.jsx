import React, { createContext, useEffect, useState } from 'react';
export const ChefContext = createContext(null)

const ContextProvider = ({ children }) => {
  const  [chefdata,setChefdata] = useState([])
  useEffect(() => {
    fetch("https://recipes-server-assign-10-tzhasan.vercel.app")
      .then((res) => res.json())
      .then((data) => setChefdata(data))
      .catch((error) => console.log(error));
  }, []);
  console.log(chefdata);
  return (
    <ChefContext.Provider value={chefdata}>{children}</ChefContext.Provider>
  );
};

export default ContextProvider;