import React from 'react';
import Swiper from 'react-id-swiper';
import Link from 'next/link';

const Event = () => {
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
						<h2 className="block-title__title">TIN TỨC & SỰ KIỆN</h2>
					</div>
				</div>
			</section>
			<section className="course-one course-one__teacher-details home-one" style={{ 'padding-bottom': '150px' }}>
				<div className="container">
					<div className="course-one__carousel">
						<Swiper {...params}>
							<div className="item">
								<div className="course-one__single color-1">
									<div className="course-one__image">
										<img src="/assets/images/duhocmy.png" alt="" />
										<i className="far fa-heart"></i>
									</div>
									<div className="course-one__content">
										<a href="#" className="course-one__category">
											DU HỌC MỸ
										</a>
										<div className="course-one__admin">
											<img src="/assets/images/team-1-1.jpg" alt="" />
											by <a href="/teacher-details">Linda</a>
										</div>
										<h2 className="course-one__title">
											<a href="/course-details">
												[Du học Mỹ] Top 10 Nét đặc trưng về văn hoá và con người ở Mỹ- Du học Mỹ-Du học
												Tân Con Đường Vàng
											</a>
										</h2>
										<div className="course-one__meta">
											<a href="/course-details">
												<i className="far fa-solid fa-calendar"></i>11/09/2021
											</a>
											<a href="/course-details">
												<i className="far fa-solid fa-eye"></i> 458 views
											</a>
										</div>
										<a href="#" className="course-one__link">
											Xem thêm
										</a>
									</div>
								</div>
							</div>
							<div className="item">
								<div className="course-one__single color-2">
									<div className="course-one__image">
										<img src="/assets/images/duhocmy2.png" alt="" />
										<i className="far fa-heart"></i>
									</div>
									<div className="course-one__content">
										<a href="#" className="course-one__category">
											DU HỌC MỸ
										</a>
										<div className="course-one__admin">
											<img src="/assets/images/team-1-1.jpg" alt="" />
											by <a href="/teacher-details">Linda</a>
										</div>
										<h2 className="course-one__title">
											<a href="/course-details">
												[DU HỌC MỸ] - Cần chuẩn bị gì khi đi du học trên đất Mỹ - Du học Mỹ - Du học Tân
												Con Đường Vàng
											</a>
										</h2>
										<div className="course-one__meta">
											<a href="/course-details">
												<i className="far fa-solid fa-calendar"></i>21/09/2021
											</a>
											<a href="/course-details">
												<i className="far fa-solid fa-eye"></i> 800 views
											</a>
										</div>
										<a href="#" className="course-one__link">
											Xem thêm
										</a>
									</div>
								</div>
							</div>
							<div className="item">
								<div className="course-one__single color-3">
									<div className="course-one__image">
										<img src="/assets/images/ilets.jpg" alt="" />
										<i className="far fa-heart"></i>
									</div>
									<div className="course-one__content">
										<a href="#" className="course-one__category">
											IELTS
										</a>
										<div className="course-one__admin">
											<img src="/assets/images/team-1-1.jpg" alt="" />
											by <a href="/teacher-details">Linda</a>
										</div>
										<h2 className="course-one__title">
											<a href="/course-details">
												[IELTS LEARNER PATHWAY] - Đừng bỏ lỡ cơ hội học tập - IELTS LEARNER PATHWAY - Du
												học Tân Con Đường Vàng
											</a>
										</h2>
										<div className="course-one__meta">
											<a href="/course-details">
												<i className="far fa-solid fa-calendar"></i>01/010/2021
											</a>
											<a href="/course-details">
												<i className="far fa-solid fa-eye"></i> 755 views
											</a>
										</div>
										<a href="#" className="course-one__link">
											Xem thêm
										</a>
									</div>
								</div>
							</div>
							<div className="item">
								<div className="course-one__single color-4">
									<div className="course-one__image">
										<img src="/assets/images/course-1-1.jpg" alt="" />
										<i className="far fa-heart"></i>
									</div>
									<div className="course-one__content">
										<a href="#" className="course-one__category">
											DU HỌC MỸ
										</a>
										<div className="course-one__admin">
											<img src="/assets/images/team-1-1.jpg" alt="" />
											by <a href="/teacher-details">Linda</a>
										</div>
										<h2 className="course-one__title">
											<a href="/course-details">
												[HỘI THẢO]-Hội thảo của trường Illinois State University - Du học Mỹ - Du học Tân
												Con Đường Vàng
											</a>
										</h2>
										<div className="course-one__meta">
											<a href="/course-details">
												<i className="far fa-solid fa-calendar"></i>11/09/2021
											</a>
											<a href="/course-details">
												<i className="far fa-solid fa-eye"></i> 458 views
											</a>
										</div>
										<a href="#" className="course-one__link">
											Xem thêm
										</a>
									</div>
								</div>
							</div>
							<div className="item">
								<div className="course-one__single color-5">
									<div className="course-one__image">
										<img src="/assets/images/course-1-1.jpg" alt="" />
										<i className="far fa-heart"></i>
									</div>
									<div className="course-one__content">
										<a href="#" className="course-one__category">
											DU HỌC MỸ
										</a>
										<div className="course-one__admin">
											<img src="/assets/images/team-1-1.jpg" alt="" />
											by <a href="/teacher-details">Linda</a>
										</div>
										<h2 className="course-one__title">
											<a href="/course-details">
												[Du học Mỹ] Top 10 Nét đặc trưng về văn hoá và con người ở Mỹ- Du học Mỹ-Du học
												Tân Con Đường Vàng
											</a>
										</h2>
										<div className="course-one__meta">
											<a href="/course-details">
												<i className="far fa-solid fa-calendar"></i>11/09/2021
											</a>
											<a href="/course-details">
												<i className="far fa-solid fa-eye"></i> 458 views
											</a>
										</div>
										<a href="#" className="course-one__link">
											Xem thêm
										</a>
									</div>
								</div>
							</div>
							<div className="item">
								<div className="course-one__single color-6">
									<div className="course-one__image">
										<img src="/assets/images/course-1-1.jpg" alt="" />
										<i className="far fa-heart"></i>
									</div>
									<div className="course-one__content">
										<a href="#" className="course-one__category">
											DU HỌC MỸ
										</a>
										<div className="course-one__admin">
											<img src="/assets/images/team-1-1.jpg" alt="" />
											by <a href="/teacher-details">Linda</a>
										</div>
										<h2 className="course-one__title">
											<a href="/course-details">
												[Du học Mỹ] Top 10 Nét đặc trưng về văn hoá và con người ở Mỹ- Du học Mỹ-Du học
												Tân Con Đường Vàng
											</a>
										</h2>
										<div className="course-one__meta">
											<a href="/course-details">
												<i className="far fa-solid fa-calendar"></i>11/09/2021
											</a>
											<a href="/course-details">
												<i className="far fa-solid fa-eye"></i> 458 views
											</a>
										</div>
										<a href="#" className="course-one__link">
											Xem thêm
										</a>
									</div>
								</div>
							</div>
							<div className="item">
								<div className="course-one__single color-1">
									<div className="course-one__image">
										<img src="/assets/images/course-1-1.jpg" alt="" />
										<i className="far fa-heart"></i>
									</div>
									<div className="course-one__content">
										<a href="#" className="course-one__category">
											DU HỌC MỸ
										</a>
										<div className="course-one__admin">
											<img src="/assets/images/team-1-1.jpg" alt="" />
											by <a href="/teacher-details">Linda</a>
										</div>
										<h2 className="course-one__title">
											<a href="/course-details">
												[Du học Mỹ] Top 10 Nét đặc trưng về văn hoá và con người ở Mỹ- Du học Mỹ-Du học
												Tân Con Đường Vàng
											</a>
										</h2>
										<div className="course-one__meta">
											<a href="/course-details">
												<i className="far fa-solid fa-calendar"></i>11/09/2021
											</a>
											<a href="/course-details">
												<i className="far fa-solid fa-eye"></i> 458 views
											</a>
										</div>
										<a href="#" className="course-one__link">
											Xem thêm
										</a>
									</div>
								</div>
							</div>
							<div className="item">
								<div className="course-one__single color-2">
									<div className="course-one__image">
										<img src="/assets/images/course-1-1.jpg" alt="" />
										<i className="far fa-heart"></i>
									</div>
									<div className="course-one__content">
										<a href="#" className="course-one__category">
											DU HỌC MỸ
										</a>
										<div className="course-one__admin">
											<img src="/assets/images/team-1-1.jpg" alt="" />
											by <a href="/teacher-details">Linda</a>
										</div>
										<h2 className="course-one__title">
											<a href="/course-details">
												[Du học Mỹ] Top 10 Nét đặc trưng về văn hoá và con người ở Mỹ- Du học Mỹ-Du học
												Tân Con Đường Vàng
											</a>
										</h2>
										<div className="course-one__meta">
											<a href="/course-details">
												<i className="far fa-solid fa-calendar"></i>11/09/2021
											</a>
											<a href="/course-details">
												<i className="far fa-solid fa-eye"></i> 458 views
											</a>
										</div>
										<a href="#" className="course-one__link">
											Xem thêm
										</a>
									</div>
								</div>
							</div>
							<div className="item">
								<div className="course-one__single color-3">
									<div className="course-one__image">
										<img src="/assets/images/course-1-1.jpg" alt="" />
										<i className="far fa-heart"></i>
									</div>
									<div className="course-one__content">
										<a href="#" className="course-one__category">
											DU HỌC MỸ
										</a>
										<div className="course-one__admin">
											<img src="/assets/images/team-1-1.jpg" alt="" />
											by <a href="/teacher-details">Linda</a>
										</div>
										<h2 className="course-one__title">
											<a href="/course-details">
												[Du học Mỹ] Top 10 Nét đặc trưng về văn hoá và con người ở Mỹ- Du học Mỹ-Du học
												Tân Con Đường Vàng
											</a>
										</h2>
										<div className="course-one__meta">
											<a href="/course-details">
												<i className="far fa-solid fa-calendar"></i>11/09/2021
											</a>
											<a href="/course-details">
												<i className="far fa-solid fa-eye"></i> 458 views
											</a>
										</div>
										<a href="#" className="course-one__link">
											Xem thêm
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
export default Event;
