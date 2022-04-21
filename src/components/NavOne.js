import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from './Image';
import useSWR from 'swr';

const NavOne = () => {
	const [sticky, setsticky] = useState(false);
	const [showBtn, setshowBtn] = useState(false);

	const { data: listCategory } =  (`/categories`, {
		revalidateOnFocus: false
	});

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
		//Mobile Menu
		mobileMenu();
		//Search Toggle
		serachButton();
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	const handleScroll = () => {
		if (window.scrollY > 70) {
			setsticky(true);
		} else if (window.scrollY < 70) {
			setsticky(false);
		}
	};

	const mobileMenu = () => {
		//Mobile Menu Toggle
		let mainNavToggler = document.querySelector('.menu-toggler');
		let mainNav = document.querySelector('.main-navigation');

		mainNavToggler.addEventListener('click', function () {
			mainNav.style.display = mainNav.style.display != 'block' ? 'block' : 'none';
		});
	};

	const serachButton = () => {
		let searchToggle = document.querySelector('.search-toggle');
		let searchPopup = document.querySelector('.search-popup');
		let searchClose = document.querySelector('.cancel');
		let searchOverlay = document.querySelector('.search-overlay');

		searchToggle.addEventListener('click', function () {
			searchPopup.classList.add('active');
		});

		searchClose.addEventListener('click', function () {
			searchPopup.classList.remove('active');
		});

		searchOverlay.addEventListener('click', function () {
			searchPopup.classList.remove('active');
		});
	};

	return (
		<header className="site-header site-header__header-one ">
			<nav
				className={`navbar navbar-expand-lg navbar-light header-navigation stricky ${
					sticky ? 'stricked-menu stricky-fixed' : ''
				}`}
			>
				<div className="container clearfix">
					<div className="logo-box clearfix">
						<Link href="/">
							<a className="navbar-brand">
								<div className="fixstyle">
									<Image
										src="/assets/images/logongrnew.png"
										className="main-logo"
										width="165"
										height="100"
										alt="Awesome Image"
									/>
								</div>
							</a>
						</Link>
						{/* <div className='header__social'>
								<a href='#'>
									<i className='fab fa-twitter'></i>
								</a>
								<a href='#'>
									<i className='fab fa-facebook-square'></i>
								</a>
								<a href='#'>
									<i className='fab fa-pinterest-p'></i>
								</a>
								<a href='#'>
									<i className='fab fa-instagram'></i>
								</a>
							</div> */}
						{/* <button className='menu-toggler'>
								<span className='kipso-icon-menu'></span>
							</button> */}
					</div>

					<div className="main-navigation">
						<ul className=" navigation-box">
							<li className="current">
								<Link href="/">
									<a>Trang chủ </a>
								</Link>
							</li>
							<li className="current">
								<Link href="/">
									<a>Du Học</a>
								</Link>
								<ul className="sub-menu">
									<li>
										<Link href="/DuHocCanada">Du Học Canada</Link>
										<ul className="sub-menu">
											<li>
												<Link href="/CacTruongDHCD">
													<a>
														Các Trường Đại Học Và
														<br /> Cao Đẳng Canada
													</a>
												</Link>
											</li>
											<li>
												<Link href="/trunghoc">
													<a>Trung Học Canada</a>
												</Link>
											</li>
											<li>
												<Link href="/VisaCa">
													<a>VISA Canada</a>
												</Link>
											</li>
											<li>
												<Link href="/ThongTinCanada">
													<a>Thông Tin Nước Canada</a>
												</Link>
											</li>
										</ul>
									</li>
									<li>
										<a href="#">Du Học Anh</a>
										<ul className="sub-menu">
											<li>
												<Link href="/">
													<a>
														Hệ Thống Các Trường
														<br /> Anh Quốc
													</a>
												</Link>
											</li>
											<li>
												<Link href="/index-3">
													<a>VISA Canada</a>
												</Link>
											</li>
											<li>
												<Link href="/index-4">
													<a>Thông Tin Nước Anh</a>
												</Link>
											</li>
										</ul>
									</li>
									<li>
										<a href="#">Du Học Mỹ</a>
										<ul className="sub-menu">
											<li>
												<Link href="/">
													<a>
														Các Trường Đại Học Và
														<br /> Cao Đẳng Mỹ
													</a>
												</Link>
											</li>
											<li>
												<Link href="/index-2">
													<a>Trung Học Mỹ</a>
												</Link>
											</li>
											<li>
												<Link href="/index-3">
													<a>VISA Mỹ</a>
												</Link>
											</li>
											<li>
												<Link href="/index-4">
													<a>Thông Tin Nước Mỹ</a>
												</Link>
											</li>
										</ul>
									</li>
									<li>
										<a href="#">Du Học Úc</a>
										<ul className="sub-menu">
											<li>
												<Link href="/">
													<a>
														Các Trường Đại Học Và
														<br /> Cao Đẳng Úc
													</a>
												</Link>
											</li>
											<li>
												<Link href="/index-2">
													<a>Trung Học Úc</a>
												</Link>
											</li>
											<li>
												<Link href="/index-3">
													<a>VISA Úc</a>
												</Link>
											</li>
											<li>
												<Link href="/index-4">
													<a>Thông Tin Nước Úc</a>
												</Link>
											</li>
										</ul>
									</li>
									<li>
										<a href="#">Du Học New Zeand</a>
										<ul className="sub-menu">
											<li>
												<Link href="/">
													<a>
														Các Trường Đại Học Và
														<br /> Cao Đẳng New Zeand
													</a>
												</Link>
											</li>
											<li>
												<Link href="/index-2">
													<a>Trung Học New Zeand</a>
												</Link>
											</li>
											<li>
												<Link href="/index-3">
													<a>VISA New Zeand</a>
												</Link>
											</li>
											<li>
												<Link href="/index-4">
													<a>
														Thông Tin Nước
														<br /> New Zeand
													</a>
												</Link>
											</li>
										</ul>
									</li>
									<li>
										<a href="#">Du Học Singapore</a>
										<ul className="sub-menu">
											<li>
												<Link href="/">
													<a>
														Hệ Thống Các Trường
														<br />
														Singapore
													</a>
												</Link>
											</li>
											<li>
												<Link href="/index-4">
													<a>Thông Tin Nước Singapore</a>
												</Link>
											</li>
										</ul>
									</li>
									<li>
										<a href="#">Du Học Phần Lan</a>
										<ul className="sub-menu">
											<li>
												<Link href="/">
													<a>
														Các Trường Đại Học Và
														<br /> Cao Đẳng Phần Lan
													</a>
												</Link>
											</li>
											<li>
												<Link href="/index-3">
													<a>VISA Phần Lan</a>
												</Link>
											</li>
											<li>
												<Link href="/index-4">
													<a>Thông Tin Nước Phần Lan</a>
												</Link>
											</li>
										</ul>
									</li>
									<li>
										<a href="#">Du Học Hà Lan</a>
										<ul className="sub-menu">
											<li>
												<Link href="/">
													<a>Hệ Thống Các Trường Hà Lan</a>
												</Link>
											</li>
											<li>
												<Link href="/index-3">
													<a>VISA Hà Lan</a>
												</Link>
											</li>
											<li>
												<Link href="/index-4">
													<a>Thông Tin Nước Hà Lan</a>
												</Link>
											</li>
										</ul>
									</li>
									<li>
										<a href="#">Du Học Thụy Sỹ</a>
										<ul className="sub-menu">
											<li>
												<Link href="/">
													<a>Hệ Thống Các Trường Thụy Sỹ</a>
												</Link>
											</li>
											<li>
												<Link href="/index-3">
													<a>VISA Thụy Sỹ</a>
												</Link>
											</li>
											<li>
												<Link href="/index-4">
													<a>Thông Tin Nước Thụy Sỹ</a>
												</Link>
											</li>
										</ul>
									</li>
									<li>
										<a href="#">Du Học Malaysia</a>
										<ul className="sub-menu">
											<li>
												<Link href="/">
													<a>Hệ Thống Các Trường Malaysia</a>
												</Link>
											</li>
											<li>
												<Link href="/index-4">
													<a>Thông Tin Nước Malaysia</a>
												</Link>
											</li>
										</ul>
									</li>
									<li>
										<a href="#">Du Học Thái Lan</a>
										<ul className="sub-menu">
											<li>
												<Link href="/">
													<a>Hệ Thống Các Trường Thái Lan</a>
												</Link>
											</li>
											<li>
												<Link href="/index-4">
													<a>Thông Tin Nước Thái Lan</a>
												</Link>
											</li>
										</ul>
									</li>
									<li>
										<a href="#">Du Học Đài Loan</a>
										<ul className="sub-menu">
											<li>
												<Link href="/">
													<a>Hệ Thống Các Trường Đài Loan</a>
												</Link>
											</li>
											<li>
												<Link href="/index-3">
													<a>VISA Đài Loan</a>
												</Link>
											</li>
											<li>
												<Link href="/index-4">
													<a>Thông Tin Nước Đài Loan</a>
												</Link>
											</li>
										</ul>
									</li>
									<li>
										<a href="#">Du Học Philippines</a>
										<ul className="sub-menu">
											<li>
												<Link href="/">
													<a>Hệ Thống Các Trường Philippines</a>
												</Link>
											</li>
											<li>
												<Link href="/index-4">
													<a>Thông Tin Nước Philippines</a>
												</Link>
											</li>
										</ul>
									</li>
								</ul>
							</li>
							<li className="current">
								<Link href="/">
									<a>Định Cư</a>
								</Link>
								<ul className="sub-menu">
									<li>
										<Link href="/dinhcumy">
											<a>Định Cư Mỹ</a>
										</Link>
									</li>
									<li>
										<Link href="/dinhcuuc">
											<a>Định Cư Úc</a>
										</Link>
									</li>
									<li>
										<Link href="/dinhcucanada">
											<a>Định cư Canada</a>
										</Link>
									</li>
								</ul>
							</li>
							<li>
								<a href="#">Học Bổng</a>
								<ul className="sub-menu">
									<li>
										<Link href="/hocbong/hocbongcanada">
											<a>Học Bổng Canada</a>
										</Link>
									</li>
									<li>
										<Link href="/HocBongAnh">
											<a>Học Bổng Anh</a>
										</Link>
									</li>
									<li>
										<Link href="/HocBongMy">
											<a>Học Bổng mỹ</a>
										</Link>
									</li>
									<li>
										<Link href="/HocBongUc">
											<a>Học Bổng Úc</a>
										</Link>
									</li>
									<li>
										<Link href="/HocBongNewZeaLand">
											<a>Học Bổng New ZeaLand</a>
										</Link>
									</li>
									<li>
										<Link href="/HocBongSingapore">
											<a>Học Bổng Singapore</a>
										</Link>
									</li>
									<li>
										<Link href="/HocBongPhanLan">
											<a>Học Bổng Phần Lan</a>
										</Link>
									</li>
									<li>
										<Link href="/HocBongHaLan">
											<a>Học Bổng Hà Lan</a>
										</Link>
									</li>
									<li>
										<Link href="/HocBongThuySi">
											<a>Học Bổng Thụy sĩ</a>
										</Link>
									</li>
								</ul>
							</li>
							<li>
								<Link href="/courses">Dịch Vụ </Link>
								<ul className="sub-menu">
									<li>
										<Link href="/khachhang">
											<a>Khách Hàng</a>
										</Link>
									</li>
									<li>
										<Link href="/doitac">
											<a>Đối Tác</a>
										</Link>
										<ul className="sub-menu">
											<li>
												<Link href="/doitac">
													<a>Đối Tác Nước Mỹ</a>
												</Link>
											</li>
											<li>
												<Link href="/doitac">
													<a>Đối Tác Nước Canada</a>
												</Link>
											</li>
											<li>
												<Link href="/doitac">
													<a>Đối Tác Nước Singapore</a>
												</Link>
											</li>
											<li>
												<Link href="/doitac">
													<a>Đối Tác Nước Singapore</a>
												</Link>
											</li>
											<li>
												<Link href="/doitac">
													<a>Đối Tác Nước Singapore</a>
												</Link>
											</li>
										</ul>
									</li>
									<li>
										<Link href="/tuyendung">
											<a>Tuyển Dụng</a>
										</Link>
									</li>
									<li>
										<Link href="/news">
											<a>Tin Tức</a>
										</Link>
									</li>
								</ul>
							</li>
							<li>
								<Link href="/Đào Tạo">
									<a>Đào Tạo</a>
								</Link>
								<ul className="sub-menu">
									<li>
										<Link href="/teacher-details">
											<a>Luyện Thi Tiếng Anh</a>
										</Link>
									</li>
									<li>
										<Link href="/become-teacher">
											<a>Luyện IELTS Du Học</a>
										</Link>
									</li>
									<li>
										<Link href="">
											<a>Luyện Anh Văn Phỏng Vấn Xin Visa Mỹ</a>
										</Link>
									</li>
									<li>
										<Link href="">
											<a>Dạy Anh Văn Du Lịch</a>
										</Link>
									</li>
									<li>
										<Link href="">
											<a>Dạy Anh Văn Cho Người Sắp Định Cư</a>
										</Link>
									</li>
									<li>
										<Link href="">
											<a>Huấn Luyện Sinh Viên Thực Tập</a>
										</Link>
									</li>
									<li>
										<Link href="">
											<a>Huấn Luyện Nhân Sự</a>
										</Link>
									</li>
									<li>
										<Link href="/Luyện Sinh Viên Thực Tập">
											<a>Luyện Sinh Viên Thực Tập</a>
										</Link>
									</li>
									<li>
										<Link href="/Huấn Luyện Nhân Sự">
											<a>Huấn Luyện Nhân Sự</a>
										</Link>
									</li>
								</ul>
							</li>
							<li>
								<Link href="/contact">
									<a>Liên Hệ</a>
								</Link>
							</li>
						</ul>
					</div>
					<div className="right-side-box clearfix">
						<a className="header__search-btn search-popup__toggler search-toggle float-left" href="#">
							<i className="kipso-icon-magnifying-glass"></i>
						</a>
						<button className="menu-toggler m-0 ml-2">
							<span className="kipso-icon-menu"></span>
						</button>
					</div>
					<div id="wrap">
						<a
							href="#back-top"
							className="btn-slide"
							onMouseEnter={() => setshowBtn(true)}
							onMouseLeave={() => setshowBtn(false)}
						>
							<span className="title">Đăng ký</span>
							<span className="circle">
								{showBtn ? (
									<>
										<i className="fa fa-arrow-down"></i>
									</>
								) : (
									<>
										<i className="fa fa-arrow-right"></i>
									</>
								)}
							</span>
							<span className="title-hover">Chuyển đi.....</span>
						</a>
					</div>
				</div>
			</nav>
			<div className="site-header__decor">
				<div className="site-header__decor-row">
					<div className="site-header__decor-single">
						<div className="site-header__decor-inner-1"></div>
					</div>
					<div className="site-header__decor-single">
						<div className="site-header__decor-inner-2"></div>
					</div>
					<div className="site-header__decor-single">
						<div className="site-header__decor-inner-3"></div>
					</div>
				</div>
			</div>
		</header>
	);
};

export default NavOne;
