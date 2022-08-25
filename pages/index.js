import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Footer from './footer';
import Main from './main';
import Navbar from './navbar';
import SearchField from './searchField';

export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>Create Next App</title>
				<meta name='description' content='Generated by create next app' />
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<Navbar></Navbar>

			<SearchField></SearchField>
			<Main></Main>
			<Footer></Footer>
		</div>
	);
}
