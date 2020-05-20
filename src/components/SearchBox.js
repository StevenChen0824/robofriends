import React from 'react';

const SearchBox = ({ searchChange }) => {
	return (
		<div>
			<input 
				className='bg-washed-green ba bw1 b--lightest-blue pa2 ma2 '
				type='search' 
				placeholder='search robots'
				onChange={searchChange}
			/>			
		</div>
	);
}

export default SearchBox;