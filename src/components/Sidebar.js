import React from 'react';
import customers from '../utils/constants';
import Card from './Card'; 
import { useAuth } from '../utils/context';
const Sidebar = () => {
  const {user} = useAuth();
  return (
    <div className="sidebar">
      {customers.map((customer) => (
        <Card
          key={customer.id}
          id={customer.id}
          name={customer.name}
          title={customer.title}
          address={customer.address}
        />
      ))}
    </div>
  );
};

export default Sidebar;

