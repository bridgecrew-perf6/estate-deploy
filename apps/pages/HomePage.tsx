import Footer from 'apps/components/Footer/Footer';
import MultiCarousel from 'apps/components/slider/MultiCarousel';
import React from 'react';
import { DefaultLayout } from '../layout/default';
import styles from './Home.module.scss';

const demoItem = [
	{ type: 'single', items: [1, 2] },
	{ type: 'double', items: [1, 2] },
	{ type: 'double', items: [1, 2] },
	{ type: 'single', items: [1, 2] },
	{ type: 'double', items: [1, 2] },
	{ type: 'double', items: [1, 2] },
];
const shortItem = [
	{ type: 'short', items: [1, 2] },
	{ type: 'short', items: [1, 2] },
	{ type: 'short', items: [1, 2] },
	{ type: 'short', items: [1, 2] },
	{ type: 'short', items: [1, 2] },
	{ type: 'short', items: [1, 2] },
];

export const HomePage = () => {
	const title = 'Sweet Home || Discover a place you will love to live.';
	const description =
		'Sweet Home is the most popular real estate home finding service in Bangladesh.';
	return (
		<DefaultLayout title={title} description={description}>
			<div className={styles.hero}>
				<div>
					<h1>
						Discover a Place <br /> you will love to live
					</h1>
					<picture className='Picture__PictureContainer-sc-1exw3ow-1 gteZiU'>
						<source
							srcSet='https://www.trulia.com/images/app-shopping/homePage/hiDpiExtraLarge.webp'
							type='image/webp'
							media='(min-width:993px) and (min-resolution:124dpi), (min-width:993px) and (-webkit-min-device-pixel-ratio: 2)'
						/>
						<source
							srcSet='https://www.trulia.com/images/app-shopping/homePage/hiDpiExtraLarge.jpg'
							media='(min-width:993px) and (min-resolution:124dpi), (min-width:993px) and (-webkit-min-device-pixel-ratio: 2)'
						/>
						<source
							srcSet='https://www.trulia.com/images/app-shopping/homePage/hiDpiMedium.webp'
							type='image/webp'
							media='(min-width:768px) and (min-resolution:124dpi), (min-width:768px) and (-webkit-min-device-pixel-ratio: 2)'
						/>
						<source
							srcSet='https://www.trulia.com/images/app-shopping/homePage/hiDpiMedium.jpg'
							media='(min-width:768px) and (min-resolution:124dpi), (min-width:768px) and (-webkit-min-device-pixel-ratio: 2)'
						/>
						<source
							srcSet='https://www.trulia.com/images/app-shopping/homePage/extraLarge.webp'
							type='image/webp'
							media='(min-width:993px)'
						/>
						<source
							srcSet='https://www.trulia.com/images/app-shopping/homePage/hiDpiMedium.webp'
							type='image/webp'
							media='(min-width:570px) and (min-resolution:124dpi), (min-width:570px) and (-webkit-min-device-pixel-ratio: 2)'
						/>
						<source
							srcSet='https://www.trulia.com/images/app-shopping/homePage/hiDpiMedium.jpg'
							media='(min-width:570px) and (min-resolution:124dpi), (min-width:570px) and (-webkit-min-device-pixel-ratio: 2)'
						/>
						<source
							srcSet='https://www.trulia.com/images/app-shopping/homePage/extraLarge.jpg'
							media='(min-width:993px)'
						/>
						<source
							srcSet='https://www.trulia.com/images/app-shopping/homePage/medium.jpg'
							media='(min-width:768px)'
						/>
						<source
							srcSet='https://www.trulia.com/images/app-shopping/homePage/hiDpiSmall.webp'
							type='image/webp'
							media='(min-width:376px) and (min-resolution:124dpi), (min-width:376px) and (-webkit-min-device-pixel-ratio: 2)'
						/>
						<source
							srcSet='https://www.trulia.com/images/app-shopping/homePage/hiDpiSmall.jpg'
							media='(min-width:376px) and (min-resolution:124dpi), (min-width:376px) and (-webkit-min-device-pixel-ratio: 2)'
						/>
						<source
							srcSet='https://www.trulia.com/images/app-shopping/homePage/medium.webp'
							type='image/webp'
							media='(min-width:570px)'
						/>
						<source
							srcSet='https://www.trulia.com/images/app-shopping/homePage/medium.jpg'
							media='(min-width:570px)'
						/>
						<source
							srcSet='https://www.trulia.com/images/app-shopping/homePage/small.webp'
							type='image/webp'
							media='(min-width:376px)'
						/>
						<source
							srcSet='https://www.trulia.com/images/app-shopping/homePage/small.jpg'
							media='(min-width:376px)'
						/>
						<source
							srcSet='https://www.trulia.com/images/app-shopping/homePage/hiDpiSmall.webp'
							type='image/webp'
							media='(min-width:0px) and (min-resolution:124dpi), (min-width:0px) and (-webkit-min-device-pixel-ratio: 2)'
						/>
						<source
							srcSet='https://www.trulia.com/images/app-shopping/homePage/hiDpiSmall.jpg'
							media='(min-width:0px) and (min-resolution:124dpi), (min-width:0px) and (-webkit-min-device-pixel-ratio: 2)'
						/>
						<source
							srcSet='https://www.trulia.com/images/app-shopping/homePage/small.webp'
							type='image/webp'
							media='(min-width:0px)'
						/>
						<source
							srcSet='https://www.trulia.com/images/app-shopping/homePage/small.jpg'
							media='(min-width:0px)'
						/>
						<img
							// loading='auto'
							decoding='auto'
							id='homepage-banner-image'
							// style='background:url(&#x27;data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAf/AABEIAAUACgMBEQACEQEDEQH/xAGiAAABBQEBAQEBAQAAAAAAAAAAAQIDBAUGBwgJCgsQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+gEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoLEQACAQIEBAMEBwUEBAABAncAAQIDEQQFITEGEkFRB2FxEyIygQgUQpGhscEJIzNS8BVictEKFiQ04SXxFxgZGiYnKCkqNTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqCg4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2dri4+Tl5ufo6ery8/T19vf4+fr/2gAMAwEAAhEDEQA/APH9Nt/jf4ts/gB8cvBv7Qvjf4b2HxKitvh1r3w40WO5j8Py6bqVinhXxNJLqHhzXPB9/cx69p8UMjB1TVbe6iWebW76QKyfNUXVzHDwxcqrw0swjUyyp9VhTozjhptKrT54xtUp1YrlqUqkGppLmcldPLEYyarxoOKq0qVSjiYwrP2kPbKK5aiSUGpxbbUua6bbW59Ny/Ejx/4elk0CG90GeHQ5H0eKeSHx6Xmj0xjZJK5uPiTdTl5FgDsZrm4lJJMk8r7pG8Ofh/lLnN/2jnkbyl7tPGYanTjq/dp04YFQpwW0YRSjCNoxSSR1/wCtuNh7jo024e7dVKqvy6XtKU5a2+1OT7yk9X//2Q==&#x27;);background-size:cover'
							width='100%'
							height='100%'
							src='https://www.trulia.com/images/app-shopping/homePage/extraLarge.jpg'
							alt=''
							// class='Picture__Image-sc-1exw3ow-0 tzLdz'
						/>
					</picture>
				</div>
			</div>
			<div className={styles.top_description}>
				<h3>Explore homes on Sweet Home</h3>
				<p>
					Take a deep dive and browse homes for sale, original neighborhood
					photos, resident reviews and local insights to find what is right for
					you.
				</p>
			</div>
			<MultiCarousel demoItem={demoItem} />
			<div className={styles.top_description}>
				<h3>Newly listed homes in Scottsdale</h3>
			</div>
			<MultiCarousel demoItem={shortItem} />
			<Footer />
		</DefaultLayout>
	);
};
