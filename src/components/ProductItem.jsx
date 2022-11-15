import React, { useState, useContext } from 'react';
import AppContext from 'context/AppContext';
import addToCartImage from '@icons/bt_add_to_cart.svg';
import addedToCartImage from '@icons/bt_added_to_cart.svg';

import Image from 'next/image';
import styles from '@styles/ProductItem.module.scss';

const ProductItem = ({ product }) => {
  const {
    state: { cart },
    addToCart,
	removeFromCart
  } = useContext(AppContext);

  const handleClickAdd = (item) => {
    addToCart(item);
  };
  const handleClickRemove = (item) => {
    removeFromCart(item);
  };

  const addedToCart = cart.some((item) => item.id == product.id);

  return (
    <div className={styles['ProductItem']}>
      <Image src={product?.images[0]} alt={product?.title} width="640" height="480" />
      <div className={styles['product-info']}>
        <div>
          <p>${product.price}</p>
          <p>{product.title}</p>
        </div>
        {addedToCart ? (
          <figure onClick={() => handleClickRemove(product)}>
            <Image src={addedToCartImage} alt="" />
          </figure>
        ) : (
          <figure onClick={() => handleClickAdd(product)}>
            <Image src={addToCartImage} alt="" />
          </figure>
        )}
      </div>
    </div>
  );
};

export default ProductItem;
