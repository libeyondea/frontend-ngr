import React from 'react';

const Footer = () => {
	function scrollTop() {
		window.scrollTo(0, 0);
	}
	return (
		<div>
			<footer className="site-footer">
				<div className="site-footer__upper">
					<div className="container">
						<div className="row">
							<div className="col-xl-3 col-lg-6 col-sm-12">
								<div className="footer-widget footer-widget__contact">
									<h2 className="footer-widget__title mb-4">VP CHÍNH HCM</h2>
									<ul className="list-unstyled footer-widget__course-list">
										<li>
											<h2>
												<a href="course-details.html">
													Địa Chỉ: 219 Đường Tân Quý, P.Tân Quý, Q.Tân Phú, TP.HCM, VN
												</a>
											</h2>
										</li>
										<li className="mt-2">
											<h2>
												<a href="course-details.html">Mail: duhoc@newgoldenroad.edu.vn</a>
											</h2>
										</li>
										<li className="mt-2">
											<h2>
												<a href="course-details.html">Tel: (+84)909 416 959 – Ms. Linda</a>
											</h2>
										</li>
										<li className="mt-4">
											<h2>
												<p className="mb-2">Văn Phòng Giao Dịch:</p>
												<a href="course-details.html">
													Địa Chỉ: 40 Đường số 7, P.10, Q.Tân Bình – TP.HCM – VN
												</a>
											</h2>
										</li>
									</ul>
								</div>
							</div>
							<div className="col-xl-3 col-lg-6 col-sm-12">
								<div className="footer-widget footer-widget__contact">
									<h2 className="footer-widget__title mb-4">VP TẠI VŨNG TÀU</h2>
									<ul className="list-unstyled footer-widget__course-list">
										<li>
											<h2>
												<a href="course-details.html">Địa Chỉ: Số 147 Lê Lợi – Ngãi Giao – BRVT</a>
											</h2>
										</li>
										<li className="mt-2">
											<h2>
												<a href="course-details.html">Mail: duhoc@newgoldenroad.edu.vn</a>
											</h2>
										</li>
										<li className="mt-2">
											<h2>
												<a href="course-details.html">Tel: (+84)91 4423 497 – Ms. Phan Quy</a>
											</h2>
										</li>
									</ul>
								</div>
							</div>
							<div className="col-xl-3 col-lg-6 col-sm-12">
								<div className="footer-widget footer-widget__contact">
									<h2 className="footer-widget__title mb-4">VP TẠI CANADA</h2>
									<ul className="list-unstyled footer-widget__course-list">
										<li>
											<h2>
												<a href="course-details.html">
													Địa Chỉ: 3 Trail Rider Dr Brampton, Ontario – Canada
												</a>
											</h2>
										</li>
										<li className="mt-2">
											<h2>
												<a href="course-details.html">Mail: tanconduongvang@gmail.com</a>
											</h2>
										</li>
										<li className="mt-2">
											<h2>
												<a href="course-details.html">Tel: (+1)461 802 2155 – Mr. Tuan</a>
											</h2>
										</li>
									</ul>
								</div>
							</div>
							<div className="col-xl-3 col-lg-6 col-sm-12">
								<div className="footer-widget footer-widget__contact">
									<h2 className="footer-widget__title mb-4">VP TẠI ÚC</h2>
									<ul className="list-unstyled footer-widget__course-list">
										<li>
											<h2>
												<a href="course-details.html">
													Địa Chỉ: Level 14, 197 St Georges Terrace, Perth Wa 6000, Australia
												</a>
											</h2>
										</li>
										<li className="mt-2">
											<h2>
												<a href="course-details.html">Mail: tanconduongvang@gmail.com</a>
											</h2>
										</li>
										<li className="mt-2">
											<h2>
												<a href="course-details.html">Tel: (+61)424 302 479 – Ms. Kim Kager</a>
											</h2>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="site-footer__bottom">
					<div className="container">
						<p className="site-footer__copy text-white">
							&copy; Copyright 2022 by,{' '}
							<a href="#" className="font-weight-bold">
								All Rights Reserved
							</a>
						</p>
						  <div className="site-footer__social">
							<div onClick={scrollTop} className="scroll-to-target site-footer__scroll-top">
								<i className="kipso-icon-top-arrow"></i>
							</div>
						</div>
						<div class="site-footer__social">
							<a class="ttip-none" title="Google+" href="https://newgoldenroad.com" target="_blank"><i class="fa fa-google-plus"></i></a>
							<a class="fab fa-facebook-square text-white" title="Facebook" href="https://www.facebook.com/newgoldenroad" target="_blank"><i class="fa fa-facebook"></i></a>
							<a class="fab fa-twitter text-white" title="Twitter" href="https://twitter.com/newgoldenroad" target="_blank"><i class="fa fa-twitter"></i></a>
							<a class="fab fa-youtube text-white" title="Youtube" href="http://www.youtube.com/newgoldenroad" target="_blank"><i class="fa fa-youtube"></i></a>
							<a class="fab fa-instagram text-white" title="instagram" href="http://instagram.com/newgoldenroad" target="_blank"><i class="fa fa-instagram"></i></a>
						</div>
					</div>
				</div>

							</footer>
			<div className="search-popup">
				<div className="search-popup__overlay custom-cursor__overlay search-overlay"></div>
				<div className="search-popup__inner">
					<form action="#" className="search-popup__form">
						<input type="text" name="search" placeholder="Type here to Search...." />
						<button type="submit">
							<i className="kipso-icon-magnifying-glass"></i>
						</button>
						<div className="cancel">
							<i className="fas fa-times-circle"></i>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};
export default Footer;
