import React from 'react';

const Contact = () => {
	return (
		<div>
			<section className="contact-info-one">
				<div className="container">
					<div className="row">
						<div className="col-lg-4">
							<div className="contact-info-one__single">
								<div className="contact-info-one__icon">
									<i className="kipso-icon-manager"></i>
								</div>
								<h2 className="contact-info-one__title">Thông tin </h2>
								<p className="contact-info-one__text">
									Công ty tư vấn du học hàng đầu ở Việt Nam
									<br /> được các lãnh sự Mỹ, Úc, Canada tin cậy, là đại diện chính thức cho các trường trong hệ
									thống giáo dục như
									<br />
									Mỹ, Anh, Úc, Canada, New Zealand, Singapore.
								</p>
							</div>
						</div>
						<div className="col-lg-4">
							<div className="contact-info-one__single">
								<div className="contact-info-one__icon">
									<i className="kipso-icon-placeholder"></i>
								</div>
								<h2 className="contact-info-one__title">Địa chỉ</h2>
								<p className="contact-info-one__text">
									Chi nhánh 1:37/15 Đặng Minh Trứ, phường 10, quận Tân Bình, Tp Hồ Chí Minh <br />
									Chi nhánh 2:219 Tân Quý, phường Tân Quý, quận Tân Phú, Tp Hồ Chí Minh{' '}
								</p>
							</div>
						</div>
						<div className="col-lg-4">
							<div className="contact-info-one__single">
								<div className="contact-info-one__icon">
									<i className="kipso-icon-contact"></i>
								</div>
								<h2 className="contact-info-one__title">Thông tin liên hệ Info</h2>
								<p className="contact-info-one__text">
									{' '}
									Hotline: 0909416959 - Ms. Linda <br />
									Email: duhoc@newgoldenroad.edu.vn
									<br />
									Website: https://newgoldenroad.com &nbsp;
									<br />
									Facebook: https://www.facebook.com/newgoldenroad
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="contact-one">
				<div className="container">
					<h2 className="contact-one__title text-center">LIÊN HỆ CHÚNG TÔI</h2>
					<form action="#" className="contact-one__form contact-form-validated" noValidate="novalidate">
						<div className="row low-gutters">
							<div className="col-lg-6">
								<input type="text" name="name" placeholder="Họ và Tên:" />
							</div>
							<div className="col-lg-6">
								<input type="text" placeholder="Email" name="Email:" />
							</div>
							<div className="col-lg-12">
								<textarea placeholder="Nội dung : " name="message"></textarea>
								<div className="text-center">
									<button>Gửi phản hồi</button>
								</div>
							</div>
						</div>
					</form>
					<div className="result text-center"></div>
				</div>
			</section>
			<iframe
				src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.2408756556933!2d106.61845171477907!3d10.792854492310395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752eb1494db369%3A0xcdadee593e1b7cce!2zRHUgSOG7jWMgVMOibiBDb24gxJDGsOG7nW5nIFbDoG5nIC0gTmV3IEdvbGRlbiBSb2Fk!5e0!3m2!1svi!2s!4v1649909165254!5m2!1svi!2s"
				className="google-map__contact map"
				allowFullScreen="#!"
			></iframe>
		</div>
	);
};

export default Contact;
