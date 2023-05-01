import React from 'react';
import Links from './Links';
import Socials from './Socials';
import Newsletter from './Newsletter';
import Payment from './Payment';
import Copyright from './Copyright';

import styles from './styles.module.scss';

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<div className={styles.footer__container}>
				<Links />
				<Newsletter />
				<Socials />
				<Payment />
				<Copyright />
			</div>
		</footer>
	);
};

export default Footer;
