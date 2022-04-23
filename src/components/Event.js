import Link from 'next/link';
import { Slide } from 'react-slideshow-image';

const Event = ({ posts }) => {
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

	const properties = {
		duration: 3000,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		indicators: false,
		arrows: false,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3
				}
			},
			{
				breakpoint: 500,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2
				}
			}
		]
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
			<section className="course-one course-one__teacher-details home-one">
				<div className="container">
					<div className="course-one__carousel">
						<Slide {...properties}>
							{posts.data.length &&
								posts.data.map((post, index) => (
									<div className="item mr-4" key={index}>
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
													<a href={`/p/${post.translations[0].slug}`}>{post.translations[0].title}</a>
												</h2>
												<div className="course-one__meta">
													<a href="/course-details">
														<i className="far fa-solid fa-calendar"></i>11/09/2021
													</a>
													<a href="/course-details">
														<i className="far fa-solid fa-eye"></i> 458 views
													</a>
												</div>
												<a href={`/p/${post.translations[0].slug}`} className="course-one__link">
													Xem thêm
												</a>
											</div>
										</div>
									</div>
								))}
						</Slide>
						{/* <div className="item mr-4">
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
							<div className="item mr-4">
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
							<div className="item mr-4">
								<div className="course-one__single color-4">
									<div className="course-one__image">
										<img src="/assets/images/hoithao.jpg" alt="" />
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
							<div className="item mr-4">
								<div className="course-one__single color-5">
									<div className="course-one__image">
										<img src="/assets/images/ilets2.jpg" alt="" />
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
												[IELTS STUDY PLANNER] – CHINH PHỤC IELTS HỈ TRONG 5 TUẦN VỚI IELTS STUDY PLANNER –
												Du học Tân Con Đường Vàng
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
							<div className="item mr-4">
								<div className="course-one__single color-6">
									<div className="course-one__image">
										<img src="/assets/images/canada2.png" alt="" />
										<i className="far fa-heart"></i>
									</div>
									<div className="course-one__content">
										<a href="#" className="course-one__category">
											CANADA
										</a>
										<div className="course-one__admin">
											<img src="/assets/images/team-1-1.jpg" alt="" />
											by <a href="/teacher-details">Linda</a>
										</div>
										<h2 className="course-one__title">
											<a href="/course-details">
												[CANADA] – ĐÔI NÉT VỀ NGƯỜI DÂN Ở CANADA – Du học Canada – Du học Tân Con Đường
												Vàng
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
							<div className="item mr-4">
								<div className="course-one__single color-1">
									<div className="course-one__image">
										<img src="/assets/images/loiich.jpg" alt="" />
										<i className="far fa-heart"></i>
									</div>
									<div className="course-one__content">
										<a href="#" className="course-one__category">
											LỢI ÍCH
										</a>
										<div className="course-one__admin">
											<img src="/assets/images/team-1-1.jpg" alt="" />
											by <a href="/teacher-details">Linda</a>
										</div>
										<h2 className="course-one__title">
											<a href="/course-details">7 TRANG WEB HAY VỀ PHÁT TRIỂN BẢN THÂN DÀNH CHO GIỚI TRẺ</a>
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
							<div className="item mr-4">
								<div className="course-one__single color-2">
									<div className="course-one__image">
										<img src="/assets/images/loiich2.jpg" alt="" />
										<i className="far fa-heart"></i>
									</div>
									<div className="course-one__content">
										<a href="#" className="course-one__category">
											LỢI ÍCH
										</a>
										<div className="course-one__admin">
											<img src="/assets/images/team-1-1.jpg" alt="" />
											by <a href="/teacher-details">Linda</a>
										</div>
										<h2 className="course-one__title">
											<a href="/course-details">BÍ QUYẾT TỰ TẠO ĐỘNG LỰC CHO BẢN THÂN</a>
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
							<div className="item mr-4">
								<div className="course-one__single color-3">
									<div className="course-one__image">
										<img src="/assets/images/tintuc.jpg" alt="" />
										<i className="far fa-heart"></i>
									</div>
									<div className="course-one__content">
										<a href="#" className="course-one__category">
											TIN TỨC
										</a>
										<div className="course-one__admin">
											<img src="/assets/images/team-1-1.jpg" alt="" />
											by <a href="/teacher-details">Linda</a>
										</div>
										<h2 className="course-one__title">
											<a href="/course-details">
												CHALLENGES: THAY ĐỔI BẢN THÂN ĐỂ TRỞ NÊN HẠNH PHÚC TRONG MÙA COVID
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
							</div> */}
					</div>
				</div>
			</section>
		</div>
	);
};
export default Event;
