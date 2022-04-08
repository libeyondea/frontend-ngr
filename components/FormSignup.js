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
							Là một công ty tư vấn du học hàng đầu ở Việt Nam, được các lãnh sự Mỹ, Úc, Canada tin cậy, là đại diện 
							chính thức cho các trường trong hệ thống giáo dục của Mỹ, Anh, Úc, Canada, New Zealand, Singapore….
							<br/>Đội ngũ nhân viên của New Golden Road đã từng làm việc nhiều năm trong môi trường giáo dục, với bề dày kinh nghiệm 
							và kiến thức chuyên môn vững chắc sẽ góp tay chung sức chắp cánh cho ước mơ của các em học sinh – sinh viên Việt Nam bay cao hơn, đạt được khát vọng cũng như thành công mỹ mãn trên con đường sự nghiệp của mình và còn là các nhân tài cho đất nước hôm nay và mai sau.
							<br/>New GOLDEN ROAD luôn đồng hành cùng du học sinh trong suốt chặn đường học tập tại các nước trên thế giới, 
							đồng thời phối hợp cùng nhà trường, và các tổ chức giáo dục trên thế giới để hổ trợ các vấn đề khó khăn mà du học sinh gặp phải.
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
