import React from "react";
import Header from '../components/header';
import Footer from '../components/footer';
import DashboardContent from '../components/dashboardContent';

const DashboardPage = () => {
 
  return (
      <div className="mainPageWraper">
        <Header />
        <DashboardContent />
        <Footer />
      </div>
  );
}

export default DashboardPage;
