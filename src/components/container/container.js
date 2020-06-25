import React from 'react';
import './container.css';

import IMG_1 from '../../data_photo/IMG_1.jpg';
import IMG_2 from '../../data_photo/IMG_2.jpg';
import IMG_3 from '../../data_photo/IMG_3.jpg';
import IMG_4 from '../../data_photo/IMG_4.jpg';
import IMG_5 from '../../data_photo/IMG_5.jpg';
import IMG_6 from '../../data_photo/IMG_6.jpg';
import IMG_7 from '../../data_photo/IMG_7.jpg';

const Container = () => {
	return(
		<div className='container shadow-2'>

	   <img 
	   className='image grow dib'
	   alt='IMG_1'
	   src={IMG_1} />

	   <img 
	   className='image grow dib'
	   alt='IMG_2'
	   src={IMG_2} />

	   <img 
	   className='image grow dib'
	   alt='IMG_3' 
	   src={IMG_3} />

	      <img 
	   className='image grow dib'
	   alt='IMG_4'
	   src={IMG_4} />

	      <img 
	   className='image grow dib'
	   alt='IMG_5'
	   src={IMG_5} />


	      <img 
	   className='image grow dib'
	   alt='IMG_6'
	   src={IMG_6} />


	      <img 
	   className='image grow dib'
	   alt='IMG_7'
	   src={IMG_7} />

			
		</div>
		);

}

export default Container;