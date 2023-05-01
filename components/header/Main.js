import React from 'react';
import { useSelector } from 'react-redux';
import Link from 'next/link';
import logo from '/public/logo.png';
import Image from 'next/image';
import { RiSearch2Line } from 'react-icons/ri';
import { FaOpencart } from 'react-icons/fa';
import styles from './styles.module.scss';

const Main = () => {
	const { cart } = useSelector((state) => ({ ...state }));

	return (
		<div className={styles.main}>
			<div className={styles.main__container}>
				<Link className={styles.main__brand} href=''>
					<Image src={logo} alt='' />
				</Link>
				<div className={styles.search}>
					<input type='text' placeholder='Search...' />
					<span className={styles.search__icon}>
						<RiSearch2Line />
					</span>
				</div>
				<Link href='/cart' className={styles.cart}>
					<FaOpencart />
					<span className={styles.cart__count}>{cart.length}</span>
				</Link>
			</div>
		</div>
	);
};

export default Main;
