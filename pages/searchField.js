import React from 'react';
import { BsFunnel } from 'react-icons/bs';
const SearchField = () => {
	return (
		<div className='m-6 mx-8 md:mx-36 text-white'>
			<div className='flex flex-col md:flex-row  justify-between items-center bg-primaryColor p-4 rounded-lg'>
				<div className='left  flex-1 text-2xl font-bold text-black m-2'>
					<span className=' text-2xl md:mr-6'>Profile (100)</span>
				</div>
				<div className='middle w-[100%] md:w-[65%] flex-4  m-2'>
					<input type='text' placeholder='Type here' class='input input-bordered input-info w-full ' />
				</div>
				<div className='right  flex-1 md:ml-4'>
					<div className=' bg-secondaryColor flex justify-center items-center p-4 rounded-lg cursor-pointer'>
						<BsFunnel className='text-2xl mr-1'></BsFunnel>
						Advance Filter
					</div>
				</div>
			</div>
		</div>
	);
};

export default SearchField;
