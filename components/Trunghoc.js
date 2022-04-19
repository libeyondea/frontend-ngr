import React, { useState } from 'react';
import Image from './Image';
const TrungHoc = () => {
	return (
		<div>
			<section className="inner-banner-THCA">
				<div className="container">
					<h2 className="inner-banner-THCA__title">Trung học Canada</h2>
				</div>
			</section>
			<div id="breaking-news" className="breaking-school">
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
						Trung Học Canada
					</a>
				</span>
				&nbsp;&nbsp;
				<span className="delimiter">/</span>
				&nbsp;&nbsp;
				<span className="current">[Các Trường Trung Học Canada]</span>
			</div>
			<h3 className="title-comm">
				<span className="title-holder">MỘT SỐ TRƯỜNG TRUNG HỌC CANADA TIÊU BIỂU</span>
			</h3>
			<div class="row row-cols-1 row-cols-md-3 g-4" style={{margin: '50px 150px'}}>
                    <div class="col">
                        <div class="card h-100">
                        <img src="assets/images/Trunghoc/trunghoc1.png" class="card-img-top" alt="Trường Bodwell High School"/>
                        <div class="card-body">
                            <a href="#" class="card-link"><h5 class="card-title">Trường trung học Bodwell High School </h5></a> 
                        </div>
                        </div>
                    </div>
					<div class="col">
                        <div class="card h-100">
                        <img src="assets/images/Trunghoc/trunghoc2.jpg" class="card-img-top" alt="TRUNG HỌC TRỰC THUỘC ĐẠI HỌC VANCOUVER ISLAND"/>
                        <div class="card-body">
                            <a href="#" class="card-link"><h5 class="card-title">TRUNG HỌC TRỰC THUỘC ĐẠI HỌC VANCOUVER ISLAND</h5></a> 
                        </div>
                        </div>
                    </div>
					<div class="col">
                        <div class="card h-100">
                        <img src="assets/images/Trunghoc/trunghoc3.png" class="card-img-top" alt="Trường Quận Rocky Mountain"/>
                        <div class="card-body">
                            <a href="#" class="card-link"><h5 class="card-title">Trường Quận Rocky Mountain</h5></a> 
                        </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card h-100">
                        <img src="assets/images/Trunghoc/trunghoc4.png" class="card-img-top" alt="Trường Quận Toronto" />
                        <div class="card-body">
                            <a href="#" class="card-link"><h5 class="card-title">Trường Quận Toronto</h5></a> 
                        </div>
                        </div>
                    </div>
            </div>
            <div class="row row-cols-1 row-cols-md-3 g-4" style={{margin: '50px 150px'}}>
                    <div class="col">
                        <div class="card h-100">
                        <img src="assets/images/Trunghoc/trunghoc5.png" class="card-img-top" alt="Trường Quận Lambton Kent"/>
                        <div class="card-body">
                            <a href="#" class="card-link"><h5 class="card-title">Trường Quận Lambton Kent</h5></a> 
                        </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card h-100">
                        <img src="assets/images/Trunghoc/trunghoc6.png" class="card-img-top" alt="Trường Quận Avon Maitland"/>
                        <div class="card-body">
                            <a href="#" class="card-link"><h5 class="card-title">Trường Quận Avon Maitland</h5></a> 
                        </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card h-100">
                        <img src="assets/images/Trunghoc/trunghoc7.png" class="card-img-top" alt="Trường Quận Maple Ridge-Pitt Meadows"/>
                        <div class="card-body">
                            <a href="#" class="card-link"><h5 class="card-title">Trường Quận Maple Ridge-Pitt Meadows</h5></a> 
                        </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card h-100">
                        <img src="assets/images/Trunghoc/trunghoc8.png" class="card-img-top" alt=" Trường Greater Victoria High School" />
                        <div class="card-body">
                            <a href="#" class="card-link"><h5 class="card-title"> Trường Greater Victoria High School</h5></a> 
                      
            </div>
          </div>
		  </div>
                  
            </div>		
			<div className="post-pagination">
				<a href="#">
					<i className="fa fa-angle-double-left" />
				</a>
				<a className="active" href="#">
					1
				</a>
				<a href="#">2</a>
				<a href="#">3</a>
				<a href="#">4</a>
				<a href="#">
					<i className="fa fa-angle-double-right" />
				</a>
			</div>
		</div>
	);
};
export default TrungHoc;
