import React, { useContext } from 'react';

import style from './message-form.module.scss';

import useFormInut from 'hooks/useFormInput';
import { PeerContext } from 'contexts/peer-context';

const MessageForm = ({ addMessage }) => {
	const peer = useContext(PeerContext);
	const messageInput = useFormInut('');

	const onMessageSubmit = e => {
		e.preventDefault();

		const { value: message } = messageInput;
		peer.send(message);
		addMessage(message);
		messageInput.setValue('');
	};

	return (
		<form className={style.form} onSubmit={onMessageSubmit}>
			<input className={style.input} {...messageInput} />
			<button className={style.button}>send</button>
		</form>
	);
};

export default MessageForm;
