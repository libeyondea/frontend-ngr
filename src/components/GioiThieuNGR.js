import React from 'react';
import Link from 'next/link';
const GioiThieuNGR = () => {
	return (
		<div>
			<section
				className="inner-banner-THCA"
				style={{ backgroundImage: 'url(/assets/images/GioiThieu/the-gioi-du-hoc.jpg)' }}
			>
				<div className="container">
					<ul className="list-unstyled thm-breadcrumb">
						<li>
							<a href="/">Trang Chủ</a>
						</li>
						<li className="active">
							<a href="/gioi-thieu-NGR">Giới Thiệu</a>
						</li>
					</ul>
					<h2 className="inner-banner-THCA__title">Giới Thiệu</h2>
				</div>
			</section>
			<div id="breaking-news" className="breaking-school" style={{ color: 'color: #E4EAE3' }}>
				<span className="breaking-news-title">
					<span>TIN MỚI NHẤT</span>
				</span>
				<ul className="innerFade" style={{ position: 'relative', height: 32 }}>
					<li style={{ display: 'block', zIndex: 10, position: 'absolute' }}>
						<a
							href="https://newgoldenroad.com/du-hoc-uc-sophia-nhi-do-tot-nghiep-truong-woodcroft-college-du-hoc-tan-con-duong-vang/"
							title="[DU HỌC ÚC] – Du học sinh Sophia Nhi Đỗ vừa tốt nghiệp trường Woodcroft College – Du học Úc – Du học Tân Con Đường Vàng"
						>
							[DU HỌC ÚC] – Du học sinh Sophia Nhi Đỗ vừa tốt nghiệp trường Woodcroft College – Du học Úc – Du học
							Tân Con Đường Vàng
						</a>
					</li>
				</ul>
			</div>
			<div id="crumbs" className="crumbss-school" style={{ paddingTop: '10px' }}>
				<span typeof="v:Breadcrumb">
					<a className="crumbs-home" href="/">
						Trang Chủ
					</a>
				</span>
				&nbsp;&nbsp;
				<span className="delimiter">/</span>
				&nbsp;&nbsp;
				<span typeof="v:Breadcrumb">
					<a href="/gioi-thieu-NGR" style={{ color: '#81868a' }}>
						Giới Thiệu
					</a>
				</span>
			</div>
			<h3 className="gioithieu-title">
				<span>GIỚI THIỆU VỀ NEW GOLDEN ROAD</span>
			</h3>
			<div className="noidunggioithieu">
				<p>
					Với gần hơn 12 năm kinh nghiệm làm việc trong lĩnh vực tư vấn du học, Ban Giám Đốc Công ty New Golden Road
					hiểu rõ về niềm tin, sự kỳ vọng của các em học sinh- sinh viên và các bậc phụ huynh trao sứ mệnh quan trọng
					cho Công ty tư vấn du học trong quá trình chuẩn bị và hoàn thiện hồ sơ du học.
				</p>
				<p>
					Hơn thế nữa du học là :
					<ul>
						<li>• Là một cuộc đầu tư tốt nhất trong các cuộc đầu tư mà các bậc phụ huynh không thể bỏ qua. </li>
						<li>
							• Để thúc đẩy phát triển nền kinh tế đất nước quê nhà là một sự thôi thúc không ngừng và khát khao
							mãnh liệt của tất cả các thế hệ trẻ hôm nay Thế giới nhìn chung, các nước như Singapore, Hàn Quốc,
							Nhật Bản, Ấn Độ có được như ngày hôm nay chính là nhờ vào những lớp người đã du học trước kia và lần
							lượt quay về đóng góp cho nước nhà ngày càng hùng mạnh hơn.
						</li>
					</ul>
					<p>
						<img className="HinhGT" src="/assets/images/GioiThieu/DuHocCanada_3.png" />
					</p>
				</p>
				<p>
					Đội ngũ nhân viên của New Golden Road đã từng làm việc nhiều năm trong môi trường giáo dục, với bề dày kinh
					nghiệm và kiến thức chuyên môn vững chắc sẽ góp tay chung sức chấp cánh cho ước mơ của các em học sinh – sinh
					viên Việt Nam bay cao hơn, đạt được khát vọng cũng như thành công mỹ mãn trên con đường sự nghiệp của mình và
					còn là các nhân tài cho đất nước hôm nay và mai sau. Du học tự túc giúp các em học sinh – sinh viên có cơ hội
					chủ động trong việc chọn ngành nghề để học, chọn trường, chọn đất nước phù hợp theo nhu cầu lựa chọn của mình
					để học tập tốt nhất, và không bị lãng phí về thời gian lẫn tiền bạc mà ngược lại có hiệu quả thiết thực.{' '}
				</p>
				<p>
					<img className="HinhGT" src="/assets/images/GioiThieu/doi-ngu-nhan-vien-1.jpg" />
					<br />
					<p style={{ fontStyle: 'italic', textAlign: 'center' }}>
						Tại Buổi Gặp Mặt Với Học Sinh Trường THCS Quang Trung, Tân Bình, Hồ Chí Minh
					</p>
					<img className="HinhGT" src="/assets/images/GioiThieu/doi-ngu-nhan-vien-2.jpg" />
					<br />
					<p style={{ fontStyle: 'italic', textAlign: 'center' }}>
						Tại Văn Phòng Chính- 219 Tân Quý, Tân Quý, Tân Bình, Hồ Chí Minh
					</p>
					<img className="HinhGT" src="/assets/images/GioiThieu/1.4.jpg" />
					<br />
					<p style={{ fontStyle: 'italic', textAlign: 'center' }}>
						Tại Văn Phòng Chính- 219 Tân Quý, Tân Quý, Tân Bình, Hồ Chí Minh
					</p>
					<img className="HinhGT" src="/assets/images/GioiThieu/1.5.jpg" />
					<p style={{ fontStyle: 'italic', textAlign: 'center' }}>
						Khai Trương Văn Phòng Mới- 219 Tân Quý, Tân Quý, Tân Bình, Hồ Chí Minh
					</p>
				</p>

				<p>
					Là một công ty tư vấn du học hàng đầu ở Việt Nam, được các lãnh sự Mỹ, Úc, Canada tin cậy, là đại diện chính
					thức cho các trường trong hệ thống giáo dục của Mỹ, Anh, Úc, Canada, New Zealand, Singapore…. New GOLDEN ROAD
					luôn đồng hành cùng du học sinh trong suốt chặn đường học tập tại các nước trên thế giới, đồng thời phối hợp
					cùng nhà trường, và các tổ chức giáo dục trên thế giới để hổ trợ các vấn đề khó khăn mà du học sinh gặp phải.
				</p>
				<p>
					<img className="HinhGT" src="/assets/images/GioiThieu/1.6.png" />
					<p style={{ fontStyle: 'italic', textAlign: 'center' }}>
                    GẶP GỠ ĐẠI DIỆN ĐẾN TỪ NIM - ĐỐI TÁC CỦA NEW GOLDEN ROADV- NIM - NANYANG INSTITUTE OF MANAGEMENT:
					</p>
				</p>
				<p>
					Trưởng ban hội đồng sáng lập
					<br />
					TS. Lê Trần Khôi Nguyên
				</p>
				<span>——————————————</span>
				<p>MỘT SỐ HÌNH ẢNH CỦA KHÁCH HÀNG & ĐỐI TÁC</p>
				<p>
					<img className="H_KHDT" src="/assets/images/GioiThieu/1.1.jpg" />
					<img src="/assets/images/GioiThieu/1.2.jpg" />
					<br />
                    <img className="HinhGT" src="/assets/images/GioiThieu/hoi-thao.jpg" />
					<br />
					<p style={{ fontStyle: 'italic', textAlign: 'center' }}>
						Hội thảo Agent Trainning 2022
					</p>
				</p>
			</div>
		</div>
	);
};
export default GioiThieuNGR;
