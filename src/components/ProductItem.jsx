import React, { useContext } from 'react';
import AppContext from 'context/AppContext';
import addToCartImage from '@icons/bt_add_to_cart.svg';

import Image from 'next/image';
import styles from '@styles/ProductItem.module.scss';

const ProductItem = ({ product }) => {
	const { addToCart } = useContext(AppContext);

	const handleClick = item => {
		addToCart(item);
	}

	return (
		<div className={styles["ProductItem"]}>
			<Image loader={() => product.images[0]} src={product.images[0]} alt={product.title} width="640" height="480" />
			<div className={styles["product-info"]}>
				<div>
					<p>${product.price}</p>
					<p>{product.title}</p>
				</div>
				<figure onClick={() => handleClick(product)} >
					<Image src={addToCartImage} alt="" />
				</figure>
			</div>
		</div>
	);
}

export default ProductItem;
