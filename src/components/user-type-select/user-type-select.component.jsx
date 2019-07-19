import React from 'react';

import style from './user-type-select.module.scss';

const UserTypeSelect = ({ setOptions }) => {
	return (
		<div className={style.container}>
			<h1 className={style.title}>Select user type</h1>
			<button
				className={style.button}
				onClick={() => setOptions({ initiator: true })}
			>
				Host
			</button>
			<button
				className={style.button}
				onClick={() => setOptions({ initiator: false })}
			>
				Guest
			</button>
		</div>
	);
};

export default UserTypeSelect;
