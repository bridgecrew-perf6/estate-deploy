import Head from 'next/head';
import React, { ReactNode } from 'react';

type Props = {
	children: ReactNode;
};

export const DefaultLayout = ({ children }: Props) => {
	return (
		<div>
			<Head>
				<title>Welcome to Blessed Programmer</title>
				<meta
					name='description'
					content='Blessed Programmer is a Software Agency to give your Software perfect solution'
				/>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			{children}
		</div>
	);
};
