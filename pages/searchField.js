import React from 'react';
import { BsFunnel } from 'react-icons/bs';
const SearchField = ({ dark }) => {
	return (
		<div>
			<div className={`mx-8 md:mx-36 rounded-lg ${dark ? 'bg-darkBgColor text-primaryColor' : ' bg-primaryColor text-black'}`}>
				<div className='flex flex-col md:flex-row  justify-between items-center p-4 rounded-lg'>
					<div className='left  flex-1 text-2xl font-bold  m-2'>
						<span className=' text-2xl md:mr-6'>Profile (100)</span>
					</div>
					<div className='middle w-[100%] md:w-[65%] flex-4  m-2'>
						<input type='text' placeholder={`Search Profile`} className={`input  input-info w-full ${dark && ' bg-darkBgColor border-[1px] border-primaryColor'}`} />
					</div>
					<div className='right relative  flex-1 md:ml-4'>
						<div className=' bg-secondaryColor flex justify-center items-center p-4 rounded-lg cursor-pointer text-white'>
							<BsFunnel className='text-2xl mr-1'></BsFunnel>
							Advance Filter
						</div>
						{/* <div className='advanceMenu z-500 absolute h-[600px] w-[100%] bg-red-400'>Bangla</div> */}
					</div>
				</div>
			</div>
		</div>
	);
};

export default SearchField;
