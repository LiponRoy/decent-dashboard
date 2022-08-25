import React from 'react';
import { FaAlignJustify, FaFacebookSquare, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { BiCopyright } from 'react-icons/bi';

const Footer = () => {
	return (
		<div className='m-6 md:mx-36'>
			<div className=' md:hidden company flex justify-center items-start '>
				<div className='flex flex-col items-center md:items-start text-center md:text-left'>
					<div className='flex justify-center items-center'>
						<img src='./img/logo.png' alt='no img' srcset='' />
						<span className='text-[19px] md:text-2xl ml-1'>Hypescout</span>
					</div>
					<span className=' my-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error aperiam obcaecati assumenda natus eaque inventore laborum cupiditate esse impedit.</span>
					<div className='socialLink mt-2 flex justify-between items-center'>
						<FaFacebookSquare className=' m-2 text-secondaryColor'></FaFacebookSquare>
						<FaInstagram className=' m-2 text-secondaryColor'></FaInstagram>
						<FaLinkedin className=' m-2 text-secondaryColor'></FaLinkedin>
						<FaTwitter className=' m-2 text-secondaryColor'></FaTwitter>
					</div>
				</div>
			</div>
			<div className='grid grid-cols-2 md:grid-cols-2 xl:grid-cols-4 '>
				<div className='hidden company md:flex justify-center items-start '>
					<div className='flex flex-col items-center md:items-start text-center md:text-left'>
						<div className='flex justify-center items-center'>
							<img src='./img/logo.png' alt='no img' srcset='' />
							<span className='text-[19px] md:text-2xl ml-1'>Hypescout</span>
						</div>
						<span className=' my-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error aperiam obcaecati assumenda natus eaque inventore laborum cupiditate esse impedit.</span>
						<div className='socialLink mt-2 flex justify-between items-center'>
							<FaFacebookSquare className=' m-2 text-secondaryColor'></FaFacebookSquare>
							<FaInstagram className=' m-2 text-secondaryColor'></FaInstagram>
							<FaLinkedin className=' m-2 text-secondaryColor'></FaLinkedin>
							<FaTwitter className=' m-2 text-secondaryColor'></FaTwitter>
						</div>
					</div>
				</div>
				<div className='company flex justify-center items-start  p-5  md:p-12'>
					<div className='flex flex-col items-start '>
						<span className=' text-2xl font-bold '>Company</span>
						<span>About Us</span>
						<span>Careers</span>
						<span>Case Study</span>
						<span>Blog</span>
						<span>Contact Us</span>
					</div>
				</div>
				<div className='company flex justify-center items-start  p-5  md:p-12'>
					<div className='flex flex-col items-start'>
						<span className=' text-2xl font-bold mb-2'>Influencer</span>
						<span>Join as Influencer</span>
						<span>HypeSocial</span>
					</div>
				</div>
				<div className='company flex justify-center items-start p-5  md:p-12'>
					<div className='flex flex-col items-start'>
						<span className=' text-2xl font-bold mb-2'>Advertiser</span>
						<span>Join as Advertiser</span>
						<span>Hyperlink</span>
					</div>
				</div>
			</div>
			<div className='flex flex-col md:flex-row  justify-between items-center '>
				<div className=' flex items-center '>
					<BiCopyright className='mr-2'></BiCopyright>
					<span>
						{' '}
						<span className=' font-bold'>Hypescout 2022</span> All rights reserved
					</span>
				</div>
				<span className='pr-2'>Terms and Conditions Privacy Sitemap</span>
			</div>
		</div>
	);
};

export default Footer;
