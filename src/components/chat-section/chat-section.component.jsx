import React, { useState, useEffect, useContext } from 'react';

import style from './chat-section.module.scss';

import { PeerContext } from 'contexts/peer-context';

import MessageForm from '../message-form/message-form.component';
import MessageList from '../message-list/message-list.component';

const ChatSection = () => {
	const peer = useContext(PeerContext);
	const [messages, setMessages] = useState([]);

	const addMessage = message => {
		setMessages(messages => {
			return [message, ...messages];
		});
	};

	useEffect(() => {
		if (!peer) return;

		peer.on('data', data => {
			const message = new TextDecoder('utf-8').decode(data);
			addMessage(message);
		});
	}, [peer]);

	return (
		<section className={style.container}>
			<h2 className={style.title}>CHAT ROOM</h2>
			<MessageForm addMessage={addMessage} />
			<MessageList messages={messages} />
		</section>
	);
};

export default ChatSection;
