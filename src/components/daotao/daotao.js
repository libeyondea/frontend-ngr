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
									<h2>Chương Trình Đào Tạo</h2>
									<p>
										Là một trong những chương trình đào tạo với nhiều khóa học chất lượng, trong từng cách
										giảng dạy giữa giáo viên và học viên.
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
										<h4 style={{ color: '#FF944D' }}>TIÊU CHUẨN</h4>
										<p>
											Đảm bảo chất lượng cho từng học viên trong quá trình học tập đúng mức khả năng học
											viên mong muốn.
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
										<h4 style={{ color: '#FF944D' }}>THỜI GIAN</h4>
										<p>
											Luôn đảm bảo thời gian cho tửng học viên để học tập đúng thời gian mong muốn và hoàn
											thành khóa học đúng hạn.
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
										<h4 style={{ color: '#FF944D' }}>KẾT QUẢ</h4>
										<p>
											Học viên sẽ có những kiến thức cũng như giao tiếp n cao trình độ tiếng anh bản thân
											sau khóa học tại du học Tân Con Đường Vàng
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
									<img className="hinhanh" src="/assets/images/learning_img.png" />
								</div>
							</div>
							<div className="col-md-5 col-lg-5">
								<div className="learning_member_text">
									<h5>Chúng tôi </h5>
									<h2>Học bằng tình yêu và tiếng cười</h2>
									<p>
										Chúng tôi luôn nâng cao về tâm trí học viên trong quá trình học tiếng anh, vì nếu học một
										cách máy móc sẽ khó tiếp thu hoặc chán nản trong việc học tiếng anh, bằng phương pháp tình
										yêu và tiếng cười sẽ giúp học viên hứng thú hơn trong việc học tiếng anh ngay từ bây giờ.
									</p>
									<ul>
										<li>
											<span className="ti-pencil-alt" />
										</li>
									</ul>
									<div className="row">
										<div className="col-sm-6 col-md-12 col-lg-6">
											<div className="learning_member_text_iner">
												<span className="ti-pencil-alt" />
												<h4 style={{ color: '#FF944D', fontWeight: 'bold' }}>Học bằng😘</h4>
												<p>
													Tạo cho học viên hứng thú học hơn trong việc học tiếng anh ,có thể nói là bằng
													cả trái tim.
												</p>
											</div>
										</div>
										<div className="col-sm-6 col-md-12 col-lg-6">
											<div className="learning_member_text_iner">
												<span className="ti-stamp" />
												<h4 style={{ color: '#FF944D', fontWeight: 'bold' }}>Học bằng 😃</h4>
												<p>
													Không việc học bên cạnh đó phải áp dụng thực tế ngay từ người bản xứ và các
													trò chơi tiếng anh hứng thú.
												</p>
											</div>
										</div>
									</div>
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
									<img className src="/assets/images/IELTS2.jpg" alt="" />
									<div className="special_cource_text">
										<a href="course-details.html" className="btn_4">
											IELTS
										</a>
										<h4></h4>
										<a href="course-details.html">
											<h3>IELTS</h3>
										</a>
										<p>Khóa học giúp học viên nâng cao trình độ ilets và nhiều kỳ thi mong muốn.</p>
										<div className="author_info">
											<div className="author_img">
												<div className="author_info_text">
													<p>Đánh giá:</p>
													<h5>
														<a href="#">Học viên</a>
													</h5>
												</div>
											</div>
											<div className="author_rating">
												<div className="rating">
													<i className="fa fa-star" />
													<i className="fa fa-star" />
													<i className="fa fa-star" />
													<i className="fa fa-star" />
													<i className="fa fa-star" />
												</div>
												<p>5.0 đánh giá</p>
											</div>
										</div>
										
									</div>
								</div>
							</div>
							<div className="col-sm-6 col-lg-4">
								<div className="single_special_cource">
									<img  className src="/assets/images/toeic.jpg" alt />
									<div className="special_cource_text">
										<a href="course-details.html" className="btn_4">
											TOEIC
										</a>
										<h4></h4>

										<a href="course-details.html">
											{' '}
											<h3>TOEIC </h3>
										</a>
										<p>Hoàn thành khóa học cấp tốc toeic chỉ trong vòng 3 tháng.</p>
										<div className="author_info">
											<div className="author_img">
												<div className="author_info_text">
													<p>Đánh giá:</p>
													<h5>
														<a href="#">Học viên</a>
													</h5>
												</div>
											</div>
											<div className="author_rating">
												<div className="rating">
													<i className="fa fa-star" />
													<i className="fa fa-star" />
													<i className="fa fa-star" />
													<i className="fa fa-star" />
													<i className="fa fa-star" />
												</div>
												<p>5.0 đánh giá</p>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="col-sm-6 col-lg-4">
								<div className="single_special_cource">	
								<img style={{ border: '1px solid #e0deda'}} className src="/assets/images/chuyencap.jpg" alt />
									<div className="special_cource_text">
										<a href="course-details.html" className="btn_4">
											Chuyển cấp
										</a>
										<h4></h4>
										<a href="course-details.html">
											{' '}
											<h3>Chuyển cấp</h3>{' '}
										</a>
										<p>Nâng cao trình đô tiếng anh tại trường và đạt kết quả cao trong trường.</p>
										<div className="author_info">
											<div className="author_img">
												<div className="author_info_text">
													<p>Đánh giá:</p>
													<h5>
														<a href="#">Học viên</a>
													</h5>
												</div>
											</div>
											<div className="author_rating">
												<div className="rating">
													<i className="fa fa-star" />
													<i className="fa fa-star" />
													<i className="fa fa-star" />
													<i className="fa fa-star" />
													<i className="fa fa-star" />
												</div>
												<p>5.0 đánh giá</p>
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
								<img className src="/assets/images/IELTS2.jpg" alt="" />
									<div className="special_cource_text">
										<a href="course-details.html" className="btn_4">
											IELTS
										</a>
										<h4></h4>
										<a href="course-details.html">
											<h3>IELTS</h3>
										</a>
										<p>Khóa học giúp học viên nâng cao trình độ ilets và nhiều kỳ thi mong muốn.</p>
										<div className="author_info">
											<div className="author_img">
												<div className="author_info_text">
													<p>Đánh giá:</p>
													<h5>
														<a href="#">Học viên</a>
													</h5>
												</div>
											</div>
											<div className="author_rating">
												<div className="rating">
													<i className="fa fa-star" />
													<i className="fa fa-star" />
													<i className="fa fa-star" />
													<i className="fa fa-star" />
													<i className="fa fa-star" />
												</div>
												<p>5.0 đánh giá</p>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="col-sm-6 col-lg-4">
								<div className="single_special_cource">
								<img  className src="/assets/images/toeic.jpg" alt />
									<div className="special_cource_text">
										<a href="course-details.html" className="btn_4">
											TOEIC
										</a>
										<h4></h4>

										<a href="course-details.html">
											{' '}
											<h3>TOEIC </h3>
										</a>
										<p>Hoàn thành khóa học cấp tốc toeic chỉ trong vòng 3 tháng.</p>
										<div className="author_info">
											<div className="author_img">
												<div className="author_info_text">
													<p>Đánh giá:</p>
													<h5>
														<a href="#">Học viên</a>
													</h5>
												</div>
											</div>
											<div className="author_rating">
												<div className="rating">
													<i className="fa fa-star" />
													<i className="fa fa-star" />
													<i className="fa fa-star" />
													<i className="fa fa-star" />
													<i className="fa fa-star" />
												</div>
												<p>5.0 đánh giá</p>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="col-sm-6 col-lg-4">
								<div className="single_special_cource">
								<img style={{ border: '1px solid #e0deda'}} className src="/assets/images/chuyencap.jpg" alt />
									<div className="special_cource_text">
										<a href="course-details.html" className="btn_4">
											Chuyển cấp
										</a>
										<h4></h4>
										<a href="course-details.html">
											{' '}
											<h3>Chuyển cấp</h3>{' '}
										</a>
										<p>Nâng cao trình đô tiếng anh tại trường và đạt kết quả cao trong trường.</p>
										<div className="author_info">
											<div className="author_img">
												<div className="author_info_text">
													<p>Đánh giá:</p>
													<h5>
														<a href="#">Học viên</a>
													</h5>
												</div>
											</div>
											<div className="author_rating">
												<div className="rating">
													<i className="fa fa-star" />
													<i className="fa fa-star" />
													<i className="fa fa-star" />
													<i className="fa fa-star" />
													<i className="fa fa-star" />
												</div>
												<p>5.0 đánh giá</p>
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
									<h5>TÍNH NĂNG</h5>
									<h2>Hệ thống học tập trực tuyến của chúng tôi</h2>
									<p>
										Các công cụ đào tạo bao gồm: Clip bài giảng, bài đọc, học liệu, Quiz, Game simulation. Học
										viên làm Bài tập cá nhân, bài tập nhóm và nhận Feedback của giảng viên thông qua
										Livestreaming tương tác. Hiệu quả đào tạo của các mô hình dự trên sự kết hợp này và sự
										triển khai trên các trên hệ thống Elearning.
									</p>
									<div className="row">
										<div className="col-sm-6 col-md-12 col-lg-6">
											<div className="learning_member_text_iner">
												<ul>
													<li></li>
												</ul>
												{/* 	<span className="ti-pencil-alt" /> */}
												<h4 style={{ color: '#FF944D', fontWeight: 'bold' }}>Hiệu quả </h4>
												<p>
													Sau buổi học, học viên có một bài test để đánh giá năng lực trong từng buổi
													học.
												</p>
											</div>
										</div>
										<div className="col-sm-6 col-md-12 col-lg-6">
											<div className="learning_member_text_iner">
												<ul>
													<li></li>
												</ul>
												<h4 style={{ color: '#FF944D', fontWeight: 'bold' }}>Tiện lợi</h4>
												<p>Tiện lợi trong buổi học buổi vừa có thể học online hoặc offline.</p>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="col-lg-6 col-md-6">
								<div className="learning_img"></div>
							</div>
						</div>
					</div>
				</section>
				{/* learning part end*/}
				{/*::review_part start::*/}
				<div className="section_tittle text-center">
	<h2>PHẢN HỒI</h2>
	</div>
