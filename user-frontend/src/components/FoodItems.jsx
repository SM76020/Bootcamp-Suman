import React from 'react';

const FoodItems = ({ item, onAddToCart }) => {
  return (
    <div className="meal-item">
      <img src={`https://food-order-backend-u5gp.onrender.com/${item.image}`} alt={item.name} />
      <h3>{item.name}</h3>
      <p className='meal-item-description'>{item.description}</p>
      <p className='meal-item-price'>Price: ${parseFloat(item.price).toFixed(2)}</p>
      <button onClick={() => onAddToCart(item)} className='button'>Add to Cart</button>
    </div>
  );
};

export default FoodItems;
