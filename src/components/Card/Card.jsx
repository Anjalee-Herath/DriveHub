import React from 'react';
import ArrowIcon from '../Common/ArrowIcon';

const Card = ({ imagePath, title, description, actionArrow, height, width }) => {
  return (
    <div className="flex flex-col items-center p-4">
      <img
        src={imagePath}
        className="max-h-[${height?.height:'240px'}] max-w-[$[width?.width:'200px']] min-h-[220px] min-w-[200px] hover:scale-105 cursor-pointer bg-cover bg-center border rounded"
        alt={title}
      />
      <div className='flex justify-between items-center'>
        <div className='flex flex-col p-5'>
        <p className="text-[14px] mt-3 text-center font-medium">{title}</p>
        {description && <p className='text-[12px] px-2 text-gray-600'>{description}</p>}
        </div>
        {actionArrow && <span className='cursor-pointer px-2 items-center'><ArrowIcon/></span>}
      </div>
      
    </div>
  );
};

export default Card;
