import React, { useState } from 'react';
import Image from './Image';
const CacTruongDuHoc = () => {
	return (
		<div>
			<section className="inner-banner-THCA">
				<div className="container">
					<ul className="list-unstyled thm-breadcrumb">
						<li>
							<a href="/">Trang Chủ</a>
						</li>
						<li className="active">
							<a href="#">Các Trường Đại Học Và Cao Đẳng</a>
						</li>
					</ul>
					<h2 className="inner-banner-THCA__title">
						Các Trường Đại Học <br />
						Và Cao Đẳng Tiêu Biểu.
					</h2>
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
								[DU HỌC ÚC] – Du học sinh Sophia Nhi Đỗ vừa tốt nghiệp trường Woodcroft College – Du học Úc – Du
								học Tân Con Đường Vàng
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
								Du Học Canada
							</a>
						</span>
						&nbsp;&nbsp;
						<span className="delimiter">/</span>
						&nbsp;&nbsp;
						<span className="current">
							[Các Trường Đại Học Và Cao Đẳng Canada] 
						</span>
				</div>
			<h3 className="title-comm">
				<span className="title-holder">MỘT SỐ TRƯỜNG ĐẠI HỌC &amp; CAO ĐẲNG</span>
			</h3>
            <div class="row row-cols-1 row-cols-md-3 g-4" style={{margin: '50px 150px'}}>
                    <div class="col">
                        <div class="card h-100">
                        <img src="assets/images/TruongHoc/ALBER.png" class="card-img-top" alt="Trường Alberta University"/>
                        <div class="card-body">
                            <a href="#" class="card-link"><h5 class="card-title">Trường Alberta University</h5></a> 
                        </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card h-100">
                        <img src="assets/images/TruongHoc/BRITI.png" class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <a href="#" class="card-link"><h5 class="card-title">Card title</h5></a> 
                        </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card h-100">
                        <img src="assets/images/TruongHoc/COAST.png" class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <a href="#" class="card-link"><h5 class="card-title">Card title</h5></a> 
                        </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card h-100">
                        <img src="assets/images/TruongHoc/CONCOR.gif" class="card-img-top" alt="..." />
                        <div class="card-body">
                            <a href="#" class="card-link"><h5 class="card-title">Card title</h5></a> 
                        </div>
                        </div>
                    </div>
            </div>
            <div class="row row-cols-1 row-cols-md-3 g-4" style={{margin: '50px 150px'}}>
                    <div class="col">
                        <div class="card h-100">
                        <img src="assets/images/TruongHoc/DAL.png" class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <a href="#" class="card-link"><h5 class="card-title">Card title</h5></a> 
                        </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card h-100">
                        <img src="assets/images/TruongHoc/KWAN.png" class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <a href="#" class="card-link"><h5 class="card-title">Card title</h5></a> 
                        </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card h-100">
                        <img src="assets/images/TruongHoc/LASA.jpg" class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <a href="#" class="card-link"><h5 class="card-title">Card title</h5></a> 
                        </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card h-100">
                        <img src="assets/images/TruongHoc/MANI.png" class="card-img-top" alt="..." />
                        <div class="card-body">
                            <a href="#" class="card-link"><h5 class="card-title">Card title</h5></a> 
                        </div>
                        </div>
                    </div>
            </div>
            <div class="row row-cols-1 row-cols-md-3 g-4" style={{margin: '50px 150px'}}>
                    <div class="col">
                        <div class="card h-100">
                        <img src="assets/images/TruongHoc/NEW.png" class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <a href="#" class="card-link"><h5 class="card-title">Card title</h5></a> 
                        </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card h-100">
                        <img src="assets/images/TruongHoc/PEM.png" class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <a href="#" class="card-link"><h5 class="card-title">Card title</h5></a> 
                        </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card h-100">
                        <img src="assets/images/TruongHoc/PRIN.png" class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <a href="#" class="card-link"><h5 class="card-title">Card title</h5></a> 
                        </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card h-100">
                        <img src="assets/images/TruongHoc/SAIT.png" class="card-img-top" alt="..." />
                        <div class="card-body">
                            <a href="#" class="card-link"><h5 class="card-title">Card title</h5></a> 
                        </div>
                        </div>
                    </div>
            </div>
            <div class="row row-cols-1 row-cols-md-3 g-4" style={{margin: '50px 150px'}}>
                    <div class="col">
                        <div class="card h-100">
                        <img src="assets/images/TruongHoc/SASK.png" class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <a href="#" class="card-link"><h5 class="card-title">Card title</h5></a> 
                        </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card h-100">
                        <img src="assets/images/TruongHoc/SHERI.png" class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <a href="#" class="card-link"><h5 class="card-title">Card title</h5></a> 
                        </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card h-100">
                        <img src="assets/images/TruongHoc/SPRO.gif" class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <a href="#" class="card-link"><h5 class="card-title">Card title</h5></a> 
                        </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card h-100">
                        <img src="assets/images/TruongHoc/STLA.png" class="card-img-top" alt="..." />
                        <div class="card-body">
                            <a href="#" class="card-link"><h5 class="card-title">Card title</h5></a> 
                        </div>
                        </div>
                    </div>
            </div>
		</div>
	);
};
export default CacTruongDuHoc;
