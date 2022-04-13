import Image from '../components/Image';
import { Slide } from 'react-slideshow-image';

const SliderTwo = () => {
	const params = {
		centeredSlides: true,
		loop: true,
		speed: 1000,
		autoplay: {
			delay: 3000,
			disableOnInteraction: false
		}
	};

	const slideImages = ['/assets/images/banner-1.png', '/assets/images/banner-2.png', '/assets/images/banner-3.png'];

	const properties = {
		duration: 5000,
		transitionDuration: 500,
		infinite: true,
		prevArrow: (
			<div className="banner-carousel-btn__left-btn banner-arrow">
				<i className="kipso-icon-left-arrow"></i>
			</div>
		),
		nextArrow: (
			<div className="banner-carousel-btn__right-btn banner-arrow">
				<i className="kipso-icon-right-arrow"></i>
			</div>
		)
	};

	return (
		<div className="banner-wrapper">
			<section className="banner-two banner-carousel__one no-dots">
				<Slide {...properties}>
					{slideImages.map((url, index) => (
						<div className="each-fade" key={index}>
							<div className="image-container">
								<Image alt="img" src={url} isBlur width={1920} height={700} layout="responsive" />
							</div>
						</div>
					))}
				</Slide>
			</section>
		</div>
	);
};

export default SliderTwo;
