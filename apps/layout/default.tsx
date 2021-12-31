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
				<link
					rel='icon'
					href='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.5LIco_RPbo-ctUQi00KA_gHaEn%26pid%3DApi&f=1'
				/>
			</Head>
			<SiteTitle />
			<MainNav />
			{children}
		</div>
	);
};
