import classNames from 'classnames';
import { useState, useEffect, useRef } from 'react';
import useDidUpdateEffect from '../hooks/useDidUpdateEffect ';

const SliderBanner = () => {
	const IMAGE_PARTS = 4;
	const changeTO = null;
	const AUTOCHANGE_TIME = 6000;
	const timeoutRef = useRef(null);
	const [activeSlide, setactiveSlide] = useState(0);
	const [prevSlide, setprevSlide] = useState(-1);
	const [sliderReady, setsliderReady] = useState(true);
	const [slides, setslides] = useState([
		{
			city: 'Paris',
			country: 'France',
			img: '/assets/images/banner1-1.png'
		},
		{
			city: 'Singapore',
			img: '/assets/images/banner-2.png'
		},
		{
			city: 'Prague',
			country: 'Czech Republic',
			img: '/assets/images/banner-3.png'
		}
	]);

	const resetTimeout = () => {
		if (timeoutRef.current) {
			window.clearTimeout(timeoutRef.current);
		}
	};

	useEffect(() => {
		runAutochangeTO();
		/* setTimeout(() => {
			setactiveSlide(0);
			setsliderReady(true);
			//setState({ activeSlide: 0, sliderReady: true });
		}, 0); */
		return () => {
			//window.clearTimeout(changeTO);
			resetTimeout();
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [activeSlide]);

	/* useDidUpdateEffect(() => {
		runAutochangeTO();
	}, [activeSlide]); */

	/* componentWillUnmount() {
		window.clearTimeout(this.changeTO);
	} */

	/* componentDidMount() {
		this.runAutochangeTO();
		setTimeout(() => {
			this.setState({ activeSlide: 0, sliderReady: true });
		}, 0);
	} */

	/* componentDidUpdate() {
		this.runAutochangeTO();
		setTimeout(() => {
			this.setState({ activeSlide: 0, sliderReady: true });
		}, 1000);
	} */

	const runAutochangeTO = () => {
		timeoutRef.current = setTimeout(() => {
			changeSlides(1);
			runAutochangeTO();
		}, AUTOCHANGE_TIME);
	};

	const changeSlides = (change) => {
		//window.clearTimeout(changeTO);
		resetTimeout();
		const { length } = slides;
		const prevSlideF = activeSlide;
		let activeSlideF = prevSlideF + change;
		if (activeSlideF < 0) activeSlideF = length - 1;
		if (activeSlideF >= length) activeSlideF = 0;
		setprevSlide(prevSlideF);
		setactiveSlide(activeSlideF);
		//this.setState({ activeSlide, prevSlide });
	};

	return (
		<div className={classNames('slider', { 's--ready': sliderReady })}>
			<p className="slider__top-heading">Travelers</p>
			<div className="slider__slides">
				{slides.map((slide, index) => (
					<div
						className={classNames('slider__slide', {
							's--active': activeSlide === index,
							's--prev': prevSlide === index
						})}
						key={slide.city}
					>
						<div className="slider__slide-content">
							<h3 className="slider__slide-subheading">{slide.country || slide.city}</h3>
							<h2 className="slider__slide-heading">
								{slide.city.split('').map((l, index) => (
									<span key={index}>{l}</span>
								))}
							</h2>
							<p className="slider__slide-readmore">read more</p>
						</div>
						<div className="slider__slide-parts">
							{[...Array(IMAGE_PARTS).fill()].map((x, i) => (
								<div className="slider__slide-part" key={i}>
									<div className="slider__slide-part-inner" style={{ backgroundImage: `url(${slide.img})` }} />
								</div>
							))}
						</div>
					</div>
				))}
			</div>
			<div className="slider__control" onClick={() => changeSlides(-1)} />
			<div className="slider__control slider__control--right" onClick={() => changeSlides(1)} />
		</div>
	);
};

export default SliderBanner;
