import React, { useState, useEffect, useRef, useContext } from 'react';

import { PeerContext } from 'contexts/peer-context';

const VideoDisplay = () => {
	const videoRef = useRef();
	const peer = useContext(PeerContext);
	const [isStreamReady, setIsStreamReady] = useState(false);
	const isConnected = peer && peer.connected;

	useEffect(() => {
		if (!peer) return;

		peer.on('stream', stream => {
			const video = videoRef.current;

			if ('srcObject' in video) {
				video.srcObject = stream;
			} else {
				video.src = window.URL.createObjectURL(stream); // for older browsers
			}

			video.play();
			setIsStreamReady(true);
		});
	}, [peer, setIsStreamReady]);

	const hiddenStyle = {
		visibility: 'hidden',
		height: 0,
		width: 0
	};

	const visibleStyle = {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		marginBottom: 0,
		overflow: 'hidden'
	};

	return (
		<div style={isStreamReady && isConnected ? visibleStyle : hiddenStyle}>
			<video
				ref={videoRef}
				id='video'
				width='720'
				height='560'
				autoplay
				muted
			/>
		</div>
	);
};

export default VideoDisplay;
