import React from 'react';
import Swiper from 'react-id-swiper';
import Link from 'next/link';
import Image from '../components/Image';

const Customer = () => {
	const params = {
		slidesPerView: 3,
		loop: true,
		speed: 1000,
		spaceBetween: 30,
		autoplay: {
			delay: 3000,
			disableOnInteraction: false
		},
		pagination: {
			el: '.swiper-pagination',
			clickable: true
		},

		// Responsive breakpoints
		breakpoints: {
			1024: {
				slidesPerView: 3
			},
			768: {
				slidesPerView: 2
			},
			640: {
				slidesPerView: 2
			},
			320: {
				slidesPerView: 1
			}
		}
	};
	return (
		<div>
			<section className="course-one__top-title home-two">
				<div className="container">
					<div className="block-title mb-0">
						<h2 className="block-title__title">KHÁCH HÀNG TẠI DU HỌC TÂN CON ĐƯỜNG VÀNG</h2>
					</div>
				</div>
			</section>
			<section className="course-one course-one__teacher-details home-one">
				<div className="container">
					<div className="course-one__carousel">
						<div className="row">
							<div className="col-12 col-md-3">
								<div className="card">
									<Image
										src="/assets/images/kh6.jpg"
										className="card-img-top"
										alt="..."
										isBlur
										width={300}
										height={300}
									/>
									<div className="card-body">
										<div className="card-text">
											Khách hàng đậu Visa định cư Mỹ tại Du học Tân Con Đường Vàng.
										</div>
									</div>
								</div>
							</div>
							<div className="col-12 col-md-3">
								<div className="card">
									<Image
										src="/assets/images/kh6.jpg"
										className="card-img-top"
										alt="..."
										isBlur
										width={300}
										height={300}
									/>

									<div className="card-body">
										<div className="card-text">
											Khách hàng đậu Visa định cư Mỹ tại Du học Tân Con Đường Vàng.
										</div>
									</div>
								</div>
							</div>
							<div className="col-12 col-md-3">
								<div className="card">
									<Image
										src="/assets/images/kh6.jpg"
										className="card-img-top"
										alt="..."
										isBlur
										width={300}
										height={300}
									/>

									<div className="card-body">
										<div className="card-text">
											Khách hàng đậu Visa định cư Mỹ tại Du học Tân Con Đường Vàng.
										</div>
									</div>
								</div>
							</div>
							<div className="col-12 col-md-3">
								<div className="card">
									<Image
										src="/assets/images/kh6.jpg"
										className="card-img-top"
										alt="..."
										isBlur
										width={300}
										height={300}
									/>

									<div className="card-body">
										<div className="card-text">
											Khách hàng đậu Visa định cư Mỹ tại Du học Tân Con Đường Vàng.
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};
export default Customer;
