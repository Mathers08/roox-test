import React from 'react';
import './UsersList.scss';

const Sort = () => {
  return (
    <div className="sort">
      <p>Сортировка</p>
      <button className='btn'>по городу</button>
      <button className='btn'>по компании</button>
    </div>
  );
};

export default Sort;