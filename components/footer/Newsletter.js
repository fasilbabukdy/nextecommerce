import React from 'react';
import styles from './styles.module.scss';
import Link from 'next/link';

const Newsletter = () => {
	return (
		<div className={styles.footer__newsletter}>
			<h3 className={styles.heading}>Sign up for our newsletter</h3>
			<div className={styles.flex}>
				<input type='text' placeholder='Your email address' />
				<button className={styles.btn}>Subscribe</button>
			</div>
			<p>
				By clicking the subscribe button, you are agreeing to <Link href=''>Our privacy & Cookie policy</Link>
			</p>
		</div>
	);
};

export default Newsletter;
