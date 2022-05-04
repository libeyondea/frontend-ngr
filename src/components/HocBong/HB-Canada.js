import React from 'react';
import Link from 'next/link';

const HBCanada = () => {
	return (
		<div className="content-hb">
			<h1 className="tieude-2">HỌC BỔNG HẤP DẪN TẠI TRƯỜNG ĐẠI HỌC</h1>
			<h1 className="tieude-2">CANADA WEST</h1>
			<div className="card-TH1">
				<div className="card-header1">
					<p className="card-header-TD">
						[HỌC BỔNG] – Học Bổng hấp dẫn tại trường Canada West University – Du học Canada – Du học Tân Con Đường
						Vàng
					</p>
				</div>
				<div className="card-body">
					<p className="img-card-TH1">
						<img
							className="img-HB"
							src="/assets/images/HocBong/du-hoc-tan-con-duong-vang-canada-west-uni.png"
							alt="Tuyển dụng vị trí Copywriter"
						/>
					</p>
					<p className="card-text-TH1">
						<b>Đại học Canada West (University Canada West)</b>được thành lập vào năm 2004, tọa lạc tại khuôn viên
						Thành phố Vancouver, là trường đại học trẻ nhưng chất lượng lại vô cùng tuyệt vời. Đại học Canada West là
						một trường đại học có tầm nhìn rõ ràng – trở thành một trường đại học độc lập hàng đầu, được tôn trọng ở
						Canada và nước ngoài...
					</p>
					<Link href="/hocbongcanada">
						<a className="btn btn-primary">Đọc Thêm</a>
					</Link>
				</div>
			</div>
			<div style={{ clear: 'both' }}></div>
			<div className="card-TH1">
				<div className="card-header1">
					<p className="card-header-TD">[Hội thảo]: Trường Excelsia College- Du học Úc – Du học Tân Con Đường Vàng</p>
				</div>
				<div className="card-body">
					<p className="img-card-TH1">
						<img className="img-HB" src="/assets/images/HocBong/nganhhoc3.jpg" alt="Tuyển dụng vị trí Copywriter" />
					</p>
					<p className="card-text-TH1">
						Excelsia College – Sydney đã có mặt tại công ty Du học Tân Con Đường Vàng lúc 10:00AM ngày 07/04/2021. Tại
						đây, người đại diện của Excelsia College – anh Peter sẽ chia sẻ những thông tin cần thiết về chương trình
						học, chính sách và những lưu ý cần biết dành cho du học sinh tại Úc...
					</p>
					<Link href="/hocbongcanada">
						<a className="btn btn-primary">Đọc Thêm</a>
					</Link>
				</div>
			</div>
			<div style={{ clear: 'both' }}></div>

			{/*********************************************  PHAN-TRANG ***************************************/}
			<div className="post-pagination" /* style={{justifyContent:'normal'}} */>
				<a href="#">
					<i className="fa fa-angle-double-left" />
				</a>
				<a className="active" href="#">
					1
				</a>
				<a href="#">2</a>
				<a href="#">
					<i className="fa fa-angle-double-right" />
				</a>
			</div>
		</div>
	);
};
export default HBCanada;