<div className="card-main">
	<div className="col-sm-4 col-lg-12">
<div className="card">
  <div className="img-avatar">
    <svg viewBox="0 0 100 100">
      <path d="m38.977 59.074c0 2.75-4.125 2.75-4.125 0s4.125-2.75 4.125 0" />
      <path d="m60.477 59.074c0 2.75-4.125 2.75-4.125 0s4.125-2.75 4.125 0" />
      <path d="m48.203 69.309c1.7344 0 3.1484-1.4141 3.1484-3.1484 0-0.27734-0.22266-0.5-0.5-0.5-0.27734 0-0.5 0.22266-0.5 0.5 0 1.1836-0.96484 2.1484-2.1484 2.1484s-2.1484-0.96484-2.1484-2.1484c0-0.27734-0.22266-0.5-0.5-0.5-0.27734 0-0.5 0.22266-0.5 0.5 0 1.7344 1.4141 3.1484 3.1484 3.1484z" />
      <path d="m35.492 24.371c0.42187-0.35156 0.48047-0.98438 0.125-1.4062-0.35156-0.42188-0.98438-0.48438-1.4062-0.125-5.1602 4.3047-16.422 17.078-9.5312 42.562 0.21484 0.79688 0.85547 1.4062 1.6641 1.582 0.15625 0.035156 0.31641 0.050781 0.47266 0.050781 0.62891 0 1.2344-0.27344 1.6445-0.76562 0.82812-0.98828 2.0039-1.5391 2.793-1.8203 0.56641 1.6055 1.4766 3.3594 2.9727 4.9414 2.2852 2.4219 5.4336 3.9453 9.3867 4.5547-3.6055 4.5-3.8047 10.219-3.8086 10.484-0.011719 0.55078 0.42187 1.0078 0.97656 1.0234h0.023438c0.53906 0 0.98437-0.42969 1-0.97266 0-0.054688 0.17187-4.8711 2.9805-8.7773 0.63281 1.2852 1.7266 2.5 3.4141 2.5 1.7109 0 2.7578-1.2695 3.3398-2.6172 2.8867 3.9258 3.0586 8.8359 3.0586 8.8906 0.015625 0.54297 0.46094 0.97266 1 0.97266h0.023438c0.55078-0.015625 0.98828-0.47266 0.97656-1.0234-0.007812-0.26953-0.20703-6.0938-3.9141-10.613 7.0781-1.3086 10.406-5.4219 11.969-8.9766 1.0508 0.98828 2.75 2.1992 4.793 2.1992 0.078126 0 0.15625 0 0.23828-0.003906 0.47266-0.023438 1.5781-0.074219 3.4219-4.4219 1.1172-2.6406 2.1406-6.0117 2.8711-9.4922 4.8281-22.945-4.7852-30.457-9.1445-32.621-12.316-6.1172-22.195-3.6055-28.312-0.42188-0.48828 0.25391-0.67969 0.85938-0.42578 1.3477s0.85938 0.67969 1.3477 0.42578c5.7031-2.9688 14.934-5.3047 26.5 0.4375 7.1875 3.5703 9 11.586 9.2539 17.684 0.49609 11.93-4.2617 23.91-5.7344 25.062h-0.015626c-1.832 0-3.4102-1.5742-4.0352-2.2852 0.28906-0.99609 0.44531-1.8672 0.52734-2.5117 0.62891 0.16797 1.2812 0.27344 1.9727 0.27344 0.55469 0 1-0.44922 1-1 0-0.55078-0.44531-1-1-1-7.3203 0-10.703-13.941-10.734-14.082-0.097656-0.40625-0.4375-0.71094-0.85156-0.76172-0.43359-0.050781-0.82031 0.16406-1.0117 0.53906-1.8984 3.7188-1.4297 6.7539-0.67969 8.668-6.2383-2.2852-8.9766-8.6914-9.0078-8.7617-0.17969-0.43359-0.62891-0.68359-1.1016-0.60156-0.46094 0.082032-0.80469 0.47266-0.82422 0.94141-0.14062 3.3359 0.67188 5.75 1.5 7.3164-8.3125-2.4297-10.105-11.457-10.184-11.875-0.097656-0.51562-0.57422-0.86328-1.0898-0.8125-0.51953 0.054687-0.90625 0.50391-0.89062 1.0234 0.41406 13.465-1.8516 17.766-3.2383 19.133-0.66406 0.65625-1.1992 0.67188-1.2383 0.67188-0.53906-0.050781-1.0156 0.31641-1.0938 0.85156-0.078125 0.54688 0.29688 1.0547 0.84375 1.1328 0.03125 0.003906 0.11328 0.015625 0.23828 0.015625 0.36719 0 1.1016-0.09375 1.9414-0.66406 0.050781 0.38672 0.125 0.81641 0.21875 1.2656-1.0273 0.35156-2.6211 1.0781-3.7812 2.4648-0.015625 0.019532-0.054687 0.066406-0.15625 0.046875-0.039062-0.007812-0.13281-0.039062-0.16406-0.15234-2.1875-8.1094-5.7148-28.309 8.8867-40.496zm12.711 51.828c-1.0039 0-1.5898-1.207-1.8672-2.0117 0.48047 0.023438 0.95703 0.050781 1.4531 0.050781 0.74219 0 1.4453-0.035156 2.1289-0.082031-0.24219 0.83594-0.76172 2.043-1.7148 2.043zm-13.148-30.664c1.9531 3.6211 5.6367 7.9102 12.305 8.6992 0.43359 0.046875 0.83984-0.18359 1.0234-0.57422 0.18359-0.39062 0.089844-0.85938-0.22656-1.1523-0.074219-0.070312-1.2734-1.2227-1.9688-3.6367 2 2.6094 5.3359 5.6836 10.305 6.5664 0.42187 0.070312 0.83594-0.125 1.0469-0.49219 0.21094-0.36719 0.16406-0.82812-0.11719-1.1484-0.023437-0.027344-1.9414-2.2969-1.2891-5.8906 1.2227 3.5508 3.7461 9.2227 7.8945 11.551-0.03125 0.55859-0.14844 1.668-0.55078 3.0156-0.085937 0.13672-0.125 0.28516-0.13672 0.44531-1.3008 3.8906-5.0039 9.3281-15.547 9.3281-5.375 0-9.4414-1.418-12.086-4.2109-3.5664-3.7656-3.332-8.8477-3.332-8.8984v-0.011719c1.5898-2.7227 2.5-7.3203 2.6797-13.59z" />
    </svg>
  </div>
  <div className="card-text">
    <div className="portada">
    </div>
    <div className="title-total">   
      <div className="title">Khách hàng A</div>
      <h2>Khách hàng A</h2>
      <div className="desc">Khóa học giảng viên nhiệt tình .</div>
      <div className="actions">
        <button className="btndaotao"><i className="far fa-heart" /></button>
        <button className="btndaotao"><i className="far fa-envelope" /></button>
        <button className="btndaotao"><i className="fas fa-user-friends" /></button>
	  	  </div>
	  </div>
  </div>
