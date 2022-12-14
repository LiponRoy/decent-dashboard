import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { FaAlignJustify, FaRegWindowClose } from 'react-icons/fa';
import { HiSun } from 'react-icons/hi';
import { HiMoon } from 'react-icons/hi';
import { FiBell } from 'react-icons/fi';
import Image from 'next/image';

const Navbar = ({ darkMode, dark }) => {
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
		<div className='w-full h-20 '>
			<div className={dark ? ' bg-darkBgColor text-white z-[100]' : ' bg-primaryColor text-black  z-[100]'}>
				<div className=' h-full '>
					<div className='h-full w-full flex justify-between  p-2'>
						<div className='h-full flex justify-center items-center '>
							<div className='flex justify-center items-center mt-2 '>
								<Image src={`/${dark ? './img/logo2.png' : './img/logo.png'}`} alt='no img' width={21} height={21} />
								<span className='text-sm md:text-2xl ml-2'>Hypescout</span>
							</div>
						</div>
						<div className=' hidden md:flex justify-center items-center  h-full gap-4 '>
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
						<div className=' h-full flex justify-end items-center  gap-4 '>
							<div className='flex justify-center items-center'>
								<FiBell size={25} className='m-2'></FiBell>
								{dark ? <HiMoon onClick={darkMode} size={25} className='m-2 cursor-pointer'></HiMoon> : <HiSun onClick={darkMode} size={25} className='m-2 cursor-pointer'></HiSun>}

								<span className=' text-sm md:text-lg'>Hi,Rakib</span>
								<div className='avatar ml-6'>
									<div className=' w-10 rounded-xl '>
										<Image src={`/./img/rakib.png`} width={15} height={15} />
									</div>
								</div>
								<div className='md:hidden '>
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
