import React from 'react';
import styles from './styles.module.scss';
import visa from '/public/images/payment/visa.webp';
import mastercard from '/public/images/payment/mastercard.webp';
import maestro from '/public/images/payment/maestro.webp';
import paypal from '/public/images/payment/paypal.webp';
import american_express from '/public/images/payment/american_express.webp';
import cb from '/public/images/payment/cb.webp';
import jcb from '/public/images/payment/jcb.webp';
import Image from 'next/image';

const Payment = () => {
	const cards = [visa, american_express, cb, jcb, mastercard, maestro, paypal];
	return (
		<div className={styles.footer__payment}>
			<h3 className={styles.heading}>We Accept</h3>
			<div className={styles.flex}>
				{cards.map((card, index) => (
					<Image key={index} src={card} alt='cards' />
				))}
			</div>
		</div>
	);
};

export default Payment;
