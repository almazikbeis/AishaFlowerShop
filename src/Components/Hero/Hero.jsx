import React from 'react'
import './Hero.css'
import data_product  from '../Assets/data'
import NewItem from '../NewItem/NewItem'
 const Hero = () => {
  return (
    <div className='hero'>
        <h1>Каталог</h1>
        <hr />
        <div className="hero-item">
            {data_product.map((item,i)=>{
                return < NewItem key={i} id={item.id} name ={item.name} image={item.image} />
            })}
        </div>
    </div>
  )
}
export default Hero
