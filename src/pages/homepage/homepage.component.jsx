import React from 'react';

import Directory from '../../components/directory/directory.component.jsx';
import Title from '../../components/title/title.component.jsx';

import './homepage.styles.scss';

const HomePage = ({ history }) => {
	return (
		<div className='homepage'>
			<Title />
			<Directory />
		</div>

	);
}

export default HomePage;