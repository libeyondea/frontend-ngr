import React from 'react';
import Link from 'next/link';
const CourseDetails = () => {
	return (
		<section className="course-details">
			<div className="container">
				<div id="breaking-news" className="breaking-news">
					<span className="breaking-news-title">
						<span>TIN MỚI NHẤT</span>
					</span>
					<ul className="innerFade" style={{ position: 'relative', height: 32 }}>
						<li style={{ display: 'block', zIndex: 10, position: 'absolute' }}>
							<a
								href="https://newgoldenroad.com/du-hoc-uc-sophia-nhi-do-tot-nghiep-truong-woodcroft-college-du-hoc-tan-con-duong-vang/"
								title="[DU HỌC ÚC] – Du học sinh Sophia Nhi Đỗ vừa tốt nghiệp trường Woodcroft College – Du học Úc – Du học Tân Con Đường Vàng"
							>
								[DU HỌC ÚC] – Du học sinh Sophia Nhi Đỗ vừa tốt nghiệp trường Woodcroft College – Du học Úc – Du
								học Tân Con Đường Vàng
							</a>
						</li>
					</ul>
				</div>
				<div className="row">
					<div id="crumbs" className="crumbss">
						<span typeof="v:Breadcrumb">
							<a className="crumbs-home" href="https://newgoldenroad.com">
								Trang Chủ
							</a>
						</span>
						&nbsp;&nbsp;
						<span className="delimiter">/</span>
						&nbsp;&nbsp;
						<span typeof="v:Breadcrumb">
							<a href="https://newgoldenroad.com/chuyen-muc/hoat-dong-cong-ty/" style={{ color: '#81868a' }}>
								Tuyển Dụng
							</a>
						</span>
						&nbsp;&nbsp;
						<span className="delimiter">/</span>
						&nbsp;&nbsp;
						<span className="current">
							[IELTS INDICATOR] – Phương pháp thi IELTS trực tuyến tại nhà cùng với Du học Tân Con Đường Vàng
						</span>
					</div>
					<h3 className="title-com">
						<span className="title-holder">THÔNG TIN TUYỂN DỤNG</span>
					</h3>

					<div className="col-lg-3">
						<div className="blog-one__single">
							<div className="blog-one__image">
								<img
									src="/assets/images/New/du-hoc-tan-con-duong-vang-5-dieu-can-biet-khi-du-hoc-my-310x165.jpg"
									alt=""
								/>
								<Link href="/news-details">
									<a className="blog-one__plus">
										<i className="kipso-icon-plus-symbol"></i>
									</a>
								</Link>
							</div>
							<div className="blog-one__content text-center">
								<div className="blog-one__meta">
									<a
										data-toggle="tooltip"
										data-placement="top"
										title=""
										href="#"
										data-original-title="Posted On Jan 19"
									>
										<i className="fa fa-calendar-alt"></i>
									</a>
									<a
										data-toggle="tooltip"
										data-placement="top"
										title=""
										href="#"
										data-original-title="No Comments"
									>
										<i className="fa fa-comments"></i>
									</a>
									<a
										data-toggle="tooltip"
										data-placement="top"
										title=""
										href="#"
										data-original-title="Posted By Admin"
									>
										<i className="fa fa-user"></i>
									</a>
								</div>
								<h2 className="blog-one__title">
									<Link href="/news-details">
										<a>[DU HỌC MỸ] – Cần chuẩn bị gì khi du học Mỹ – Du học Mỹ – Du học Tân Con Đường Vàng</a>
									</Link>
								</h2>
								<p className="blog-one__text">
									CẦN CHUẨN BỊ GÌ KHI DU HỌC MỸ ? Cần chuẩn bị gì khi đi du học Mỹ? hay Du học Mỹ cần mang theo
									gì? Đây là những từ khoá được gõ nhiều nhất khi các bậc phụ huynh hoặc các bạn học sinh sinh
									viên muốn tìm hiểu …
								</p>
								<Link href="/news-details">
									<a className="blog-one__link">Read More</a>
								</Link>
							</div>
						</div>
					</div>
					<div className="col-lg-3">
						<div className="blog-one__single">
							<div className="blog-one__image">
								<img src="/assets/images/New/du-hoc-tan-con-duong-vang-du-hoc-my-1-310x165.jpg" alt="" />
								<Link href="/news-details">
									<a className="blog-one__plus">
										<i className="kipso-icon-plus-symbol"></i>
									</a>
								</Link>
							</div>
							<div className="blog-one__content text-center">
								<div className="blog-one__meta">
									<a
										data-toggle="tooltip"
										data-placement="top"
										title=""
										href="#"
										data-original-title="Posted On Jan 19"
									>
										<i className="fa fa-calendar-alt"></i>
									</a>
									<a
										data-toggle="tooltip"
										data-placement="top"
										title=""
										href="#"
										data-original-title="No Comments"
									>
										<i className="fa fa-comments"></i>
									</a>
									<a
										data-toggle="tooltip"
										data-placement="top"
										title=""
										href="#"
										data-original-title="Posted By Admin"
									>
										<i className="fa fa-user"></i>
									</a>
								</div>
								<h2 className="blog-one__title">
									<Link href="/news-details">
										<a>Tuyển sinh du học Mỹ 2021 – Du học Mỹ – Du học Tân Con Đường Vàng</a>
									</Link>
								</h2>
								<p className="blog-one__text">
									DU HỌC MỸ – TUYỂN SINH DU HỌC MỸ 2021 Du học có nghĩa là tự hào. Tự hào thấy mình thay đổi, tự
									hào thấy mình đang lớn, tự hào vì mình được yêu thương. Du học chưa bao giờ là một lựa chọn dễ
									dàng. Nhất là khi …
								</p>
								<Link href="/news-details">
									<a className="blog-one__link">Read More</a>
								</Link>
							</div>
						</div>
					</div>
					<div className="col-lg-3">
						<div className="blog-one__single">
							<div className="blog-one__image">
								<img
									src="/assets/images/New/du-hoc-tan-con-duong-vang-5-dieu-can-biet-khi-du-hoc-my-310x165.jpg"
									alt=""
								/>
								<Link href="/news-details">
									<a className="blog-one__plus">
										<i className="kipso-icon-plus-symbol"></i>
									</a>
								</Link>
							</div>
							<div className="blog-one__content text-center">
								<div className="blog-one__meta">
									<a
										data-toggle="tooltip"
										data-placement="top"
										title=""
										href="#"
										data-original-title="Posted On Jan 19"
									>
										<i className="fa fa-calendar-alt"></i>
									</a>
									<a
										data-toggle="tooltip"
										data-placement="top"
										title=""
										href="#"
										data-original-title="No Comments"
									>
										<i className="fa fa-comments"></i>
									</a>
									<a
										data-toggle="tooltip"
										data-placement="top"
										title=""
										href="#"
										data-original-title="Posted By Admin"
									>
										<i className="fa fa-user"></i>
									</a>
								</div>
								<h2 className="blog-one__title">
									<Link href="/news-details">
										<a>[DU HỌC MỸ] – Cần chuẩn bị gì khi du học Mỹ – Du học Mỹ – Du học Tân Con Đường Vàng</a>
									</Link>
								</h2>
								<p className="blog-one__text">
									CẦN CHUẨN BỊ GÌ KHI DU HỌC MỸ ? Cần chuẩn bị gì khi đi du học Mỹ? hay Du học Mỹ cần mang theo
									gì? Đây là những từ khoá được gõ nhiều nhất khi các bậc phụ huynh hoặc các bạn học sinh sinh
									viên muốn tìm hiểu …
								</p>
								<Link href="/news-details">
									<a className="blog-one__link">Read More</a>
								</Link>
							</div>
						</div>
					</div>
					<div className="col-lg-3">
						<div className="blog-one__single">
							<div className="blog-one__image">
								<img
									src="/assets/images/New/du-hoc-tan-con-duong-vang-5-dieu-can-biet-khi-du-hoc-my-310x165.jpg"
									alt=""
								/>
								<Link href="/news-details">
									<a className="blog-one__plus">
										<i className="kipso-icon-plus-symbol"></i>
									</a>
								</Link>
							</div>
							<div className="blog-one__content text-center">
								<div className="blog-one__meta">
									<a
										data-toggle="tooltip"
										data-placement="top"
										title=""
										href="#"
										data-original-title="Posted On Jan 19"
									>
										<i className="fa fa-calendar-alt"></i>
									</a>
									<a
										data-toggle="tooltip"
										data-placement="top"
										title=""
										href="#"
										data-original-title="No Comments"
									>
										<i className="fa fa-comments"></i>
									</a>
									<a
										data-toggle="tooltip"
										data-placement="top"
										title=""
										href="#"
										data-original-title="Posted By Admin"
									>
										<i className="fa fa-user"></i>
									</a>
								</div>
								<h2 className="blog-one__title">
									<Link href="/news-details">
										<a>[DU HỌC MỸ] – Cần chuẩn bị gì khi du học Mỹ – Du học Mỹ – Du học Tân Con Đường Vàng</a>
									</Link>
								</h2>
								<p className="blog-one__text">
									CẦN CHUẨN BỊ GÌ KHI DU HỌC MỸ ? Cần chuẩn bị gì khi đi du học Mỹ? hay Du học Mỹ cần mang theo
									gì? Đây là những từ khoá được gõ nhiều nhất khi các bậc phụ huynh hoặc các bạn học sinh sinh
									viên muốn tìm hiểu …
								</p>
								<Link href="/news-details">
									<a className="blog-one__link">Read More</a>
								</Link>
							</div>
						</div>
					</div>
					<div className="col-lg-8">
						<div className="course-details__content">
							<p className="course-details__author">
								<img src="/assets/images/team-1-1.jpg" alt="" />
								by <a href="#">Addie Walters</a>
							</p>

							<div className="course-details__top">
								<div className="course-details__top-left">
									<h2 className="course-details__title">Hình Thức Tuyển Dụng</h2>
									<div className="course-one__stars">
										<span className="course-one__stars-wrap">
											<i className="fa fa-star"></i>
											<i className="fa fa-star"></i>
											<i className="fa fa-star"></i>
											<i className="fa fa-star"></i>
											<i className="fa fa-star"></i>
										</span>
										<span className="course-one__count">4.8</span>
										<span className="course-one__stars-count">250</span>
									</div>
								</div>
								<div className="course-details__top-right">
									<a href="#" className="course-one__category">
										new golden road
									</a>
								</div>
							</div>
							<div className="course-one__image">
								<img src="/assets/images/course-d-1.jpg" alt="" />
								<i className="far fa-heart"></i>
							</div>

							<ul className="course-details__tab-navs list-unstyled nav nav-tabs" role="tablist">
								<li>
									<a className="active" role="tab" data-toggle="tab" href="#overview">
										Overview
									</a>
								</li>
								<li>
									<a className="" role="tab" data-toggle="tab" href="#curriculum">
										Curriculum
									</a>
								</li>
								<li>
									<a className="" role="tab" data-toggle="tab" href="#review">
										Reviews
									</a>
								</li>
							</ul>
							<div className="tab-content course-details__tab-content ">
								<div className="tab-pane show active  animated fadeInUp" role="tabpanel" id="overview">
									<p className="course-details__tab-text">
										Aelltes port lacus quis enim var sed efficitur turpis gilla sed sit Lorem Ipsum is simply
										dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s
										standard dummy text ever since the 1500s, when an unknown printer took a galley of type
										and scrambled it to make a type specimen book. It has survived not only five centuries,
										but also the leap into electronic typesetting, remaining essentially unchanged.
									</p>
									<br />
									<p className="course-details__tab-text">
										It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
										passages, and more recently with desktop publishing software like Aldus PageMaker
										including versions of lorem ipsum amet finibus eros. Lorem Ipsum is simply dummy text of
										the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy
										text ever since the 1500s, when an unknown printer took a galley of type and scrambled it
										to make a type specimen book. It has survived not only five centuries, but also the leap
										into electronic typesetting.
									</p>
									<br />
									<ul className="list-unstyled course-details__overview-list">
										<li>It has survived not only five centuries</li>
										<li>Lorem Ipsum is simply dummy text of the new design</li>
										<li>Printng and type setting ipsum</li>
										<li>Take a look at our round up of the best shows</li>
									</ul>
								</div>
								<div className="tab-pane  animated fadeInUp" role="tabpanel" id="curriculum">
									<h3 className="course-details__tab-title">Starting beginners level course</h3>
									<br />
									<p className="course-details__tab-text">
										Aelltes port lacus quis enim var sed efficitur turpis gilla sed sit Lorem Ipsum is simply
										dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s
										standard dummy text ever since.
									</p>
									<br />
									<ul className="course-details__curriculum-list list-unstyled">
										<li>
											<div className="course-details__curriculum-list-left">
												<div className="course-details__meta-icon video-icon">
													<i className="fas fa-play"></i>
												</div>
												<a href="#">Introduction to Editing</a> <span>Preview</span>
											</div>
											<div className="course-details__curriculum-list-right">16 minutes</div>
										</li>
										<li>
											<div className="course-details__curriculum-list-left">
												<div className="course-details__meta-icon video-icon">
													<i className="fas fa-play"></i>
												</div>
												<a href="#">Overview of Editing</a> <span>Preview</span>
											</div>
											<div className="course-details__curriculum-list-right">10 minutes</div>
										</li>
										<li>
											<div className="course-details__curriculum-list-left">
												<div className="course-details__meta-icon file-icon">
													<i className="fas fa-folder"></i>
												</div>
												<a href="#">Basic Editing Technology</a>
											</div>
										</li>
										<li>
											<div className="course-details__curriculum-list-left">
												<div className="course-details__meta-icon quiz-icon">
													<i className="fas fa-comment"></i>
												</div>
												<a href="#">Quiz</a>
											</div>
											<div className="course-details__curriculum-list-right">6 questions</div>
										</li>
									</ul>
									<br />
									<br />
									<h3 className="course-details__tab-title">Intermediate Level</h3>
									<br />
									<p className="course-details__tab-text">
										Aelltes port lacus quis enim var sed efficitur turpis gilla sed sit Lorem Ipsum is simply
										dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s
										standard dummy text ever since.
									</p>
									<br />
									<ul className="course-details__curriculum-list list-unstyled">
										<li>
											<div className="course-details__curriculum-list-left">
												<div className="course-details__meta-icon video-icon">
													<i className="fas fa-play"></i>
												</div>
												<a href="#">Introduction to Editing</a>
												<span>Preview</span>
											</div>
											<div className="course-details__curriculum-list-right">16 minutes</div>
										</li>
										<li>
											<div className="course-details__curriculum-list-left">
												<div className="course-details__meta-icon file-icon">
													<i className="fas fa-folder"></i>
												</div>
												<a href="#">Basic Editing Technology</a>
											</div>
										</li>
										<li>
											<div className="course-details__curriculum-list-left">
												<div className="course-details__meta-icon quiz-icon">
													<i className="fas fa-comment"></i>
												</div>
												<a href="#">Quiz</a>
											</div>
											<div className="course-details__curriculum-list-right">6 questions</div>
										</li>
									</ul>
								</div>
								<div className="tab-pane  animated fadeInUp" role="tabpanel" id="review">
									<div className="row">
										<div className="col-xl-7 d-flex">
											<div className="course-details__progress my-auto">
												<div className="course-details__progress-item">
													<p className="course-details__progress-text">Excellent</p>
													<div className="course-details__progress-bar">
														<span style={{ width: `95%` }}></span>
													</div>
													<p className="course-details__progress-count">5</p>
												</div>
												<div className="course-details__progress-item">
													<p className="course-details__progress-text">Very Good</p>
													<div className="course-details__progress-bar">
														<span style={{ width: `65%` }}></span>
													</div>
													<p className="course-details__progress-count">2</p>
												</div>
												<div className="course-details__progress-item">
													<p className="course-details__progress-text">Average</p>
													<div className="course-details__progress-bar">
														<span style={{ width: `33%` }}></span>
													</div>
													<p className="course-details__progress-count">1</p>
												</div>
												<div className="course-details__progress-item">
													<p className="course-details__progress-text">Poor</p>
													<div className="course-details__progress-bar">
														<span style={{ width: `0%` }} className="no-bubble"></span>
													</div>
													<p className="course-details__progress-count">0</p>
												</div>
												<div className="course-details__progress-item">
													<p className="course-details__progress-text">Terrible</p>
													<div className="course-details__progress-bar">
														<span style={{ width: `0%` }} className="no-bubble"></span>
													</div>
													<p className="course-details__progress-count">0</p>
												</div>
											</div>
										</div>
										<div className="col-xl-5 justify-content-xl-end justify-content-sm-center d-flex">
											<div className="course-details__review-box">
												<p className="course-details__review-count">4.6</p>
												<div className="course-details__review-stars">
													<i className="fas fa-star"></i>
													<i className="fas fa-star"></i>
													<i className="fas fa-star"></i>
													<i className="fas fa-star"></i>
													<i className="fas fa-star-half"></i>
												</div>
												<p className="course-details__review-text">30 reviews</p>
											</div>
										</div>
									</div>
									<div className="course-details__comment">
										<div className="course-details__comment-single">
											<div className="course-details__comment-top">
												<div className="course-details__comment-img">
													<img src="/assets/images/team-1-1.jpg" alt="" />
												</div>
												<div className="course-details__comment-right">
													<h2 className="course-details__comment-name">Steven Meyer</h2>
													<div className="course-details__comment-meta">
														<p className="course-details__comment-date">26 July, 2019</p>
														<div className="course-details__comment-stars">
															<i className="fa fa-star"></i>
															<i className="fa fa-star"></i>
															<i className="fa fa-star"></i>
															<i className="fa fa-star"></i>
															<i className="fa fa-star star-disabled"></i>
														</div>
													</div>
												</div>
											</div>
											<p className="course-details__comment-text">
												Lorem ipsum is simply free text used by copytyping refreshing. Neque porro est qui
												dolorem ipsum quia quaed inventore veritatis et quasi architecto beatae vitae
												dicta sunt explicabo.
											</p>
										</div>
										<div className="course-details__comment-single">
											<div className="course-details__comment-top">
												<div className="course-details__comment-img">
													<img src="/assets/images/team-1-2.jpg" alt="" />
												</div>
												<div className="course-details__comment-right">
													<h2 className="course-details__comment-name">Lina Kelley</h2>
													<div className="course-details__comment-meta">
														<p className="course-details__comment-date">26 July, 2019</p>
														<div className="course-details__comment-stars">
															<i className="fa fa-star"></i>
															<i className="fa fa-star"></i>
															<i className="fa fa-star"></i>
															<i className="fa fa-star star-disabled"></i>
															<i className="fa fa-star star-disabled"></i>
														</div>
													</div>
												</div>
											</div>
											<p className="course-details__comment-text">
												Lorem ipsum is simply free text used by copytyping refreshing. Neque porro est qui
												dolorem ipsum quia quaed inventore veritatis et quasi architecto beatae vitae
												dicta sunt explicabo.
											</p>
										</div>
									</div>
									<form action="#" className="course-details__comment-form">
										<h2 className="course-details__title">Add a review</h2>
										<p className="course-details__comment-form-text">
											Rate this Course? <a href="#" className="fas fa-star"></a>
											<a href="#" className="fas fa-star"></a>
											<a href="#" className="fas fa-star"></a>
											<a href="#" className="fas fa-star"></a>
											<a href="#" className="fas fa-star"></a>
										</p>
										<div className="row">
											<div className="col-lg-6">
												<input type="text" placeholder="Your Name" />
												<input type="text" placeholder="Email Address" />
											</div>
											<div className="col-lg-12">
												<textarea placeholder="Write Message"></textarea>
												<button type="submit" className="thm-btn course-details__comment-form-btn">
													Leave a Review
												</button>
											</div>
										</div>
									</form>
								</div>
							</div>
						</div>
					</div>
					<div className="col-lg-4">
						{/* 	<div className="course-details__price">
							<p className="course-details__price-text">Course price </p>
							<p className="course-details__price-amount">$18.00</p>
							<a href="#" className="thm-btn course-details__price-btn">
								Buy This Course
							</a>
						</div> */}

						<div className="course-details__meta">
							<a href="#" className="course-details__meta-link">
								<span className="course-details__meta-icon">
									<i className="far fa-clock"></i>
								</span>
								Durations: <span>10 hours</span>
							</a>
							<a href="#" className="course-details__meta-link">
								<span className="course-details__meta-icon">
									<i className="far fa-folder-open"></i>
								</span>
								Lectures: <span>6</span>
							</a>
							<a href="#" className="course-details__meta-link">
								<span className="course-details__meta-icon">
									<i className="far fa-user-circle"></i>
								</span>
								Students: <span>Max 4</span>
							</a>
							<a href="#" className="course-details__meta-link">
								<span className="course-details__meta-icon">
									<i className="fas fa-play"></i>
								</span>
								Video: <span>8 hours</span>
							</a>
							<a href="#" className="course-details__meta-link">
								<span className="course-details__meta-icon">
									<i className="far fa-flag"></i>
								</span>
								Skill Level: <span>Advanced</span>
							</a>
							<a href="#" className="course-details__meta-link">
								<span className="course-details__meta-icon">
									<i className="far fa-bell"></i>
								</span>
								Language: <span>English</span>
							</a>
						</div>
						<div className="course-details__list">
							<h2 className="course-details__list-title">New Courses</h2>
							<div className="course-details__list-item">
								<div className="course-details__list-img">
									<img src="/assets/images/lc-1-1.jpg" alt="" />
								</div>
								<div className="course-details__list-content">
									<a className="course-details__list-author" href="#">
										by <span>Lydia Byrd</span>
									</a>
									<h3>
										<a href="#">Marketing strategies</a>
									</h3>
									<div className="course-details__list-stars">
										<i className="fas fa-star"></i>
										<i className="fas fa-star"></i>
										<i className="fas fa-star"></i>
										<i className="fas fa-star"></i>
										<i className="fas fa-star"></i>
										<span>4.8</span>
									</div>
								</div>
							</div>
							<div className="course-details__list-item">
								<div className="course-details__list-img">
									<img src="/assets/images/lc-1-2.jpg" alt="" />
								</div>
								<div className="course-details__list-content">
									<a className="course-details__list-author" href="#">
										by <span>Lydia Byrd</span>
									</a>
									<h3>
										<a href="#">Marketing strategies</a>
									</h3>
									<div className="course-details__list-stars">
										<i className="fas fa-star"></i>
										<i className="fas fa-star"></i>
										<i className="fas fa-star"></i>
										<i className="fas fa-star"></i>
										<i className="fas fa-star"></i>
										<span>4.8</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default CourseDetails;
