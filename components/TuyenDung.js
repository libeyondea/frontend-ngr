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
						<span className="title-holder">DANH SÁCH TUYỂN DỤNG</span>
					</h3>

					<div className="card-TH">
						<div className="card-header">
							<p className="card-header-TD">Tuyển dụng vị trí Copywriter – Du học Tân Con Đường Vàng</p>
						</div>
						<div className="card-body">
							<p className="img-card-TH">
								<img src="/assets/images/TuyenDung/td1.jpg" alt="Tuyển dụng vị trí Copywriter" />
							</p>
							<p className="card-text-TH">
								Tuyển dụng vị trí sáng tạo nội dung cho các chiến dịch quảng cáo của Công ty Du học Tân Con Đường
								Vàng. Số lượng: 3. Nộp hồ sơ trước ngày 15/12/2021.
							</p>
							<Link href="/td-details">
								<a className="btn btn-primary">Đọc Thêm</a>
							</Link>
							<Link href="/news-details">
								<a className="blog-one__plus">
									<i className="kipso-icon-plus-symbol"></i>
								</a>
							</Link>
						</div>
					</div>

					<div className="card-TH">
						<div className="card-header">
							<p className="card-header-TD">Tuyển dụng vị trí Designer – Du học Tân Con Đường Vàng</p>
						</div>
						<div className="card-body">
							<p className="img-card-TH">
								<img src="/assets/images/TuyenDung/td2.jpg" alt="Tuyển dụng vị trí Designer" />
							</p>
							<p className="card-text-TH">
								Tuyển dụng vị trí Designer tại Công ty Du học Tân Con Đường Vàng. Số lượng: 1. Nộp hồ sơ trước
								ngày 01/06/2022.
							</p>
							<Link href="/td-details">
								<a className="btn btn-primary">Đọc Thêm</a>
							</Link>
						</div>
					</div>
					<div className="card-TH">
						<div className="card-header">
							<p className="card-header-TD">Tuyển dụng vị trí trợ lý tư vấn du học – Du học Tân Con Đường Vàng</p>
						</div>
						<div className="card-body">
							<p className="img-card-TH">
								<img src="/assets/images/TuyenDung/td3.jpg" alt="Tuyển dụng vị trí trợ lý tư vấn du học" />
							</p>
							<p className="card-text-TH">
								Tuyển dụng vị trí trợ lý tư vấn du học tại Công ty Du học Tân Con Đường Vàng. Số lượng: 2. Nộp hồ
								sơ trước ngày 15/05/2022.
							</p>
							<Link href="/td-details">
								<a className="btn btn-primary">Đọc Thêm</a>
							</Link>
						</div>
					</div>
					<div className="card-TH">
						<div className="card-header">
							<p className="card-header-TD">Vị trí biên dịch – Du học Tân Con Đường Vàng</p>
						</div>
						<div className="card-body">
							<p className="img-card-TH">
								<img src="/assets/images/TuyenDung/td4.jpg" alt="Vị trí biên dịch" />
							</p>

							<p className="card-text-TH">
								Tuyển dụng vị trí nhân viên hành chính văn phòng - biên dịch tại Công ty Du học Du học Tân Con
								Đường Vàng. Nộp hồ sơ trước ngày 10/05/2022.
							</p>
							<Link href="/td-details">
								<a className="btn btn-primary">Đọc Thêm</a>
							</Link>
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
		</section>
	);
};

export default TuyenDung;
