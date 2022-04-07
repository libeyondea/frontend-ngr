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
					<h2 className="block-title__title">PHẢN HỒI CỦA KHÁCH HÀNG</h2>
				</div>
				<div className="testimonials-one__carousel">
					<Swiper {...params}>
						<div className="item">
							<div className="testimonials-one__single">
								<div className="testimonials-one__qoute">
									<img src="/assets/images/qoute-1-1.png" alt="" />
								</div>
								<p className="testimonials-one__text">
								Du Học Tân Con Đường Vàng rất nhiệt tình, uy tín, mình học tiếng Anh ở đây 
								từ năm lớp 11 và du học Úc thông qua nơi này. Nhớ lắm những thầy cô, các bạn
								đã giúp đỡ mình!!!!!
								</p>
								<Image
									src="/assets/images/phan_hoi1.jpg"
									alt=""
									className="testimonials-one__img"
									width={100}
									height={100}
								/>
								<h3 className="testimonials-one__name">Tam Huynh</h3>
								<p className="testimonials-one__designation">Du Học Úc</p>
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
									src="/assets/images/phan_hoi2.jpg"
									alt=""
									className="testimonials-one__img"
									width={100}
									height={100}
								/>
								<h3 className="testimonials-one__name">Duyên Thơ</h3>
								<p className="testimonials-one__designation">Du học Úc</p>
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
									src="/assets/images/phan_hoi3.jpg"
									alt=""
									className="testimonials-one__img"
									width={100}
									height={100}
								/>
								<h3 className="testimonials-one__name">Giang Nguyễn</h3>
								<p className="testimonials-one__designation">Du Học Canada</p>
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
									src="/assets/images/phan_hoi4.jpg"
									alt=""
									className="testimonials-one__img"
									width={100}
									height={100}
								/>
								<h3 className="testimonials-one__name">Nguyễn Ngân</h3>
								<p className="testimonials-one__designation">Du Học Anh</p>
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
									src="/assets/images/phan_hoi5.jpg"
									alt=""
									className="testimonials-one__img"
									width={100}
									height={100}
								/>
								<h3 className="testimonials-one__name">Vee Huynh</h3>
								<p className="testimonials-one__designation">Định cư Mỹ</p>
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
									src="/assets/images/phan_hoi6.jpg"
									alt=""
									className="testimonials-one__img"
									width={100}
									height={100}
								/>
								<h3 className="testimonials-one__name">Linda Dang</h3>
								<p className="testimonials-one__designation">Định Cư Canada</p>
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
									src="/assets/images/phan_hoi7.jpg"
									alt=""
									className="testimonials-one__img"
									width={100}
									height={100}
								/>
								<h3 className="testimonials-one__name">Vy Nguyen</h3>
								<p className="testimonials-one__designation">Du Học Mỹ</p>
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
									src="/assets/images/phan_hoi8.jpg"
									alt=""
									className="testimonials-one__img"
									width={100}
									height={100}
								/>
								<h3 className="testimonials-one__name">Thiên Nhi</h3>
								<p className="testimonials-one__designation">Du Học Úc</p>
							</div>
						</div>
					</Swiper>
				</div>
			</div>
		</section>
	);
};

export default TestimonialOne;