</div>
</div>
</div>
</div>

	<div className="col-sm-4 col-lg-12">
<div className="card">
  <div className="img-avatar">
    <svg viewBox="0 0 100 100">
      <path d="m38.977 59.074c0 2.75-4.125 2.75-4.125 0s4.125-2.75 4.125 0" />
      <path d="m60.477 59.074c0 2.75-4.125 2.75-4.125 0s4.125-2.75 4.125 0" />
      <path d="m48.203 69.309c1.7344 0 3.1484-1.4141 3.1484-3.1484 0-0.27734-0.22266-0.5-0.5-0.5-0.27734 0-0.5 0.22266-0.5 0.5 0 1.1836-0.96484 2.1484-2.1484 2.1484s-2.1484-0.96484-2.1484-2.1484c0-0.27734-0.22266-0.5-0.5-0.5-0.27734 0-0.5 0.22266-0.5 0.5 0 1.7344 1.4141 3.1484 3.1484 3.1484z" />
      <path d="m35.492 24.371c0.42187-0.35156 0.48047-0.98438 0.125-1.4062-0.35156-0.42188-0.98438-0.48438-1.4062-0.125-5.1602 4.3047-16.422 17.078-9.5312 42.562 0.21484 0.79688 0.85547 1.4062 1.6641 1.582 0.15625 0.035156 0.31641 0.050781 0.47266 0.050781 0.62891 0 1.2344-0.27344 1.6445-0.76562 0.82812-0.98828 2.0039-1.5391 2.793-1.8203 0.56641 1.6055 1.4766 3.3594 2.9727 4.9414 2.2852 2.4219 5.4336 3.9453 9.3867 4.5547-3.6055 4.5-3.8047 10.219-3.8086 10.484-0.011719 0.55078 0.42187 1.0078 0.97656 1.0234h0.023438c0.53906 0 0.98437-0.42969 1-0.97266 0-0.054688 0.17187-4.8711 2.9805-8.7773 0.63281 1.2852 1.7266 2.5 3.4141 2.5 1.7109 0 2.7578-1.2695 3.3398-2.6172 2.8867 3.9258 3.0586 8.8359 3.0586 8.8906 0.015625 0.54297 0.46094 0.97266 1 0.97266h0.023438c0.55078-0.015625 0.98828-0.47266 0.97656-1.0234-0.007812-0.26953-0.20703-6.0938-3.9141-10.613 7.0781-1.3086 10.406-5.4219 11.969-8.9766 1.0508 0.98828 2.75 2.1992 4.793 2.1992 0.078126 0 0.15625 0 0.23828-0.003906 0.47266-0.023438 1.5781-0.074219 3.4219-4.4219 1.1172-2.6406 2.1406-6.0117 2.8711-9.4922 4.8281-22.945-4.7852-30.457-9.1445-32.621-12.316-6.1172-22.195-3.6055-28.312-0.42188-0.48828 0.25391-0.67969 0.85938-0.42578 1.3477s0.85938 0.67969 1.3477 0.42578c5.7031-2.9688 14.934-5.3047 26.5 0.4375 7.1875 3.5703 9 11.586 9.2539 17.684 0.49609 11.93-4.2617 23.91-5.7344 25.062h-0.015626c-1.832 0-3.4102-1.5742-4.0352-2.2852 0.28906-0.99609 0.44531-1.8672 0.52734-2.5117 0.62891 0.16797 1.2812 0.27344 1.9727 0.27344 0.55469 0 1-0.44922 1-1 0-0.55078-0.44531-1-1-1-7.3203 0-10.703-13.941-10.734-14.082-0.097656-0.40625-0.4375-0.71094-0.85156-0.76172-0.43359-0.050781-0.82031 0.16406-1.0117 0.53906-1.8984 3.7188-1.4297 6.7539-0.67969 8.668-6.2383-2.2852-8.9766-8.6914-9.0078-8.7617-0.17969-0.43359-0.62891-0.68359-1.1016-0.60156-0.46094 0.082032-0.80469 0.47266-0.82422 0.94141-0.14062 3.3359 0.67188 5.75 1.5 7.3164-8.3125-2.4297-10.105-11.457-10.184-11.875-0.097656-0.51562-0.57422-0.86328-1.0898-0.8125-0.51953 0.054687-0.90625 0.50391-0.89062 1.0234 0.41406 13.465-1.8516 17.766-3.2383 19.133-0.66406 0.65625-1.1992 0.67188-1.2383 0.67188-0.53906-0.050781-1.0156 0.31641-1.0938 0.85156-0.078125 0.54688 0.29688 1.0547 0.84375 1.1328 0.03125 0.003906 0.11328 0.015625 0.23828 0.015625 0.36719 0 1.1016-0.09375 1.9414-0.66406 0.050781 0.38672 0.125 0.81641 0.21875 1.2656-1.0273 0.35156-2.6211 1.0781-3.7812 2.4648-0.015625 0.019532-0.054687 0.066406-0.15625 0.046875-0.039062-0.007812-0.13281-0.039062-0.16406-0.15234-2.1875-8.1094-5.7148-28.309 8.8867-40.496zm12.711 51.828c-1.0039 0-1.5898-1.207-1.8672-2.0117 0.48047 0.023438 0.95703 0.050781 1.4531 0.050781 0.74219 0 1.4453-0.035156 2.1289-0.082031-0.24219 0.83594-0.76172 2.043-1.7148 2.043zm-13.148-30.664c1.9531 3.6211 5.6367 7.9102 12.305 8.6992 0.43359 0.046875 0.83984-0.18359 1.0234-0.57422 0.18359-0.39062 0.089844-0.85938-0.22656-1.1523-0.074219-0.070312-1.2734-1.2227-1.9688-3.6367 2 2.6094 5.3359 5.6836 10.305 6.5664 0.42187 0.070312 0.83594-0.125 1.0469-0.49219 0.21094-0.36719 0.16406-0.82812-0.11719-1.1484-0.023437-0.027344-1.9414-2.2969-1.2891-5.8906 1.2227 3.5508 3.7461 9.2227 7.8945 11.551-0.03125 0.55859-0.14844 1.668-0.55078 3.0156-0.085937 0.13672-0.125 0.28516-0.13672 0.44531-1.3008 3.8906-5.0039 9.3281-15.547 9.3281-5.375 0-9.4414-1.418-12.086-4.2109-3.5664-3.7656-3.332-8.8477-3.332-8.8984v-0.011719c1.5898-2.7227 2.5-7.3203 2.6797-13.59z" />
    </svg>
  </div>
  <div className="card-text">
    <div className="portada">
    </div>
    <div className="title-total">   
      <div className="title">Khách hàng A</div>
      <h2>Khách hàng A</h2>
      <div className="desc">Khóa học giảng viên nhiệt tình .</div>
      <div className="actions">
        <button className="btndaotao"><i className="far fa-heart" /></button>
        <button className="btndaotao"><i className="far fa-envelope" /></button>
        <button className="btndaotao"><i className="fas fa-user-friends" /></button>
	  	  </div>
	  </div>
  </div>
