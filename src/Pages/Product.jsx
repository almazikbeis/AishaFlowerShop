import React,{useContext} from 'react'
import { useParams } from 'react-router-dom';
import ProductDisplay from '../Components/ProducDisplay/ProductDisplay'
import { ShopContext } from '../Components/Context/Shopcontext';
import { RelatedProducts } from '../Components/RelatedProducts/RelatedProducts';
export const Product = () => {
  const {all_product} = useContext(ShopContext);
  const {productId} = useParams();
  const product = all_product.find((e)=> e.id === Number(productId));

  return (
    <div><ProductDisplay product={product} />
    <RelatedProducts></RelatedProducts></div>
    
  )
}
export default Product;