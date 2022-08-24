import React from 'react';
import { BsFunnel } from 'react-icons/bs';
const SearchField = () => {
	return (
		<div className='m-6 mx-36 text-white'>
			<div className='flex flex-col md:flex-row  justify-between items-center '>
				<div className='left  flex-1 text-2xl font-bold text-black m-2'>
					<span className=' text-sm md:text-2xl md:mr-6'>Profile (100)</span>
				</div>
				<div className='middle w-[100%] md:w-[65%] flex-4  m-2'>
					<input type='text' placeholder='Type here' class='input input-bordered input-info w-full ' />
				</div>
				<div className='right  flex-1 md:ml-4 m-2'>
					<button class=' btn  bg-secondaryColor md:gap-2 flex '>
						<BsFunnel size={18}></BsFunnel>
						{/* <span className='text-sm'></span> */}
						Advance Filter
					</button>
				</div>
			</div>
		</div>
	);
};

export default SearchField;
