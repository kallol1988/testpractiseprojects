import React from "react";
import Header from '../components/header';
import Footer from '../components/footer';
import ContactContent from '../components/contactContent';

const ContactPage = () => {
 
  return (
      <div className="mainPageWraper">
        <Header />
        <ContactContent />
        <Footer />
      </div>
  );
}

export default ContactPage;
