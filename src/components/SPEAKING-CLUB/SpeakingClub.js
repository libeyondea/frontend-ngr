import React from 'react';
const SpeakingClub = () => {
	return (
		<section className="blog-one1 blog-page">
			<div className="container">
				<div className="row">
					{/* <div id="crumbs" className="crumbss title-crums">
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
								Tuyển Dụng
							</a>
						</span>
						&nbsp;&nbsp;
						<span className="delimiter">/</span>
						&nbsp;&nbsp;
						<span className="current">
							[IELTS INDICATOR] – Phương pháp thi IELTS trực tuyến tại nhà cùng với Du học Tân Con Đường Vàng
						</span>
					</div> */}
					{/* 	<div>
						<p className="post-meta title-crums">
							<span className="post-meta-author">
								<i className="fa fa-user" />
								&nbsp;&nbsp;
								<a href="https://newgoldenroad.com/author/admin/" title>
									admin
								</a>
							</span>
							<span className="tie-date">
								<i className="fa fa-clock-o" />1 Tháng Chín, 2021
							</span>
							<span className="post-cats">
								<i className="fa fa-folder" />
								&nbsp;&nbsp;
								<a href="https://newgoldenroad.com/chuyen-muc/hoat-dong-cong-ty/" rel="category tag">
									Hoạt Động Công Ty
								</a>
								,&nbsp;&nbsp;
								<a
									href="https://newgoldenroad.com/chuyen-muc/chuong-trinh-dao-tao/luyen-ielts-du-hoc/"
									rel="category tag"
								>
									Luyện IELTS Du Học
								</a>
								,&nbsp;&nbsp;
								<a href="https://newgoldenroad.com/chuyen-muc/tin-tuc/" rel="category tag">
									Tin Tức
								</a>
								,&nbsp;&nbsp;
								<a href="https://newgoldenroad.com/chuyen-muc/dang-ky-thi-ielts/" rel="category tag">
									Đăng Ký Thi IELTS
								</a>
							</span>
							<span className="post-views">
								<i className="fa fa-eye" />
								&nbsp;&nbsp; 1,410 Views
							</span>
						</p>
						<div className="clear" />
					</div> */}
					<div className="col-lg-12">
						<div className="course-details__content">
							<ul className="course-details__tab-navs list-unstyled nav nav-tabs" role="tablist">
								<li>
									<a className="active" role="tab" data-toggle="tab" href="#overview">
										Tư vấn du học
									</a>
								</li>
								<li>
									<a className="" role="tab" data-toggle="tab" href="#curriculum">
										Speaking Club
									</a>
								</li>
								<li>
									<a className="" role="tab" data-toggle="tab" href="#dinhcu">
										Tư vấn định cư
									</a>
								</li>
								<li>
									<a className="" role="tab" data-toggle="tab" href="#luyenIel">
										Luyện thi IELTS
									</a>
								</li>
							</ul>
							<div className="tab-content course-details__tab-content ">
								<div className="tab-pane show active  animated fadeInUp content_1" role="tabpanel" id="overview">
									<img
										style={{ width: '1470px' }}
										src="/assets/images/tu-van-dinh-cu.png"
										alt="Workshop T4_Banner LP 1300_600"
										title="Workshop T4_Banner LP 1300_600"
										data-reactid=".0.0.$/=10.2.0.0.$section2.$row0.$column0.$widget0.0.0.0"
									/>
									<p className="titlee" style={{ paddingTop: '50px' }}>
										<strong>THỜI GIAN: SÁNG CHỦ NHẬT HÀNG TUẦN - 9:00AM đến 12:00PM</strong>
									</p>
									<p>
										<strong>Bạn đang khó khăn trong việc giao tiếp bằng tiếng Anh ?</strong>
									</p>
									<p>
										<strong>Bạn cảm thấy khả năng phản xạ hay từ vựng tiếng Anh không tốt?</strong>
									</p>
									<p>
										<strong>
											Bạn cảm thấy mình muốn cải thiện khả năng nói và sử dụng tiếng Anh của mình?
										</strong>
									</p>
									<p className="titlee">
										<strong>BẠN ĐỪNG LO!</strong>
									</p>
									<strong>
										Hãy tham gia Speaking Club cùng New Golden Road nhé!! Tại đây, các bạn sẽ được trò chuyện,
										chia sẽ với nhau trực tiếp tất cả bằng tiếng Anh. Dưới sự hỗ trợ của các giảng viên tại
										New Golden Road, các bạn sẽ được bổ sung và phát triển thêm vốn từ vựng và đồng thời sẽ
										được cải thiện khả năng phản xạ khi giao tiếp tiếng Anh!
									</strong>
									<div>
										<p className="titlee title01">
											<strong>TẤT CẢ ĐỀU HOÀN TOÀN MIỄN PHÍ, THAM GIA NGAY NHÉ!</strong>
										</p>
										<div
											className="wrapper"
											style={{ backgroundImage: 'url("images/bg-registration-form-2.jpg")' }}
										>
											<div className="inner">
												<form action className="form01">
													<h3>Registration Form</h3>
													<div className="form-wrapper">
														<label htmlFor>Họ và tên</label>
														<input type="text" className="form-control" />
													</div>
													<div className="form-wrapper">
														<label htmlFor>Ngày sinh</label>
														<input type="text" className="form-control" />
													</div>
													<div className="form-wrapper">
														<label htmlFor>Email</label>
														<input type="text" className="form-control" />
													</div>
													<div className="form-wrapper">
														<label htmlFor>Số điện thoại</label>
														<input type="password" className="form-control" />
													</div>
													<div className="form-wrapper">
														<label htmlFor>Bạn đang học trường nào?</label>
														<input type="password" className="form-control" />
													</div>
													<div className="form-wrapper">
														<label htmlFor>Quốc gia mà bạn muốn đi du học?</label>
														<input type="password" className="form-control" />
													</div>

													<div className="form-wrapper">
														<label htmlFor>Hình thức tư vấn</label>
														<select className="form-control" id="exampleFormControlSelect1">
															<option>Trực tiếp</option>
															<option>Online</option>
															<option>Khác</option>
															{/* 	<option>5</option> */}
														</select>
													</div>
													<div className="form-wrapper">
														<label htmlFor>Văn phòng gần nhất</label>
														<select className="form-control" id="exampleFormControlSelect1">
															<option>219 Tân Quý, Q. Tân Phú - HCM</option>
															<option>40 Đường số 7, Q. Tân Bình - HCM</option>
															<option>147 Lê Lợi - Ngãi Giao - Bà Rịa Vũng Tàu</option>
															<option>3 Trail Rider Dr Brampton, Ontario - Canada</option>
															<option>
																Level 14, 197 St Georges Terrace, Perth Wa 6000, Australia
															</option>
														</select>
													</div>

													<div className="form-wrapper">
														<label htmlFor>Ngày bạn muốn tư vấn</label>
														<input type="password" className="form-control" />
													</div>
													<div className="checkbox">
														<label>
															<input type="checkbox" /> I caccept the Terms of Use &amp; Privacy
															Policy.
															<span className="checkmark" />
														</label>
													</div>
													<button>Register Now</button>
												</form>
											</div>
										</div>
									</div>
								</div>
								<div className="tab-pane  animated fadeInUp" role="tabpanel" id="curriculum">
									<img
										style={{ width: '1470px' }}
										src="/assets/images/speaking-club01.png"
										alt="Workshop T4_Banner LP 1300_600"
										title="Workshop T4_Banner LP 1300_600"
										data-reactid=".0.0.$/=10.2.0.0.$section2.$row0.$column0.$widget0.0.0.0"
									/>
									<p className="titlee" style={{ paddingTop: '50px' }}>
										<strong>THỜI GIAN: SÁNG CHỦ NHẬT HÀNG TUẦN - 9:00AM đến 12:00PM</strong>
									</p>
									<p>
										<strong>Bạn đang khó khăn trong việc giao tiếp bằng tiếng Anh ?</strong>
									</p>
									<p>
										<strong>Bạn cảm thấy khả năng phản xạ hay từ vựng tiếng Anh không tốt?</strong>
									</p>
									<p>
										<strong>
											Bạn cảm thấy mình muốn cải thiện khả năng nói và sử dụng tiếng Anh của mình?
										</strong>
									</p>
									<p className="titlee">
										<strong>BẠN ĐỪNG LO!</strong>
									</p>
									<strong>
										Hãy tham gia Speaking Club cùng New Golden Road nhé!! Tại đây, các bạn sẽ được trò chuyện,
										chia sẽ với nhau trực tiếp tất cả bằng tiếng Anh. Dưới sự hỗ trợ của các giảng viên tại
										New Golden Road, các bạn sẽ được bổ sung và phát triển thêm vốn từ vựng và đồng thời sẽ
										được cải thiện khả năng phản xạ khi giao tiếp tiếng Anh!
									</strong>
									<div>
										<p className="titlee title01">
											<strong>TẤT CẢ ĐỀU HOÀN TOÀN MIỄN PHÍ, THAM GIA NGAY NHÉ!</strong>
										</p>
										<div
											className="wrapper"
											style={{ backgroundImage: 'url("images/bg-registration-form-2.jpg")' }}
										>
											<div className="inner">
												<form action className="form01">
													<h3>Registration Form</h3>
													<div className="form-wrapper">
														<label htmlFor>Họ và tên</label>
														<input type="text" className="form-control" />
													</div>
													<div className="form-wrapper">
														<label htmlFor>Ngày sinh</label>
														<input type="text" className="form-control" />
													</div>
													<div className="form-wrapper">
														<label htmlFor>Email</label>
														<input type="text" className="form-control" />
													</div>
													<div className="form-wrapper">
														<label htmlFor>Số điện thoại</label>
														<input type="password" className="form-control" />
													</div>
													<div className="form-wrapper">
														<label htmlFor>Bạn đang học trường nào?</label>
														<input type="password" className="form-control" />
													</div>

													<div className="form-wrapper">
														<label htmlFor>Bạn muốn tham gia Speaking club là vì?</label>
														<select className="form-control" id="exampleFormControlSelect1">
															<option>Muốn cải thiện khả năng giao tiếp</option>
															<option>Muốn tìm thêm bạn bè mới</option>
															<option>Muốn cải thiện accent tiếng Anh</option>
															<option>Khác</option>
															{/* 	<option>5</option> */}
														</select>
													</div>
													<div className="form-wrapper">
														<label htmlFor>Bạn đang hoạc có dự định thi Ielts, Toeic không?</label>
														<input type="password" className="form-control" />
													</div>

													<div className="checkbox">
														<label>
															<input type="checkbox" /> I caccept the Terms of Use &amp; Privacy
															Policy.
															<span className="checkmark" />
														</label>
													</div>
													<button>Register Now</button>
												</form>
											</div>
										</div>
									</div>
								</div>
								<div className="tab-pane  animated fadeInUp" role="tabpanel" id="dinhcu">
									<p className="titlee">
										<strong>THỜI GIAN: SÁNG CHỦ NHẬT HÀNG TUẦN - 9:00AM đến 12:00PM</strong>
									</p>
									<p>
										<strong>Bạn đang khó khăn trong việc giao tiếp bằng tiếng Anh ?</strong>
									</p>
									<p>
										<strong>Bạn cảm thấy khả năng phản xạ hay từ vựng tiếng Anh không tốt?</strong>
									</p>
									<p>
										<strong>
											Bạn cảm thấy mình muốn cải thiện khả năng nói và sử dụng tiếng Anh của mình?
										</strong>
									</p>
									<p className="titlee">
										<strong>BẠN ĐỪNG LO!</strong>
									</p>
									<strong>
										Hãy tham gia Speaking Club cùng New Golden Road nhé!! Tại đây, các bạn sẽ được trò chuyện,
										chia sẽ với nhau trực tiếp tất cả bằng tiếng Anh. Dưới sự hỗ trợ của các giảng viên tại
										New Golden Road, các bạn sẽ được bổ sung và phát triển thêm vốn từ vựng và đồng thời sẽ
										được cải thiện khả năng phản xạ khi giao tiếp tiếng Anh!
									</strong>
									<div>
										<p className="titlee title01">
											<strong>TẤT CẢ ĐỀU HOÀN TOÀN MIỄN PHÍ, THAM GIA NGAY NHÉ!</strong>
										</p>
										<div
											className="wrapper"
											style={{ backgroundImage: 'url("/assets/images/bg-registration-form-2.jpg")' }}
										>
											<div className="inner">
												<form action className="form01">
													<h3>Registration Form</h3>
													<div className="form-group">
														<div className="form-wrapper">
															<label htmlFor>First Name</label>
															<input type="text" className="form-control" />
														</div>
														<div className="form-wrapper">
															<label htmlFor>Last Name</label>
															<input type="text" className="form-control" />
														</div>
													</div>
													<div className="form-wrapper">
														<label htmlFor>Email</label>
														<input type="text" className="form-control" />
													</div>
													<div className="form-wrapper">
														<label htmlFor>Password</label>
														<input type="password" className="form-control" />
													</div>
													<div className="form-wrapper">
														<label htmlFor>Confirm Password</label>
														<input type="password" className="form-control" />
													</div>
													<div className="checkbox">
														<label>
															<input type="checkbox" /> I caccept the Terms of Use &amp; Privacy
															Policy.
															<span className="checkmark" />
														</label>
													</div>
													<button>Register Now</button>
												</form>
											</div>
										</div>
									</div>
								</div>
								<div className="tab-pane  animated fadeInUp" role="tabpanel" id="luyenIel">
									<p className="titlee">
										<strong>THỜI GIAN: SÁNG CHỦ NHẬT HÀNG TUẦN - 9:00AM đến 12:00PM</strong>
									</p>
									<p>
										<strong>Bạn đang khó khăn trong việc giao tiếp bằng tiếng Anh ?</strong>
									</p>
									<p>
										<strong>Bạn cảm thấy khả năng phản xạ hay từ vựng tiếng Anh không tốt?</strong>
									</p>
									<p>
										<strong>
											Bạn cảm thấy mình muốn cải thiện khả năng nói và sử dụng tiếng Anh của mình?
										</strong>
									</p>
									<p className="titlee">
										<strong>BẠN ĐỪNG LO!</strong>
									</p>
									<strong>
										Hãy tham gia Speaking Club cùng New Golden Road nhé!! Tại đây, các bạn sẽ được trò chuyện,
										chia sẽ với nhau trực tiếp tất cả bằng tiếng Anh. Dưới sự hỗ trợ của các giảng viên tại
										New Golden Road, các bạn sẽ được bổ sung và phát triển thêm vốn từ vựng và đồng thời sẽ
										được cải thiện khả năng phản xạ khi giao tiếp tiếng Anh!
									</strong>
									<div>
										<p className="titlee title01">
											<strong>TẤT CẢ ĐỀU HOÀN TOÀN MIỄN PHÍ, THAM GIA NGAY NHÉ!</strong>
										</p>
										<div
											className="wrapper"
											style={{ backgroundImage: 'url("images/bg-registration-form-2.jpg")' }}
										>
											<div className="inner">
												<form action className="form01">
													<h3>Registration Form</h3>
													<div className="form-group">
														<div className="form-wrapper">
															<label htmlFor>First Name</label>
															<input type="text" className="form-control" />
														</div>
														<div className="form-wrapper">
															<label htmlFor>Last Name</label>
															<input type="text" className="form-control" />
														</div>
													</div>
													<div className="form-wrapper">
														<label htmlFor>Email</label>
														<input type="text" className="form-control" />
													</div>
													<div className="form-wrapper">
														<label htmlFor>Password</label>
														<input type="password" className="form-control" />
													</div>
													<div className="form-wrapper">
														<label htmlFor>Confirm Password</label>
														<input type="password" className="form-control" />
													</div>
													<div className="checkbox">
														<label>
															<input type="checkbox" /> I caccept the Terms of Use &amp; Privacy
															Policy.
															<span className="checkmark" />
														</label>
													</div>
													<button>Register Now</button>
												</form>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
export default SpeakingClub;
