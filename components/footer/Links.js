import React from 'react';
import Link from 'next/link';
import logo from '/public/logo.png';
import styles from './styles.module.scss';
import Image from 'next/image';

const Links = () => {
	return (
		<div className={styles.footer__links}>
			{links.map((link, index) => (
				<ul className={styles.list} key={index}>
					{index === 0 ? <Image src={logo} alt='' /> : <h6 className={styles.list__heading}>{link.heading}</h6>}
					{link.links.map((item, i) => (
						<li key={i}>
							<Link href={item.link}>{item.name}</Link>
						</li>
					))}
				</ul>
			))}
		</div>
	);
};

export default Links;

const links = [
	{
		heading: 'SHOPPAY',
		links: [
			{
				name: 'About us',
				link: '',
			},
			{
				name: 'Contact us',
				link: '',
			},
			{
				name: 'Social Responsibility',
				link: '',
			},
			{
				name: '',
				link: '',
			},
		],
	},
	{
		heading: 'HELP & SUPPORT',
		links: [
			{
				name: 'Shipping Info',
				link: '',
			},
			{
				name: 'Returns',
				link: '',
			},
			{
				name: 'How To Order',
				link: '',
			},
			{
				name: 'How To Track',
				link: '',
			},
			{
				name: 'Size Guide',
				link: '',
			},
		],
	},
	{
		heading: 'Customer service',
		links: [
			{
				name: 'Customer service',
				link: '',
			},
			{
				name: 'Terms and Conditions',
				link: '',
			},
			{
				name: 'Consumers (Transactions)',
				link: '',
			},
			{
				name: 'Take our feedback survey',
				link: '',
			},
		],
	},
];
