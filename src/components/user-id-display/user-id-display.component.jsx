import React, { useState, useEffect, useContext } from 'react';

import { PeerContext } from 'contexts/peer-context';
import IdCard from '../id-card/id-card.component';

const UserIdDisplay = () => {
	const peer = useContext(PeerContext);
	const [userId, setUserId] = useState('');

	useEffect(() => {
		if (!peer) return;

		peer.on('signal', data => {
			if ('type' in data) {
				setUserId(data);
			}
		});
	}, [peer]);

	return <IdCard label='Your Id' id={userId} />;
};

export default UserIdDisplay;
