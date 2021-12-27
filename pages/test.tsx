import React from 'react';
import { DefaultLayout } from '../apps/layout/default';
import { TestPage } from '../apps/pages/TestPage';

export default function Test() {
	return (
		<DefaultLayout>
			<TestPage />
		</DefaultLayout>
	);
}
