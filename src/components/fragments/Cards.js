import React from 'react'

const Cards = ({image, title, desc}) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img
        className="w-full p-3"
        src={image}
        alt="Card"
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">
          {desc}
        </p>
      </div>
    </div>
  )
}

export default Cards