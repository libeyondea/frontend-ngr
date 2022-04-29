import React, { useState, useEffect } from 'react';

const Daotaochinh = () => {
	const [counter, setCounter] = useState(0);
	const [counter1, setCounter1] = useState(0);
	const [counter2, setCounter2] = useState(0);
	const [counter3, setCounter3] = useState(0);
	//counter0
	useEffect(() => {
		const interval = setInterval(() => {
			setCounter((counter) => counter + 1);
		}, 2);
		if (counter === 1000) {
			clearInterval(interval);
		}
		return () => {
			clearInterval(interval);
		};
	}, [counter]);
	//counter1
	useEffect(() => {
		const interval1 = setInterval(() => {
			setCounter1((counter1) => counter1 + 1);
		}, 2);
		if (counter1 === 2000) {
			clearInterval(interval1);
		}
		return () => {
			clearInterval(interval1);
		};
	}, [counter1]);
	//counter2
	useEffect(() => {
		const interval2 = setInterval(() => {
			setCounter2((counter2) => counter2 + 1);
		}, 2);
		if (counter2 === 1200) {
			clearInterval(interval2);
		}
		return () => {
			clearInterval(interval2);
		};
	}, [counter2]);
	//counter3
	useEffect(() => {
		const interval3 = setInterval(() => {
			setCounter3((counter3) => counter3 + 1);
		}, 2);
		if (counter3 === 800) {
			clearInterval(interval3);
		}
		return () => {
			clearInterval(interval3);
		};
	}, [counter3]);

	return (
		<>
			<div className="dao-tao-style">
				<section className="feature_part">
					<div className="container">
						<div className="row">
							<div className="col-sm-6 col-xl-3 align-self-center">
								<div className="single_feature_text ">
									<h2>
										Chương Trình Đào Tạo
									</h2>
									<p>
										Là một trong những chương trình đào tạo với nhiều khóa học chất lượng,
										trong từng cách giảng dạy giữa giáo viên và học viên.
									</p>
									<a href="#" className="btn_1">
										Xem Thêm
									</a>
								</div>
							</div>
							<div className="col-sm-6 col-xl-3">
								<div className="single_feature">
									<div className="single_feature_part">
										<span className="single_feature_icon">
										<i className="fa fa-star"></i>
										</span>
										<h4 style={{color: '#FF944D'}}>TIÊU CHUẨN</h4>
										<p>
										Đảm bảo chất lượng cho từng học viên trong quá trình học tập đúng mức khả năng học viên mong muốn.
										</p>
									</div>
								</div>
							</div>
							<div className="col-sm-6 col-xl-3">
								<div className="single_feature">
									<div className="single_feature_part">
										<span className="single_feature_icon">
										<i className="fa fa-clock"></i>
										</span>
										<h4 style={{color: '#FF944D'}}>THỜI GIAN</h4>
										<p>
											Luôn đảm bảo thời gian cho tửng học viên để học tập đúng thời gian mong muốn và hoàn thành khóa học đúng hạn.
										</p>
									</div>
								</div>
							</div>
							<div className="col-sm-6 col-xl-3">
								<div className="single_feature">
									<div className="single_feature_part single_feature_part_2">
										<span className="single_service_icon style_icon">
										<i className="fa fa-book"></i>
										</span>
										<h4 style={{color: '#FF944D'}}>KẾT QUẢ</h4>
										<p>
											Set have great you male grasses yielding yielding first their to called deep
											abundantly Set have great you male
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				{/* upcoming_event part start*/}
				{/* learning part start*/}
				<section className="learning_part">
					<div className="container">
						<div className="row align-items-sm-center align-items-lg-stretch">
							<div className="col-md-7 col-lg-7">
								<div className="learning_img">
									<img src="img/learning_img.png" alt />
								</div>
							</div>
							<div className="col-md-5 col-lg-5">
								<div className="learning_member_text">
									<h5>About us</h5>
									<h2>Learning with Love and Laughter</h2>
									<p>
										Fifth saying upon divide divide rule for deep their female all hath brind Days and beast
										greater grass signs abundantly have greater also days years under brought moveth.
									</p>
									<ul>
										<li>
											<span className="ti-pencil-alt" />
											Him lights given i heaven second yielding seas gathered wear
										</li>
										<li>
											<span className="ti-ruler-pencil" />
											Fly female them whales fly them day deep given night.
										</li>
									</ul>
									<a href="#" className="btn_1">
										Read More
									</a>
								</div>
							</div>
						</div>
					</div>
				</section>
				{/* learning part end*/}
				{/* member_counter counter start */}

				{/* member_counter counter end */}
				{/*::review_part start::*/}
				{/* member_counter counter start */}
				<section className="member_counter">
					<div className="container">
						<div className="row">
							<div className="col-lg-3 col-sm-6">
								<div className="single_member_counter">
									<span className="counter">{counter}</span>
									<h4>TẤT CẢ GIÁO VIÊN</h4>
								</div>
							</div>
							<div className="col-lg-3 col-sm-6">
								<div className="single_member_counter">
									<span className="counter">{counter1}</span>
									<h4>TẤT CẢ HỌC VIÊN</h4>
								</div>
							</div>
							<div className="col-lg-3 col-sm-6">
								<div className="single_member_counter">
									<span className="counter">{counter2}</span>
									<h4>HỌC VIÊN ONLINE</h4>
								</div>
							</div>
							<div className="col-lg-3 col-sm-6">
								<div className="single_member_counter">
									<span className="counter">{counter3}</span>
									<h4>HỌC VIÊN OFFLINE</h4>
								</div>
							</div>
						</div>
					</div>
				</section>
				<section className="special_cource padding_top">
					<div className="container">
						<div className="row justify-content-center">
							<div className="col-xl-5">
								<div className="section_tittle text-center">
									<p>Học viên online</p>
									<h2>KHÓA ONLINE</h2>
								</div>
							</div>
						</div>
						<div className="row">
							<div className="col-sm-6 col-lg-4">
								<div className="single_special_cource">
									<img src="img/special_cource_1.png" className="special_img" alt />
									<div className="special_cource_text">
										<a href="course-details.html" className="btn_4">
											Web Development
										</a>
										<h4>$130.00</h4>
										<a href="course-details.html">
											<h3>Web Development</h3>
										</a>
										<p>Which whose darkness saying were life unto fish wherein all fish of together called</p>
										<div className="author_info">
											<div className="author_img">
												<img src="img/author/autho.png" alt />
												<div className="author_info_text">
													<p>Conduct by:</p>
													<h5>
														<a href="#">James Well</a>
													</h5>
												</div>
											</div>
											<div className="author_rating">
												<div className="rating">
													<a href="#">
														<img src="img/icon/color_star.svg" alt />
													</a>
													<a href="#">
														<img src="img/icon/color_star.svg" alt />
													</a>
													<a href="#">
														<img src="img/icon/color_star.svg" alt />
													</a>
													<a href="#">
														<img src="img/icon/color_star.svg" alt />
													</a>
													<a href="#">
														<img src="img/icon/star.svg" alt />
													</a>
												</div>
												<p>3.8 Ratings</p>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="col-sm-6 col-lg-4">
								<div className="single_special_cource">
									<img src="img/special_cource_2.png" className="special_img" alt />
									<div className="special_cource_text">
										<a href="course-details.html" className="btn_4">
											design
										</a>
										<h4>$160.00</h4>
										<a href="course-details.html">
											{' '}
											<h3>Web UX/UI Design </h3>
										</a>
										<p>Which whose darkness saying were life unto fish wherein all fish of together called</p>
										<div className="author_info">
											<div className="author_img">
												<img src="img/author/author_2.png" alt />
												<div className="author_info_text">
													<p>Conduct by:</p>
													<h5>
														<a href="#">James Well</a>
													</h5>
												</div>
											</div>
											<div className="author_rating">
												<div className="rating">
													<a href="#">
														<img src="img/icon/color_star.svg" alt />
													</a>
													<a href="#">
														<img src="img/icon/color_star.svg" alt />
													</a>
													<a href="#">
														<img src="img/icon/color_star.svg" alt />
													</a>
													<a href="#">
														<img src="img/icon/color_star.svg" alt />
													</a>
													<a href="#">
														<img src="img/icon/star.svg" alt />
													</a>
												</div>
												<p>3.8 Ratings</p>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="col-sm-6 col-lg-4">
								<div className="single_special_cource">
									<img src="img/special_cource_3.png" className="special_img" alt />
									<div className="special_cource_text">
										<a href="course-details.html" className="btn_4">
											Wordpress
										</a>
										<h4>$140.00</h4>
										<a href="course-details.html">
											{' '}
											<h3>Wordpress Development</h3>{' '}
										</a>
										<p>Which whose darkness saying were life unto fish wherein all fish of together called</p>
										<div className="author_info">
											<div className="author_img">
												<img src="img/author/author_3.png" alt />
												<div className="author_info_text">
													<p>Conduct by:</p>
													<h5>
														<a href="#">James Well</a>
													</h5>
												</div>
											</div>
											<div className="author_rating">
												<div className="rating">
													<a href="#">
														<img src="img/icon/color_star.svg" alt />
													</a>
													<a href="#">
														<img src="img/icon/color_star.svg" alt />
													</a>
													<a href="#">
														<img src="img/icon/color_star.svg" alt />
													</a>
													<a href="#">
														<img src="img/icon/color_star.svg" alt />
													</a>
													<a href="#">
														<img src="img/icon/star.svg" alt />
													</a>
												</div>
												<p>3.8 Ratings</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				<section className="special_cource padding_top">
					<div className="container">
						<div className="row justify-content-center">
							<div className="col-xl-5">
								<div className="section_tittle text-center">
									<p>Học viên offline</p>
									<h2>KHÓA OFFLINE</h2>
								</div>
							</div>
						</div>
						<div className="row">
							<div className="col-sm-6 col-lg-4">
								<div className="single_special_cource">
									<img src="img/special_cource_1.png" className="special_img" alt />
									<div className="special_cource_text">
										<a href="course-details.html" className="btn_4">
											Web Development
										</a>
										<h4>$130.00</h4>
										<a href="course-details.html">
											<h3>Web Development</h3>
										</a>
										<p>Which whose darkness saying were life unto fish wherein all fish of together called</p>
										<div className="author_info">
											<div className="author_img">
												<img src="img/author/autho.png" alt />
												<div className="author_info_text">
													<p>Conduct by:</p>
													<h5>
														<a href="#">James Well</a>
													</h5>
												</div>
											</div>
											<div className="author_rating">
												<div className="rating">
													<a href="#">
														<img src="img/icon/color_star.svg" alt />
													</a>
													<a href="#">
														<img src="img/icon/color_star.svg" alt />
													</a>
													<a href="#">
														<img src="img/icon/color_star.svg" alt />
													</a>
													<a href="#">
														<img src="img/icon/color_star.svg" alt />
													</a>
													<a href="#">
														<img src="img/icon/star.svg" alt />
													</a>
												</div>
												<p>3.8 Ratings</p>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="col-sm-6 col-lg-4">
								<div className="single_special_cource">
									<img src="img/special_cource_2.png" className="special_img" alt />
									<div className="special_cource_text">
										<a href="course-details.html" className="btn_4">
											design
										</a>
										<h4>$160.00</h4>
										<a href="course-details.html">
											{' '}
											<h3>Web UX/UI Design </h3>
										</a>
										<p>Which whose darkness saying were life unto fish wherein all fish of together called</p>
										<div className="author_info">
											<div className="author_img">
												<img src="img/author/author_2.png" alt />
												<div className="author_info_text">
													<p>Conduct by:</p>
													<h5>
														<a href="#">James Well</a>
													</h5>
												</div>
											</div>
											<div className="author_rating">
												<div className="rating">
													<a href="#">
														<img src="img/icon/color_star.svg" alt />
													</a>
													<a href="#">
														<img src="img/icon/color_star.svg" alt />
													</a>
													<a href="#">
														<img src="img/icon/color_star.svg" alt />
													</a>
													<a href="#">
														<img src="img/icon/color_star.svg" alt />
													</a>
													<a href="#">
														<img src="img/icon/star.svg" alt />
													</a>
												</div>
												<p>3.8 Ratings</p>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="col-sm-6 col-lg-4">
								<div className="single_special_cource">
									<img src="img/special_cource_3.png" className="special_img" alt />
									<div className="special_cource_text">
										<a href="course-details.html" className="btn_4">
											Wordpress
										</a>
										<h4>$140.00</h4>
										<a href="course-details.html">
											{' '}
											<h3>Wordpress Development</h3>{' '}
										</a>
										<p>Which whose darkness saying were life unto fish wherein all fish of together called</p>
										<div className="author_info">
											<div className="author_img">
												<img src="img/author/author_3.png" alt />
												<div className="author_info_text">
													<p>Conduct by:</p>
													<h5>
														<a href="#">James Well</a>
													</h5>
												</div>
											</div>
											<div className="author_rating">
												<div className="rating">
													<a href="#">
														<img src="img/icon/color_star.svg" alt />
													</a>
													<a href="#">
														<img src="img/icon/color_star.svg" alt />
													</a>
													<a href="#">
														<img src="img/icon/color_star.svg" alt />
													</a>
													<a href="#">
														<img src="img/icon/color_star.svg" alt />
													</a>
													<a href="#">
														<img src="img/icon/star.svg" alt />
													</a>
												</div>
												<p>3.8 Ratings</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				{/*::blog_part end::*/}
				{/* learning part start*/}
				<section className="advance_feature learning_part">
					<div className="container">
						<div className="row align-items-sm-center align-items-xl-stretch">
							<div className="col-md-6 col-lg-6">
								<div className="learning_member_text">
									<h5>Advance feature</h5>
									<h2>Our Advance Educator Learning System</h2>
									<p>
										Fifth saying upon divide divide rule for deep their female all hath brind mid Days and
										beast greater grass signs abundantly have greater also use over face earth days years
										under brought moveth she star
									</p>
									<div className="row">
										<div className="col-sm-6 col-md-12 col-lg-6">
											<div className="learning_member_text_iner">
												<span className="ti-pencil-alt" />
												<h4>Learn Anywhere</h4>
												<p>There earth face earth behold she star so made void two given and also our</p>
											</div>
										</div>
										<div className="col-sm-6 col-md-12 col-lg-6">
											<div className="learning_member_text_iner">
												<span className="ti-stamp" />
												<h4>Expert Teacher</h4>
												<p>There earth face earth behold she star so made void two given and also our</p>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="col-lg-6 col-md-6">
								<div className="learning_img">
									<img src="img/advance_feature_img.png" alt />
								</div>
							</div>
						</div>
					</div>
				</section>
				{/* learning part end*/}
				{/*::review_part start::*/}
				<section className="testimonial_part">
					<div className="container-fluid">
						<div className="row justify-content-center">
							<div className="col-xl-5">
								<div className="section_tittle text-center">
									<p>tesimonials</p>
									<h2>Happy Students</h2>
								</div>
							</div>
						</div>
						<div className="row">
							<div className="col-lg-12">
								<div className="textimonial_iner owl-carousel">
									<div className="testimonial_slider">
										<div className="row">
											<div className="col-lg-8 col-xl-4 col-sm-8 align-self-center">
												<div className="testimonial_slider_text">
													<p>
														Behold place was a multiply creeping creature his domin to thiren open
														void hath herb divided divide creepeth living shall i call beginning third
														sea itself set
													</p>
													<h4>Michel Hashale</h4>
													<h5> Sr. Web designer</h5>
												</div>
											</div>
											<div className="col-lg-4 col-xl-2 col-sm-4">
												<div className="testimonial_slider_img">
													<img src="img/testimonial_img_1.png" alt="#" />
												</div>
											</div>
											<div className="col-xl-4 d-none d-xl-block">
												<div className="testimonial_slider_text">
													<p>
														Behold place was a multiply creeping creature his domin to thiren open
														void hath herb divided divide creepeth living shall i call beginning third
														sea itself set
													</p>
													<h4>Michel Hashale</h4>
													<h5> Sr. Web designer</h5>
												</div>
											</div>
											<div className="col-xl-2 d-none d-xl-block">
												<div className="testimonial_slider_img">
													<img src="img/testimonial_img_1.png" alt="#" />
												</div>
											</div>
										</div>
									</div>
									<div className="testimonial_slider">
										<div className="row">
											<div className="col-lg-8 col-xl-4 col-sm-8 align-self-center">
												<div className="testimonial_slider_text">
													<p>
														Behold place was a multiply creeping creature his domin to thiren open
														void hath herb divided divide creepeth living shall i call beginning third
														sea itself set
													</p>
													<h4>Michel Hashale</h4>
													<h5> Sr. Web designer</h5>
												</div>
											</div>
											<div className="col-lg-4 col-xl-2 col-sm-4">
												<div className="testimonial_slider_img">
													<img src="img/testimonial_img_2.png" alt="#" />
												</div>
											</div>
											<div className="col-xl-4 d-none d-xl-block">
												<div className="testimonial_slider_text">
													<p>
														Behold place was a multiply creeping creature his domin to thiren open
														void hath herb divided divide creepeth living shall i call beginning third
														sea itself set
													</p>
													<h4>Michel Hashale</h4>
													<h5> Sr. Web designer</h5>
												</div>
											</div>
											<div className="col-xl-2 d-none d-xl-block">
												<div className="testimonial_slider_img">
													<img src="img/testimonial_img_1.png" alt="#" />
												</div>
											</div>
										</div>
									</div>
									<div className="testimonial_slider">
										<div className="row">
											<div className="col-lg-8 col-xl-4 col-sm-8 align-self-center">
												<div className="testimonial_slider_text">
													<p>
														Behold place was a multiply creeping creature his domin to thiren open
														void hath herb divided divide creepeth living shall i call beginning third
														sea itself set
													</p>
													<h4>Michel Hashale</h4>
													<h5> Sr. Web designer</h5>
												</div>
											</div>
											<div className="col-lg-4 col-xl-2 col-sm-4">
												<div className="testimonial_slider_img">
													<img src="img/testimonial_img_3.png" alt="#" />
												</div>
											</div>
											<div className="col-xl-4 d-none d-xl-block">
												<div className="testimonial_slider_text">
													<p>
														Behold place was a multiply creeping creature his domin to thiren open
														void hath herb divided divide creepeth living shall i call beginning third
														sea itself set
													</p>
													<h4>Michel Hashale</h4>
													<h5> Sr. Web designer</h5>
												</div>
											</div>
											<div className="col-xl-2 d-none d-xl-block">
												<div className="testimonial_slider_img">
													<img src="img/testimonial_img_1.png" alt="#" />
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>
		</>
	);
};

export default Daotaochinh;
