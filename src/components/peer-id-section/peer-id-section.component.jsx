import React, { useState } from 'react';

import IdCard from '../id-card/id-card.component';
import OtherIdForm from '../other-id-form/other-id-form.component';

const PeerIdSection = () => {
	const [otherId, setOtherId] = useState('');

	return (
		<div>
			{otherId ? (
				<IdCard label='Other Id' id={otherId} />
			) : (
				<OtherIdForm setOtherId={setOtherId} />
			)}
		</div>
	);
};

export default PeerIdSection;
