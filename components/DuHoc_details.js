import React, { useState } from 'react';
import Image from './Image';
const DuHoc_details = () => {
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
						Và Cao Đẳng Các Nước
					</h2>
                </div>   
			</section>
            <div class="row row-cols-1 row-cols-md-3 g-4">
                    <div class="col">
                        <div class="card h-100">
                        <img src="assets/images/TruongHoc/ALBER.png" class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <a href="#" class="card-link"><h5 class="card-title">Card title</h5></a> 
                        </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card h-100">
                        <img src="assets/images/TruongHoc/ALBER.png" class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <a href="#" class="card-link"><h5 class="card-title">Card title</h5></a> 
                        </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card h-100">
                        <img src="assets/images/TruongHoc/ALBER.png" class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <a href="#" class="card-link"><h5 class="card-title">Card title</h5></a> 
                        </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card h-100">
                        <img src="assets/images/TruongHoc/ALBER.png" class="card-img-top" alt="..." />
                        <div class="card-body">
                            <a href="#" class="card-link"><h5 class="card-title">Card title</h5></a> 
                        </div>
                        </div>
                    </div>
            </div>
            
		</div>
	);
};
export default DuHoc_details;
