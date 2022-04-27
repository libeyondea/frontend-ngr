import React, { useState } from 'react';
import Image from './Image';
const TrungHoc = () => {
	return (
		<div style={{ backgroundColor: '#7FCA6E' }}>
			<section className="inner-banner-THOC">
				<div className="container">
					<h2 className="inner-banner-THOC__title">Trung học Canada</h2>
				</div>
			</section>
			<div id="breaking-news" className="breaking-school">
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
			<div id="crumbs" className="crumbss-school" style={{ paddingTop: '10px', color: '#E2E9E1' }}>
				<span typeof="v:Breadcrumb">
					<a className="crumbs-home" href="https://newgoldenroad.com" style={{ color: '#E2E9E1' }}>
						Trang Chủ
					</a>
				</span>
				&nbsp;&nbsp;
				<span className="delimiter">/</span>
				&nbsp;&nbsp;
				<span typeof="v:Breadcrumb">
					<a href="https://newgoldenroad.com/chuyen-muc/hoat-dong-cong-ty/" style={{ color: '#E2E9E1' }}>
						Trung Học Canada
					</a>
				</span>
				&nbsp;&nbsp;
				<span className="delimiter">/</span>
				&nbsp;&nbsp;
				<span className="current">[Các Trường Trung Học Canada]</span>
			</div>
			<h3 className="title-comm">
				<span className="title-holder">MỘT SỐ TRƯỜNG TRUNG HỌC CANADA TIÊU BIỂU</span>
			</h3>
			<div className="row row-cols-1 row-cols-md-3 g-4" style={{ margin: '50px 150px' }}>
				<div className="col">
					<div className="card-school h-100">
					<a href='/trunghoc_details'><img
							src="assets/images/Trunghoc/trunghoc1.png"
							className="card-img-top"
							alt="Trường Bodwell High School"
						/></a>
						<div className="card-body">
							<a href="/trunghoc_details" className="card-link">
								<h5 className="card-title" style={{ color: 'black' }}>
									Trường trung học Bodwell High School{' '}
								</h5>
							</a>
						</div>
					</div>
				</div>
				<div className="col">
					<div className="card-school h-100">
					<a href='/trunghoc_details'>
						<img
							src="assets/images/Trunghoc/trunghoc2.jpg"
							className="card-img-top"
							alt="TRUNG HỌC TRỰC THUỘC ĐẠI HỌC VANCOUVER ISLAND"
						/></a>
						<div className="card-body">
							<a href="/trunghoc_details" className="card-link">
								<h5 className="card-title" style={{ color: 'black' }}>
									TRUNG HỌC TRỰC THUỘC ĐẠI HỌC VANCOUVER ISLAND
								</h5>
							</a>
						</div>
					</div>
				</div>
				<div className="col">
					<div className="card-school h-100">
					<a href='/trunghoc_details'>
						<img
							src="assets/images/Trunghoc/trunghoc3.png"
							className="card-img-top"
							alt="Trường Quận Rocky Mountain"
						/></a>
						<div className="card-body">
							<a href="/trunghoc_details" className="card-link">
								<h5 className="card-title" style={{ color: 'black' }}>
									Trường Quận Rocky Mountain
								</h5>
							</a>
						</div>
					</div>
				</div>
				<div className="col">
					<div className="card-school h-100">
					<a href='/trunghoc_details'>
						<img src="assets/images/Trunghoc/trunghoc4.png" className="card-img-top" alt="Trường Quận Toronto" />
					</a>
					<div className="card-body">
							<a href="/trunghoc_details" className="card-link">
								<h5 className="card-title" style={{ color: 'black' }}>
									Trường Quận Toronto
								</h5>
							</a>
						</div>
					</div>
				</div>
			</div>
			<div className="row row-cols-1 row-cols-md-3 g-4" style={{ margin: '50px 150px' }}>
				<div className="col">
					<div className="card-school h-100">
					<a href='/trunghoc_details'>
						<img src="assets/images/Trunghoc/trunghoc5.png" className="card-img-top" alt="Trường Quận Lambton Kent" />
						</a>
						<div className="card-body">
							<a href="#" className="card-link">
								<h5 className="card-title" style={{ color: 'black' }}>
									Trường Quận Lambton Kent
								</h5>
							</a>
						</div>
					</div>
				</div>
				<div className="col">
					<div className="card-school h-100">
					<a href='/trunghoc_details'>
						<img
							src="assets/images/Trunghoc/trunghoc6.png"
							className="card-img-top"
							alt="Trường Quận Avon Maitland"
						/></a>
						<div className="card-body">
							<a href="#" className="card-link">
								<h5 className="card-title" style={{ color: 'black' }}>
									Trường Quận Avon Maitland
								</h5>
							</a>
						</div>
					</div>
				</div>
				<div className="col">
					<div className="card-school h-100">
					<a href='/trunghoc_details'>
						<img
							src="assets/images/Trunghoc/trunghoc7.png"
							className="card-img-top"
							alt="Trường Quận Maple Ridge-Pitt Meadows"
						/></a>
						<div className="card-body">
							<a href="#" className="card-link">
								<h5 className="card-title" style={{ color: 'black' }}>
									Trường Quận Maple Ridge-Pitt Meadows
								</h5>
							</a>
						</div>
					</div>
				</div>
				<div className="col">
					<div className="card-school h-100">
					<a href='/trunghoc_details'>
						<img
							src="assets/images/Trunghoc/trunghoc8.png"
							className="card-img-top"
							alt=" Trường Greater Victoria High School"
						/></a>
						<div className="card-body">
							<a href="#" className="card-link">
								<h5 className="card-title" style={{ color: 'black' }}>
									{' '}
									Trường Greater Victoria High School
								</h5>
							</a>
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
export default TrungHoc;
