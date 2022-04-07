import Swiper from 'react-id-swiper';
import Image from './Image';

const CourseCatOne = () => {
	const params = {
		slidesPerView: 1.5,
		centeredSlides: true,
		loop: true,
		speed: 1000,
		spaceBetween: 30,
		autoplay: {
			delay: 3000,
			disableOnInteraction: false
		},

		// Responsive breakpoints
		breakpoints: {
			1024: {
				slidesPerView: 6
			},
			768: {
				slidesPerView: 4
			},
			640: {
				slidesPerView: 3
			},
			320: {
				slidesPerView: 2
			}
		}
	};

	return (
		<section className="thm-gray-bg course-category-one pt-0">
			<div className="container-fluid text-center">
				<div className="block-title text-center">
					<h2 className="block-title__title">ĐỐI TÁC</h2>
				</div>
				<div className="course-category-one__carousel">
					<Swiper {...params}>
						<div className="item">
							<div className="course-category-one__single color-1">
								<div className="">
									<Image
										src="/assets/images/DoiTac/du-hoc-tan-con-duong-vang-du-hoc-canada-EDMONTON-PUBLIC-SCHOOLS5.jpg"
										alt=""
										width={150}
										height={80}
									/>
								</div>
								<h3 className="course-category-one__title">
									<a href="#">Edmonton School</a>
								</h3>
							</div>
						</div>
						<div className="item">
							<div className="course-category-one__single color-1">
								<div className="">
									<Image src="/assets/images/DoiTac/achieve-the-edge.jpg" alt="" width={150} height={80} />
								</div>
								<h3 className="course-category-one__title">
									<a href="#">Achieve the Edge</a>
								</h3>
							</div>
						</div>
						<div className="item">
							<div className="course-category-one__single color-1">
								<div className="">
									<Image src="/assets/images/DoiTac/algonquin-college.jpg" alt="" width={150} height={80} />
								</div>
								<h3 className="course-category-one__title">
									<a href="#">Algonquin College</a>
								</h3>
							</div>
						</div>
						<div className="item">
							<div className="course-category-one__single color-1">
								<div className="">
									<Image src="/assets/images/DoiTac/assiniboine.jpg" alt="" width={150} height={80} />
								</div>
								<h3 className="course-category-one__title">
									<a href="#">Assiniboine</a>
								</h3>
							</div>
						</div>
						<div className="item">
							<div className="course-category-one__single color-1">
								<div className="">
									<Image src="/assets/images/DoiTac/bowvalley.jpg" alt="" width={150} height={80} />
								</div>
								<h3 className="course-category-one__title">
									<a href="#">Bowvalley</a>
								</h3>
							</div>
						</div>
						<div className="item">
							<div className="course-category-one__single color-1">
								<div className="">
									<Image
										src="/assets/images/DoiTac/du-hoc-tan-con-duong-vang-du-hoc-canada-DELTA-SCHOOL-DISTRICT.png"
										alt=""
										width={150}
										height={80}
									/>
								</div>
								<h3 className="course-category-one__title">
									<a href="#">Delta School</a>
								</h3>
							</div>
						</div>
						<div className="item">
							<div className="course-category-one__single color-1">
								<div className="">
									<Image
										src="/assets/images/DoiTac/du-hoc-tan-con-duong-vang-du-hoc-uc-hoc-vien-kent-5.png"
										alt=""
										width={150}
										height={80}
									/>
								</div>
								<h3 className="course-category-one__title">
									<a href="#">Kent Institute</a>
								</h3>
							</div>
						</div>
					</Swiper>
				</div>
			</div>
		</section>
	);
};
export default CourseCatOne;
