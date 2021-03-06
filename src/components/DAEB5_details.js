import React, { useState } from 'react';
import { Slide } from 'react-slideshow-image';

const DAEB5_details = () => {
	const [isOpen, setisopen] = useState(false);

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
						
								<i className="fa fa-circle1" />● Dự án nằm trong Khu Công Nghiệp Trung tâm thành phố Miami.<br />
							
								<i className="fa fa-circle1" />● Báo cáo dân số thành phố năm 2018 là 6.2 triệu dân; Là thành phố
								lớn thứ 7 của Hoa Kỳ.<br />
						<i className="fa fa-circle1" />● Báo cáo dân số thành phố năm 2018 là 6.2 triệu dân; Là thành phố
								lớn thứ 7 của Hoa Kỳ.<br />
							
								<i className="fa fa-circle1" />● Nền công nghiệp du lịch và cộng đồng hưu dưỡng lớn.<br />
							
								<i className="fa fa-circle1" />● Dự án sẽ phân phối hàng hóa tới thị trường toàn bộ Đông Nam
								Florida.<br />
							<i className="fa fa-circle1" />● Thành phố Miami mang đến thị trường to lớn dọc bờ Đại Tây Dương
								của Florida và Nam Florida.<br />
							
								<i />● Theo Ông Steven D. Losner - Thị trưởng của thành phố này cho biết: “Việc lựa chọn Homestead
								để xây dựng Trạm giao hàng khẳng định vị thế mới cho đầu tư từ tất cả mọi người trên toàn cầu.
								Điều quan trọng là hàng trăm cơ hội việc làm mới và đa dạng sẽ được tạo ra cho cư dân của chúng
								tôi. Tác động kinh tế đối với Homestead sẽ nhanh chóng mở rộng khi các doanh nghiệp và các nhà
								lãnh đạo ngành khác lưu ý đến dự án này và khu vực của chúng tôi. Tôi tin tưởng rằng chúng tôi sẵn
								sàng chào đón việc mở rộng hơn nữa việc làm và kinh tế địa phương, đồng thời nâng cao chất lượng
								cuộc sống của người dân”.<br />
							
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
		
				<div className="nen" >
					<h2 className="TDDA">TIẾN ĐỘ DỰ ÁN</h2>
					<p className="tiendo"><strong>1. Cơ sở kho vận thứ nhất - Waterman TI: </strong> đã xây xong vào ngày 27/09/2019. Việc cải thiện bắt đầu vào Quý 1/2020, hoàn thành vào Quý 4/2021.<br/>
					<strong>2. Cơ sở kho vận thứ hai - Veterans Industrial Park I-215 (VIP 215): </strong> bắt đầu xây dựng vào đầu vào quý 3/2020; hoàn thành bên ngoài vào quý<br/> 4/2021; toàn bộ tòa nhà dự kiến sẽ hoàn thành vào quý 3/2022.</p>	
			</div>
				{/* one__carousel */}
				<div className="testimonials-one__carousel">
				<h2 className="HINH">HÌNH ẢNH DỰ ÁN</h2>
					<Slide {...properties}>
						<div className="item mr-4">
							<div className="testimonials-one__single">
								<div className="imgDA" style={{ marginTop: '-50px' }}>
									<img src="https://usis.us/timthumb.php?src=https://usis.us/uploads/thumbnail/project/c4e2daaef10602-hillwoodyorkwestdeptford1.jpg&w=360&h=479&zc=1&q=100&s=1" alt="" className="imgDA" width={480} height={580} />
								</div>
							</div>
						</div>
						<div className="item mr-4">
							<div className="testimonials-one__single">
								<div className="imgDA" style={{ marginTop: '-50px' }}>
									<img src="https://usis.us/timthumb.php?src=https://usis.us/uploads/thumbnail/project/0be73d834504f8-cangbaihaiquansteiner1.png&w=360&h=479&zc=1&q=100&s=1" alt="" className="imgDA" width={480} height={580} />
								</div>
							</div>
						</div>
						<div className="item mr-4">
							<div className="testimonials-one__single">
								<div className="imgDA" style={{ marginTop: '-50px' }}>
									<img src="https://usis.us/timthumb.php?src=https://usis.us/uploads/thumbnail/project/97e516508a48fd-stillwaterdeepellum1.png&w=360&h=479&zc=1&q=100&s=1" alt="" className="imgDA" width={480} height={580} />
								</div>
							</div>
						</div>
						<div className="item mr-4">
							<div className="testimonials-one__single">
								<div className="imgDA" style={{ marginTop: '-50px'}}>
									<img src="https://usis.us/timthumb.php?src=https://usis.us/uploads/thumbnail/project/1db87fc13872c6-hiltonchicagorockfordcityhub.jpg&w=360&h=479&zc=1&q=100&s=1" alt="" className="imgDA" width={480} height={580} />
								</div>
							</div>
						</div>
						<div className="item mr-4">
							<div className="testimonials-one__single">
								<div className="imgDA" style={{ marginTop: '-50px' }}>
									<img src="https://usis.us/timthumb.php?src=https://usis.us/uploads/thumbnail/project/d89b5f23b8ccee-duanlinknyc1.jpg&w=360&h=479&zc=1&q=100&s=1" alt="" className="imgDA" width={480} height={580} />
								</div>
							</div>
						</div>
						
					</Slide>
				</div>
		</div>
	);
};
export default DAEB5_details;
