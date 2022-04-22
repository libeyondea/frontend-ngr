import React from 'react';
const NewsDetails = ({ post }) => {
	return (
		<section className="blog-details">
			<div className="container">
				<div id="breaking-news" className="breaking-news breaking-newss">
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
					<div id="crumbs" style={{ paddingTop: '20px' }}>
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
								Hoạt Động Công Ty
							</a>
						</span>
						&nbsp;&nbsp;
						<span className="delimiter">/</span>
						&nbsp;&nbsp;
						<span className="current">
							[IELTS INDICATOR] – Phương pháp thi IELTS trực tuyến tại nhà cùng với Du học Tân Con Đường Vàng
						</span>
					</div>

					<div className="">
						<div className="blog-one__single">
							<h2 className="blog-one__title">
								[IELTS INDICATOR] – Phương pháp thi IELTS trực tuyến tại nhà cùng với Du học Tân Con Đường Vàng
							</h2>
							<div>
								<p className="post-meta">
									<span className="post-meta-author">
										<i className="fa fa-user" />
										&nbsp;&nbsp;
										<a href="https://newgoldenroad.com/author/admin/" title>
											admin
										</a>
									</span>
									<span className="tie-date">
										<i className="fa fa-clock-o" />1 Tháng Chín, 2021
									</span>
									<span className="post-cats">
										<i className="fa fa-folder" />
										&nbsp;&nbsp;
										<a href="https://newgoldenroad.com/chuyen-muc/hoat-dong-cong-ty/" rel="category tag">
											Hoạt Động Công Ty
										</a>
										,&nbsp;&nbsp;
										<a
											href="https://newgoldenroad.com/chuyen-muc/chuong-trinh-dao-tao/luyen-ielts-du-hoc/"
											rel="category tag"
										>
											Luyện IELTS Du Học
										</a>
										,&nbsp;&nbsp;
										<a href="https://newgoldenroad.com/chuyen-muc/tin-tuc/" rel="category tag">
											Tin Tức
										</a>
										,&nbsp;&nbsp;
										<a href="https://newgoldenroad.com/chuyen-muc/dang-ky-thi-ielts/" rel="category tag">
											Đăng Ký Thi IELTS
										</a>
									</span>
									<span className="post-views">
										<i className="fa fa-eye" />
										&nbsp;&nbsp; 1,410 Views
									</span>
								</p>
								<div className="clear" />
							</div>
							<img
								className="imagess"
								src="/assets/images/New/du-hoc-tan-con-duong-vang-ielts-indicator.jpg"
								alt=""
							/>
							<img
								className="imagess"
								src="/assets/images/New/du-hoc-tan-con-duong-vang-ielts-indicator.jpg"
								alt=""
							/>
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

								<p className="blog-one__text">IELTS INDICATOR là gì?</p>
								<p className="blog-one__text">{post.translations[0].title}</p>
								<p className="blog-one__text">
									It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
									passages, and more recently with desktop publishing software like Aldus PageMaker including
									versions of lorem ipsum amet finibus eros. Lorem Ipsum is simply dummy text of the printing
									and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since
									the 1500s, when an unknown printer took a galley of type and scrambled it to make a type
									specimen book. It has survived not only five centuries, but also the leap into electronic
									typesetting.
								</p>
								<p className="blog-one__text">
									It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
									passages, and more recently with desktop publishing software like Aldus PageMaker including
									versions of lorem ipsum.
								</p>
							</div>
						</div>
						<div className="share-block">
							<div className="left-block">
								<p>
									Tags: <a href="#">Business,</a> <a href="#">Agency,</a> <a href="#">Technology</a>
								</p>
							</div>
							<div className="social-block">
								<a href="#">
									<i className="fab fa-twitter"></i>
								</a>
								<a href="#">
									<i className="fab fa-facebook-f"></i>
								</a>
								<a href="#">
									<i className="fab fa-instagram"></i>
								</a>
								<a href="#">
									<i className="fab fa-dribbble"></i>
								</a>
							</div>
						</div>
						<div className="blog-details__author">
							<div className="blog-details__author-image">
								<img
									src="/assets/images/New/du-hoc-tan-con-duong-vang-dang-ky-thi-ielts-indicator-thang-10-12.jpg"
									alt="Awesome Image"
								/>
							</div>
							<div className="blog-details__author-content">
								<h3>Ngoài ra, khi đăng ký thi IELTS Indicator với chúng tôi, các bạn còn có cơ hội nhận được:</h3>
								<li>Khoá học Road to IELTS (Full Version) với trị giá 1.200.000 VND</li>
								<li>Khoá học thực hành SpeakUp cùng British Council với trị giá 1.000.000 VND</li>
								<li>Bộ đề thi mẫu chỉ có tại British Council</li>
								<li>Lệ phí thi cực kỳ hấp dẫn, chỉ còn $149</li>
								<p>
									Thật quá hời phải không nào… Vừa được thi tại nhà, vừa được nhận ngay nhiều phần quà khác. Vậy
									thì còn điều gì mà không TRIỂN thôi nào. ❣️❣️ Vậy nên, với những lợi ích mà IELTS INDICATOR
									mang lại thì sao các bạn không nhanh tay đăng ký ngay với chúng tôi nào. Để việc học tập không
									bị trì hoãn, thì hãy liên hệ ngay với chúng tôi nhé quý vị ơiii!!!
								</p>
							</div>
						</div>

						<h2 className="blog-details__content-title">2 Bình Luận</h2>
						<div className="comment-one">
							<div className="comment-one__single">
								<div className="comment-one__image">
									<div className="inner-block">
										<img src="/assets/images/Phan_hoi/phan_hoi3.webp" alt="Awesome Image" />
									</div>
								</div>
								<div className="comment-one__content">
									<div className="comment-one__content-top">
										<div className="comment-one__top-left">
											<h3 className="comment-one__author">Laquanda Bachmeier</h3>
											<p className="comment-one__date">
												20 April, 2019 <span className="comment-one__date-sep">-</span> 4:00 pm
											</p>
											<p className="comment-one__text">
												Lorem Ipsum is simply dummy text of the rinting and typesetting been the industry
												standard dummy text ever sincer condimentum purus. In non ex at ligula fringilla
												lobortis et not the aliquet.
											</p>
										</div>
										<div className="comment-one__top-right">
											<a href="#" className="thm-btn comment-one__reply">
												Reply
											</a>
										</div>
									</div>
								</div>
							</div>
							<div className="comment-one__single">
								<div className="comment-one__image">
									<div className="inner-block">
										<img src="/assets/images/Phan_hoi/phan_hoi5.webp" alt="Awesome Image" />
									</div>
								</div>
								<div className="comment-one__content">
									<div className="comment-one__content-top">
										<div className="comment-one__top-left">
											<h3 className="comment-one__author">Vicente Elmore</h3>
											<p className="comment-one__date">
												20 April, 2019 <span className="comment-one__date-sep">-</span> 4:00 pm
											</p>
											<p className="comment-one__text">
												Lorem Ipsum is simply dummy text of the rinting and typesetting been the industry
												standard dummy text ever sincer condimentum purus. In non ex at ligula fringilla
												lobortis et not the aliquet.
											</p>
										</div>
										<div className="comment-one__top-right">
											<a href="#" className="thm-btn comment-one__reply">
												Reply
											</a>
										</div>
									</div>
								</div>
							</div>
						</div>
						<h2 className="blog-details__content-title">Leave a Comment</h2>
						<form action="#" className="reply-form">
							<div className="row">
								<div className="col-lg-6">
									<input type="text" placeholder="Your name" className="reply-form__field" />
								</div>
								<div className="col-lg-6">
									<input type="text" placeholder="Enter email" className="reply-form__field" />
								</div>
								<div className="col-lg-12">
									<textarea placeholder="Write message" className="reply-form__field"></textarea>
									<button className="reply-form__btn thm-btn" type="submit">
										Submit Comment
									</button>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
};

export default NewsDetails;
