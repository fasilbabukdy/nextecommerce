import React from 'react';
import Ad from './Ad';
import Top from './Top';
import Main from './Main';
import styles from './styles.module.scss';

const Header = () => {
	return (
		<header className={styles.header}>
			<Ad />
			<Top />
			<Main />
		</header>
	);
};

export default Header;
