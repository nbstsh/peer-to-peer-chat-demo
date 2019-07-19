import React from 'react';

import style from './id-card.module.scss';

const IdCard = ({ label, id }) => {
	return (
		<div className={style.card}>
			<h2 className={style.label}>{label}</h2>
			<p>{id ? JSON.stringify(id) : 'No Id Found.'}</p>
		</div>
	);
};

export default IdCard;
