import React, { useState } from 'react';
import Image from './Image';
const Visa = () => {
	return (
		<div>
			<section className="inner-banner-VS">
				<div className="container">
					<h2 className="inner-banner-VS__title">VISA CANADA</h2>
				</div>
			</section>
			<div id="breaking-news" className="breaking-school" style={{ color: 'color: #E4EAE3' }}>
				<span className="breaking-news-title">
					<span>TIN MỚI NHẤT</span>
				</span>
				<ul className="innerFade" style={{ position: 'relative', height: 32 }}>
					<li style={{ display: 'block', zIndex: 10, position: 'absolute' }}>
						<a
							href="https://newgoldenroad.com/du-hoc-uc-sophia-nhi-do-tot-nghiep-truong-woodcroft-college-du-hoc-tan-con-duong-vang/"
							title="[DU HỌC ÚC] – Du học sinh Sophia Nhi Đỗ vừa tốt nghiệp trường Woodcroft College – Du học Úc – Du học Tân Con Đường Vàng"
						>
							[DU HỌC ÚC] – Du học sinh Sophia Nhi Đỗ vừa tốt nghiệp trường Woodcroft College – Du học Úc – Du học
							Tân Con Đường Vàng
						</a>
					</li>
				</ul>
			</div>
			<div id="crumbs" className="crumbss-school" style={{ paddingTop: '10px' }}>
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
						Du Học Canada
					</a>
				</span>
				&nbsp;&nbsp;
				<span className="delimiter">/</span>
				&nbsp;&nbsp;
				<span className="current">[Visa Canada]</span>
			</div>
			<h3 className="title-comm">
				<span className="title-holder">VISA </span>
			</h3>
			<div className="row">
				<div className="col-lg-8">
					<div className="card-TH">
						<div className="card-header">
							<p className="card-header-TH">
								[Du học Canada] – Lễ tốt nghiệp cấp ba của bạn Anna Phan – Du học Canada – Du học Tân Con Đường
								Vàng
							</p>
						</div>
						<div className="card-body" style={{ lineHeight: '24px' }}>
							<p className="img-card-TH">
								<img
									src="/assets/images/Visa/visa1.jpg"
									alt="HIGH SCHOOL GRADUATION CỦA MỘT BẠN DU HỌC SINH ĐÁNG YÊU"
								/>
							</p>
							<h5 className="card-title-TH">HIGH SCHOOL GRADUATION CỦA MỘT BẠN DU HỌC SINH ĐÁNG YÊU</h5>
							<p className="card-text-TH">
								Vừa rồi, một bạn du học sinh vô cùng xinh xắn của tập thể Du học Tân Con Đường Vàng – Anna Phan
								vừa hoàn thành chương trình trung học và tham gia lễ tốt nghiệp cấp 3 tại Calgary, Alberta Canada.
								Anna Phan đã xuất sắc nhận được visa và giờ đây đã tốt nghiệp với thành tích rất tốt tại Canada.
							</p>
							<a href="/VisaCa_details" className="button">
								Đọc Thêm
							</a>
						</div>
					</div>

					<div className="card-TH">
						<div className="card-header">
							<p className="card-header-TH">
								XIN VISA DU HỌC CANADA CÓ CẦN PHỎNG VẤN HAY KHÔNG? – Du học Canada – Du học Tân Con Đường Vàng
							</p>
						</div>
						<div className="card-body" style={{ lineHeight: '24px' }}>
							<p className="img-card-TH">
								<img src="/assets/images/Visa/visa2.jpg" alt="Trường Dalhousie University" />
							</p>
							<h5 className="card-title-TH">XIN VISA DU HỌC CANADA CÓ CẦN PHỎNG VẤN HAY KHÔNG?</h5>
							<p className="card-text-TH">
								Xin visa du học Canada có khó không? Nhưng để có cơ hội du học Canada thì bạn phải nắm chắc trong
								tay visa Canada đã nhé. Người trong cuộc mới hiểu được người trong kẹt, nên hãy để New Golden Road
								tôi giải quyết thắc mắc này cho quý dị thông qua bài viết dưới đây.
							</p>
							<a href="/DuHocCanada-details" className="button">
								Đọc Thêm
							</a>
						</div>
					</div>
				</div>
				<div className="col-lg-4">
					<div className="become-teacher__form" id="back-top">
						<div className="become-teacher__form-top">
							<h2 className="become-teacher__form-title">TƯ VẤN MIỄN PHÍ</h2>
						</div>
						<form action="#" metdod="POST" className="become-teacher__form-content contact-form-validated">
							<input type="text" placeholder="Họ và Tên" name="name" />
							<input type="text" placeholder=" Địa chỉ Email" name="email" />
							<input type="text" placeholder="Số điện tdoại" name="phone" />
							<input type="text" placeholder="Lời nhắn" name="message" />
							<button type="submit" className="tdm-btn become-teacher__form-btn">
								ĐĂNG KÝ
							</button>
						</form>
						<div className="result text-center"></div>
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
			<div className="post-pagination">
				<a href="#">
					<i className="fa fa-angle-double-left" />
				</a>
				<a className="active" href="#">
					1
				</a>
				<a href="#">2</a>
				<a href="#">
					<i className="fa fa-angle-double-right" />
				</a>
			</div>
		</div>
	);
};
export default Visa;
