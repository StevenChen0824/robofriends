import React from 'react';

const Card = ({ id, name, username, email, set }) => {
	return (
		<div className='tc bg-lightest-blue dib br3 pa3 ma2 grow ba bw1 shadow-5 pointer'>
			<img src={`https://robohash.org/${name}?size=250x250&set=${set}`} alt="robo_img" />
			<div>
				<h3>{name}</h3>
				<p className='b'>{username}</p>
				<p>{email}</p>
			</div>
		</div>
	);
}

export default Card;

// tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5