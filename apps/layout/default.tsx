import Head from 'next/head';
import React, { ReactNode } from 'react';
import { MainNav } from '../components/common/MainNav';
import { SiteTitle } from '../components/common/SiteTitle';

type Props = {
	children: ReactNode;
	title?: string;
	description?: string;
};

const defaultDescription =
	'Blessed Programmer is a Software Agency to give your Software perfect solution';

export const DefaultLayout = ({
	title = 'Welcome to Blessed Programmer',
	children,
	description = '',
}: Props) => {
	return (
		<div>
			<Head>
				<title>{title} </title>
				<meta name='description' content={description || defaultDescription} />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<SiteTitle />
			<MainNav />
			{children}
		</div>
	);
};
