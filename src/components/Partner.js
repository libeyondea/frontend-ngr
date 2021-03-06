import { Slide } from 'react-slideshow-image';
import Image from './Image';

const CourseCatOne = ({ dtdh }) => {
	console.log('dtdh', dtdh);
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
					slidesToShow: 6,
					slidesToScroll: 6
				}
			},
			{
				breakpoint: 500,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3
				}
			}
		]
	};

	return (
		<section className="thm-gray-bg course-category-one pt-0">
			<div className="container-fluid text-center">
				<div className="block-title text-center">
					<h2 className="block-title__title">Đối Tác Du Học Tân Con Đường Vàng</h2>
				</div>
				<div className="course-category-one__carousel">
					<Slide {...properties}>
						{dtdh.data.length &&
							dtdh.data.map((dtdh, index) => (
								<div className="item mr-4" key={index}>
									<div className="course-category-one__single color-1" style={{ height: '250px' }}>
										<div className="">
											<Image src={`${dtdh.image_url}`} alt="" width={150} height={100} />
										</div>
										<h3 className="course-category-one__title">
											<a href="#">{dtdh.title}</a>
										</h3>
									</div>
								</div>
							))}
						{/* 	<div className="item mr-4">
							<div className="course-category-one__single color-1">
								<div className="">
									<Image
										src="/assets/images/DoiTac/du-hoc-tan-con-duong-vang-du-hoc-canada-EDMONTON-PUBLIC-SCHOOLS5.jpg"
										alt=""
										width={150}
										height={100}
									/>
								</div>
								<h3 className="course-category-one__title">
									<a href="#">Edmonton School</a>
								</h3>
							</div>
						</div>
						<div className="item mr-4">
							<div className="course-category-one__single color-1">
								<div className="">
									<Image src="/assets/images/DoiTac/achieve-the-edge.jpg" alt="" width={150} height={100} />
								</div>
								<h3 className="course-category-one__title">
									<a href="#">Achieve the Edge</a>
								</h3>
							</div>
						</div>
						<div className="item mr-4">
							<div className="course-category-one__single color-1">
								<div className="">
									<Image src="/assets/images/DoiTac/algonquin-college.jpg" alt="" width={150} height={100} />
								</div>
								<h3 className="course-category-one__title">
									<a href="#">Algonquin College</a>
								</h3>
							</div>
						</div>
						<div className="item mr-4">
							<div className="course-category-one__single color-1">
								<div className="">
									<Image src="/assets/images/DoiTac/assiniboine.jpg" alt="" width={150} height={100} />
								</div>
								<h3 className="course-category-one__title">
									<a href="#">Assiniboine</a>
								</h3>
							</div>
						</div>
						<div className="item mr-4">
							<div className="course-category-one__single color-1">
								<div className="">
									<Image src="/assets/images/DoiTac/bowvalley.jpg" alt="" width={150} height={100} />
								</div>
								<h3 className="course-category-one__title">
									<a href="#">Bowvalley</a>
								</h3>
							</div>
						</div>
						<div className="item mr-4">
							<div className="course-category-one__single color-1">
								<div className="">
									<Image
										src="/assets/images/DoiTac/du-hoc-tan-con-duong-vang-du-hoc-canada-DELTA-SCHOOL-DISTRICT.png"
										alt=""
										width={150}
										height={100}
									/>
								</div>
								<h3 className="course-category-one__title">
									<a href="#">Delta School</a>
								</h3>
							</div>
						</div>
						<div className="item mr-4">
							<div className="course-category-one__single color-1">
								<div className="">
									<Image
										src="/assets/images/DoiTac/du-hoc-tan-con-duong-vang-du-hoc-uc-hoc-vien-kent-5.png"
										alt=""
										width={150}
										height={100}
									/>
								</div>
								<h3 className="course-category-one__title">
									<a href="#">Kent Institute</a>
								</h3>
							</div>
						</div> */}
					</Slide>
				</div>
			</div>
		</section>
	);
};
export default CourseCatOne;
