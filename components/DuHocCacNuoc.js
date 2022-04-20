import React, { useState } from 'react';
import Image from './Image';
const CacTruongDuHocCacNuoc = () => {
	return (
		<div>
			<section className="inner-banner-THCA">
				<div className="container">
								
						<ul className="list-unstyled thm-breadcrumb">
							<li>
								<a href="/">Trang Chủ</a>
							</li>
							<li className="active">
								<a href="#">Các Trường Đại Học Và Cao Đẳng</a>
							</li>
						</ul>
						<h2 className="inner-banner-THCA__title">
							Các Trường Đại Học <br />
							Và Cao Đẳng Các Nước
						</h2>
					</div>
			
			</section>
			<div id="breaking-news" className="breaking-school" style={{color:'color: #E4EAE3'}}>
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
						<span className="current">
							[Các Trường Đại Học Và Cao Đẳng Canada] 
						</span>
				</div>
			<h3 className="title-comm">
				<span className="title-holder">MỘT SỐ TRƯỜNG ĐẠI HỌC &amp; CAO ĐẲNG TIÊU BIỂU</span>
			</h3>
			<div className="row">
				<div className="col-lg-8">
					<div className="card-TH">
						<div className="card-header">
							<p className="card-header-TH">
								Trường Southern Alberta Institute of Technology (SAIT) – Du học Canada – Du học Tân Con Đường Vàng
							</p>
						</div>
						<div className="card-body" style={{ lineHeight: '24px' }}>
							<p className="img-card-TH">
								<img
									src="/assets/images/TruongHoc/SAIT.png"
									alt="Trường Southern Alberta Institute of Technology (SAIT)"
								/>
							</p>
							<h5 className="card-title-TH">Trường Southern Alberta Institute of Technology (SAIT)</h5>
							<p className="card-text-TH">
								SASKATCHEWAN POLYTECHNIC Saskatchewan Polytechnic được thành lập vào năm 1941 tọa lạc tại
								Saskatchewan – nơi được ví von là “Land of Living Skies” của Canada. Cùng với 12 cơ sở nghiên cứu
								chuyên sâu, Saskatchewan Polytechnic còn là thành viên của Nhóm các trường bách khoa Canada
								(Polytechnics Canada) …
							</p>
							<a href="#" className="btn btn-primary">
								Đọc Thêm
							</a>
						</div>
					</div>
					<div className="card-TH">
						<div className="card-header">
							<p className="card-header-TH">
								Trường Saskatchewan Polytechnic – Du học Canada – Du học Tân Con Đường Vàng
							</p>
						</div>
						<div className="card-body" style={{ lineHeight: '24px' }}>
							<p className="img-card-TH">
								<img src="/assets/images/TruongHoc/SASK.png" alt="Trường Saskatchewan Polytechnic" />
							</p>
							<h5 className="card-title-TH">Trường Saskatchewan Polytechnic</h5>
							<p className="card-text-TH">
								SASKATCHEWAN POLYTECHNIC Saskatchewan Polytechnic được thành lập vào năm 1941 tọa lạc tại
								Saskatchewan – nơi được ví von là “Land of Living Skies” của Canada. Cùng với 12 cơ sở nghiên cứu
								chuyên sâu, Saskatchewan Polytechnic còn là thành viên của Nhóm các trường bách khoa Canada
								(Polytechnics Canada) …
							</p>
							<a href="#" className="btn btn-primary">
								Đọc Thêm
							</a>
						</div>
					</div>
					<div className="card-TH">
						<div className="card-header">
							<p className="card-header-TH">
								Trường British Columbia University – Du học Canada – Du học Tân Con Đường Vàng
							</p>
						</div>
						<div className="card-body" style={{ lineHeight: '24px' }}>
							<p className="img-card-TH">
								<img src="/assets/images/TruongHoc/BRITI.png" alt="Trường British Columbia University" />
							</p>
							<h5 className="card-title-TH">Trường British Columbia University</h5>
							<p className="card-text-TH">
								BRITISH COLUMBIA UNIVERSITY British Columbia – ngôi trường của những giải Nobel và những người nổi
								tiếng. Nếu Mỹ có Đại học Havard, Anh có Đại học Oxford thì Canada có Đại học British Columbia. Du
								học, ai cũng mong được sở hữu tấm bằng của những trường danh tiếng. …
							</p>
							<a href="#" className="btn btn-primary">
								Đọc Thêm
							</a>
						</div>
					</div>
					<div className="card-TH">
						<div className="card-header">
							<p className="card-header-TH">
								Trường Coast Mountain College – Du học Canada – Du học Tân Con Đường Vàng
							</p>
						</div>
						<div className="card-body" style={{ lineHeight: '24px' }}>
							<p className="img-card-TH">
								<img src="/assets/images/TruongHoc/COAST.png" alt="Trường Coast Mountain College" />
							</p>
							<h5 className="card-title-TH">Trường Coast Mountain College</h5>
							<p className="card-text-TH">
								COAST MOUNTAIN COLLEGE Coast Mountain College (CMTN) được thành lập dưới sự công nhận của Chính
								phủ. Toạ lạc tại khu vực cộng đồng dân cư thịnh vượng và đa dạng của Tây Bắc thuộc tỉnh British
								Columbia. Coast Mountain College cung cấp nhiều chương trình đào tạo chất lượng với …
							</p>
							<a href="#" className="btn btn-primary">
								Đọc Thêm
							</a>
						</div>
					</div>
					<div className="card-TH">
						<div className="card-header">
							<p className="card-header-TH">
							Trường Đại học Concordia – TOP TRƯỜNG ĐẠI HỌC TRẺ NỔI TIẾNG TẠI CANADA – Du học Canada – Du học Tân Con Đường Vàng
							</p>
						</div>
						<div className="card-body" style={{ lineHeight: '24px' }}>
							<p className="img-card-TH">
								<img
									src="/assets/images/TruongHoc/CONCOR.gif"
									alt="Trường Đại học Concordia"
								/>
							</p>
							<h5 className="card-title-TH">Trường Đại học Concordia</h5>
							<p className="card-text-TH">
							CONCORDIA UNIVERSITY CONCORDIA UNIVERSITY – TOP TRƯỜNG ĐẠI HỌC TRẺ NỔI TIẾNG TẠI CANADA Concordia University thành lập năm 1974, 
							toạ lạc tại thành phố Montreal. Montreal là thành phố có nhiều người dân nói tiếng Pháp, chỉ sau Paris. Đây còn lầ điểm quy tụ 
							của nhiều du học …
							</p>
							<a href="#" className="btn btn-primary">
								Đọc Thêm
							</a>
						</div>
					</div>
					<div className="card-TH">
						<div className="card-header">
							<p className="card-header-TH">
							Trường Alberta University – Du học Canada – Du học Tân Con Đường Vàng
							</p>
						</div>
						<div className="card-body" style={{ lineHeight: '24px' }}>
							<p className="img-card-TH">
								<img
									src="/assets/images/TruongHoc/ALBER.png"
									alt="Trường Alberta University"
								/>
							</p>
							<h5 className="card-title-TH">Trường Alberta University</h5>
							<p className="card-text-TH">
							ALBERTA UNIVERSITY Alberta University là một trường nghiên cứu công lập. 
							Toạ lạc tại thị trấn Edmonton, tỉnh Alberta, Canada. Nằm phía Tây Canada, giáp liền với British Columbia và Saskatchewan. 
							Đây được coi là một trong những vùng có mức sống cao nhất tại Canada. Alberta Univeristy là một …
							</p>
							<a href="#" className="btn btn-primary">
								Đọc Thêm
							</a>
						</div>
					</div>
					<div className="card-TH">
						<div className="card-header">
							<p className="card-header-TH">
							Trường Thompson Rivers Univerity – Du học Canada – Du học Tân Con Đường Vàng
							</p>
						</div>
						<div className="card-body" style={{ lineHeight: '24px' }}>
							<p className="img-card-TH">
								<img
									src="/assets/images/TruongHoc/THOMP.png"
									alt="Trường Thompson Rivers Univerity"
								/>
							</p>
							<h5 className="card-title-TH">Trường Thompson Rivers Univerity</h5>
							<p className="card-text-TH">
							THOMPSON RIVERS THOMPSON RIVERS UNIVERSITY – Ngôi trường chi phí thấp,chất lượng cao của Canada Tọa lạc tại thành phố Kamloops, 
							thuộc British Columbia của đất nước Canada xinh đẹp. Đại học công lập Thompson Rivers (TRU) là ngôi trường công lập có lịch sử 
							lâu đời ở Canada. Đại …
							</p>
							<a href="/DuHocCanada-details" className="btn btn-primary">
								Đọc Thêm
							</a>
						</div>
					</div>
					<div className="card-TH">
						<div className="card-header">
							<p className="card-header-TH">
							Trường Manitoba Institute of Trades & Technology – Du học Canada – Du học Tân Con Đường Vàng
							</p>
						</div>
						<div className="card-body" style={{ lineHeight: '24px' }}>
							<p className="img-card-TH">
								<img
									src="/assets/images/TruongHoc/MANI.png"
									alt="Trường Manitoba Institute of Trades & Technology"
								/>
							</p>
							<h5 className="card-title-TH">Trường Manitoba Institute of Trades & Technology</h5>
							<p className="card-text-TH">
							MANITOBA INSTITUTE OF TRADES & TECHNOLOGY  Manitoba Institute of Trades & Technology (MITT) toạ lạc tại Thành phố Winnipeg, 
							bang Manitoba (Canada). MITT là Học viện Kĩ thuật hàng đầu tại tỉnh bang Manitoba và được thành lập từ năm 1983. Trong suốt 
							30 năm qua, trường cung cấp chương …
							</p>
							<a href="/DuHocCanada-details" className="btn btn-primary">
								Đọc Thêm
							</a>
						</div>
					</div>
					<div className="card-TH">
						<div className="card-header">
							<p className="card-header-TH">
							Trường Dalhousie University – Du học Canada – Du học Tân Con Đường Vàng
							</p>
						</div>
						<div className="card-body" style={{ lineHeight: '24px' }}>
							<p className="img-card-TH">
								<img
									src="/assets/images/TruongHoc/DAL.png"
									alt="Trường Dalhousie University"
								/>
							</p>
							<h5 className="card-title-TH">Trường Dalhousie University</h5>
							<p className="card-text-TH">
							DALHOUSIE UNIVERSITY DALHOUSIE UNIVERSITY – TRƯỜNG ĐẠI HỌC VỚI HƠN 200 NĂM LỊCH SỬ Dalhousie University thành lập năm 1818. 
							Là trường đại học nghiên cứu hàng đầu thuộc khu vực bờ Đại Tây Dương Canada. Đây còn là ngôi nhà chung của 18.500 sinh viên đang theo học tại …
							</p>
							<a href="/DuHocCanada-details" className="btn btn-primary">
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
			</div>
			<div className="post-pagination">
				<a href="#">
					<i className="fa fa-angle-double-left" />
				</a>
				<a className="active" href="#">
					1
				</a>
				<a href="#">2</a>
				<a href="#">3</a>
				<a href="#">4</a>
				<a href="#">
					<i className="fa fa-angle-double-right" />
				</a>
			</div>
		</div>
	);
};
export default CacTruongDuHocCacNuoc;
