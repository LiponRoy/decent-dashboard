import React, { useState } from 'react';
import data from '../datame.json';
import styles from '../styles/Home.module.css';

// const [myData, setMydata] = useState(data.slice(0, 50));

import { FaAlignJustify, FaFacebookSquare, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { GrLocation } from 'react-icons/gr';
import { MdOutlineWatchLater, MdOutlineLocationOn } from 'react-icons/md';
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
import ReactPaginate from 'react-paginate';
import Image from 'next/image';

const Main = ({ dark }) => {
	//  pagenation logic

	const [myData, setrMydata] = useState(data.slice(0, 30));
	const [pageNumber, setPageNumber] = useState(0);
	const userPerPage = 3;
	const pageVisited = pageNumber * userPerPage;
	const displayUser = myData.slice(pageVisited, pageVisited + userPerPage);

	const perPageCount = Math.ceil(myData.length, userPerPage);

	const handlePageClick = ({ selected }) => {
		setPageNumber(selected);
	};

	// end pagenation logic
	return (
		<div>
			<div className='m-2 md:m-6 mx-8 md:mx-36 '>
				<div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-2  lg:gap-4 xl:gap-6'>
					{displayUser.map((value, index) => (
						<div key={index} className={dark ? ' bg-darkBgColor text-darkTextColor' : 'bg-primaryColor  text-black'}>
							<div className='w-full h-96  fcc'>
								<div className='avatar'>
									<div className=' w-24 lg:w-24 xl:w-32 rounded-full '>
										<Image src={`/${value.img}`} width={'150px'} height={'150px'} />
									</div>
								</div>
								<span className={`text-2xl font-bold my-2 ${dark ? ' text-white' : ' text-black'}`}>{value.name}</span>
								<div className=' flex flex-row items-center'>
									<MdOutlineLocationOn className={dark ? ' mr-2 ' : ' mr-2'} size={28}></MdOutlineLocationOn>
									<span>{value.location}</span>
								</div>
								<div className=' flex flex-row items-center'>
									<MdOutlineWatchLater className=' mr-2' size={25}></MdOutlineWatchLater>
									<span>{value.joined}</span>
								</div>
								<div className='socialLink mt-2 flex justify-between items-center'>
									<FaFacebookSquare className={dark ? 'm-2 text-gray-400' : 'm-2 text-secondaryColor'}></FaFacebookSquare>
									<FaInstagram className={dark ? 'm-2 text-gray-400' : 'm-2 text-secondaryColor'}></FaInstagram>
									<FaLinkedin className={dark ? 'm-2 text-gray-400' : 'm-2 text-secondaryColor'}></FaLinkedin>
									<FaTwitter className={dark ? 'm-2 text-gray-400' : 'm-2 text-secondaryColor'}></FaTwitter>
								</div>
								<div className='bottomPart mt-2 flex justify-between items-center'>
									<div className='rightSide m-2 px-2 flex flex-col items-center border-2 border-opacity-30 border-secondaryColor border-dotted'>
										<span className={dark ? ' text-gray-400' : 'm-2 text-secondaryColor'}>12k</span>
										<span>Follwers</span>
									</div>
									<div className='rightSide m-2 px-2 flex flex-col items-center border-2 border-opacity-30 border-secondaryColor border-dotted'>
										<span className={dark ? ' text-gray-400' : 'm-2 text-secondaryColor'}>Fashion</span>
										<span>Categories</span>
									</div>
									<div className='rightSide m-2 px-2 flex flex-col items-center border-2 border-opacity-30 border-secondaryColor border-dotted'>
										<span className={dark ? ' text-gray-400' : 'm-2 text-secondaryColor'}>Male</span>
										<span>Gender</span>
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>

			<div className={`mx-5 md:mx-36 pageCounterMe `}>
				<ReactPaginate nextLabel='next >' onPageChange={handlePageClick} breakLabel={'...'} pageRangeDisplayed={3} marginPagesDisplayed={2} pageCount={8} previousLabel='< prev' containerClassName={'paginationBttns'} previousLinkClassName={'previousBttn'} nextLinkClassName={'nextBttn'} disabledClassName={'paginationDisabled'} activeClassName={'paginationActive'} />
			</div>
		</div>
	);
};

export default Main;
