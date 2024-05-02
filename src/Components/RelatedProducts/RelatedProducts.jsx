import React from 'react';
import './RelatedProducts.css';
import data_product from '../Assets/tovar';
import Item from '../Item/Item';

const getRandomItems = (arr, count) => {
  const shuffled = arr.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

export const RelatedProducts = () => {
  const randomItems = getRandomItems(data_product, 4);

  return (
    <div className="relatedproducts">
      <h1>Рекомендуем</h1>
      <hr />
      <div className="relatedproducts-item">
        {randomItems.map((item, i) => (
          <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} />
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;

