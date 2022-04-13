import React, { Component } from 'react';
import Countdown from 'react-countdown';

const FormSignup = () => {
	return (
		<section className="countdown-one">
			<div className="container">
				<div className="row">
					<div className="col-lg-6">
						<div className="countdown-one__content">
							<h2 className="countdown-one__title">TỶ GIÁ NGOẠI TỆ</h2>
							<table class='table-ngoaite'> 				
								<tr>
									<th>Mã Ngoại Tệ</th>
									<th>Mua Vào</th>
									<th>Bán Ra</th>
								</tr>
								<tr>
									<td>USD</td>
									<td> </td>
									<td> </td>
								</tr>
								<tr>
									<td>SGD</td>
									<td> </td>
									<td> </td>
								</tr>	
								<tr>
									<td>AUD</td>
									<td> </td>
									<td> </td>
								</tr>
								<tr>
									<td>CAD</td>
									<td> </td>
									<td> </td>
								</tr>
								<tr>
									<td>NZD</td>
									<td> </td>
									<td> </td>
								</tr>	
							</table>
							<div className="countdown-one__list list-unstyled">
								<div className="luottruycap">
									SỐ LƯỢT TRUY CẬP							
								<div className="soluottruycap">
									12345
								</div>							
								</div>
							</div>
						</div>
					</div>
					<div className="col-lg-6">
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
			</div>
		</section>
	);
};
export default FormSignup;
