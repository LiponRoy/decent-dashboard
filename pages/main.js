import React from 'react';
import data from '../datame.json';

import { FaAlignJustify, FaFacebookSquare, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { GrLocation } from 'react-icons/gr';
import { MdOutlineWatchLater } from 'react-icons/md';
const Main = () => {
	return (
		<div>
			<div className='m-6 mx-36'>
				<div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6'>
					{data.map((value, index) => (
						<div className=' w-full h-96 bg-primaryColor fcc'>
							<div class='avatar'>
								<div class=' w-32 rounded-full '>
									<img src={value.imge} />
								</div>
							</div>
							<span className=' text-2xl font-bold my-2'>{value.name}</span>
							<div className=' flex flex-row items-center'>
								<GrLocation className=' mr-2' size={25}></GrLocation>
								<span>{value.location}</span>
							</div>
							<div className=' flex flex-row items-center'>
								<MdOutlineWatchLater className=' mr-2' size={25}></MdOutlineWatchLater>
								<span>{value.joined}</span>
							</div>
							<div className='socialLink mt-2 flex justify-between items-center'>
								<FaFacebookSquare className=' m-2 text-secondaryColor'></FaFacebookSquare>
								<FaInstagram className=' m-2 text-secondaryColor'></FaInstagram>
								<FaLinkedin className=' m-2 text-secondaryColor'></FaLinkedin>
								<FaTwitter className=' m-2 text-secondaryColor'></FaTwitter>
							</div>
							<div className='bottomPart mt-2 flex justify-between items-center'>
								<div className='rightSide m-2 px-2 flex flex-col items-center border-2 border-opacity-30 border-secondaryColor border-dotted'>
									<span className=' text-secondaryColor'>12k</span>
									<span>Follwers</span>
								</div>
								<div className='rightSide m-2 px-2 flex flex-col items-center border-2 border-opacity-30 border-secondaryColor border-dotted'>
									<span className=' text-secondaryColor'>Fashion</span>
									<span>Categories</span>
								</div>
								<div className='rightSide m-2 px-2 flex flex-col items-center border-2 border-opacity-30 border-secondaryColor border-dotted'>
									<span className=' text-secondaryColor'>Male</span>
									<span>Gender</span>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Main;
