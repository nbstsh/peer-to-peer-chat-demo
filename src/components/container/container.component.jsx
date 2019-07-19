import React, { useState } from 'react';

import style from './container.module.scss';

import ConnectionDisplay from '../connection-display/connection-displya.components';
import UserTypeSelect from '../user-type-select/user-type-select.component';

const Containerr = () => {
	const [options, setOptions] = useState(null);

	return (
		<div className={style.container}>
			<h1 className={style.title}>Peer to Peer Video Chat Demo</h1>
			{options ? (
				<ConnectionDisplay options={options} />
			) : (
				<UserTypeSelect setOptions={setOptions} />
			)}
		</div>
	);
};

export default Containerr;
