import React from 'react'

const Card = ({imagePath,title}) => {
  return (
    <div className="flex p-6 flex-col">
      <img
        src={imagePath}
        className="max-h-[220px] max-w-[200px] min-h-[260px] min-w-[240px] hover:scale-105 cursor-pointer bg-cover bg-center border rounded"
        alt="veh"
      />
      <p className="text-[14px] p-[5px]">{title}</p>
    </div>
  )
}

export default Card
