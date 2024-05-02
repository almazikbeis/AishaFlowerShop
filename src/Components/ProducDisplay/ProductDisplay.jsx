import React from 'react'
import './ProductDisplay.css'
import star_icon from '../Assets/star_icon.png'
import star_dull_icon from '../Assets/star_dull_icon.png'
import { useContext } from 'react'
import { ShopContext } from '../Context/Shopcontext'
export const ProductDisplay = (props) => {
    const {product} = props;
    const {addToCart} = useContext(ShopContext);
  return (
    <div className="productdisplay">
        <div className="productdisplay-left">
            <div className="productdisplay-img-list">
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
            </div>
            <div className="productdisplay-img">
                <img className='productdisplay-img-main' src={product.image} alt="" />
            </div>
        </div>
        <div className="productdisplay-right">
            <h1>{product.name}</h1>
            <div className="productdisplay-right-stars">
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_dull_icon} alt="" />
                <p>114</p>
            </div>
            <div className="productdisplay-right-prices">
                <div className="productdisplay-right-price-new">{product.new_price}ТГ</div>
            </div>
            <div className="productdisplay-right-description">
            <p>{product.review}</p>
            </div>
            <div className="productdisplay-right-size">
                <button onClick={()=>addToCart(product.id)} >Добавить товар</button>
            </div>
        </div>
    </div>
  )
}
export default ProductDisplay;
