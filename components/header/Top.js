import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { MdSecurity } from 'react-icons/md';
import { BsSuitHeart } from 'react-icons/bs';
import { RiAccountPinCircleLine, RiArrowDropDownFill } from 'react-icons/ri';
import styles from './styles.module.scss';
import UserMenu from './UserMenu';

const Top = () => {
	const [loggedIn, setLoggedIn] = useState(false);
	const [visible, setVisible] = useState(false);

	return (
		<div className={styles.top}>
			<div className={styles.top__container}>
				<div></div>
				<ul className={styles.top__list}>
					<li className={styles.top__list_item}>
						<MdSecurity />
						<span>Buyer Protection</span>
					</li>
					<li className={styles.top__list_item}>
						<span>Customer Service</span>
					</li>
					<li className={styles.top__list_item}>
						<span>Help</span>
					</li>
					<li className={styles.top__list_item}>
						<Link href='/profile/whishlist'>
							<BsSuitHeart />
							<span>Whishlist</span>
						</Link>
					</li>
					<li className={styles.top__list_item} onMouseOver={() => setVisible(true)} onMouseLeave={() => setVisible(false)}>
						{loggedIn ? (
							<div className={styles.flex}>
								<img src='https://www.pngarts.com/files/6/User-Avatar-in-Suit-PNG.png' alt='' />
								<span>Fazil</span>
								<RiArrowDropDownFill />
							</div>
						) : (
							<div className={styles.flex}>
								<RiAccountPinCircleLine />
								<span>Account</span>
								<RiArrowDropDownFill />
							</div>
						)}
						{visible && <UserMenu loggedIn={loggedIn} />}
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Top;
