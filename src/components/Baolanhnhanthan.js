import React, { useState } from 'react';
import Image from './Image';
const Baolanhnhanthan = () => {
	return (
		<div>
			<section className="inner-banner-BL">
				<div className="container">
					<h2 className="inner-banner-BL__title">BÃO LÃNH THÂN NHÂN</h2>
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
						ĐỊNH CƯ ÚC
					</a>
				</span>
				&nbsp;&nbsp;
				<span className="delimiter">/</span>
				&nbsp;&nbsp;
				<span className="current">Định cư Mỹ diện đoàn tụ gia đình</span>
			</div>

			<div className="row">
				<div className="col-lg-8">
					<div className="noidung">
						<h1 className="tieudeTH">Định cư Mỹ diện đoàn tụ gia đình – Du học Tân Con Đường Vàng</h1>

						<form className="row g-3">
							<div className="col-md-6">
								<label htmlFor="inputHolot" className="form-label">
									Họ, tên lót
								</label>
								<input
									type="Holot"
									className="form-control"
									id="inputHolot"
									placeholder="Nhập họ, tên lót"
									style={{ marginTop: '-7px' }}
								/>
							</div>
							<div className="col-md-6">
								<label htmlFor="inputTen" className="form-label">
									Tên
								</label>
								<input
									type="Ten"
									className="form-control"
									id="inputTen"
									placeholder="Nhập tên "
									style={{ marginTop: '-7px' }}
								/>
							</div>
							<div className="col-md-6">
								<label htmlFor="inputEmailAddress" className="form-label">
									Email
								</label>
								<input
									type="text"
									className="form-control"
									id="inputEmail"
									placeholder="Nhập Email"
									style={{ marginTop: '-7px' }}
								/>
							</div>
							<div className="col-md-6">
								<label htmlFor="inputSDT" className="form-label">
									Số điện thoại
								</label>
								<input
									type="text"
									className="form-control"
									id="inputSDT"
									placeholder="Nhập số điện thoại"
									style={{ marginTop: '-7px' }}
								/>
							</div>
							<div className="form-check" style={{ paddingLeft: '2.25rem' }}>
								<div>
									<input
										className="form-check-input"
										type="radio"
										name="exampleRadios"
										id="exampleRadios1"
										value="option1"
										checked
									/>
								</div>
								<label className="form-check-label" htmlFor="exampleRadios1">
									Nam
								</label>
							</div>
							<div className="form-check">
								<input
									className="form-check-input"
									type="radio"
									name="exampleRadios"
									id="exampleRadios2"
									value="option2"
								/>
								<label className="form-check-label" htmlFor="exampleRadios2">
									Nữ
								</label>
							</div>

							<div className="col-12">
								<button
									type="submit"
									className="btn btn-primary"
									style={{ marginLeft: '400px', marginTop: '15px', backgroundColor: '#ff8100' }}
								>
									ĐĂNG KÝ
								</button>
							</div>
						</form>

						<div style={{ color: '#333', fontSize: '20px', fontWeight: 'lighter', paddingTop: '20px' }}>
							Trong 10 năm phát triển lĩnh vực di trú theo diện đầu tư EB-5 tại thị trường Việt Nam, NEW GOLDEN ROAD
							đã nhận được rất nhiều sự quan tâm và gợi ý từ các khách hàng về vấn đề phát triển dịch vụ bảo lãnh
							thân nhân đang sinh sống tại Việt Nam để qua đoàn tụ với gia đình tại Mỹ. Luôn ấp ủ kế hoạch này suốt
							chặng đường hoạt động cùng với việc bám sát phương châm kinh doanh của công ty chính là chúng tôi
							không chỉ hỗ trợ nhà đầu tư trong quá trình thực hiện hồ sơ thành công để thực hiện giấc mơ Mỹ mà
							chúng tôi còn luôn đồng hành cùng các nhà đầu tư để cả gia đình cùng an cư và ổn định cuộc sống mới
							tại Mỹ. Vì vậy, vào đầu tháng 10/2019, NEW GOLDEN ROAD đã mạnh dạn ra mắt dịch vụ Bảo Lãnh Nhân Thân
							(Family Base) cùng với sự động viên khích lệ từ rất nhiều khách hàng và đối tác nhằm thực hiện nguyện
							vọng đoàn tụ gia đình, xây dựng gia đình viên mãn, hạnh phúc và thịnh vượng của hầu hết nhà đầu tư
							Việt tại Mỹ.
						</div>
						<p style={{ textAlign: 'center' }}>
							<img src="/assets/images/baolanh/baolanh2.jpg" alt="uc" className="anhTH" width={'700px'} />
						</p>
						<div>
							<h2 className="mucTH">Các dịch vụ chính của NEW GOLDEN ROAD gồm có:</h2>
							<div style={{ color: '#333', fontSize: '20px', fontWeight: 'lighter' }}>
								<strong> 1. Đối với người có thẻ xanh:</strong>
								<ul>
									<li> ● Bảo lãnh vợ/ chồng (khoảng 01 – 02 năm)</li>
									<li>● Bảo lãnh con độc thân dưới 21 tuổi (khoảng 01 – 02 năm)</li>
									<li>● Bảo lãnh con độc thân trên 21 tuổi (khoảng 06 - 07 năm)</li>
								</ul>
								<strong> 2. Đối với người có quốc tịch:</strong>
								<ul>
									<li> ● Bảo lãnh vợ/chồng (khoảng 01 năm)</li>
									<li>● Bảo lãnh cha/ mẹ (khoảng 01 năm)</li>
									<li>● Bảo lãnh con độc thân dưới 21 tuổi (khoảng 01 năm)</li>
									<li>● Bảo lãnh con độc thân trên 21 tuổi (khoảng 06 – 07 năm)</li>
									<li>● Bảo lãnh con đã có gia đình (khoảng 10 – 11 năm)</li>
									<li>● Bảo lãnh anh chị em (khoảng 11 – 12 năm)</li>
								</ul>
							</div>

							<h3> Mọi chi tiết xin vui lòng liên hệ:</h3>
							<h5 style={{ color: '#ff944d' }}> DU HỌC TÂN CON ĐƯỜNG VÀNG – NEW GOLDEN ROAD</h5>
							<ol>
								<ul> &#127980; Địa chỉ: 219 Tân Quý, phường Tân Quý, quận Tân Phú, Tp Hồ Chí Minh</ul>

								<ul> &#128222; Hotline: 0909416959 – Ms. Linda</ul>

								<ul> &#128231; Email: duhoc@newgoldenroad.edu.vn</ul>

								<ul> &#127760; Website: https://newgoldenroad.com/</ul>

								<ul> &#127759; Facebook: https://www.facebook.com/newgoldenroad</ul>
							</ol>
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
							<input type="text" placeholder="Số điện thoại" name="phone" />
							<input type="text" placeholder="Lời nhắn" name="message" />
							<button type="submit" className="tdm-btn become-teacher__form-btn">
								ĐĂNG KÝ
							</button>
						</form>
						<div className="result text-center"></div>
					</div>
					<div className="course-details__listt">
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
				<div className="share-post">
					<span className="share-textt">Chia Sẻ</span>
					<ul className="flat-social">
						<li>
							<a
								xlms="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
								href="http://www.facebook.com/sharer.php?u=https://newgoldenroad.com/?p=42100"
								className="social-facebook"
								rel="external noreferrer"
								target="_blank"
							>
								<svg
									style={{ marginBottom: '5px', marginRight: '5px' }}
									xmlns="http://www.w3.org/2000/svg style={{marginBottom: '5px',marginRight: '5px'}}"
									width="16"
									height="16"
									fill="currentColor"
									className="bi bi-facebook"
									viewBox="0 0 16 16"
								>
									<path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
								</svg>
								{''}
								<span>Facebook</span>
							</a>
						</li>
						<li>
							<a
								href="https://twitter.com/intent/tweet?text=Tr%C6%B0%E1%BB%9Dng+Alberta+University+%E2%80%93+Du+h%E1%BB%8Dc+Canada+%E2%80%93+Du+h%E1%BB%8Dc+T%C3%A2n+Con+%C4%90%C6%B0%E1%BB%9Dng+V%C3%A0ng&url=https://newgoldenroad.com/?p=42100"
								className="social-twitter"
								rel="external noreferrer"
								target="_blank"
							>
								<svg
									style={{ marginBottom: '5px', marginRight: '5px' }}
									xmlns="http://www.w3.org/2000/svg style={{marginBottom: '5px',marginRight: '5px'}}"
									width="16"
									height="16"
									fill="currentColor"
									className="bi bi-twitter"
									viewBox="0 0 16 16"
								>
									<path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
								</svg>{' '}
								<span>Twitter</span>
							</a>
						</li>
						<li>
							<a
								href="https://plusone.google.com/_/+1/confirm?hl=en&url=https://newgoldenroad.com/?p=42100&name=Tr%C6%B0%E1%BB%9Dng+Alberta+University+%E2%80%93+Du+h%E1%BB%8Dc+Canada+%E2%80%93+Du+h%E1%BB%8Dc+T%C3%A2n+Con+%C4%90%C6%B0%E1%BB%9Dng+V%C3%A0ng"
								className="social-google-plus"
								rel="external noreferrer"
								target="_blank"
							>
								<svg
									style={{ marginBottom: '5px', marginRight: '5px' }}
									xmlns="http://www.w3.org/2000/svg style={{marginBottom: '5px',marginRight: '5px'}}"
									width="16"
									height="16"
									fill="currentColor"
									className="bi bi-google"
									viewBox="0 0 16 16"
								>
									<path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" />
								</svg>{' '}
								<span>Google +</span>
							</a>
						</li>

						<li>
							<a
								href="http://www.linkedin.com/shareArticle?mini=true&url=https://newgoldenroad.com/?p=42100&title=Tr%C6%B0%E1%BB%9Dng+Alberta+University+%E2%80%93+Du+h%E1%BB%8Dc+Canada+%E2%80%93+Du+h%E1%BB%8Dc+T%C3%A2n+Con+%C4%90%C6%B0%E1%BB%9Dng+V%C3%A0ng"
								className="social-linkedin"
								rel="external noreferrer"
								target="_blank"
							>
								<svg
									style={{ marginBottom: '5px', marginRight: '5px' }}
									xmlns="http://www.w3.org/2000/svg style={{marginBottom: '5px',marginRight: '5px'}}"
									width="16"
									height="16"
									fill="currentColor"
									className="bi bi-linkedin"
									viewBox="0 0 16 16"
								>
									<path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
								</svg>{' '}
								<span>LinkedIn</span>
							</a>
						</li>
						<li>
							<a
								href="http://pinterest.com/pin/create/button/?url=https://newgoldenroad.com/?p=42100&description=Tr%C6%B0%E1%BB%9Dng+Alberta+University+%E2%80%93+Du+h%E1%BB%8Dc+Canada+%E2%80%93+Du+h%E1%BB%8Dc+T%C3%A2n+Con+%C4%90%C6%B0%E1%BB%9Dng+V%C3%A0ng&media=https://newgoldenroad.com/wp-content/uploads/2021/06/du-hoc-tan-con-duong-vang-alberta-university-655x330.png"
								className="social-pinterest"
								rel="external noreferrer"
								target="_blank"
							>
								<svg
									style={{ marginBottom: '5px', marginRight: '5px' }}
									xmlns="http://www.w3.org/2000/svg style={{marginBottom: '5px',marginRight: '5px'}}"
									width="16"
									height="16"
									fill="currentColor"
									className="bi bi-pinterest"
									viewBox="0 0 16 16"
								>
									<path d="M8 0a8 8 0 0 0-2.915 15.452c-.07-.633-.134-1.606.027-2.297.146-.625.938-3.977.938-3.977s-.239-.479-.239-1.187c0-1.113.645-1.943 1.448-1.943.682 0 1.012.512 1.012 1.127 0 .686-.437 1.712-.663 2.663-.188.796.4 1.446 1.185 1.446 1.422 0 2.515-1.5 2.515-3.664 0-1.915-1.377-3.254-3.342-3.254-2.276 0-3.612 1.707-3.612 3.471 0 .688.265 1.425.595 1.826a.24.24 0 0 1 .056.23c-.061.252-.196.796-.222.907-.035.146-.116.177-.268.107-1-.465-1.624-1.926-1.624-3.1 0-2.523 1.834-4.84 5.286-4.84 2.775 0 4.932 1.977 4.932 4.62 0 2.757-1.739 4.976-4.151 4.976-.811 0-1.573-.421-1.834-.919l-.498 1.902c-.181.695-.669 1.566-.995 2.097A8 8 0 1 0 8 0z" />
								</svg>{' '}
								<span>Pinterest</span>
							</a>
						</li>
					</ul>
					<div className="clear" />
				</div>
			</div>
		</div>
	);
};
export default Baolanhnhanthan;
