import React from 'react';
import './UsersList.scss';

const ListItem = () => {
  return (
    <div className="listItem">
      <div className='userBlock'>
        <div className='userInfo'>
          <p>ФИО: </p>
          <span>Иван Иванов</span>
        </div>
        <div className='userInfo'>
          <p>город: </p>
          <span>Москва</span>
        </div>
        <div className='userInfo'>
          <p>компания: </p>
          <span>ООО "Пример"</span>
        </div>
      </div>
      <p>Подробнее</p>
    </div>
  );
};

export default ListItem;