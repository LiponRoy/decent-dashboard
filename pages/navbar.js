import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { FaAlignJustify, FaRegWindowClose } from 'react-icons/fa';
import { HiSun } from 'react-icons/hi';
import { FiBell } from 'react-icons/fi';

const Navbar = () => {
	const [shadowMe, setShadow] = useState(false);
	const [sideBar, setSidebar] = useState(false);

	const sideMe = () => {
		setSidebar(!sideBar);
		console.log(sideBar);
	};

	useEffect(() => {
		const handleShadow = () => {
			if (window.scrollY >= 90) {
				setShadow(true);
			} else {
				setShadow(false);
			}
		};
		window.addEventListener('scroll', handleShadow);
	}, []);
	return (
		<div>
			<div className={shadowMe ? ' w-full h-20 shadow-lg shadow-gray-900 dark:bg-slate-800 bg-primaryColor text-black border-b-[1px] border-t-orange-700 z-[100]' : 'w-full h-20  bg-primaryColor text-black border-b-[1px] border-t-orange-700 z-[100]'}>
				<div className='m-2 md:m-6 md:mx-36 h-full'>
					<div className='h-full w-full flex justify-between  px-4'>
						<div className='h-full flex justify-start items-center flex-1 '>
							<div className='flex justify-center items-center'>
								<img src='./img/logo.png' alt='no img' srcset='' />
								<span className='text-sm md:text-2xl'>Hypescout</span>
							</div>
						</div>
						<div className=' hidden md:flex justify-center items-center flex-1 h-full gap-4 '>
							<Link href='/#heading'>
								<span className=' cursor-pointer hover:text-white hover:bg-slate-800 hover:p-2 hover:rounded-lg text-sm m-2'>Dashboard</span>
							</Link>
							<Link href='/#contact'>
								<span className=' cursor-pointer hover:text-white hover:bg-slate-800 hover:p-2 hover:rounded-lg text-sm m-2'>Campaign</span>
							</Link>
							<Link href='/#about'>
								<span className=' cursor-pointer hover:text-white hover:bg-slate-800 hover:p-2 hover:rounded-lg text-sm m-2'>Hypesocial</span>
							</Link>
							<Link href='/#login'>
								<span className=' cursor-pointer hover:text-white hover:bg-slate-800 hover:p-2 hover:rounded-lg text-sm m-2'>Insights</span>
							</Link>
						</div>
						<div className=' h-full flex justify-end items-center flex-1 gap-4 '>
							<div className='flex justify-center items-center'>
								<FiBell size={25} className='m-2'></FiBell>
								<HiSun size={25} className='m-2'></HiSun>
								<span className=' text-sm md:text-lg'>Hi,Rakib</span>
								<div class='avatar ml-6'>
									<div class=' w-10 rounded-xl '>
										<img src='./img/rakib.png' />
									</div>
								</div>
								<div className='md:hidden m-2'>
									<span onClick={sideMe} className=' cursor-pointer  text-2xl'>
										{sideBar ? <FaRegWindowClose></FaRegWindowClose> : <FaAlignJustify></FaAlignJustify>}
									</span>
								</div>
							</div>
						</div>
					</div>
					{/* // sidebar */}
					<div className={sideBar ? 'md:hidden absolute left-0 top-[5rem] w-full h-[50%] bg-secondaryColor   ease-in duration-300 z-40 fcc' : 'fixed left-[-25%] top-[70px] w-[25%] h-[50%] bg-secondaryColor  ease-in duration-300 z-40 fcc'}>
						<Link href='/#heading'>
							<span onClick={sideMe} className=' cursor-pointer text-white text-2xl'>
								Dashboard
							</span>
						</Link>
						<Link href='/#contact'>
							<span onClick={sideMe} className=' cursor-pointer text-white text-2xl'>
								Campaign
							</span>
						</Link>
						<Link href='/#about'>
							<span onClick={sideMe} className=' cursor-pointer text-white text-2xl'>
								Hypesocial
							</span>
						</Link>
						<Link href='/#login'>
							<span onClick={sideMe} className=' cursor-pointer text-white text-2xl'>
								Insights
							</span>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
