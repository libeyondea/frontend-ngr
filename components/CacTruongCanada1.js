import React, { useState } from 'react';
import Image from './Image';
const CacTruongCanada1 = () => {
	return (
		<div>
			<section className="inner-banner-THCA">
				<div className="container">
					<ul className="list-unstyled thm-breadcrumb">
						<li>
							<a href="#">Trang Chủ</a>
						</li>
						<li className="active">
							<a href="#">Các Trường Đại Học Và Cao Đẳng Canada</a>
						</li>
					</ul>
					<h2 className="inner-banner-THCA__title">Các Trường Đại Học <br/>Và Cao Đẳng Canada</h2>
				</div>
			</section>
			<h3 className="title-comm">
						<span className="title-holder">MỘT SỐ TRƯỜNG ĐẠI HỌC & CAO ĐẲNG TIÊU BIỂU</span>
					</h3>
			<div className="col-lg-7">
				<div className="card-TH">
					<div className="card-header">
						<p className="card-header-TH">Trường Southern Alberta Institute of Technology (SAIT) – Du học Canada – Du học Tân Con Đường Vàng</p>
					</div>
					<div className="card-body">
						<p className='img-card-TH'>
							<Image src="/assets/images/TruongHoc/SAIT.png" alt="Trường Southern Alberta Institute of Technology (SAIT)" />
						</p>
						<h5 className="card-title-TH">Trường Southern Alberta Institute of Technology (SAIT)</h5>
						<p className="card-text-TH">SASKATCHEWAN POLYTECHNIC  Saskatchewan Polytechnic được thành lập vào năm 1941 tọa lạc tại Saskatchewan –
						nơi được ví von là “Land of Living Skies” của Canada.  Cùng với 12 cơ sở nghiên cứu chuyên sâu, Saskatchewan Polytechnic còn
						là thành viên của Nhóm các trường bách khoa Canada (Polytechnics Canada) …</p>
						<a href="#" className="btn btn-primary">Đọc Thêm</a>
					</div>
				</div>
				<div className="card-TH">
					<div className="card-header">
						<p className="card-header-TH">Trường Saskatchewan Polytechnic – Du học Canada – Du học Tân Con Đường Vàng</p>
					</div>
					<div className="card-body">
						<p className='img-card-TH'>
							<Image src="/assets/images/TruongHoc/SASK.png" alt="Trường Saskatchewan Polytechnic" />
						</p>
						<h5 className="card-title-TH">Trường Saskatchewan Polytechnic</h5>
						<p className="card-text-TH">SASKATCHEWAN POLYTECHNIC  Saskatchewan Polytechnic được thành lập vào năm 1941 tọa lạc tại Saskatchewan –
						nơi được ví von là “Land of Living Skies” của Canada.  Cùng với 12 cơ sở nghiên cứu chuyên sâu, Saskatchewan Polytechnic còn
						là thành viên của Nhóm các trường bách khoa Canada (Polytechnics Canada) …</p>
						<a href="#" className="btn btn-primary">Đọc Thêm</a>
					</div>
				</div>
				<div className="card-TH">
					<div className="card-header">
						<p className="card-header-TH">Trường British Columbia University – Du học Canada – Du học Tân Con Đường Vàng</p>
					</div>
					<div className="card-body">
						<p className='img-card-TH'>
							<Image src="/assets/images/TruongHoc/BRITI.png" alt="Trường British Columbia University" />
						</p>
						<h5 className="card-title-TH">Trường British Columbia University</h5>
						<p className="card-text-TH">BRITISH COLUMBIA UNIVERSITY British Columbia – ngôi trường của những giải Nobel và những người nổi tiếng.
						Nếu Mỹ có Đại học Havard, Anh có Đại học Oxford thì Canada có Đại học British Columbia. Du học, ai cũng mong được sở hữu tấm bằng
						của những trường danh tiếng. …</p>
						<a href="#" className="btn btn-primary">Đọc Thêm</a>
					</div>
				</div>
				<div className="card-TH">
					<div className="card-header">
						<p className="card-header-TH">Trường Coast Mountain College – Du học Canada – Du học Tân Con Đường Vàng</p>
					</div>
					<div className="card-body">
						<p className='img-card-TH'>
								<Image src="/assets/images/TruongHoc/COAST.png" alt="Trường Coast Mountain College" />
						</p>
						<h5 className="card-title-TH">Trường Coast Mountain College</h5>
						<p className="card-text-TH">COAST MOUNTAIN COLLEGE Coast Mountain College (CMTN) được thành lập dưới sự công nhận của Chính phủ.
						Toạ lạc tại khu vực cộng đồng dân cư thịnh vượng và đa dạng của Tây Bắc thuộc tỉnh British Columbia. Coast Mountain
							College cung cấp nhiều chương trình đào tạo chất lượng với …</p>
						<a href="#" className="btn btn-primary">Đọc Thêm</a>
					</div>
				</div>
			</div>
			<div className="post-pagination">
					<a href="#">
						<i className="fa fa-angle-double-left"></i>
					</a>
					<a className="active" href="#">1</a>
					<a href="#">2</a>
					<a href="#">3</a>
					<a href="#">4</a>
					<a href="#">
						<i className="fa fa-angle-double-right"></i>
					</a>
			</div>
	</div>

	);
};
export default CacTruongCanada1;
