import React from 'react'
import './NewCollections.css'
import new_collection from '..//Assets/new_collection'
import Item from '../Item/Item'
export const NewCollections = () => {
  return (
    <div className='new-collections'>
        <h1>НОВОЕ ПОСТУПЛЕНИЕ</h1>
        <hr / >
           <div className='collections'>
            <div className='collection'>
                {new_collection.map((item,i)=>{
                  return <Item  Item key={i} id={item.id} name ={item.name} image={item.image} new_price={item.new_price} old_peice={item.old_price} />
                })}
                </div>
                <div className='gap'></div>
            </div>



    </div>

  )
}
