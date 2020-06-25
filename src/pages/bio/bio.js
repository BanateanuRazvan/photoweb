import React from 'react';
import './bio.css';
import IMG_1 from '../../data_photo/IMG_1.jpg';

import Navbar from '../../components/navbar/navbar';

const Bio = () => {
	return(
		<div className=''>
		<Navbar />
		<div className='bio'>
		 <img 
		   className='bioimage'
		   alt='IMG_1'
		   src={IMG_1} />
		 <p className='biotext'>Afdonannma ivnmaiono oaidnvoan anmdansvodsan andvnaskm apdvmsnapmvds apn mpanpdnvmp panmvpnap
		 	 vnsdanvoa anoanvon avnvanv aovniavon viaoei feaef efa fe af d  ca efaefafsad dfa d  fasdvasd 
		 	 advasiolansv advmva. Afdonannma ivnmaiono oaidnvoan anmdansvodsan andvnaskm apdvmsnapmvds apn mpanpdnvmp panmvpnap
		 	 vnsdanvoa anoanvon avnvanv aovniavon viaoei feaef efa fe af d  ca efaefafsad dfa d  fasdvasd 
		 	 advasiolansv advmva. Afdonannma ivnmaiono oaidnvoan anmdansvodsan andvnaskm apdvmsnapmvds apn mpanpdnvmp panmvpnap
		 	 vnsdanvoa anoanvon avnvanv aovniavon viaoei feaef efa fe af d  ca efaefafsad dfa d  fasdvasd 
		 	 advasiolansv advmva. </p>

		</div>
		</div>
		);
}

export default Bio;