</div>
<div className="col-sm-4 col-lg-12">
<div className="card">
  <div className="img-avatar">
    <svg viewBox="0 0 100 100">
      <path d="m38.977 59.074c0 2.75-4.125 2.75-4.125 0s4.125-2.75 4.125 0" />
      <path d="m60.477 59.074c0 2.75-4.125 2.75-4.125 0s4.125-2.75 4.125 0" />
      <path d="m48.203 69.309c1.7344 0 3.1484-1.4141 3.1484-3.1484 0-0.27734-0.22266-0.5-0.5-0.5-0.27734 0-0.5 0.22266-0.5 0.5 0 1.1836-0.96484 2.1484-2.1484 2.1484s-2.1484-0.96484-2.1484-2.1484c0-0.27734-0.22266-0.5-0.5-0.5-0.27734 0-0.5 0.22266-0.5 0.5 0 1.7344 1.4141 3.1484 3.1484 3.1484z" />
      <path d="m35.492 24.371c0.42187-0.35156 0.48047-0.98438 0.125-1.4062-0.35156-0.42188-0.98438-0.48438-1.4062-0.125-5.1602 4.3047-16.422 17.078-9.5312 42.562 0.21484 0.79688 0.85547 1.4062 1.6641 1.582 0.15625 0.035156 0.31641 0.050781 0.47266 0.050781 0.62891 0 1.2344-0.27344 1.6445-0.76562 0.82812-0.98828 2.0039-1.5391 2.793-1.8203 0.56641 1.6055 1.4766 3.3594 2.9727 4.9414 2.2852 2.4219 5.4336 3.9453 9.3867 4.5547-3.6055 4.5-3.8047 10.219-3.8086 10.484-0.011719 0.55078 0.42187 1.0078 0.97656 1.0234h0.023438c0.53906 0 0.98437-0.42969 1-0.97266 0-0.054688 0.17187-4.8711 2.9805-8.7773 0.63281 1.2852 1.7266 2.5 3.4141 2.5 1.7109 0 2.7578-1.2695 3.3398-2.6172 2.8867 3.9258 3.0586 8.8359 3.0586 8.8906 0.015625 0.54297 0.46094 0.97266 1 0.97266h0.023438c0.55078-0.015625 0.98828-0.47266 0.97656-1.0234-0.007812-0.26953-0.20703-6.0938-3.9141-10.613 7.0781-1.3086 10.406-5.4219 11.969-8.9766 1.0508 0.98828 2.75 2.1992 4.793 2.1992 0.078126 0 0.15625 0 0.23828-0.003906 0.47266-0.023438 1.5781-0.074219 3.4219-4.4219 1.1172-2.6406 2.1406-6.0117 2.8711-9.4922 4.8281-22.945-4.7852-30.457-9.1445-32.621-12.316-6.1172-22.195-3.6055-28.312-0.42188-0.48828 0.25391-0.67969 0.85938-0.42578 1.3477s0.85938 0.67969 1.3477 0.42578c5.7031-2.9688 14.934-5.3047 26.5 0.4375 7.1875 3.5703 9 11.586 9.2539 17.684 0.49609 11.93-4.2617 23.91-5.7344 25.062h-0.015626c-1.832 0-3.4102-1.5742-4.0352-2.2852 0.28906-0.99609 0.44531-1.8672 0.52734-2.5117 0.62891 0.16797 1.2812 0.27344 1.9727 0.27344 0.55469 0 1-0.44922 1-1 0-0.55078-0.44531-1-1-1-7.3203 0-10.703-13.941-10.734-14.082-0.097656-0.40625-0.4375-0.71094-0.85156-0.76172-0.43359-0.050781-0.82031 0.16406-1.0117 0.53906-1.8984 3.7188-1.4297 6.7539-0.67969 8.668-6.2383-2.2852-8.9766-8.6914-9.0078-8.7617-0.17969-0.43359-0.62891-0.68359-1.1016-0.60156-0.46094 0.082032-0.80469 0.47266-0.82422 0.94141-0.14062 3.3359 0.67188 5.75 1.5 7.3164-8.3125-2.4297-10.105-11.457-10.184-11.875-0.097656-0.51562-0.57422-0.86328-1.0898-0.8125-0.51953 0.054687-0.90625 0.50391-0.89062 1.0234 0.41406 13.465-1.8516 17.766-3.2383 19.133-0.66406 0.65625-1.1992 0.67188-1.2383 0.67188-0.53906-0.050781-1.0156 0.31641-1.0938 0.85156-0.078125 0.54688 0.29688 1.0547 0.84375 1.1328 0.03125 0.003906 0.11328 0.015625 0.23828 0.015625 0.36719 0 1.1016-0.09375 1.9414-0.66406 0.050781 0.38672 0.125 0.81641 0.21875 1.2656-1.0273 0.35156-2.6211 1.0781-3.7812 2.4648-0.015625 0.019532-0.054687 0.066406-0.15625 0.046875-0.039062-0.007812-0.13281-0.039062-0.16406-0.15234-2.1875-8.1094-5.7148-28.309 8.8867-40.496zm12.711 51.828c-1.0039 0-1.5898-1.207-1.8672-2.0117 0.48047 0.023438 0.95703 0.050781 1.4531 0.050781 0.74219 0 1.4453-0.035156 2.1289-0.082031-0.24219 0.83594-0.76172 2.043-1.7148 2.043zm-13.148-30.664c1.9531 3.6211 5.6367 7.9102 12.305 8.6992 0.43359 0.046875 0.83984-0.18359 1.0234-0.57422 0.18359-0.39062 0.089844-0.85938-0.22656-1.1523-0.074219-0.070312-1.2734-1.2227-1.9688-3.6367 2 2.6094 5.3359 5.6836 10.305 6.5664 0.42187 0.070312 0.83594-0.125 1.0469-0.49219 0.21094-0.36719 0.16406-0.82812-0.11719-1.1484-0.023437-0.027344-1.9414-2.2969-1.2891-5.8906 1.2227 3.5508 3.7461 9.2227 7.8945 11.551-0.03125 0.55859-0.14844 1.668-0.55078 3.0156-0.085937 0.13672-0.125 0.28516-0.13672 0.44531-1.3008 3.8906-5.0039 9.3281-15.547 9.3281-5.375 0-9.4414-1.418-12.086-4.2109-3.5664-3.7656-3.332-8.8477-3.332-8.8984v-0.011719c1.5898-2.7227 2.5-7.3203 2.6797-13.59z" />
    </svg>
  </div>
  <div className="card-text">
    <div className="portada">
    </div>
    <div className="title-total">   
      <div className="title">Khách hàng A</div>
      <h2>Khách hàng A</h2>
      <div className="desc">Khóa học giảng viên nhiệt tình .</div>
      <div className="actions">
        <button className="btndaotao"><i className="far fa-heart" /></button>
        <button className="btndaotao"><i className="far fa-envelope" /></button>
        <button className="btndaotao"><i className="fas fa-user-friends" /></button>
	  	  </div>
	  </div>
  </div>
