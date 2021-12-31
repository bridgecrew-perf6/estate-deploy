import React from 'react';
import { DefaultLayout } from '../layout/default';

export const HomePage = () => {
  const title = 'Sweet Home || Find the perfect home for you';
	const description =
		'Sweet Home is the most popular real estate home finding service in Bangladesh.';
	return (
		<DefaultLayout title={title} description={description}>
			<h2>Sweet Home</h2>
			<h2>Hero Section</h2>
			<h2>Slider 1</h2>
			<h2>Slider 2</h2>
			<h2>Location menu</h2>
			<h2>Footer</h2>
		</DefaultLayout>
	);
};
