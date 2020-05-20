import React from 'react';

import './Button.css'

const Button = ({ name, setChange}) => {
	return (
		<div>
			<button type='button' 
					className='link dim yellow dib h2 w2 br-100 mr3 bg-light-purple ba b--black-10'
					onClick={setChange}>
				{name}
			</button>
		</div>
	);
}

export default Button;

// link dim gray dib h2 w2 br-100 mr3 pa2 bg-near-white ba b--black-10