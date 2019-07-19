import React, { useState, useEffect } from 'react';

import * as Peer from 'simple-peer';

const initiator = window.location.hash === '#init';
console.log({ initiator });
const peer = new Peer({ initiator });

const ConnectionDisplay = () => {
	const [yourId, setYourId] = useState('');
	const [otherId, setOtherId] = useState('');
	const [connectionStatus, setConnectionStatus] = useState('No connection.');
	const otherIdInput = useFormInut('');
	const messageInput = useFormInut('');
	const [receivedMessages, setReceivedMessages] = useState([]);

	useEffect(() => {
		peer.on('signal', data => {
			if ('type' in data) {
				setYourId(data);
			}
		});
	}, []);

	useEffect(() => {
		peer.on('data', data => {
			console.log({ receivedData: data });
			console.log(typeof data);
			const message = new TextDecoder('utf-8').decode(data);
			setReceivedMessages(receivedMessages => {
				return [...receivedMessages, message];
			});
		});
	}, []);

	useEffect(() => {
		peer.on('connect', () => {
			setConnectionStatus('Connected!!!');
		});
	}, []);

	const onOtherIdSubmit = e => {
		e.preventDefault();

		const trimedValue = otherIdInput.value.trim();
		if (!trimedValue) return;

		const otherId = JSON.parse(trimedValue);
		setOtherId(otherId);
		console.log({ otherId });
		peer.signal(trimedValue);
	};

	const onMessageSubmit = e => {
		e.preventDefault();

		const { value: message } = messageInput;
		console.log(message);
		console.log(typeof message);
		peer.send(message);
		messageInput.setValue('');
	};

	return (
		<div>
			<p>connection display </p>

			<secttion>
				<h2>Your ID</h2>
				<p>{JSON.stringify(yourId)}</p>
			</secttion>

			<section>
				<h2>Peer ID</h2>
				{otherId ? (
					<p>{JSON.stringify(otherId)}</p>
				) : (
					<form onSubmit={onOtherIdSubmit}>
						<textarea {...otherIdInput} />
						<button>save</button>
					</form>
				)}
			</section>

			<section>
				<h3>connection status</h3>
				<p>{connectionStatus}</p>
			</section>

			<section>
				<form onSubmit={onMessageSubmit}>
					<input {...messageInput} />
					<button>send</button>
				</form>
			</section>

			<section>
				{receivedMessages.map((message, i) => {
					return <li key={i}>{message}</li>;
				})}
			</section>
		</div>
	);
};

const useFormInut = initialValue => {
	const [value, setValue] = useState(initialValue);

	const onChange = e => {
		setValue(e.target.value);
	};

	return {
		value,
		setValue,
		onChange
	};
};

export default ConnectionDisplay;
