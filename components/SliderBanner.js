import classNames from 'classnames';
import React from 'react';

class SliderBanner extends React.Component {
	constructor(props) {
		super(props);
		this.IMAGE_PARTS = 4;
		this.changeTO = null;
		this.AUTOCHANGE_TIME = 4000;
		this.state = {
			activeSlide: -1,
			prevSlide: -1,
			sliderReady: false,
			slides: [
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
			]
		};
	}

	componentWillUnmount() {
		window.clearTimeout(this.changeTO);
	}

	componentDidMount() {
		this.runAutochangeTO();
		this.setState({ activeSlide: 0, sliderReady: true });
	}

	componentDidUpdate() {
		setTimeout(() => {
			this.changeSlides(1);
		}, 5000);
	}

	runAutochangeTO() {
		this.changeTO = setTimeout(() => {
			this.changeSlides(1);
			this.runAutochangeTO();
		}, this.AUTOCHANGE_TIME);
	}

	changeSlides(change) {
		window.clearTimeout(this.changeTO);
		const { length } = this.state.slides;
		const prevSlide = this.state.activeSlide;
		let activeSlide = prevSlide + change;
		if (activeSlide < 0) activeSlide = length - 1;
		if (activeSlide >= length) activeSlide = 0;
		this.setState({ activeSlide, prevSlide });
	}

	render() {
		const { activeSlide, prevSlide, sliderReady, slides } = this.state;
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
								{[...Array(this.IMAGE_PARTS).fill()].map((x, i) => (
									<div className="slider__slide-part" key={i}>
										<div
											className="slider__slide-part-inner"
											style={{ backgroundImage: `url(${slide.img})` }}
										/>
									</div>
								))}
							</div>
						</div>
					))}
				</div>
				<div className="slider__control" onClick={() => this.changeSlides(-1)} />
				<div className="slider__control slider__control--right" onClick={() => this.changeSlides(1)} />
			</div>
		);
	}
}

export default SliderBanner;
