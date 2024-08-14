import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ListUsers from '../../components/ListUsers';

const ListUserPage = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      <div style={{ flex: '1' }}>
        <ListUsers />
      </div>
      <Footer />
    </div>
  );
};

export default ListUserPage;