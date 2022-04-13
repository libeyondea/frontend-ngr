import React from 'react';

const CallToActionTwo = () => {
	return (
		<div className="cta-two">
			<div className="container-fluid">
				<div className="row no-gutters">
					<div className="col-lg-6 thm-base-bg">
						<div className="cta-two__single">
							<div className="cta-two__icon">
								<span>
									<i className="kipso-icon-professor"></i>
								</span>
							</div>
							<div className="cta-two__content">
								<h2 className="cta-two__title">Trở thành khách hàng</h2>
								<p className="cta-two__text">
									There are many variations of passages of lore available but <br /> the majority have suffered
									alteration in some form.
								</p>
								<a href="#" className="thm-btn cta-two__btn">
									Bắt đầu đăng ký
								</a>
							</div>
						</div>
					</div>
					<div className="col-lg-6 thm-base-bg-2">
						<div className="cta-two__single">
							<div className="cta-two__icon">
								<span>
									<i className="kipso-icon-knowledge"></i>
								</span>
							</div>
							<div className="cta-two__content">
								<h2 className="cta-two__title">Tham gia cộng đồng của chúng tôi</h2>
								<p className="cta-two__text">
									Bạn có thể bắt đầu chương trình học tại Úc ngay hôm nay, từ bất cứ đâu. Bắt đầu trực tuyến từ
									nhà, ghi danh tại một trong nhiều cơ sở chi nhánh của Úc trên toàn thế giới hoặc học với đối
									tác cung cấp dịch vụ giáo dục của Úc gần bạn.
								</p>
								<a href="#" className="thm-btn cta-two__btn">
									Bắt đầu đăng ký
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CallToActionTwo;
