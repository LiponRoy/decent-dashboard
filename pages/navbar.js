import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { FaAlignJustify, FaRegWindowClose } from 'react-icons/fa';

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
			<div className={shadowMe ? 'w-full h-20 shadow-lg shadow-gray-900  bg-black/40 border-b-[1px] border-t-orange-700 z-[100]' : 'w-full h-20  bg-black/40 border-b-[1px] border-t-orange-700 z-[100]'}>
				<div className='h-full w-full flex justify-between text-slate-300 px-4'>
					<div className='h-full flex justify-start items-center flex-1 '>
						<span className=' text-2xl'>Hypescout</span>
					</div>
					<div className='h-full flex justify-end items-center flex-1 gap-4 '>
						<Link href='/#heading'>
							<span className=' cursor-pointer hover:text-white text-2xl'>Dashboard</span>
						</Link>
						<Link href='/#contact'>
							<span className=' cursor-pointer hover:text-white text-2xl'>Campaign</span>
						</Link>
						{/* <Link href='/#about'>
							<span className=' cursor-pointer hover:text-white text-2xl'>Hypesocial</span>
						</Link>
						<Link href='/#login'>
							<span className=' cursor-pointer hover:text-white text-2xl'>Insights</span>
						</Link> */}

						<div className='md:hidden'>
							<span onClick={sideMe} className=' cursor-pointer hover:text-white text-2xl'>
								{sideBar ? <FaRegWindowClose></FaRegWindowClose> : <FaAlignJustify></FaAlignJustify>}
							</span>
						</div>
					</div>
				</div>
				{/* // sidebar */}
				<div className={sideBar ? 'md:hidden absolute left-0 top-[5rem] w-full h-screen bg-red-900 ease-in duration-300 z-40 fcc' : 'fixed left-[-25%] top-[70px] w-[25%] h-screen bg-slate-700 ease-in duration-300 z-40 fcc'}>
					<Link href='/#heading'>
						<span onClick={sideMe} className=' cursor-pointer hover:text-white text-2xl'>
							Dashboard
						</span>
					</Link>
					<Link href='/#contact'>
						<span onClick={sideMe} className=' cursor-pointer hover:text-white text-2xl'>
							Campaign
						</span>
					</Link>
					<Link href='/#about'>
						<span onClick={sideMe} className=' cursor-pointer hover:text-white text-2xl'>
							Hypesocial
						</span>
					</Link>
					<Link href='/#login'>
						<span onClick={sideMe} className=' cursor-pointer hover:text-white text-2xl'>
							Insights
						</span>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
