import React from 'react';
import style from './container.module.scss';
import ConnectionDisplay from '../connection-display/connection-displya.components';

const Containerr = () => {
	return (
		<div className={style.container}>
			<h1>simple peer demo</h1>
			<ConnectionDisplay />
		</div>
	);
};

export default Containerr;
