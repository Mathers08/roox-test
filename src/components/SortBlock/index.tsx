import React, {FC} from 'react';
import './SortBlock.scss';

interface SortProps {
  sortUsersByAddress: () => void;
  sortUsersByCompany: () => void;
}

const SortBlock: FC<SortProps> = ({sortUsersByAddress, sortUsersByCompany}) => {
  return (
    <div className="sortBlock">
      <p>Сортировка</p>
      <button onClick={sortUsersByAddress} className='btn'>по городу</button>
      <button onClick={sortUsersByCompany} className='btn'>по компании</button>
    </div>
  );
};

export default SortBlock;
