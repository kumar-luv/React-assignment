import React from 'react';
import { useAuth } from '../utils/context';

const Card = ({ id, name, title, address }) => {
  const {user,setUser} = useAuth();
  const handleClick = () => {
    setUser({id:id,name:name,title:title,address:address});
  };

  return (
    <div className={user.id===id?'selected-card':'card'} onClick={handleClick}>
      <h2 className="card-name">{name}</h2>
      <p className="card-title">{title}</p>
    </div>
  );
};

export default Card;


