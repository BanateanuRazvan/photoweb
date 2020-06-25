import React, {Component} from 'react';
import './homepage.css';

import Navbar from '../../components/navbar/navbar';
import Title from '../../components/title/title';
import Container from '../../components/container/container';


class HomePage extends Component {
	render(){

		return(
		<div>
		<Navbar />
		<Title />
		<Container />
		</div>
		);
}
}

export default HomePage;