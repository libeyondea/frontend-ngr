import Image from './Image';
import Swiper from 'react-id-swiper';

const TestimonialOne = () => {
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
		<section className="testimonials-one testimonials-one__home-three pt-0">
			<div className="container">
				<div className="block-title text-center">
					<h2 className="block-title__title">Phản hồi khách hàng Du học Tân Con Đường Vàng</h2>
				</div>
				<div className="testimonials-one__carousel">
					<Swiper {...params}>
						<div className="item">
							<div className="testimonials-one__single">
								<div className="testimonials-one__qoute">
									<img src="/assets/images/qoute-1-1.png" alt="" />
								</div>
								<p className="testimonials-one__text">
									There are many variations of passages of lore ipsu available but the majority.
								</p>
								<Image
									src="/assets/images/kh-dau-1.png"
									alt=""
									className="testimonials-one__img"
									width={100}
									height={100}
								/>
								<h3 className="testimonials-one__name">Anne Hall</h3>
								<p className="testimonials-one__designation">Student</p>
							</div>
						</div>
						<div className="item">
							<div className="testimonials-one__single">
								<div className="testimonials-one__qoute">
									<img src="/assets/images/qoute-1-1.png" alt="" />
								</div>
								<p className="testimonials-one__text">
									There are many variations of passages of lore ipsu available but the majority have suffered
									alteration in some form.
								</p>
								<Image
									src="/assets/images/kh-dau-1.png"
									alt=""
									className="testimonials-one__img"
									width={100}
									height={100}
								/>
								<h3 className="testimonials-one__name">Andre Obrien</h3>
								<p className="testimonials-one__designation">Student</p>
							</div>
						</div>
						<div className="item">
							<div className="testimonials-one__single">
								<div className="testimonials-one__qoute">
									<img src="/assets/images/qoute-1-1.png" alt="" />
								</div>
								<p className="testimonials-one__text">
									There are many variations of passages of lore ipsu available but the majority have suffered
									alteration in some form, by injected humour.
								</p>
								<Image
									src="/assets/images/kh-dau-1.png"
									alt=""
									className="testimonials-one__img"
									width={100}
									height={100}
								/>
								<h3 className="testimonials-one__name">Shane Vasquez</h3>
								<p className="testimonials-one__designation">Student</p>
							</div>
						</div>
						<div className="item">
							<div className="testimonials-one__single">
								<div className="testimonials-one__qoute">
									<img src="/assets/images/qoute-1-1.png" alt="" />
								</div>
								<p className="testimonials-one__text">
									There are many variations of passages of lore ipsu available but the majority.
								</p>
								<Image
									src="/assets/images/kh-dau-1.png"
									alt=""
									className="testimonials-one__img"
									width={100}
									height={100}
								/>
								<h3 className="testimonials-one__name">Maud Lee</h3>
								<p className="testimonials-one__designation">Student</p>
							</div>
						</div>
						<div className="item">
							<div className="testimonials-one__single">
								<div className="testimonials-one__qoute">
									<img src="/assets/images/qoute-1-1.png" alt="" />
								</div>
								<p className="testimonials-one__text">
									There are many variations of passages of lore ipsu available but the majority have suffered
									alteration in some form.
								</p>
								<Image
									src="/assets/images/kh-dau-1.png"
									alt=""
									className="testimonials-one__img"
									width={100}
									height={100}
								/>
								<h3 className="testimonials-one__name">Barbara Kennedy</h3>
								<p className="testimonials-one__designation">Student</p>
							</div>
						</div>
						<div className="item">
							<div className="testimonials-one__single">
								<div className="testimonials-one__qoute">
									<img src="/assets/images/qoute-1-1.png" alt="" />
								</div>
								<p className="testimonials-one__text">
									There are many variations of passages of lore ipsu available but the majority have suffered
									alteration in some form, by injected humour.
								</p>
								<Image
									src="/assets/images/kh-dau-1.png"
									alt=""
									className="testimonials-one__img"
									width={100}
									height={100}
								/>
								<h3 className="testimonials-one__name">Duane Carter</h3>
								<p className="testimonials-one__designation">Student</p>
							</div>
						</div>
						<div className="item">
							<div className="testimonials-one__single">
								<div className="testimonials-one__qoute">
									<img src="/assets/images/qoute-1-1.png" alt="" />
								</div>
								<p className="testimonials-one__text">
									There are many variations of passages of lore ipsu available but the majority.
								</p>
								<Image
									src="/assets/images/kh-dau-1.png"
									alt=""
									className="testimonials-one__img"
									width={100}
									height={100}
								/>
								<h3 className="testimonials-one__name">Sally Green</h3>
								<p className="testimonials-one__designation">Student</p>
							</div>
						</div>
						<div className="item">
							<div className="testimonials-one__single">
								<div className="testimonials-one__qoute">
									<img src="/assets/images/qoute-1-1.png" alt="" />
								</div>
								<p className="testimonials-one__text">
									There are many variations of passages of lore ipsu available but the majority have suffered
									alteration in some form.
								</p>
								<Image
									src="/assets/images/kh-dau-1.png"
									alt=""
									className="testimonials-one__img"
									width={100}
									height={100}
								/>
								<h3 className="testimonials-one__name">Iva Santos</h3>
								<p className="testimonials-one__designation">Student</p>
							</div>
						</div>
						<div className="item">
							<div className="testimonials-one__single">
								<div className="testimonials-one__qoute">
									<img src="/assets/images/qoute-1-1.png" alt="" />
								</div>
								<p className="testimonials-one__text">
									There are many variations of passages of lore ipsu available but the majority have suffered
									alteration in some form, by injected humour.
								</p>
								<Image
									src="/assets/images/kh-dau-1.png"
									alt=""
									className="testimonials-one__img"
									width={100}
									height={100}
								/>
								<h3 className="testimonials-one__name">Max Burns</h3>
								<p className="testimonials-one__designation">Student</p>
							</div>
						</div>
					</Swiper>
				</div>
			</div>
		</section>
	);
};

export default TestimonialOne;
