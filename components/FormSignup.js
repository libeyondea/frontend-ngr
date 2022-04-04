import React, { Component } from 'react';
import Countdown from 'react-countdown';

const FormSignup = () => {
	return (
		<section className="countdown-one">
			<div className="container">
				<div className="row">
					<div className="col-lg-6">
						<div className="countdown-one__content">
							<h2 className="countdown-one__title">TẠI SAO PHẢI CHỌN TÂN CON ĐƯỜNG VÀNG ? </h2>
							<p className="countdown-one__tag-line">Du học tân con đường vàng nơi chấp cánh ước mơ</p>
							<p className="countdown-one__text">
								Lorem ipsum gravida nibh vel velit auctor aliquetnean sollicitudin, lorem quis bibendum auci elit
								consequat is simply free text available in the psutis sem nibh id eis sed odio sit amet.
							</p>
							<div className="countdown-one__list list-unstyled"></div>
						</div>
					</div>
					<div className="col-lg-6">
						<div className="become-teacher__form">
							<div className="become-teacher__form-top">
								<h2 className="become-teacher__form-title">TƯ VẤN MIỄN PHÍ</h2>
							</div>
							<form action="#" method="POST" className="become-teacher__form-content contact-form-validated">
								<input type="text" placeholder="Họ và Tên" name="name" />
								<input type="text" placeholder=" Địa chỉ Email" name="email" />
								<input type="text" placeholder="Số điện thoại" name="phone" />
								<input type="text" placeholder="Lời nhắn" name="message" />
								<button type="submit" className="thm-btn become-teacher__form-btn">
									ĐĂNG KÝ
								</button>
							</form>
							<div className="result text-center"></div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
export default FormSignup;
