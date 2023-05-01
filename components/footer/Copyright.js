import React from 'react';
import Link from 'next/link';
import { IoLocationSharp } from 'react-icons/io5';

import styles from './styles.module.scss';

const Copyright = () => {
	return (
		<div className={styles.footer__copyright}>
			<section>&copy;2022 Shoppay All Rights Reserved.</section>
			<ul className={styles.list}>
				{data.map((item, index) => (
					<li key={index} className={styles.list__item}>
						<Link href={item.link}>{item.name}</Link>
					</li>
				))}
				<li className={styles.list__item}>
					<IoLocationSharp /> India
				</li>
			</ul>
		</div>
	);
};

export default Copyright;

const data = [
	{
		name: 'Privacy Center',
		link: '',
	},
	{
		name: 'Privacy & Cookie Policy',
		link: '',
	},
	{
		name: 'Manage Cookies',
		link: '',
	},
	{
		name: 'Terms & Conditions',
		link: '',
	},
	{
		name: 'Copyright Notice',
		link: '',
	},
];
