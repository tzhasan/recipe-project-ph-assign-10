import React from 'react';
import Header from '../SharedComponents/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../SharedComponents/Footer';


const HomeLayout = () => {
  return (
    <div>
      <Header></Header>
      <div className="min-h-[calc(100vh-116px)]">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default HomeLayout;