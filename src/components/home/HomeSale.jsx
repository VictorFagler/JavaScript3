import { useContext } from 'react'
import { Link } from 'react-router-dom'
import HomeSaleAd from '../home/HomeSaleAd'
import HomeSaleProduct from './HomeSaleProduct'
import { ProductContext } from '../../contexts/ProductContext'

const HomeSale = () => {

  const { data } = useContext(ProductContext)

  return (
      <div className='sale-container'>
        <div className='grid-sale-template'>
          <HomeSaleAd />
          {
          data.map(card => (
            <Link to={`/productdetails/`} key={card._id}>
              <HomeSaleProduct card={card} key={card._id} />
            </Link>
          ))
        }
        </div>
      </div>
  )
}

export default HomeSale