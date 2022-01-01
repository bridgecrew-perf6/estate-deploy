import React from 'react';
import { useSelector } from 'react-redux';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { LandScapeItem } from '../Items/LandScapeItem';
import { PortaitItem } from '../Items/PortaitItem';
import { DoubleSlide } from './DoubleSlide';
import { DetailsItem } from '../Items/DetailsItem';
// import { Link } from 'react-router-dom';
// import CategoryItem from '../../../Components/Home/CategoryItem'
// import Error from '../../../Pages/Error/Error';
const responsive = {
	superLargeDesktop: {
		// the naming can be any, depends on you.
		breakpoint: { max: 4000, min: 3000 },
		items: 10,
		partialVisibilityGutter: 40,
	},
	desktop: {
		breakpoint: { max: 3000, min: 1324 },
		items: 4.8,
		partialVisibilityGutter: 40,
	},
	laptop: {
		breakpoint: { max: 1323, min: 960 },
		items: 3.8,
		partialVisibilityGutter: 40,
	},
	tablet: {
		breakpoint: { max: 959, min: 464 },
		items: 2.35,
		// partialVisibilityGutter: 30,
	},
	mobile: {
		breakpoint: { max: 464, min: 0 },
		items: 1,
		// partialVisibilityGutter: 5,
	},
};

const MultiCarousel = ({ demoItem }: { demoItem: any }) => {
	return (
		<div>
			<Carousel
				responsive={responsive}
				infinite={true}
				autoPlay={true}
				itemClass='carousel-item-padding-20-px'
				// centerMode={true}
				ssr={true}
				removeArrowOnDeviceType={['tablet', 'mobile']}
			>
				{demoItem.map((item: any, idx: number) => {
					if (item.type === 'single') {
						return <PortaitItem key={idx} />;
					} else if (item.type === 'double') {
						return <DoubleSlide key={idx} />;
					} else if (item.type === 'short') {
						return <DetailsItem key={idx} />;
					}
				})}
			</Carousel>
		</div>
	);
};

export default MultiCarousel;
