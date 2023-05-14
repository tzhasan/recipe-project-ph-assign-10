import React from 'react';
import { useContext } from 'react';
import { ChefContext } from '../Auth-Provider/ContextProvider';
import ChefSectionCard from './ChefSectionCard';
import Loading from '../SharedComponents/Loading';

const ChefSectionHome = () => {
  
  const chefData = useContext(ChefContext)
  return (
    <div className="mt-14 md:mt-6 bg-slate-50 p-10">
      <h2 className="text-4xl my-4 font-bold text-center text-[#FF5771]">
        Best of Us
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ">
        {chefData.map((cd) => (
          <ChefSectionCard key={cd.id} cd={cd}></ChefSectionCard>
        ))}
      </div>
    </div>
  );
};

export default ChefSectionHome;