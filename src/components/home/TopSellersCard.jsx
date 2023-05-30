import React from 'react'

const TopSellersCard = ({ card }) => {
  return (
    <div className='top-sellers-card'>
      <img src={card.image} />
      <p>{card.product}</p>
      <p>{card.price}</p>
    </div>
  )
}

export default TopSellersCard