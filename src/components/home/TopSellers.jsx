import { useState } from 'react'
import Placeholder2 from '../../assets/270x295.svg'
import Placeholder4 from '../../assets/369x310.svg'

import TopSellersCard from './TopSellersCard'
import TopPost from './TopPost'

const TopSellers = () => {

  const [topSellers, setTopSellers] = useState([
    {
      id: 1,
      image: Placeholder2,
      product: 'Lamp',
      price: '99,00 kr'
    },
    {
      id: 2,
      image: Placeholder2,
      product: 'Watch',
      price: '199,00 kr'
    },
    {
      id: 3,
      image: Placeholder2,
      product: 'Table',
      price: '2499,00 kr'
    },
    {
      id: 4,
      image: Placeholder2,
      product: 'Chair',
      price: '499,00 kr'
    }
  ])

  const [topPost, setTopPost] = useState([
    {
      id: 1,
      image: Placeholder4,
      product: 'Best dress',
      productDesc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, necessitatibus.',
      postedBy: 'POST BY: ADMIN',
      comments: 'COMMENTS: 13'
    },
    {
      id: 2,
      image: Placeholder4,
      product: 'Best dress',
      productDesc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, necessitatibus.',
      postedBy: 'POST BY: ADMIN',
      comments: 'COMMENTS: 13'
    },
    {
      id: 3,
      image: Placeholder4,
      product: 'Best dress',
      productDesc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, necessitatibus.',
      postedBy: 'POST BY: ADMIN',
      comments: 'COMMENTS: 13'
    },
  ])

  return (
    <div className='top-sellers-container'>
      <h3>Top selling products this week</h3>
      <div className='top-sellers-grid-template'>
        {
          topSellers.map(card => (
            <TopSellersCard card={card} key={card.id} />
          ))
        }
      </div>
      <div className='top-post-container'>
        <div className='top-post-grid-template'>
          {
            topPost.map(post => (
              <TopPost post={post} key={post.id} />
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default TopSellers