import React, { useContext } from 'react';
import AppContext from 'context/AppContext';
import styles from 'styles/OrderItem.module.scss';
import close from 'assets/icons/icon_close.png';
import Image from 'next/image';

const OrderItem = ({ product }) => {
  const { removeFromCart } = useContext(AppContext);

  const handleRemove = (product) => {
    removeFromCart(product);
  };

  return (
    <div className={styles.OrderItem}>
      <figure>
        <Image src={product?.images[0]} alt={product?.title} width="640" height="480" />
      </figure>
      <p>{product?.title}</p>
      <p>${product?.price}</p>
      <Image src={close} alt="close" onClick={() => handleRemove(product)} />
    </div>
  );
};

export default OrderItem;