</div>
</div>
</div>




{/* <div className="card2">
	<div className="img-card">
		<svg viewBox="0 0 100 100">
			<path d="m38.977 59.074c0 2.75-4.125 2.75-4.125 0s4.125-2.75 4.125 0"/>
			<path d="m60.477 59.074c0 2.75-4.125 2.75-4.125 0s4.125-2.75 4.125 0"/>
			<path d="m48.203 69.309c1.7344 0 3.1484-1.4141 3.1484-3.1484 0-0.27734-0.22266-0.5-0.5-0.5-0.27734 0-0.5 0.22266-0.5 0.5 0 1.1836-0.96484 2.1484-2.1484 2.1484s-2.1484-0.96484-2.1484-2.1484c0-0.27734-0.22266-0.5-0.5-0.5-0.27734 0-0.5 0.22266-0.5 0.5 0 1.7344 1.4141 3.1484 3.1484 3.1484z" />
		 <path d="m35.492 24.371c0.42187-0.35156 0.48047-0.98438 0.125-1.4062-0.35156-0.42188-0.98438-0.48438-1.4062-0.125-5.1602 4.3047-16.422 17.078-9.5312 42.562 0.21484 0.79688 0.85547 1.4062 1.6641 1.582 0.15625 0.035156 0.31641 0.050781 0.47266 0.050781 0.62891 0 1.2344-0.27344 1.6445-0.76562 0.82812-0.98828 2.0039-1.5391 2.793-1.8203 0.56641 1.6055 1.4766 3.3594 2.9727 4.9414 2.2852 2.4219 5.4336 3.9453 9.3867 4.5547-3.6055 4.5-3.8047 10.219-3.8086 10.484-0.011719 0.55078 0.42187 1.0078 0.97656 1.0234h0.023438c0.53906 0 0.98437-0.42969 1-0.97266 0-0.054688 0.17187-4.8711 2.9805-8.7773 0.63281 1.2852 1.7266 2.5 3.4141 2.5 1.7109 0 2.7578-1.2695 3.3398-2.6172 2.8867 3.9258 3.0586 8.8359 3.0586 8.8906 0.015625 0.54297 0.46094 0.97266 1 0.97266h0.023438c0.55078-0.015625 0.98828-0.47266 0.97656-1.0234-0.007812-0.26953-0.20703-6.0938-3.9141-10.613 7.0781-1.3086 10.406-5.4219 11.969-8.9766 1.0508 0.98828 2.75 2.1992 4.793 2.1992 0.078126 0 0.15625 0 0.23828-0.003906 0.47266-0.023438 1.5781-0.074219 3.4219-4.4219 1.1172-2.6406 2.1406-6.0117 2.8711-9.4922 4.8281-22.945-4.7852-30.457-9.1445-32.621-12.316-6.1172-22.195-3.6055-28.312-0.42188-0.48828 0.25391-0.67969 0.85938-0.42578 1.3477s0.85938 0.67969 1.3477 0.42578c5.7031-2.9688 14.934-5.3047 26.5 0.4375 7.1875 3.5703 9 11.586 9.2539 17.684 0.49609 11.93-4.2617 23.91-5.7344 25.062h-0.015626c-1.832 0-3.4102-1.5742-4.0352-2.2852 0.28906-0.99609 0.44531-1.8672 0.52734-2.5117 0.62891 0.16797 1.2812 0.27344 1.9727 0.27344 0.55469 0 1-0.44922 1-1 0-0.55078-0.44531-1-1-1-7.3203 0-10.703-13.941-10.734-14.082-0.097656-0.40625-0.4375-0.71094-0.85156-0.76172-0.43359-0.050781-0.82031 0.16406-1.0117 0.53906-1.8984 3.7188-1.4297 6.7539-0.67969 8.668-6.2383-2.2852-8.9766-8.6914-9.0078-8.7617-0.17969-0.43359-0.62891-0.68359-1.1016-0.60156-0.46094 0.082032-0.80469 0.47266-0.82422 0.94141-0.14062 3.3359 0.67188 5.75 1.5 7.3164-8.3125-2.4297-10.105-11.457-10.184-11.875-0.097656-0.51562-0.57422-0.86328-1.0898-0.8125-0.51953 0.054687-0.90625 0.50391-0.89062 1.0234 0.41406 13.465-1.8516 17.766-3.2383 19.133-0.66406 0.65625-1.1992 0.67188-1.2383 0.67188-0.53906-0.050781-1.0156 0.31641-1.0938 0.85156-0.078125 0.54688 0.29688 1.0547 0.84375 1.1328 0.03125 0.003906 0.11328 0.015625 0.23828 0.015625 0.36719 0 1.1016-0.09375 1.9414-0.66406 0.050781 0.38672 0.125 0.81641 0.21875 1.2656-1.0273 0.35156-2.6211 1.0781-3.7812 2.4648-0.015625 0.019532-0.054687 0.066406-0.15625 0.046875-0.039062-0.007812-0.13281-0.039062-0.16406-0.15234-2.1875-8.1094-5.7148-28.309 8.8867-40.496zm12.711 51.828c-1.0039 0-1.5898-1.207-1.8672-2.0117 0.48047 0.023438 0.95703 0.050781 1.4531 0.050781 0.74219 0 1.4453-0.035156 2.1289-0.082031-0.24219 0.83594-0.76172 2.043-1.7148 2.043zm-13.148-30.664c1.9531 3.6211 5.6367 7.9102 12.305 8.6992 0.43359 0.046875 0.83984-0.18359 1.0234-0.57422 0.18359-0.39062 0.089844-0.85938-0.22656-1.1523-0.074219-0.070312-1.2734-1.2227-1.9688-3.6367 2 2.6094 5.3359 5.6836 10.305 6.5664 0.42187 0.070312 0.83594-0.125 1.0469-0.49219 0.21094-0.36719 0.16406-0.82812-0.11719-1.1484-0.023437-0.027344-1.9414-2.2969-1.2891-5.8906 1.2227 3.5508 3.7461 9.2227 7.8945 11.551-0.03125 0.55859-0.14844 1.668-0.55078 3.0156-0.085937 0.13672-0.125 0.28516-0.13672 0.44531-1.3008 3.8906-5.0039 9.3281-15.547 9.3281-5.375 0-9.4414-1.418-12.086-4.2109-3.5664-3.7656-3.332-8.8477-3.332-8.8984v-0.011719c1.5898-2.7227 2.5-7.3203 2.6797-13.59z" />

		</svg>
		<div className="card-text-D">
			<div className="portadaD">
				</div>
				<div className="title-totalD">
					<div className="titleD">Khách hàng B</div>
					<h2>Khách hàng B</h2>
					<div className="descD">Khóa học giảng viên nhiệt tình .</div>
					<div className="actionsD">
						<button className="btndaotaoD"><i className="far fa-heart" /></button>
						<button className="btndaotaoD"><i className="far fa-envelope" /></button>
						<button className="btndaotaoD"><i className="fas fa-user-friends" /></button>

	</div>
</div>
</div>
</div>
</div> */}
		</>
	);
};

export default Daotaochinh;
