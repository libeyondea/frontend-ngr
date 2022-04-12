import React, { Component } from 'react';
import Link from 'next/link';
import Image from './Image';

class NavOne extends Component {
	constructor() {
		super();
		this.state = {
			sticky: false
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

	openForm() {
		document.getElementById('myForm').style.display = 'block';
	}

	closeForm() {
		document.getElementById('myForm').style.display = 'none';
	}

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
									<Image
										src="/assets/images/logo_ngr.png"
										className="main-logo"
										width="180"
										height="70"
										alt="Awesome Image"
									/>
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
							</div>
							 <button className='menu-toggler'>
								<span className='kipso-icon-menu'></span>
							</button>*/}
						</div>
						<div className="main-navigation">
							<ul className=" navigation-box">
								<li className="current">
									<Link href="/">
										<a>Du Học</a>
									</Link>
									<ul className="sub-menu">
										<li>
											<a href="#">Du Học Canada</a>
											<ul className="sub-menu">
												<li>
													<Link href="/">
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
													<Link href="/index-4">
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
												<a>Home 01</a>
											</Link>
										</li>
										<li>
											<Link href="/index-2">
												<a>Home 02</a>
											</Link>
										</li>
										<li>
											<Link href="/index-3">
												<a>Home 03</a>
											</Link>
										</li>
										<li>
											<a href="#">Header</a>
											<ul className="sub-menu">
												<li>
													<Link href="/">
														<a>Header 01</a>
													</Link>
												</li>
												<li>
													<Link href="/index-2">
														<a>Header 02</a>
													</Link>
												</li>
												<li>
													<Link href="/index-3">
														<a>Header 03</a>
													</Link>
												</li>
											</ul>
										</li>
									</ul>
								</li>
								<li>
									<a href="#">Học Bổng Du Học</a>
									<ul className="sub-menu">
										<li>
											<Link href="/about">
												<a>About Page</a>
											</Link>
										</li>
										<li>
											<Link href="/gallery">
												<a>Gallery</a>
											</Link>
										</li>
										<li>
											<Link href="/pricing">
												<a>Pricing Plans</a>
											</Link>
										</li>
										<li>
											<Link href="/faq">
												<a>FAQ'S</a>
											</Link>
										</li>
									</ul>
								</li>
								<li>
									<Link href="/courses">Dịch Vụ Khác</Link>
									<ul className="sub-menu">
										<li>
											<Link href="/courses">
												<a>Courses</a>
											</Link>
										</li>
										<li>
											<Link href="/course-details">
												<a>Courses Details</a>
											</Link>
										</li>
									</ul>
								</li>
								<li>
									<Link href="/teachers">
										<a>Chương Trình Đào Tạo</a>
									</Link>
									<ul className="sub-menu">
										<li>
											<Link href="/teachers">
												<a>Teachers</a>
											</Link>
										</li>
										<li>
											<Link href="/teacher-details">
												<a>Teachers Details</a>
											</Link>
										</li>
										<li>
											<Link href="/become-teacher">
												<a>Become Teacher</a>
											</Link>
										</li>
									</ul>
								</li>
								<li>
									<Link href="/news">
										<a>Thư Viện</a>
									</Link>
									<ul className="sub-menu">
										<li>
											<Link href="/news">
												<a>News Page</a>
											</Link>
										</li>
										<li>
											<Link href="/news-details">
												<a>News Details</a>
											</Link>
										</li>
									</ul>
								</li>
								<li>
									<Link href="/news">
										<a>Tin Tức</a>
									</Link>
									<ul className="sub-menu">
										<li>
											<Link href="/news">
												<a>News Page</a>
											</Link>
										</li>
										<li>
											<Link href="/news-details">
												<a>News Details</a>
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
				{/************Chat Button************* href="https://chat.zalo.me/?phone=SĐT_Của_Bạn"*/}
				<button id="linkzalo" target="_blank" rel="noopener noreferrer">
					<div id="fcta-zalo-tracking" className="fcta-zalo-mess">
						<span id="fcta-zalo-tracking">Chat hỗ trợ</span>
					</div>
					<div className="fcta-zalo-vi-tri-nut">
						<div id="fcta-zalo-tracking" className="fcta-zalo-nen-nut">
							<div id="fcta-zalo-tracking" className="fcta-zalo-ben-trong-nut">
								{' '}
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 460.1 436.6">
									<path
										fill="currentColor"
										className="st0"
										d="M82.6 380.9c-1.8-.8-3.1-1.7-1-3.5 1.3-1 2.7-1.9 4.1-2.8 13.1-8.5 25.4-17.8 33.5-31.5 6.8-11.4 5.7-18.1-2.8-26.5C69 269.2 48.2 212.5 58.6 145.5 64.5 107.7 81.8 75 107 46.6c15.2-17.2 33.3-31.1 53.1-42.7 1.2-.7 2.9-.9 3.1-2.7-.4-1-1.1-.7-1.7-.7-33.7 0-67.4-.7-101 .2C28.3 1.7.5 26.6.6 62.3c.2 104.3 0 208.6 0 313 0 32.4 24.7 59.5 57 60.7 27.3 1.1 54.6.2 82 .1 2 .1 4 .2 6 .2H290c36 0 72 .2 108 0 33.4 0 60.5-27 60.5-60.3v-.6-58.5c0-1.4.5-2.9-.4-4.4-1.8.1-2.5 1.6-3.5 2.6-19.4 19.5-42.3 35.2-67.4 46.3-61.5 27.1-124.1 29-187.6 7.2-5.5-2-11.5-2.2-17.2-.8-8.4 2.1-16.7 4.6-25 7.1-24.4 7.6-49.3 11-74.8 6zm72.5-168.5c1.7-2.2 2.6-3.5 3.6-4.8 13.1-16.6 26.2-33.2 39.3-49.9 3.8-4.8 7.6-9.7 10-15.5 2.8-6.6-.2-12.8-7-15.2-3-.9-6.2-1.3-9.4-1.1-17.8-.1-35.7-.1-53.5 0-2.5 0-5 .3-7.4.9-5.6 1.4-9 7.1-7.6 12.8 1 3.8 4 6.8 7.8 7.7 2.4.6 4.9.9 7.4.8 10.8.1 21.7 0 32.5.1 1.2 0 2.7-.8 3.6 1-.9 1.2-1.8 2.4-2.7 3.5-15.5 19.6-30.9 39.3-46.4 58.9-3.8 4.9-5.8 10.3-3 16.3s8.5 7.1 14.3 7.5c4.6.3 9.3.1 14 .1 16.2 0 32.3.1 48.5-.1 8.6-.1 13.2-5.3 12.3-13.3-.7-6.3-5-9.6-13-9.7-14.1-.1-28.2 0-43.3 0zm116-52.6c-12.5-10.9-26.3-11.6-39.8-3.6-16.4 9.6-22.4 25.3-20.4 43.5 1.9 17 9.3 30.9 27.1 36.6 11.1 3.6 21.4 2.3 30.5-5.1 2.4-1.9 3.1-1.5 4.8.6 3.3 4.2 9 5.8 14 3.9 5-1.5 8.3-6.1 8.3-11.3.1-20 .2-40 0-60-.1-8-7.6-13.1-15.4-11.5-4.3.9-6.7 3.8-9.1 6.9zm69.3 37.1c-.4 25 20.3 43.9 46.3 41.3 23.9-2.4 39.4-20.3 38.6-45.6-.8-25-19.4-42.1-44.9-41.3-23.9.7-40.8 19.9-40 45.6zm-8.8-19.9c0-15.7.1-31.3 0-47 0-8-5.1-13-12.7-12.9-7.4.1-12.3 5.1-12.4 12.8-.1 4.7 0 9.3 0 14v79.5c0 6.2 3.8 11.6 8.8 12.9 6.9 1.9 14-2.2 15.8-9.1.3-1.2.5-2.4.4-3.7.2-15.5.1-31 .1-46.5z"
									></path>
								</svg>
							</div>
							<div id="fcta-zalo-tracking" className="fcta-zalo-text">
								Chat ngay
							</div>
						</div>
					</div>
				</button>
				<div className="chat-popup" id="myForm">
					<form action="/action_page.php" className="form-container">
						{/*<button type="button" className="btn cancel" onClick={(event) => this.closeForm(event)}>
							Close
						</button>*/}
					</form>
				</div>
			</header>
		);
	}
}

export default NavOne;
