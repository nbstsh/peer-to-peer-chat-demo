import React, { useState, useEffect, useContext } from 'react';

import style from './connection-status.module.scss';

import { PeerContext } from 'contexts/peer-context';

const ConnectionStatus = ({ setIsConnected }) => {
	const peer = useContext(PeerContext);
	const [connectionStatus, setConnectionStatus] = useState('No Connection');

	useEffect(() => {
		if (!peer) return;

		peer.on('connect', () => {
			setIsConnected(true);
			setConnectionStatus('Connected!!!');
		});
	}, [peer, setIsConnected]);

	return (
		<div className={style.container}>
			<p className={style.status}>{connectionStatus}</p>
		</div>
	);
};

export default ConnectionStatus;
