import React from 'react'
import Hero from '../Components/Hero/Hero'
import Offers from '../Components/Offers/Offers'
import { NewCollections } from '../Components/NewCollections/NewCollections'
import './Shop.css'
import { NewsLetter } from '../Components/NewsLetter/NewsLetter'
export const Shop = () => {
  return (
    <div className='x'><Hero/>
    <NewCollections/>
    <div className='newsLetter'>
    <NewsLetter/>
    </div>
    </div>
  )
}
export default  Shop