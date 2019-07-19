import React, { useState } from 'react';

import style from './user-type-select.module.scss';

const getStream = async () => {
	const constraints = { audio: true, video: true };
	try {
		return await navigator.mediaDevices.getUserMedia(constraints);
	} catch (e) {
		console.error(e);
	}
};

const UserTypeSelect = ({ setOptions }) => {
	const [isPending, setIsPending] = useState(false);

	const onHostClick = async () => {
		setIsPending(true);
		const stream = await getStream();
		setIsPending(false);
		setOptions({ initiator: true, stream });
	};

	const onGuest = async () => {
		setIsPending(true);
		const stream = await getStream();
		setIsPending(false);
		setOptions({ initiator: false, stream });
	};

	return isPending ? (
		<div className={style.container}>
			<h1>Initializing...</h1>
		</div>
	) : (
		<div className={style.container}>
			<h1 className={style.title}>Select user type</h1>

			<button className={style.button} onClick={onHostClick}>
				Host
			</button>
			<button className={style.button} onClick={onGuest}>
				Guest
			</button>
		</div>
	);
};

export default UserTypeSelect;
