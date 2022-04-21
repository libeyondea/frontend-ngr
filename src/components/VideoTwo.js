import React, { Component } from 'react';
import dynamic from 'next/dynamic';
const ModalVideo = dynamic(() => import('react-modal-video'), { ssr: false });

export default class VideoTwo extends Component {
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
			<section className='video-two'>
				<div className='container'>
					<img src='/assets/images/scratch-1-1.png' className='video-two__scratch' alt='' />
					<div className='row'>
						<div className='col-lg-7'>
							<div className='video-two__content'>
								<h2 className='video-two__title'>
									Kipso one & only <br />
									mission is to extend <br />
									your knowledge base
								</h2>
								<a href='#' className='thm-btn'>
									Learn More
								</a>
							</div>
						</div>
						<div className='col-lg-5 d-flex justify-content-lg-end justify-content-sm-start'>
							<div className='my-auto'>
								<ModalVideo
									channel='youtube'
									isOpen={this.state.isOpen}
									videoId='aitb---aDYM'
									onClose={() => this.setState({ isOpen: false })}
								/>
								<div onClick={this.openModal} className='video-two__popup'>
									<i className='fa fa-play'></i>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		);
	}
}
