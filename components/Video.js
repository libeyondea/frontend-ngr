import React, { Component } from 'react';
import dynamic from 'next/dynamic';
const ModalVideo = dynamic(() => import('react-modal-video'), { ssr: false });

export default class Video extends Component {
	constructor() {
		super();
		this.state = {
			isOpen: false
		};
	}

	openModal = () => {
		this.setState({ isOpen: true });
	};

	render() {
		return (
			<section className="video-two">
				<div className="container">
					<div className="row">
						<div className="col-lg-7">
							<div className="video-two__content">
								<h2 className="video-two__title">DU HỌC TÂN CON ĐƯỜNG VÀNG</h2>
								<h3 className="title mb-4">
									Với gần hơn 12 năm kinh nghiệm làm việc trong lĩnh vực tư vấn du học, Ban Giám Đốc Công ty New
									Golden Road hiểu rõ về niềm tin, sự kỳ vọng của các em học sinh- sinh viên và các bậc phụ
									huynh trao sứ mệnh quan trọng cho Công ty tư vấn du học trong quá trình chuẩn bị và hoàn thiện
									hồ sơ du học.
								</h3>
								<a href="#" className="thm-btn">
									ĐỌC THÊM
								</a>
							</div>
						</div>
						<div className="col-lg-5 d-flex justify-content-lg-end justify-content-sm-start">
							<div className="my-auto">
								<ModalVideo
									channel="youtube"
									isOpen={this.state.isOpen}
									videoId="o_qQ30wWdPY"
									onClose={() => this.setState({ isOpen: false })}
								/>
								<div onClick={this.openModal} className="video-two__popup">
									<i className="fa fa-play"></i>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		);
	}
}
