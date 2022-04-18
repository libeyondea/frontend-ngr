import React from 'react';
import Link from 'next/link';
const TuyenDung = () => {
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
							<Link className="crumbs-home" href="/">
								Trang Chủ
							</Link>
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
				
					<div className="card-TH">
						<div className="card-header">
							<p className="card-header-TH">
							Tuyển dụng vị trí Copywriter – Du học Tân Con Đường Vàng
							</p>
						</div>
						<div className="card-body">
							<p className="img-card-TH">
								<img
									src="/assets/images/TuyenDung/td1.jpg"
									alt="Trường Southern Alberta Institute of Technology (SAIT)"
								/>
							</p>
							<p className="card-text-TH">
							Tuyển dụng vị trí sáng tạo nội dung cho các chiến dịch quảng cáo của Công ty Du học Tân Con Đường Vàng. Số lượng: 3. Nộp hồ sơ trước ngày 15/12/2021.

							</p>
							<a href="#" className="btn btn-primary">
								Đọc Thêm
							</a>
								<Link href="/news-details">
									<a className="blog-one__plus">
										<i className="kipso-icon-plus-symbol"></i>
									</a>
								</Link>
							</div>						
						</div>
				
					<div className="card-TH">
						<div className="card-header">
							<p className="card-header-TH">
							Tuyển dụng vị trí Designer – Du học Tân Con Đường Vàng
							</p>
						</div>
						<div className="card-body">
							<p className="img-card-TH">
								<img src="/assets/images/TuyenDung/td2.jpg" alt="Trường Saskatchewan Polytechnic" />
							</p>
							<p className="card-text-TH">
							Tuyển dụng vị trí Designer tại Công ty Du học Tân Con Đường Vàng. Số lượng: 1. Nộp hồ sơ trước ngày 15/12/2021.
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
						<div className="card-body">
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
						<div className="card-body">
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
				</div>
						</div>

				
			
		</section>
	);
};

export default TuyenDung;
