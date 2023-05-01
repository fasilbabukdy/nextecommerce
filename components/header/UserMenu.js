import React from 'react';
import styles from './styles.module.scss';
import Link from 'next/link';

const UserMenu = ({ loggedIn }) => {
	return (
		<div className={styles.menu}>
			<h4>Welcom to Shoppay!</h4>
			{loggedIn ? (
				<div className={styles.flex}>
					<img className={styles.menu__img} src='https://www.pngarts.com/files/6/User-Avatar-in-Suit-PNG.png' alt='' />
					<div className={styles.col}>
						<h5>Fazil</h5>
						<button className={[styles.btn, styles.btn_logout, styles.btn_sm].join(' ')}>Sign Out</button>
					</div>
				</div>
			) : (
				<div className={styles.flex}>
					<div className={styles.button_action}>
						<button className={[styles.btn, styles.btn_primary].join(' ')}>Register</button>
						<button className={styles.btn}>Login</button>
					</div>
				</div>
			)}
			<ul className={styles.menu__list}>
				<li>
					<Link href='/profile'>Account</Link>
				</li>
				<li>
					<Link href='/profile'>My Orders</Link>
				</li>
				<li>
					<Link href='/profile/messages'>Message Center</Link>
				</li>
				<li>
					<Link href='/profile/address'>Address</Link>
				</li>
				<li>
					<Link href='/profile/whishlist'>Whishlist</Link>
				</li>
			</ul>
		</div>
	);
};

export default UserMenu;
