import React, { useState } from 'react';

import style from './connection-display.module.scss';

import { PeerProvider } from 'contexts/peer-context';

import ConnectionStatus from '../connection-status/connection-status.component';
import UserIdDisplay from '../user-id-display/user-id-display.component';
import PeerIdSection from '../peer-id-section/peer-id-section.component';
import ChatSection from '../chat-section/chat-section.component';
import VideoDisplay from '../video-display/video-display.component';

const ConnectionDisplay = ({ options }) => {
	const [isConnected, setIsConnected] = useState();

	return (
		<PeerProvider options={options}>
			<div className={style.container}>
				<ConnectionStatus setIsConnected={setIsConnected} />
				<VideoDisplay />
				{isConnected && <ChatSection />}
				<UserIdDisplay />
				<PeerIdSection />
			</div>
		</PeerProvider>
	);
};

export default ConnectionDisplay;
