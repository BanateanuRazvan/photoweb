import React from 'react';
import './contact.css';
import Navbar from '../../components/navbar/navbar';
import instagram from '../../logo/instagram.svg';
import facebook from '../../logo/facebook.svg';
import email from '../../logo/email.svg';
import phone from '../../logo/phone.svg';

const Contact = () => {
	return(
		<div className='contactdiv'>
		<Navbar />
		<h1 className='contacttitle'>CONTACT US</h1>

			<span className='linkto'>
				<img className='contactlogo'
				alt='Instagram'
				src={instagram}/>
				<a href='https://www.instagram.com/burlibasaantonel/'><h2>Instagram</h2></a>
			</span>

			<span className='linkto'>
				<img className='contactlogo'
				alt='Facebook'
				src={facebook}/>
				<a href='https://www.facebook.com/burlibasa.antonel/'><h2>Facebook</h2></a>
			</span>

			<span className='linkto'>
				<img className='contactlogo'
				alt='Email'
				src={email}/>
				<h2>asdc_gfsv@yahoo.com</h2>
			</span>

			<span className='linkto'>
				<img className='contactlogo'
				alt='Phone'
				src={phone}/>
				<h2>0748393748</h2>
			</span>
		</div>
		);
}

export default Contact;