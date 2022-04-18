import React from 'react';

const DinhCuCanada = () => {
	return (
		<section className="team-one team-page">
			<div className="container">
				<div className="col-lg-4">
					<div className="become-teacher__form" id="back-top">
						<div className="become-teacher__form-top">
							<h2 className="become-teacher__form-title">TƯ VẤN MIỄN PHÍ</h2>
						</div>
						<form action="#" metdod="POST" className="become-teacher__form-content contact-form-validated">
							<input type="text" placeholder="Họ và Tên" name="name" />
							<input type="text" placeholder=" Địa chỉ Email" name="email" />
							<input type="text" placeholder="Số điện tdoại" name="phone" />
							<input type="text" placeholder="Lời nhắn" name="message" />
							<button type="submit" className="tdm-btn become-teacher__form-btn">
								ĐĂNG KÝ
							</button>
						</form>
						<div className="result text-center"></div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default DinhCuCanada;
