import React from 'react';
import { FaFacebookF, FaTiktok } from 'react-icons/fa';
import styles from './styles.module.scss';
import { BsInstagram, BsPinterest, BsSnapchat, BsTwitter, BsYoutube } from 'react-icons/bs';

const Socials = () => {
	return (
		<div className={styles.footer__socials}>
			<section>
				<h6 className={styles.heading}>Stay Connected</h6>
				<ul>
					<li>
						<a href='/' target='_blank'>
							<FaFacebookF />
						</a>
					</li>
					<li>
						<a href='/' target='_blank'>
							<BsInstagram />
						</a>
					</li>
					<li>
						<a href='/' target='_blank'>
							<BsTwitter />
						</a>
					</li>
					<li>
						<a href='/' target='_blank'>
							<BsYoutube />
						</a>
					</li>
					<li>
						<a href='/' target='_blank'>
							<BsPinterest />
						</a>
					</li>
					<li>
						<a href='/' target='_blank'>
							<BsSnapchat />
						</a>
					</li>
					<li>
						<a href='/' target='_blank'>
							<FaTiktok />
						</a>
					</li>
				</ul>
			</section>
		</div>
	);
};

export default Socials;
