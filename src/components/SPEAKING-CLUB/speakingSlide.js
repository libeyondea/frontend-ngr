import classNames from 'classnames';
import React from 'react';

const SpeakingSlide = () => {
	return (
		<div className={classNames('sliders', 's--ready')}>
			<p className="slider__top-heading">Travelers</p>
			<div className="slider__slides">
				<div className={classNames('slider__slide', 's--active', 's--prev')}>
					<div className="slider__slide-parts">
						<div className="slider__slide-part" style={{ width: '100%' }}>
							<div className="slider__slide-part-inner">
								<img src="/assets/images/banner_chinh.gif" alt="" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SpeakingSlide;
