import React from 'react';
import Swiper from 'react-id-swiper';

const CourseTwo = () => {
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
			<section className='course-one__top-title home-two'>
				<div className='container'>
					<div className='block-title'>
						<h2 className='block-title__title'>
							Explore our <br />
							popular courses
						</h2>
					</div>
				</div>
			</section>

			<section className='course-one course-one__teacher-details home-two'>
				<img src='/assets/images/line-stripe.png' className='course-one__line' alt='' />
				<div className='container'>
					<div className='course-one__carousel'>
						<Swiper {...params}>
							<div className='item'>
								<div className='course-one__single color-1'>
									<div className='course-one__image'>
										<img src='/assets/images/course-1-1.jpg' alt='' />
										<i className='far fa-heart'></i>
									</div>
									<div className='course-one__content'>
										<a href='#' className='course-one__category'>
											development
										</a>
										<div className='course-one__admin'>
											<img src='/assets/images/team-1-1.jpg' alt='' />
											by <a href='/teacher-details'>Lou Guerrero</a>
										</div>
										<h2 className='course-one__title'>
											<a href='/course-details'>New react bootcamp</a>
										</h2>
										<div className='course-one__stars'>
											<span className='course-one__stars-wrap'>
												<i className='fa fa-star'></i>
												<i className='fa fa-star'></i>
												<i className='fa fa-star'></i>
												<i className='fa fa-star'></i>
												<i className='fa fa-star'></i>
											</span>
											<span className='course-one__count'>4.8</span>
											<span className='course-one__stars-count'>250</span>
										</div>
										<div className='course-one__meta'>
											<a href='/course-details'>
												<i className='far fa-clock'></i> 10 Hours
											</a>
											<a href='/course-details'>
												<i className='far fa-folder-open'></i> 6 Lectures
											</a>
											<a href='/course-details'>$18</a>
										</div>
										<a href='#' className='course-one__link'>
											See Preview
										</a>
									</div>
								</div>
							</div>
							<div className='item'>
								<div className='course-one__single color-2'>
									<div className='course-one__image'>
										<img src='/assets/images/course-1-2.jpg' alt='' />
										<i className='far fa-heart'></i>
									</div>
									<div className='course-one__content'>
										<a href='#' className='course-one__category'>
											It & Software
										</a>
										<div className='course-one__admin'>
											<img src='/assets/images/team-1-2.jpg' alt='' />
											by <a href='/teacher-details'>Cora Diaz</a>
										</div>
										<h2 className='course-one__title'>
											<a href='/course-details'>Improve editing skills</a>
										</h2>
										<div className='course-one__stars'>
											<span className='course-one__stars-wrap'>
												<i className='fa fa-star'></i>
												<i className='fa fa-star'></i>
												<i className='fa fa-star'></i>
												<i className='fa fa-star'></i>
												<i className='fa fa-star'></i>
											</span>
											<span className='course-one__count'>4.8</span>
											<span className='course-one__stars-count'>250</span>
										</div>
										<div className='course-one__meta'>
											<a href='/course-details'>
												<i className='far fa-clock'></i> 10 Hours
											</a>
											<a href='/course-details'>
												<i className='far fa-folder-open'></i> 6 Lectures
											</a>
											<a href='/course-details'>$18</a>
										</div>
										<a href='#' className='course-one__link'>
											See Preview
										</a>
									</div>
								</div>
							</div>
							<div className='item'>
								<div className='course-one__single color-3'>
									<div className='course-one__image'>
										<img src='/assets/images/course-1-3.jpg' alt='' />
										<i className='far fa-heart'></i>
									</div>
									<div className='course-one__content'>
										<a href='#' className='course-one__category'>
											marketing
										</a>
										<div className='course-one__admin'>
											<img src='/assets/images/team-1-3.jpg' alt='' />
											by <a href='/teacher-details'>Ruth Becker</a>
										</div>
										<h2 className='course-one__title'>
											<a href='/course-details'>Marketing strategies</a>
										</h2>
										<div className='course-one__stars'>
											<span className='course-one__stars-wrap'>
												<i className='fa fa-star'></i>
												<i className='fa fa-star'></i>
												<i className='fa fa-star'></i>
												<i className='fa fa-star'></i>
												<i className='fa fa-star'></i>
											</span>
											<span className='course-one__count'>4.8</span>
											<span className='course-one__stars-count'>250</span>
										</div>
										<div className='course-one__meta'>
											<a href='/course-details'>
												<i className='far fa-clock'></i> 10 Hours
											</a>
											<a href='/course-details'>
												<i className='far fa-folder-open'></i> 6 Lectures
											</a>
											<a href='/course-details'>$18</a>
										</div>
										<a href='#' className='course-one__link'>
											See Preview
										</a>
									</div>
								</div>
							</div>
							<div className='item'>
								<div className='course-one__single color-4'>
									<div className='course-one__image'>
										<img src='/assets/images/course-1-4.jpg' alt='' />
										<i className='far fa-heart'></i>
									</div>
									<div className='course-one__content'>
										<a href='#' className='course-one__category'>
											Photography
										</a>
										<div className='course-one__admin'>
											<img src='/assets/images/team-1-4.jpg' alt='' />
											by <a href='/teacher-details'>Ernest Rodriquez</a>
										</div>
										<h2 className='course-one__title'>
											<a href='/course-details'>Basics of photography</a>
										</h2>
										<div className='course-one__stars'>
											<span className='course-one__stars-wrap'>
												<i className='fa fa-star'></i>
												<i className='fa fa-star'></i>
												<i className='fa fa-star'></i>
												<i className='fa fa-star'></i>
												<i className='fa fa-star'></i>
											</span>
											<span className='course-one__count'>4.8</span>
											<span className='course-one__stars-count'>250</span>
										</div>
										<div className='course-one__meta'>
											<a href='/course-details'>
												<i className='far fa-clock'></i> 10 Hours
											</a>
											<a href='/course-details'>
												<i className='far fa-folder-open'></i> 6 Lectures
											</a>
											<a href='/course-details'>$18</a>
										</div>
										<a href='#' className='course-one__link'>
											See Preview
										</a>
									</div>
								</div>
							</div>
							<div className='item'>
								<div className='course-one__single color-5'>
									<div className='course-one__image'>
										<img src='/assets/images/course-1-5.jpg' alt='' />
										<i className='far fa-heart'></i>
									</div>
									<div className='course-one__content'>
										<a href='#' className='course-one__category'>
											marketing
										</a>
										<div className='course-one__admin'>
											<img src='/assets/images/team-1-5.jpg' alt='' />
											by <a href='/teacher-details'>Isabella Stanley</a>
										</div>
										<h2 className='course-one__title'>
											<a href='/course-details'>Affiliate bootcamp</a>
										</h2>
										<div className='course-one__stars'>
											<span className='course-one__stars-wrap'>
												<i className='fa fa-star'></i>
												<i className='fa fa-star'></i>
												<i className='fa fa-star'></i>
												<i className='fa fa-star'></i>
												<i className='fa fa-star'></i>
											</span>
											<span className='course-one__count'>4.8</span>
											<span className='course-one__stars-count'>250</span>
										</div>
										<div className='course-one__meta'>
											<a href='/course-details'>
												<i className='far fa-clock'></i> 10 Hours
											</a>
											<a href='/course-details'>
												<i className='far fa-folder-open'></i> 6 Lectures
											</a>
											<a href='/course-details'>$18</a>
										</div>
										<a href='#' className='course-one__link'>
											See Preview
										</a>
									</div>
								</div>
							</div>
							<div className='item'>
								<div className='course-one__single color-6'>
									<div className='course-one__image'>
										<img src='/assets/images/course-1-6.jpg' alt='' />
										<i className='far fa-heart'></i>
									</div>
									<div className='course-one__content'>
										<a href='#' className='course-one__category'>
											Health & Fitness
										</a>
										<div className='course-one__admin'>
											<img src='/assets/images/team-1-6.jpg' alt='' />
											by <a href='/teacher-details'>Katherine Collins</a>
										</div>
										<h2 className='course-one__title'>
											<a href='/course-details'>Healthy workout tips </a>
										</h2>
										<div className='course-one__stars'>
											<span className='course-one__stars-wrap'>
												<i className='fa fa-star'></i>
												<i className='fa fa-star'></i>
												<i className='fa fa-star'></i>
												<i className='fa fa-star'></i>
												<i className='fa fa-star'></i>
											</span>
											<span className='course-one__count'>4.8</span>
											<span className='course-one__stars-count'>250</span>
										</div>
										<div className='course-one__meta'>
											<a href='/course-details'>
												<i className='far fa-clock'></i> 10 Hours
											</a>
											<a href='/course-details'>
												<i className='far fa-folder-open'></i> 6 Lectures
											</a>
											<a href='/course-details'>$18</a>
										</div>
										<a href='#' className='course-one__link'>
											See Preview
										</a>
									</div>
								</div>
							</div>
							<div className='item'>
								<div className='course-one__single color-1'>
									<div className='course-one__image'>
										<img src='/assets/images/course-1-1.jpg' alt='' />
										<i className='far fa-heart'></i>
									</div>
									<div className='course-one__content'>
										<a href='#' className='course-one__category'>
											development
										</a>
										<div className='course-one__admin'>
											<img src='/assets/images/team-1-1.jpg' alt='' />
											by <a href='/teacher-details'>Lou Guerrero</a>
										</div>
										<h2 className='course-one__title'>
											<a href='/course-details'>New react bootcamp</a>
										</h2>
										<div className='course-one__stars'>
											<span className='course-one__stars-wrap'>
												<i className='fa fa-star'></i>
												<i className='fa fa-star'></i>
												<i className='fa fa-star'></i>
												<i className='fa fa-star'></i>
												<i className='fa fa-star'></i>
											</span>
											<span className='course-one__count'>4.8</span>
											<span className='course-one__stars-count'>250</span>
										</div>
										<div className='course-one__meta'>
											<a href='/course-details'>
												<i className='far fa-clock'></i> 10 Hours
											</a>
											<a href='/course-details'>
												<i className='far fa-folder-open'></i> 6 Lectures
											</a>
											<a href='/course-details'>$18</a>
										</div>
										<a href='#' className='course-one__link'>
											See Preview
										</a>
									</div>
								</div>
							</div>
							<div className='item'>
								<div className='course-one__single color-2'>
									<div className='course-one__image'>
										<img src='/assets/images/course-1-2.jpg' alt='' />
										<i className='far fa-heart'></i>
									</div>
									<div className='course-one__content'>
										<a href='#' className='course-one__category'>
											It & Software
										</a>
										<div className='course-one__admin'>
											<img src='/assets/images/team-1-2.jpg' alt='' />
											by <a href='/teacher-details'>Cora Diaz</a>
										</div>
										<h2 className='course-one__title'>
											<a href='/course-details'>Improve editing skills</a>
										</h2>
										<div className='course-one__stars'>
											<span className='course-one__stars-wrap'>
												<i className='fa fa-star'></i>
												<i className='fa fa-star'></i>
												<i className='fa fa-star'></i>
												<i className='fa fa-star'></i>
												<i className='fa fa-star'></i>
											</span>
											<span className='course-one__count'>4.8</span>
											<span className='course-one__stars-count'>250</span>
										</div>
										<div className='course-one__meta'>
											<a href='/course-details'>
												<i className='far fa-clock'></i> 10 Hours
											</a>
											<a href='/course-details'>
												<i className='far fa-folder-open'></i> 6 Lectures
											</a>
											<a href='/course-details'>$18</a>
										</div>
										<a href='#' className='course-one__link'>
											See Preview
										</a>
									</div>
								</div>
							</div>
							<div className='item'>
								<div className='course-one__single color-3'>
									<div className='course-one__image'>
										<img src='/assets/images/course-1-3.jpg' alt='' />
										<i className='far fa-heart'></i>
									</div>
									<div className='course-one__content'>
										<a href='#' className='course-one__category'>
											marketing
										</a>
										<div className='course-one__admin'>
											<img src='/assets/images/team-1-3.jpg' alt='' />
											by <a href='/teacher-details'>Ruth Becker</a>
										</div>
										<h2 className='course-one__title'>
											<a href='/course-details'>Marketing strategies</a>
										</h2>
										<div className='course-one__stars'>
											<span className='course-one__stars-wrap'>
												<i className='fa fa-star'></i>
												<i className='fa fa-star'></i>
												<i className='fa fa-star'></i>
												<i className='fa fa-star'></i>
												<i className='fa fa-star'></i>
											</span>
											<span className='course-one__count'>4.8</span>
											<span className='course-one__stars-count'>250</span>
										</div>
										<div className='course-one__meta'>
											<a href='/course-details'>
												<i className='far fa-clock'></i> 10 Hours
											</a>
											<a href='/course-details'>
												<i className='far fa-folder-open'></i> 6 Lectures
											</a>
											<a href='/course-details'>$18</a>
										</div>
										<a href='#' className='course-one__link'>
											See Preview
										</a>
									</div>
								</div>
							</div>
						</Swiper>
					</div>
				</div>
			</section>
		</div>
	);
};
export default CourseTwo;
