import React, { Component } from 'react';
import dynamic from 'next/dynamic';
const ModalVideo = dynamic(() => import('react-modal-video'), { ssr: false });

class VideoOne extends Component {
	constructor() {
		super();
		this.state = {
			isOpen: false
		};
	}

	openModal = () => {
		this.setState({ isOpen: true });
	};

	render() {
		return (
			<section className='video-one'>
				<div className='container'>
					<img src='/assets/images/scratch-1-1.png' className='video-one__scratch' alt='' />
					<div className='row'>
						<div className='col-lg-6 d-flex align-items-end'>
							<div className='video-one__content'>
								<h2 className='video-one__title'>
									Take a tour dolor <br />
									sit amet, consect <br />
									etur elit
								</h2>
								<a href='#' className='thm-btn video-one__btn'>
									Learn More
								</a>
							</div>
						</div>
						<div className='col-lg-6'>
							<div className='video-one__img'>
								<img src='/assets/images/video-1-1.jpg' alt='' />
								<ModalVideo
									channel='youtube'
									isOpen={this.state.isOpen}
									videoId='aitb---aDYM'
									onClose={() => this.setState({ isOpen: false })}
								/>
								<div onClick={this.openModal} className='video-one__popup'>
									<i className='fas fa-play'></i>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		);
	}
}

export default VideoOne;
