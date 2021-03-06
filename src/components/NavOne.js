import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from './Image';
import http from '../utils/http';

const NavOne = () => {
	const [sticky, setsticky] = useState(false);
	const [showBtn, setshowBtn] = useState(false);
	const [categories, setCategories] = useState([]);

	//fetch categories from api and set to state categories when component mount and unmount
	useEffect(() => {
		const fetchData = async () => {
			try {
				const { data } = await http.get({
					url: `/categories?sort_by=id&sort_direction=asc`
				});
				setCategories(data.data);
			} catch (err) {
				console.log(err);
			}
		};
		fetchData();
	}, []);

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

	// recursive categories
	const categoriesRecursive = (data = []) => {
		return (
			data.length &&
			data.map((item, index) => {
				return (
					<li key={index}>
						<Link href={`/category/${item.slug}`}>
							<a>{item.name}</a>
						</Link>
						{item.children.length ? <ul className="sub-menu">{categoriesRecursive(item.children)}</ul> : null}
					</li>
				);
			})
		);
	};

	return (
		<>
			<div className="header-bn-top" style={{ background: 'rgb(161 103 90)' }}>
				<div className="header-bn-normal">
					<a className="abc" href="/speaking-club" target="_blank">
						<img className="img1" src="/assets/images/A-HIEU-BANNER03.gif" alt="" />
					</a>
				</div>
				<style dangerouslySetInnerHTML={{ __html: '.header-mobile-textlinks{background:#f99817;color:#c20000}' }} />
			</div>

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
											src="/assets/images/NGRLOGO.png"
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
										<a>Trang ch??? </a>
									</Link>
								</li>
								{categories && categoriesRecursive(categories)}
								{/* <li className="current">
								<Link href="/">
									<a>Du H???c</a>
								</Link>
								<ul className="sub-menu">
									<li>
										<Link href="/DuHocCanada">Du H???c Canada</Link>
										<ul className="sub-menu">
											<li>
												<Link href="/CacTruongDHCD">
													<a>
														C??c Tr?????ng ?????i H???c V??
														<br /> Cao ?????ng Canada
													</a>
												</Link>
											</li>
											<li>
												<Link href="/trunghoc">
													<a>Trung H???c Canada</a>
												</Link>
											</li>
											<li>
												<Link href="/VisaCa">
													<a>VISA Canada</a>
												</Link>
											</li>
											<li>
												<Link href="/ThongTinCanada">
													<a>Th??ng Tin N?????c Canada</a>
												</Link>
											</li>
										</ul>
									</li>
									<li>
										<a href="#">Du H???c Anh</a>
										<ul className="sub-menu">
											<li>
												<Link href="/">
													<a>
														H??? Th???ng C??c Tr?????ng
														<br /> Anh Qu???c
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
													<a>Th??ng Tin N?????c Anh</a>
												</Link>
											</li>
										</ul>
									</li>
									<li>
										<a href="#">Du H???c M???</a>
										<ul className="sub-menu">
											<li>
												<Link href="/">
													<a>
														C??c Tr?????ng ?????i H???c V??
														<br /> Cao ?????ng M???
													</a>
												</Link>
											</li>
											<li>
												<Link href="/index-2">
													<a>Trung H???c M???</a>
												</Link>
											</li>
											<li>
												<Link href="/index-3">
													<a>VISA M???</a>
												</Link>
											</li>
											<li>
												<Link href="/index-4">
													<a>Th??ng Tin N?????c M???</a>
												</Link>
											</li>
										</ul>
									</li>
									<li>
										<a href="#">Du H???c ??c</a>
										<ul className="sub-menu">
											<li>
												<Link href="/">
													<a>
														C??c Tr?????ng ?????i H???c V??
														<br /> Cao ?????ng ??c
													</a>
												</Link>
											</li>
											<li>
												<Link href="/index-2">
													<a>Trung H???c ??c</a>
												</Link>
											</li>
											<li>
												<Link href="/index-3">
													<a>VISA ??c</a>
												</Link>
											</li>
											<li>
												<Link href="/index-4">
													<a>Th??ng Tin N?????c ??c</a>
												</Link>
											</li>
										</ul>
									</li>
									<li>
										<a href="#">Du H???c New Zeand</a>
										<ul className="sub-menu">
											<li>
												<Link href="/">
													<a>
														C??c Tr?????ng ?????i H???c V??
														<br /> Cao ?????ng New Zeand
													</a>
												</Link>
											</li>
											<li>
												<Link href="/index-2">
													<a>Trung H???c New Zeand</a>
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
														Th??ng Tin N?????c
														<br /> New Zeand
													</a>
												</Link>
											</li>
										</ul>
									</li>
									<li>
										<a href="#">Du H???c Singapore</a>
										<ul className="sub-menu">
											<li>
												<Link href="/">
													<a>
														H??? Th???ng C??c Tr?????ng
														<br />
														Singapore
													</a>
												</Link>
											</li>
											<li>
												<Link href="/index-4">
													<a>Th??ng Tin N?????c Singapore</a>
												</Link>
											</li>
										</ul>
									</li>
									<li>
										<a href="#">Du H???c Ph???n Lan</a>
										<ul className="sub-menu">
											<li>
												<Link href="/">
													<a>
														C??c Tr?????ng ?????i H???c V??
														<br /> Cao ?????ng Ph???n Lan
													</a>
												</Link>
											</li>
											<li>
												<Link href="/index-3">
													<a>VISA Ph???n Lan</a>
												</Link>
											</li>
											<li>
												<Link href="/index-4">
													<a>Th??ng Tin N?????c Ph???n Lan</a>
												</Link>
											</li>
										</ul>
									</li>
									<li>
										<a href="#">Du H???c H?? Lan</a>
										<ul className="sub-menu">
											<li>
												<Link href="/">
													<a>H??? Th???ng C??c Tr?????ng H?? Lan</a>
												</Link>
											</li>
											<li>
												<Link href="/index-3">
													<a>VISA H?? Lan</a>
												</Link>
											</li>
											<li>
												<Link href="/index-4">
													<a>Th??ng Tin N?????c H?? Lan</a>
												</Link>
											</li>
										</ul>
									</li>
									<li>
										<a href="#">Du H???c Th???y S???</a>
										<ul className="sub-menu">
											<li>
												<Link href="/">
													<a>H??? Th???ng C??c Tr?????ng Th???y S???</a>
												</Link>
											</li>
											<li>
												<Link href="/index-3">
													<a>VISA Th???y S???</a>
												</Link>
											</li>
											<li>
												<Link href="/index-4">
													<a>Th??ng Tin N?????c Th???y S???</a>
												</Link>
											</li>
										</ul>
									</li>
									<li>
										<a href="#">Du H???c Malaysia</a>
										<ul className="sub-menu">
											<li>
												<Link href="/">
													<a>H??? Th???ng C??c Tr?????ng Malaysia</a>
												</Link>
											</li>
											<li>
												<Link href="/index-4">
													<a>Th??ng Tin N?????c Malaysia</a>
												</Link>
											</li>
										</ul>
									</li>
									<li>
										<a href="#">Du H???c Th??i Lan</a>
										<ul className="sub-menu">
											<li>
												<Link href="/">
													<a>H??? Th???ng C??c Tr?????ng Th??i Lan</a>
												</Link>
											</li>
											<li>
												<Link href="/index-4">
													<a>Th??ng Tin N?????c Th??i Lan</a>
												</Link>
											</li>
										</ul>
									</li>
									<li>
										<a href="#">Du H???c ????i Loan</a>
										<ul className="sub-menu">
											<li>
												<Link href="/">
													<a>H??? Th???ng C??c Tr?????ng ????i Loan</a>
												</Link>
											</li>
											<li>
												<Link href="/index-3">
													<a>VISA ????i Loan</a>
												</Link>
											</li>
											<li>
												<Link href="/index-4">
													<a>Th??ng Tin N?????c ????i Loan</a>
												</Link>
											</li>
										</ul>
									</li>
									<li>
										<a href="#">Du H???c Philippines</a>
										<ul className="sub-menu">
											<li>
												<Link href="/">
													<a>H??? Th???ng C??c Tr?????ng Philippines</a>
												</Link>
											</li>
											<li>
												<Link href="/index-4">
													<a>Th??ng Tin N?????c Philippines</a>
												</Link>
											</li>
										</ul>
									</li>
								</ul>
							</li> */}
								{/* <li className="current">
								<Link href="/">
									<a>?????nh C??</a>
								</Link>
								<ul className="sub-menu">
									<li>
										<Link href="/#">
											<a>?????nh C?? M???</a>
										</Link>
										<ul className="sub-menu">
											<li>
												<Link href="/CTEB5">
													<a>Ch????ng Tr??nh EB-5</a>
												</Link>
											</li>
											<li>
												<Link href="/chuong-trinh-L1">
													<a>Ch????ng Tr??nh L-1</a>
												</Link>
											</li>
											<li>
												<Link href="/BLTNMy">
													<a>B???o L??nh Th??n Nh??n</a>
												</Link>
											</li>
											<li>
												<Link href="/dich-vu-an-cu">
													<a>D???ch V??? An c??</a>
												</Link>
											</li>
											<li>
												<Link href="/DAEB5">
													<a>D??? ??n EB-5</a>
												</Link>
											</li>
											<li>
												<Link href="/">
													<a>T??m Hi???u V??? N?????c M???</a>
												</Link>
											</li>
										</ul>
									</li>
									<li>
										<Link href="/#">
											<a>?????nh C?? ??c</a>
										</Link>
										<ul className="sub-menu">
											<li>
												<Link href="/">
													<a>Ch????ng Tr??nh 132A</a>
												</Link>
											</li>
											<li>
												<Link href="/">
													<a>Ch????ng Tr??nh 132B</a>
												</Link>
											</li>
											<li>
												<Link href="/">
													<a>Ch????ng Tr??nh 188A</a>
												</Link>
											</li>
											<li>
												<Link href="/">
													<a>Ch????ng Tr??nh 188B</a>
												</Link>
											</li>
											<li>
												<Link href="/">
													<a>Ch????ng Tr??nh 188C</a>
												</Link>
											</li>
											<li>
												<Link href="/">
													<a>T??m Hi???u V??? N?????c ??c</a>
												</Link>
											</li>
										</ul>
									</li>
									<li>
										<Link href="/#">
											<a>?????nh c?? Canada</a>
										</Link>
										<ul className="sub-menu">
											<li>
												<Link href="/dinhcunewbrunswich">
													<a>?????nh c?? New Brunswick</a>
												</Link>
											</li>
											<li>
												<Link href="/dinhcubritish">
													<a>?????nh c?? British Columbia</a>
												</Link>
											</li>
											<li>
												<Link href="/ThongTinCanada">
													<a>T??m hi???u v??? Canada</a>
												</Link>
											</li>
										</ul>
									</li>
								</ul>
							</li>
							<li>
								<a href="#">H???c B???ng</a>
								<ul className="sub-menu">
									<li>
										<Link href="/hoc-bong-canada">
											<a>H???c B???ng Canada</a>
										</Link>
									</li>
									<li>
										<Link href="/HocBongAnh">
											<a>H???c B???ng Anh</a>
										</Link>
									</li>
									<li>
										<Link href="/HocBongMy">
											<a>H???c B???ng m???</a>
										</Link>
									</li>
									<li>
										<Link href="/HocBongUc">
											<a>H???c B???ng ??c</a>
										</Link>
									</li>
									<li>
										<Link href="/HocBongNewZeaLand">
											<a>H???c B???ng New ZeaLand</a>
										</Link>
									</li>
									<li>
										<Link href="/HocBongSingapore">
											<a>H???c B???ng Singapore</a>
										</Link>
									</li>
									<li>
										<Link href="/HocBongPhanLan">
											<a>H???c B???ng Ph???n Lan</a>
										</Link>
									</li>
									<li>
										<Link href="/HocBongHaLan">
											<a>H???c B???ng H?? Lan</a>
										</Link>
									</li>
									<li>
										<Link href="/HocBongThuySi">
											<a>H???c B???ng Th???y s??</a>
										</Link>
									</li>
								</ul>
							</li>
							<li>
								<Link href="/courses">D???ch V??? </Link>
								<ul className="sub-menu">
									<li>
										<Link href="/khachhang">
											<a>Kh??ch H??ng</a>
										</Link>
									</li>
									<li>
										<Link href="/doitac">
											<a>?????i T??c</a>
										</Link>
										<ul className="sub-menu">
											<li>
												<Link href="/doitac">
													<a>?????i T??c N?????c M???</a>
												</Link>
											</li>
											<li>
												<Link href="/doitac">
													<a>?????i T??c N?????c Canada</a>
												</Link>
											</li>
											<li>
												<Link href="/doitac">
													<a>?????i T??c N?????c Singapore</a>
												</Link>
											</li>
											<li>
												<Link href="/doitac">
													<a>?????i T??c N?????c Singapore</a>
												</Link>
											</li>
											<li>
												<Link href="/doitac">
													<a>?????i T??c N?????c Singapore</a>
												</Link>
											</li>
										</ul>
									</li>
									<li>
										<Link href="/tuyendung">
											<a>Tuy???n D???ng</a>
										</Link>
									</li>
									<li>
										<Link href="/news">
											<a>Tin T???c</a>
										</Link>
									</li>
								</ul>
							</li>
							<li>
								<Link href="/????o T???o">
									<a>????o T???o</a>
								</Link>
								<ul className="sub-menu">
									<li>
										<Link href="/teacher-details">
											<a>Luy???n Thi Ti???ng Anh</a>
										</Link>
									</li>
									<li>
										<Link href="/become-teacher">
											<a>Luy???n IELTS Du H???c</a>
										</Link>
									</li>
									<li>
										<Link href="">
											<a>Luy???n Anh V??n Ph???ng V???n Xin Visa M???</a>
										</Link>
									</li>
									<li>
										<Link href="">
											<a>D???y Anh V??n Du L???ch</a>
										</Link>
									</li>
									<li>
										<Link href="">
											<a>D???y Anh V??n Cho Ng?????i S???p ?????nh C??</a>
										</Link>
									</li>
									<li>
										<Link href="">
											<a>Hu???n Luy???n Sinh Vi??n Th???c T???p</a>
										</Link>
									</li>
									<li>
										<Link href="">
											<a>Hu???n Luy???n Nh??n S???</a>
										</Link>
									</li>
									<li>
										<Link href="/Luy???n Sinh Vi??n Th???c T???p">
											<a>Luy???n Sinh Vi??n Th???c T???p</a>
										</Link>
									</li>
									<li>
										<Link href="/Hu???n Luy???n Nh??n S???">
											<a>Hu???n Luy???n Nh??n S???</a>
										</Link>
									</li>
								</ul>
							</li> */}

								<li>
									<Link href="/contact">
										<a>Li??n H???</a>
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
								<span className="title">????ng k??</span>
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
								<span className="title-hover">Chuy???n ??i .....</span>
							</a>
						</div>
					</div>
				</nav>
			</header>
		</>
	);
};

export default NavOne;
