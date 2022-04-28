import React, { useState } from 'react';
import { Slide } from 'react-slideshow-image';

const CTEB5_details = () => {
	return (
		<section>
			<section className="inner-banner-DCMYEB5">
				<div className="container">
					<ul className="list-unstyled thm-breadcrumb">
						<li>
							<a href="/">Trang Chủ</a>
						</li>
						<li className="active">
							<a href="#">Chi Tiết Về Dự án CMD-64</a>
						</li>
					</ul>
					<h2 className="inner-banner-DCMYEB5__title">DỰ ÁN CMD-64</h2>
				</div>
			</section>
			<section className="team-one team-page">
				<div className="container">
					<div className="phan-dau">
						<a href="/" className="card-link">
							<h5 lassName="card-title" style={{ color: 'red', fontSize: '16px', marginLeft: '30px' }}>
								<p> Trang Chủ </p>
							</h5>
						</a>
						<p
							className="card-title-tt"
							style={{ margintop: '-42px', marginLeft: '108px', color: 'red', fontsize: '15px' }}
						>
							{' '}
							/ Dự án
						</p>
						<p
							className="card-title-ttt"
							style={{ marginTop: '-50px', marginLeft: '165px', color: 'red', fontsize: '15px' }}
						>
							{' '}
							/ Dự án CMB-64 Hillwood Rialto & Sycamore
						</p>
					</div>
					<h1 className="card-title-duan" style={{ fontStyle: '20px', marginTop: '60px' }}>
						{' '}
						Dự án CMB-64 Hillwood Rialto & Sycamore
					</h1>
					<p className="dadt" style={{ color: 'black', textAlign: 'center' }}>
						Dự án đầu tư EB-5
					</p>
					<div className="p2">
						<div>
							<h3 className="TQDA" style={{ marginLeft: '230px', paddingTop: '80px' }}>
								TỔNG QUAN DỰ ÁN
							</h3>
							<p className="hi" style={{ marginLeft: '180px', paddingTop: '20px' }}>
								Hillwood Rialto & Sycamore là dự án hợp tác giữa
								<br />
								Trung tâm Khu vực CMB và Hillwood
								<br />
								Development- top 10 công ty phát triển bất động
								<br />
								sản hàng đầu tại Mỹ. CMB và Hillwood có lịch sử
								<br />
								hợp tác lâu năm với những thành công vang dội
								<br />
								đã được minh chứng qua 23 Hợp danh CMB EB-5
								<br />
								khác nhau, trong đó bao gồm dự án nhóm 64.
								<br />
								Tính đến thời điểm hiện nay, đơn I-526 của 17
								<br />
								trong số 23 Hợp danh này đã được chấp thuận.
							</p>
							<img
								src="https://usis.us/timthumb.php?src=https://usis.us/uploads/thumbnail/project/c4e2daaef10602-hillwoodyorkwestdeptford1.jpg&w=360&h=479&zc=1&q=100&s=1"
								alt=""
								className="imgEB5"
								width={480}
								height={280}
							/>
						</div>
					</div>
					<div>
						<h3 className="hd1" style={{ textAlign: 'center' }}>
							THÔNG TIN CHI TIẾT DỰ ÁN
						</h3>
						<div className="row mx-auto" style={{ color: 'black', width: '1000px' }}>
							<div className="col-12">
								<div className="text_content">
									<p>Dự án nhóm 64 gồm 2 phần:</p>
									<p>
										a) Phát triển và xây dựng cơ sở công nghiệp/tiếp vận (“Tòa nhà 6”), tọa lạc trên khu đất
										trước đây là sân bay Rialto, tại thành phố Rialto, California.{' '}
									</p>
									<p>
										b) Phát triển và xây dựng Tòa nhà 1 Sycamore Canyon (“Tòa nhà 1”) còn được gọi là Magnon
										Development.
									</p>
									<h4>
										<strong>Toà nhà 6:</strong>
									</h4>
									<ul>
										<a>
											<i
												className="fa fa-circle"
												aria-hidden="true"
												style={{
													color: 'black',
													fontSize: '8px',
													marginLeft: '20px',
													marginRight: '15px'
												}}
											></i>
											Tòa nhà 6 sẽ là một trung tâm tiếp vận phân phối và hậu cần đầu ra Hạng A với diện
											tích xấp xỉ 79,4mét vuông.
										</a>
										<br />
										<a>
											<i
												className="fa fa-circle"
												aria-hidden="true"
												style={{
													color: 'black',
													fontSize: '8px',
													marginLeft: '20px',
													marginRight: '15px'
												}}
											></i>
											Nằm ngay phía nam của xa lộ liên bang I-210 và đại lộ Renaissance. Tiếp cận dễ dàng
											đến các xa lộ liên bang I-210 và I-5.
										</a>
										<br />
										<a>
											<i
												className="fa fa-circle"
												aria-hidden="true"
												style={{
													color: 'black',
													fontSize: '8px',
													marginLeft: '20px',
													marginRight: '15px'
												}}
											></i>
											Vị trí Dự án nằm trong Khu vực Tạo việc làm mục tiêu, được xác định bởi bang
											California.
										</a>
										<br />
										<a>
											<i
												className="fa fa-circle"
												aria-hidden="true"
												style={{
													color: 'black',
													fontSize: '8px',
													marginLeft: '20px',
													marginRight: '15px'
												}}
											></i>
											Chiều cao tòa nhà khoảng 9,75 mét, với hệ thống chữa cháy ESFR.
										</a>
										<br />
										<a>
											<i
												className="fa fa-circle"
												aria-hidden="true"
												style={{
													color: 'black',
													fontSize: '8px',
													marginLeft: '20px',
													marginRight: '15px'
												}}
											></i>
											Bãi đỗ xe rộng rãi dành cho xe tải và xe đầu kéo, khoảng 2.896 ô-tô và có sức chứa
											khoảng 543 ô-tô chở hàng.
										</a>
									</ul>
									<h4>
										<strong>Toà nhà 1:</strong>
									</h4>
									<ul>
										<a>
											<i
												className="fa fa-circle"
												aria-hidden="true"
												style={{
													color: 'black',
													fontSize: '8px',
													marginLeft: '20px',
													marginRight: '15px'
												}}
											></i>
											Tọa lạc tại khu vực Inland Empire miền nam California, khoảng 98,2km từ trung tâm
											thành phố Los Angeles và 112,7km từ Cảng Los Angeles và Long Beach- là khu vực duy
											nhất còn lại để phát triển khu công nghiệp.
										</a>
										<br />
										<a>
											<i
												className="fa fa-circle"
												aria-hidden="true"
												style={{
													color: 'black',
													fontSize: '8px',
													marginLeft: '20px',
													marginRight: '15px'
												}}
											></i>
											Là một trung tâm tiếp vận phân phối và hậu cần đầu ra Hạng A với diện tích xấp xỉ
											94.110,3 mét vuông.
										</a>
										<br />
										<a>
											<i
												className="fa fa-circle"
												aria-hidden="true"
												style={{
													color: 'black',
													fontSize: '8px',
													marginLeft: '20px',
													marginRight: '15px'
												}}
											></i>
											Là khu công nghiệp có uy tín với diện tích không gian xây dựng trên 315,87 hécta, nằm
											trong Inland Empire, một khu vực có nhu cầu tiếp vận cao và dễ dàng tiếp cận đến xa lộ
											liên bang I-215 và I-10.
										</a>
										<br />
										<a>
											<i
												className="fa fa-circle"
												aria-hidden="true"
												style={{
													color: 'black',
													fontSize: '8px',
													marginLeft: '20px',
													marginRight: '15px'
												}}
											></i>
											Xây dựng các công trình được thuê lại bởi các công ty danh tiếng như Pepsio Bottling
											Group, Kroger, Amazon…
										</a>
										<br />
										<a>
											<i
												className="fa fa-circle"
												aria-hidden="true"
												style={{
													color: 'black',
													fontSize: '8px',
													marginLeft: '20px',
													marginRight: '15px'
												}}
											></i>
											Chiều cao tòa nhà là 9,75 mét, với khoảng 150 cửa tiếp vận phân phối hàng.
										</a>
										<br />
										<a>
											<i
												className="fa fa-circle"
												aria-hidden="true"
												style={{
													color: 'black',
													fontSize: '8px',
													marginLeft: '20px',
													marginRight: '15px'
												}}
											></i>
											Có không gian văn phòng, bãi đỗ xe rộng rãi dành cho ô tô và xe tải đầu kéo.
										</a>
										<br />
										<a>
											<i
												className="fa fa-circle"
												aria-hidden="true"
												style={{
													color: 'black',
													fontSize: '8px',
													marginLeft: '20px',
													marginRight: '15px'
												}}
											></i>
											Nằm cách dưới 32km về phía Nam đến Cảng tiếp vận nội địa/ Khu công nghiệp Quy hoạch
											tổng thể của Hillwood là Alliance California.
										</a>
									</ul>
									<h4>THÔNG TIN VỀ EB-5 CỦA DỰ ÁN</h4>
									<ul>
										<a>
											<i
												className="fa fa-circle"
												aria-hidden="true"
												style={{
													color: 'black',
													fontSize: '8px',
													marginLeft: '20px',
													marginRight: '15px'
												}}
											></i>
											Tổng khoản cho vay EB-5: 49,5 triệu Đô la Mỹ
										</a>
										<br />
										<a>
											<i
												className="fa fa-circle"
												aria-hidden="true"
												style={{
													color: 'black',
													fontSize: '8px',
													marginLeft: '20px',
													marginRight: '15px'
												}}
											></i>
											Tổng chi tiêu Dự án: 321,8 triệu Đô la Mỹ
										</a>
										<br />
										<a>
											<i
												className="fa fa-circle"
												aria-hidden="true"
												style={{
													color: 'black',
													fontSize: '8px',
													marginLeft: '20px',
													marginRight: '15px'
												}}
											></i>
											Tổng số việc làm ước tính sơ bộ: 1.404
										</a>
										<br />
										<a>
											<i
												className="fa fa-circle"
												aria-hidden="true"
												style={{
													color: 'black',
													fontSize: '8px',
													marginLeft: '20px',
													marginRight: '15px'
												}}
											></i>
											Tổng số việc làm tạo ra dự phòng: 41,8%
										</a>
									</ul>
								</div>
							</div>
						</div>
					</div>
					<div
						className="p3"
						style={{
							width: '1524px',
							height: '570px',
							backgroundColor: '#f5f5f5',
							color: 'black',
							marginTop: '50px'
						}}>
						<h3 className="hd1" style={{ textAlign: 'center', paddingTop: '60px' }}>
							TIẾN ĐỘ DỰ ÁN
						</h3>
						<div className="p4" style={{ paddingTop: '50px', marginLeft:'280px' }}>
							<h4>
								<strong>Toà nhà 6:</strong>
							</h4>
							<ul>
								<a>
									<i
										className="fa fa-circle"
										aria-hidden="true"
										style={{
											color: 'black',
											fontSize: '8px',
											marginLeft: '20px',
											marginRight: '15px'
										}}
									></i>
									Các hoạt động phát triển và tiền thi công được triển khai Quý 3 2017.
								</a>
								<br />
							</ul>
							<ul>
								<a>
									<i
										className="fa fa-circle"
										aria-hidden="true"
										style={{
											color: 'black',
											fontSize: '8px',
											marginLeft: '20px',
											marginRight: '15px'
										}}
									></i>
									Triển khai thi công vào Quý 1 2018.
								</a>
								<br />
							</ul>
							<ul>
								<a>
									<i
										className="fa fa-circle"
										aria-hidden="true"
										style={{
											color: 'black',
											fontSize: '8px',
											marginLeft: '20px',
											marginRight: '15px'
										}}
									></i>
									Hoàn thành xây dựng vào Quý 2 2019.
								</a>
								<br />
							</ul>
							<h4>
								<strong>Tòa nhà 1:</strong>
							</h4>

							<ul>
								<a>
									<i
										className="fa fa-circle"
										aria-hidden="true"
										style={{
											color: 'black',
											fontSize: '8px',
											marginLeft: '20px',
											marginRight: '15px'
										}}
									></i>
									Các hoạt động phát triển và tiền thi công được triển khai Quý 3 2017.
								</a>
								<br />
							</ul>
							<ul>
								<a>
									<i
										className="fa fa-circle"
										aria-hidden="true"
										style={{
											color: 'black',
											fontSize: '8px',
											marginLeft: '20px',
											marginRight: '15px'
										}}
									></i>
									Triển khai thi công vào Quý 1 2018.
								</a>
								<br />
							</ul>
							<ul>
								<a>
									<i
										className="fa fa-circle"
										aria-hidden="true"
										style={{
											color: 'black',
											fontSize: '8px',
											marginLeft: '20px',
											marginRight: '15px'
										}}
									></i>
									Hoàn thành xây dựng vào Quý 4 2018..
								</a>
								<br />
							</ul>
						</div>
					</div>
					<div className='p5'>
						<div className="row hinh-daeb5-64" style={{ color: 'black', paddingTop:'100px' }}>
							<div className="col-6" style={{paddingLeft:'200px'}} >
								<img src="/assets/images/daeb5-64.png"  width='457px' height='175px'/>
							</div>
							<div className="col-6" style={{marginLeft:'-50px', paddingBottom:'70px'}}>
								<h3>Tổng Quan Về Chủ Đầu Tư:</h3>
								<h4>
								<strong>Công ty Hillwood Development (Hillwood):</strong>
							</h4>
							<ul>
								<a>
									<i
										className="fa fa-circle"
										aria-hidden="true"
										style={{
											color: 'black',
											fontSize: '8px',
											marginLeft: '20px',
											marginRight: '15px'
										}}
									></i>
									Top 10 Nhà phát triển Bất động sản hàng đầu tại Hoa Kỳ.
								</a>
								<br />
							</ul>
							<ul>
								<a>
									<i
										className="fa fa-circle"
										aria-hidden="true"
										style={{
											color: 'black',
											fontSize: '8px',
											marginLeft: '20px',
											marginRight: '15px'
										}}
									></i>
									Được ghi nhận qua nhiều dự án tầm cỡ và các dự án liên doanh công tư.
								</a>
								<br />
							</ul>
							<ul>
								<a>
									<i
										className="fa fa-circle"
										aria-hidden="true"
										style={{
											color: 'black',
											fontSize: '8px',
											marginLeft: '20px',
											marginRight: '15px'
										}}
									></i>
									Đạt các giải thưởng từ các tổ chức thương mại bất động sản uy tín.
								</a>
								<br />
							</ul>
							<ul>
								<a>
									<i
										className="fa fa-circle"
										aria-hidden="true"
										style={{
											color: 'black',
											fontSize: '8px',
											marginLeft: '20px',
											marginRight: '15px'
										}}
									></i>
									Phát triển hơn 23,000 hộ dân cư tại hơn 70 địa điểm trên toàn nước Mỹ và Costa Rica.
								</a>
								<br />
							</ul>
							<ul>
								<a>
									<i
										className="fa fa-circle"
										aria-hidden="true"
										style={{
											color: 'black',
											fontSize: '8px',
											marginLeft: '20px',
											marginRight: '15px'
										}}
									></i>
									Dự án nền móng của Hillwood, AllianceTexas, đã thu hút hơn 220 doanh nghiệp, tạo ra 28,000 việc làm và xây dựng gần 3 triệu mét vuông diện tích kể từ năm 1990.
								</a>
								<br />
							</ul>
							<ul>
								<a>
									<i
										className="fa fa-circle"
										aria-hidden="true"
										style={{
											color: 'black',
											fontSize: '8px',
											marginLeft: '20px',
											marginRight: '15px'
										}}
									></i>
									Thành tích EB-5:
								</a>
								<br />
							</ul>
							<ul>
								<a>
								<i className="fa fa-plus" aria-hidden="true" style={{
										color: 'black',
										fontSize: '10px',
										marginLeft: '40px',
										marginRight: '15px'
									}}></i>
									22 Hợp danh CMB EB-5 (Nhóm 64 sẽ là Hợp danh thứ 23)
								</a>
								<br />
							</ul>
							<ul>
								<a>
								<i className="fa fa-plus" aria-hidden="true" style={{
									color: 'black',
									fontSize: '10px',
									marginLeft: '40px',
									marginRight: '15px'
								}}></i>
									17 Dự án trước đây đã nhận được chấp thuận đơn I-526
								</a>
								<br />
							</ul>
							<ul>
								<a>
								<i className="fa fa-plus" aria-hidden="true" style={{
									color: 'black',
									fontSize: '10px',
									marginLeft: '40px',
									marginRight: '15px'
								}}></i>
									Hợp danh duy trì tỷ lệ đạt chấp thuận dự án là 100%
								</a>
								<br />
							</ul>
							<h4>
								<strong>Công ty Hillwood Development (Hillwood):</strong>
							</h4>
							<ul>
								<a>
									<i
										className="fa fa-circle"
										aria-hidden="true"
										style={{
											color: 'black',
											fontSize: '8px',
											marginLeft: '20px',
											marginRight: '15px'
										}}
									></i>
									Trung tâm vùng lâu đời và uy tín nhất tại Mỹ
								</a>
								<br />
							</ul>
							<ul>
								<a>
									<i
										className="fa fa-circle"
										aria-hidden="true"
										style={{
											color: 'black',
											fontSize: '8px',
											marginLeft: '20px',
											marginRight: '15px'
										}}
									></i>
									Đơn vị tiên phong và hàng đầu trong lĩnh vực EB-5
								</a>
								<br />
							</ul>
							<ul>
								<a>
									<i
										className="fa fa-circle"
										aria-hidden="true"
										style={{
											color: 'black',
											fontSize: '8px',
											marginLeft: '20px',
											marginRight: '15px'
										}}
									></i>
									Hơn 2,500 thẻ xanh vĩnh viễn đã được cấp
								</a>
								<br />
							</ul>
							<ul>
								<a>
									<i
										className="fa fa-circle"
										aria-hidden="true"
										style={{
											color: 'black',
											fontSize: '8px',
											marginLeft: '20px',
											marginRight: '15px'
										}}
									></i>
									Đã hoàn vốn 144  triệu USD  cho nhà đầu  tư EB-5
								</a>
								<br />
							</ul>
							<ul>
								<a>
									<i
										className="fa fa-circle"
										aria-hidden="true"
										style={{
											color: 'black',
											fontSize: '8px',
											marginLeft: '20px',
											marginRight: '15px'
										}}
									></i>
									Có tỷ lệ hồ sơ thành công 100%
								</a>
								<br />
							</ul>
							<ul>
								<a>
									<i
										className="fa fa-circle"
										aria-hidden="true"
										style={{
											color: 'black',
											fontSize: '8px',
											marginLeft: '20px',
											marginRight: '15px'
										}}
									></i>
									Đã thành công hơn 50 dự án và tạo trên 145.000 việc làm
								</a>
								<br />
							</ul>
							</div>
						</div>
					</div>
				</div>
			</section>
		</section>
	);
};

export default CTEB5_details;
