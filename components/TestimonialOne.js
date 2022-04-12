import Image from './Image';
import { Slide } from 'react-slideshow-image';

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
		<section className="testimonials-one testimonials-one__home-three pt-0">
			<div className="container">
				<div className="block-title text-center">
					<h2 className="block-title__title">Phản hồi khách hàng Du học Tân Con Đường Vàng</h2>
				</div>
				<div className="testimonials-one__carousel">
					<Slide {...properties}>
						<div className="item mr-4">
							<div className="testimonials-one__single">
								<div className="testimonials-one__qoute">
									<img src="/assets/images/qoute-1-1.png" alt="" />
								</div>
								<p className="testimonials-one__text">
									There are many variations of passages of lore ipsu available but the majority.
								</p>
								<Image
									src="/assets/images/phan_hoi1.jpg"
									alt=""
									className="testimonials-one__img"
									width={100}
									height={100}
								/>
								<h3 className="testimonials-one__name">Anne Hall</h3>
								<p className="testimonials-one__designation">Student</p>
							</div>
						</div>
						<div className="item mr-4">
							<div className="testimonials-one__single">
								<div className="testimonials-one__qoute">
									<img src="/assets/images/qoute-1-1.png" alt="" />
								</div>
								<p className="testimonials-one__text">
									There are many variations of passages of lore ipsu available but the majority have suffered
									alteration in some form.
								</p>
								<Image
									src="/assets/images/phan_hoi2.jpg"
									alt=""
									className="testimonials-one__img"
									width={100}
									height={100}
								/>
								<h3 className="testimonials-one__name">Andre Obrien</h3>
								<p className="testimonials-one__designation">Student</p>
							</div>
						</div>
						<div className="item mr-4">
							<div className="testimonials-one__single">
								<div className="testimonials-one__qoute">
									<img src="/assets/images/qoute-1-1.png" alt="" />
								</div>
								<p className="testimonials-one__text">
									There are many variations of passages of lore ipsu available but the majority have suffered
									alteration in some form, by injected humour.
								</p>
								<Image
									src="/assets/images/phan_hoi3.jpg"
									alt=""
									className="testimonials-one__img"
									width={100}
									height={100}
								/>
								<h3 className="testimonials-one__name">Shane Vasquez</h3>
								<p className="testimonials-one__designation">Student</p>
							</div>
						</div>
						<div className="item mr-4">
							<div className="testimonials-one__single">
								<div className="testimonials-one__qoute">
									<img src="/assets/images/qoute-1-1.png" alt="" />
								</div>
								<p className="testimonials-one__text">
									There are many variations of passages of lore ipsu available but the majority.
								</p>
								<Image
									src="/assets/images/phan_hoi4.jpg"
									alt=""
									className="testimonials-one__img"
									width={100}
									height={100}
								/>
								<h3 className="testimonials-one__name">Maud Lee</h3>
								<p className="testimonials-one__designation">Student</p>
							</div>
						</div>
						<div className="item mr-4">
							<div className="testimonials-one__single">
								<div className="testimonials-one__qoute">
									<img src="/assets/images/qoute-1-1.png" alt="" />
								</div>
								<p className="testimonials-one__text">
									There are many variations of passages of lore ipsu available but the majority have suffered
									alteration in some form.
								</p>
								<Image
									src="/assets/images/phan_hoi5.jpg"
									alt=""
									className="testimonials-one__img"
									width={100}
									height={100}
								/>
								<h3 className="testimonials-one__name">Barbara Kennedy</h3>
								<p className="testimonials-one__designation">Student</p>
							</div>
						</div>
						<div className="item mr-4">
							<div className="testimonials-one__single">
								<div className="testimonials-one__qoute">
									<img src="/assets/images/qoute-1-1.png" alt="" />
								</div>
								<p className="testimonials-one__text">
									There are many variations of passages of lore ipsu available but the majority have suffered
									alteration in some form, by injected humour.
								</p>
								<Image
									src="/assets/images/phan_hoi6.jpg"
									alt=""
									className="testimonials-one__img"
									width={100}
									height={100}
								/>
								<h3 className="testimonials-one__name">Duane Carter</h3>
								<p className="testimonials-one__designation">Student</p>
							</div>
						</div>
						<div className="item mr-4">
							<div className="testimonials-one__single">
								<div className="testimonials-one__qoute">
									<img src="/assets/images/qoute-1-1.png" alt="" />
								</div>
								<p className="testimonials-one__text">
									There are many variations of passages of lore ipsu available but the majority.
								</p>
								<Image
									src="/assets/images/phan_hoi7.jpg"
									alt=""
									className="testimonials-one__img"
									width={100}
									height={100}
								/>
								<h3 className="testimonials-one__name">Sally Green</h3>
								<p className="testimonials-one__designation">Student</p>
							</div>
						</div>
						<div className="item mr-4">
							<div className="testimonials-one__single">
								<div className="testimonials-one__qoute">
									<img src="/assets/images/qoute-1-1.png" alt="" />
								</div>
								<p className="testimonials-one__text">
									There are many variations of passages of lore ipsu available but the majority have suffered
									alteration in some form.
								</p>
								<Image
									src="/assets/images/phan_hoi8.jpg"
									alt=""
									className="testimonials-one__img"
									width={100}
									height={100}
								/>
								<h3 className="testimonials-one__name">Iva Santos</h3>
								<p className="testimonials-one__designation">Student</p>
							</div>
						</div>
					</Slide>
				</div>
			</div>
		</section>
	);
};

export default TestimonialOne;
