import React, { Component } from 'react';
import Link from 'next/link';
import Image from './Image';

class NavOne extends Component {
	constructor() {
		super();
		this.state = {
			sticky: false,
			showBtn: false
		};
	}
	componentDidMount() {
		window.addEventListener('scroll', this.handleScroll);

		//Mobile Menu
		this.mobileMenu();

		//Search Toggle
		this.serachButton();
	}

	componentWillUnmount() {
		window.removeEventListener('scroll', this.handleScroll);
	}

	handleScroll = () => {
		if (window.scrollY > 70) {
			this.setState({
				sticky: true
			});
		} else if (window.scrollY < 70) {
			this.setState({
				sticky: false
			});
		}
	};

	mobileMenu = () => {
		//Mobile Menu Toggle
		let mainNavToggler = document.querySelector('.menu-toggler');
		let mainNav = document.querySelector('.main-navigation');

		mainNavToggler.addEventListener('click', function () {
			mainNav.style.display = mainNav.style.display != 'block' ? 'block' : 'none';
		});
	};

	serachButton = () => {
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

	render() {
		return (
			<header className="site-header site-header__header-one ">
				<nav
					className={`navbar navbar-expand-lg navbar-light header-navigation stricky ${
						this.state.sticky ? 'stricked-menu stricky-fixed' : ''
					}`}
				>
					<div className="container clearfix">
						<div className="logo-box clearfix">
							<Link href="/">
								<a className="navbar-brand">
									<div className="fixstyle">
										<Image
											src="/assets/images/logongrr.png"
											className="main-logo"
											width="100"
											height="84"
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
											<a href="#">Du Học Canada</a>
											<ul className="sub-menu">
												<li>
													<Link href="/DuHocCanada">
														<a>
															Các Trường Đại Học Và
															<br /> Cao Đẳng Canada
														</a>
													</Link>
												</li>
												<li>
													<Link href="/index-2">
														<a>Trung Học Canada</a>
													</Link>
												</li>
												<li>
													<Link href="/index-3">
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
											<Link href="/">
												<a>Định Cư Mỹ</a>
											</Link>
										</li>
										<li>
											<Link href="/index-2">
												<a>Định Cư Úc</a>
											</Link>
										</li>
										<li>
											<Link href="/index-3">
												<a>Định cư Canada</a>
											</Link>
										</li>
									</ul>
								</li>
								<li>
									<a href="#">Học Bổng</a>
									<ul className="sub-menu">
										<li>
											<Link href="/about">
												<a>Học Bổng Canada</a>
											</Link>
										</li>
										<li>
											<Link href="/gallery">
												<a>Học Bổng Anh</a>
											</Link>
										</li>
										<li>
											<Link href="/pricing">
												<a>Học Bổng mỹ</a>
											</Link>
										</li>
										<li>
											<Link href="/faq">
												<a>Học Bổng Úc</a>
											</Link>
										</li>
										<li>
											<Link href="/faq">
												<a>Học Bổng New ZeaLand</a>
											</Link>
										</li>
										<li>
											<Link href="/faq">
												<a>Học Bổng Singapore</a>
											</Link>
										</li>
										<li>
											<Link href="/faq">
												<a>Học Bổng Phần Lan</a>
											</Link>
										</li>
										<li>
											<Link href="/faq">
												<a>Học Bổng Hà Lan</a>
											</Link>
										</li>
										<li>
											<Link href="/faq">
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
											<Link href="/courses">
												<a>Đối Tác</a>
											</Link>
										</li>
										<li>
											<Link href="/course-details">
												<a>Khách Hàng</a>
											</Link>
										</li>
										<li>
											<Link href="/course-details">
												<a>Tuyển Dụng</a>
											</Link>
										</li>
										<li>
											<Link href="/course-details">
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
								onMouseEnter={() =>
									this.setState({
										showBtn: true
									})
								}
								onMouseLeave={() =>
									this.setState({
										showBtn: false
									})
								}
							>
								<span className="title">Đăng ký</span>
								<span className="circle">
									{this.state.showBtn ? (
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
	}
}

export default NavOne;
