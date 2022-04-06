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
							</div> */}
							{/* <button className='menu-toggler'>
								<span className='kipso-icon-menu'></span>
							</button> */}
						</div>
						<div className="main-navigation">
							<ul className=" navigation-box">
								<li className="current">
									<Link href="/">
										<a>Du Học</a>
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
											<a href="#">header</a>
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
									<a href="/courses">Dịch Vụ Khác</a>
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
			</header>
		);
	}
}

export default NavOne;
