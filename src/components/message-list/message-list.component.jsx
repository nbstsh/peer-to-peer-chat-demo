import React from 'react';

import style from './message-list.module.scss';

const MessageList = ({ messages }) => {
	return (
		<ul className={style.list}>
			{messages.map((message, i) => {
				return (
					<li key={i} className={style.listItem}>
						{message}
					</li>
				);
			})}
		</ul>
	);
};

export default MessageList;
