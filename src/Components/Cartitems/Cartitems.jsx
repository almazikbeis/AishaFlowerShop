import React, { useContext } from 'react'
import './Cartitems.css'
import { ShopContext } from '../Context/Shopcontext'
import remove_icon  from '../Assets/cart_cross_icon.png'

const Cartitems = () => {
    const { getTotalCartAmount,all_product,cartItems,removeFromCart} = useContext(ShopContext);
  return (
    <div className="cartitems">
        <div className="cartitems-format-main">
            <p>Продукт</p>
            <p>Название</p>
            <p>Цена</p>
            <p>Количесвто</p>
            <p>Стоимость</p>
            <p>Удалить</p> 
        </div>
        <hr/>
        {all_product.map((e)=>{
            if(cartItems[e.id]>0){
                return <div>
                <div className="cartitems-format cartitems-format-main">
                    <img src={e.image} alt="" className='carticon-product-icon' />
                    <p>{e.name}</p>
                    <p>{e.new_price} tg</p>
                    <button className='cartitems-quantity'>{cartItems[e.id]}</button>
                    <p>{e.new_price*cartItems[e.id]}</p>
                    <img src={remove_icon} onClick={()=>{removeFromCart(e.id)}} alt="" />
                </div>
                <hr />
            </div>
            }
            return null;
        })}
        <div className="cartitems-down">
            <div className="cartitems-total">
                <h1>Корзина всего</h1>
                <div>
                    <div className="cartitems-total-item">
                        <p>всего</p>
                        <p>{}</p>
                    </div>
                   < hr/>
                   <div className="cartitems-total-item">
                    <p>Полная стоимость</p>
                    <p>{getTotalCartAmount()}tg</p>
                   </div>
                   <hr />
                   <div className="cartitems-total-item">
                    <p>Доставка</p>
                    <p>Бесплатно</p>
                   </div>
                   <hr />
                   <div className="cartitems-total-item">
                    <p>Всего</p>
                    <h3>{getTotalCartAmount()}tg</h3>
                   </div>
                   </div>
                   <button>ПЕРЕЙТИ К ОФОРМЛЕНИЮ</button>
                   </div>
                   <div className="cartitems-promocode">
                    <p></p>
                   </div>
                   <div className="cartitems-promocode">
                    <p>Введите сюда промокод</p>
                    <div className="cartitems-promobox">
                        <input type="text" placeholder='promo code' />
                        <button>Отправить</button>
                    </div>
                   </div>

                </div>
            </div>
  

  )
}

export default Cartitems