import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../apps/components/Header/Header'
import { HomePage } from '../apps/pages/HomePage';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
	return <HomePage />;
};

export default Home
