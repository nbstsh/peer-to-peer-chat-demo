import React, { useContext } from 'react';

import style from './other-id-form.module.scss';

import useFormInut from 'hooks/useFormInput';
import { PeerContext } from 'contexts/peer-context';

const OtherIdForm = ({ setOtherId }) => {
	const otherIdInput = useFormInut('');
	const peer = useContext(PeerContext);

	const onOtherIdSubmit = e => {
		e.preventDefault();

		const trimedValue = otherIdInput.value.trim();
		if (!trimedValue) return;

		const otherId = JSON.parse(trimedValue);
		setOtherId(otherId);
		console.log({ otherId });
		peer.signal(trimedValue);
	};

	return (
		<form className={style.form} onSubmit={onOtherIdSubmit}>
			<h2 className={style.heading}>Other Id</h2>
			<textarea className={style.textarea} {...otherIdInput} />
			<button className={style.button}>save</button>
		</form>
	);
};

export default OtherIdForm;
