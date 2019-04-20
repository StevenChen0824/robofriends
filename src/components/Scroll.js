import React from 'react';

const Scroll = (props) => {
	return (
		<div style={{overflowY: 'scroll', border: '5px solid black', height:'400px'}}>
			{console.log(props)}
			{props.children}
		</div>
	);
}

export default Scroll;