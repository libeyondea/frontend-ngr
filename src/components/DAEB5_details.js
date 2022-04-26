import React, { useState } from 'react';
import { Slide } from 'react-slideshow-image';

const DAEB5_details = () => {
	
	const properties = {
		duration: 3000,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		indicators: false,
		arrows: false,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3
				}
			},
			{
				breakpoint: 500,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2
				}
			}
		]
	};

	return (
		<div className="THdetails">
			<section className="inner-banner-DABE5">
				<div className="container">
					<h2 className="inner-banner-DABE5__title">DỰ ÁN ĐẦU TƯ EB-5</h2>
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
					<a className="crumbs-home" href="https://newgoldenroad.com">
						Trang Chủ
					</a>
				</span>
				&nbsp;&nbsp;
				<span className="delimiter">/</span>
				&nbsp;&nbsp;
				<span typeof="v:Breadcrumb">
					<a href="https://newgoldenroad.com/chuyen-muc/hoat-dong-cong-ty/" style={{ color: '#81868a' }}>
						DỰ ÁN ĐẦU TƯ EB5
					</a>
				</span>
				&nbsp;&nbsp;
				<span className="delimiter">/</span>
				&nbsp;&nbsp;
				<span className="current">Trường trung học Bodwell High School</span>
			</div>

			<h1 className="card-title-duan"> CMB GROUP 80 – CƠ SỞ KHO VẬN HOMESTEAD</h1>
			<h3 className="card-title-details"> Dự án đầu tư EB-5</h3>
			<div id="nen" className="nen">
				<h3 className="card-title-details2">TỔNG QUAN DỰ ÁN</h3>
				<div className="row">
					<div className="col-6">
						<div className="nd-CTEB5">
							<p>
								<i className="fa fa-circle1" />● Dự án nằm trong Khu Công Nghiệp Trung tâm thành phố Miami.
							</p>

							<p>
								<i className="fa fa-circle1" />● Báo cáo dân số thành phố năm 2018 là 6.2 triệu dân; Là thành phố
								lớn thứ 7 của Hoa Kỳ.
							</p>

							<p>
								<i className="fa fa-circle1" />● Báo cáo dân số thành phố năm 2018 là 6.2 triệu dân; Là thành phố
								lớn thứ 7 của Hoa Kỳ.
							</p>

							<p>
								<i className="fa fa-circle1" />● Nền công nghiệp du lịch và cộng đồng hưu dưỡng lớn.
							</p>

							<p>
								<i className="fa fa-circle1" />● Dự án sẽ phân phối hàng hóa tới thị trường toàn bộ Đông Nam
								Florida.
							</p>

							<p>
								<i className="fa fa-circle1" />● Thành phố Miami mang đến thị trường to lớn dọc bờ Đại Tây Dương
								của Florida và Nam Florida.
							</p>
							<p>
								<i />● Theo Ông Steven D. Losner - Thị trưởng của thành phố này cho biết: “Việc lựa chọn Homestead
								để xây dựng Trạm giao hàng khẳng định vị thế mới cho đầu tư từ tất cả mọi người trên toàn cầu.
								Điều quan trọng là hàng trăm cơ hội việc làm mới và đa dạng sẽ được tạo ra cho cư dân của chúng
								tôi. Tác động kinh tế đối với Homestead sẽ nhanh chóng mở rộng khi các doanh nghiệp và các nhà
								lãnh đạo ngành khác lưu ý đến dự án này và khu vực của chúng tôi. Tôi tin tưởng rằng chúng tôi sẵn
								sàng chào đón việc mở rộng hơn nữa việc làm và kinh tế địa phương, đồng thời nâng cao chất lượng
								cuộc sống của người dân”.
							</p>
						</div>
					</div>
					<div className="col-6">
						<img
							src="https://usis.us/uploads/thumbnail/project/b342409f681e21-cmbgroup80homestead.jpg"
							width={550}
							height={390}
						/>
					</div>
				</div>
			</div>
			<div className="row">
				<h2 className="LoaiHinhDT">THÔNG TIN CHI TIẾT DỰ ÁN</h2>
				<p className="dautu">
					<i className="fa fa-circle3" aria-hidden="true"></i>
					<strong>● Thông tin về Dự án: </strong> là cơ sở kho vận giao hàng chặng cuối, được xây dựng theo yêu cầu của
					bên đã thuê. Dự án
					<br /> đã được một đơn vị thương mại điện tử hàng đầu danh sách Fortune 500 ký hợp đồng thuê kho dài hạn 15
					năm. <br />
					<i className="fa fa-circle3" aria-hidden="true"></i>
					<strong>● Diện tích: </strong>rộng xấp xỉ 13.485m2 <br />
					<i className="fa fa-circle3" aria-hidden="true"></i>
					<strong>● Địa điểm: </strong> tọa lạc tại East Palm Drive, Homestead. Dự án nằm trong KCN Trung tâm thành phố
					Miami, ngay ngã 3<br /> giao lộ cao tốc SW 142nd Ave và E Palm Dr, gần tháp nước và đường đua Homestead Miami
					Speedway. <br /> <i className="fa fa-circle3" aria-hidden="true"></i>
					<strong>● Nguồn vốn EB-5: </strong> 12 triệu USD (24 suất đầu tư).
					<br />
					<i className="fa fa-circle3" aria-hidden="true"></i>
					<strong>● Số việc làm yêu cầu: </strong> 240 việc làm. <br />
					<i className="fa fa-circle3" aria-hidden="true"></i>
					<strong>● Tổng số việc làm đã tạo ra: </strong> 274 việc làm gián tiếp và 285 việc làm trực tiếp. Vượt xa con
					số yêu cầu tối thiểu của Sở Di trú Mỹ. <br />{' '}
				</p>

				<div className="container" style={{ backgroundColor: '#E4E4E4' }}>
					<h2 className="TDDA">TIẾN ĐỘ DỰ ÁN</h2>
					<p className="tiendo">Đã bắt đầu xây dựng, dự kiến hoàn thành vào quý 4 năm 2021.</p>
				</div>
			<div className="DuAn">
				<h1 className="DA" style={{ color: 'black', display: 'block', textAlign: 'center', paddingTop: '50px', marginBottom:'50px' }}>
					DỰ ÁN
				</h1>
				<div className="testimonials-one__carousel">
					<Slide {...properties}>
						
						<div className="item mr-4">
							<div className="testimonials-one__single">
								<div className="imgDA" style={{ marginTop: '-50px' }}>
									<img src="https://usis.us/timthumb.php?src=https://usis.us/uploads/thumbnail/project/8a4f40b4437379-nycrcfdiibrochurevietnamese21111.jpg&w=360&h=479&zc=1&q=100&s=1" alt="" className="imgDA" width={480} height={580} />
								</div>
							</div>							
						</div>
					</Slide>
				</div>
			</div>
			</div>
		</div>
	);
};
export default DAEB5_details;
