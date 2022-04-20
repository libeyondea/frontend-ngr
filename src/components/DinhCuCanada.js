import React from 'react';

const DinhCuCanada = () => {
	return (
		<section className="team-one team-page">
			<div className="container">
				<h1 className="nuocDC">ĐỊNH CƯ CANADA</h1>
				<div className="row">
					<div className="col-6">
						<div className="dinhcu">
							<div className="thongtin">
								<h5 style={{ color: 'black', marginLeft: '30px' }}> CHƯƠNG TRÌNH ĐỊNH CƯ CANADA</h5>
								<div>
									<a href="/ThongTinCanada" className="card-link">
										<h5
											className="card-title"
											style={{ color: 'black', fontSize: '15px', marginLeft: '30px' }}
										>
											<p> Thông tin nước Canada</p>
										</h5>
									</a>
									<div className="noidungcanada" style={{ marginLeft: '30px' }}>
										<img
											className="hinhca"
											src="https://newgoldenroad.com/wp-content/uploads/2017/08/du-hoc-tan-con-duong-vang-%C4%91%E1%BB%8Bnh-c%C6%B0-canada-310x165.jpg"
											alt=""
										/>
										<p className="ttca" style={{ color: 'black' }}>
											CHƯƠNG TRÌNH ĐỊNH CƯ CANADA Canada được biết đến như một đất nước có nền kinh tế giàu
											mạnh, nguồn tài nguyên dồi dào, được Liên Hợp Quốc xếp vào một trong những đất nước
											tốt nhất để sinh sống với những tiêu chuẩn sống cao nhất trên thế giới: …
										</p>

										<a className="button" href="/#">
											Đọc Tiếp
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="col-6">
						<div className="tuvan">
							<div className="become-teacher__form" id="back-top">
								<div className="become-teacher__form-top">
									<h2 className="become-teacher__form-title">TƯ VẤN MIỄN PHÍ</h2>
								</div>
								<form action="#" metdod="POST" className="become-teacher__form-content contact-form-validated">
									<div className="buttun">
										<input type="text" placeholder="Họ và Tên" name="name" />
										<input type="text" placeholder=" Địa chỉ Email" name="email" />
										<input type="text" placeholder="Số điện tdoại" name="phone" />
										<input type="text" placeholder="Lời nhắn" name="message" />
										<button type="submit" className="tdm-btn become-teacher__form-btn">
											ĐĂNG KÝ
										</button>
									</div>
								</form>
								<div className="result text-center"></div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default DinhCuCanada;
