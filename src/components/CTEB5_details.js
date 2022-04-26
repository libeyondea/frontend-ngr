import React, { useState } from 'react';
import { Slide } from 'react-slideshow-image';

const CTEB5_details = () => {
	return (
		<section>
			<section className="inner-banner-DCMYEB5">
				<div className="container">
					<ul className="list-unstyled thm-breadcrumb">
						<li>
							<a href="/">Trang Chủ</a>
						</li>
						<li className="active">
							<a href="#">Chi Tiết Về Dự án CMD-64</a>
						</li>
					</ul>
					<h2 className="inner-banner-DCMYEB5__title">DỰ ÁN CMD-64</h2>
				</div>
			</section>
			<section className="team-one team-page">
				<div className="phan-dau">
					<a href="/" className="card-link">
						<h5 lassName="card-title" style={{ color: 'red', fontSize: '16px', marginLeft: '30px' }}>
							<p> Trang Chủ </p>
						</h5>
					</a>
					<p
						className="card-title-tt"
						style={{ margintop: '-42px', marginLeft: '108px', color: 'red', fontsize: '15px' }}
					>
						{' '}
						/ Dự án
					</p>
					<p
						className="card-title-ttt"
						style={{ marginTop: '-50px', marginLeft: '165px', color: 'red', fontsize: '15px' }}
					>
						{' '}
						/ Dự án CMB-64 Hillwood Rialto & Sycamore
					</p>
				</div>
				<h1 className="card-title-duan" style={{ fontStyle: '20px', marginTop: '60px' }}>
					{' '}
					Dự án CMB-64 Hillwood Rialto & Sycamore
				</h1>
				<p className="dadt" style={{ color: 'black', textAlign: 'center' }}>
					Dự án đầu tư EB-5
				</p>
				<div className="p2">
					<div>
						<h3 className="TQDA" style={{ marginLeft: '230px', paddingTop: '80px' }}>
							TỔNG QUAN DỰ ÁN
						</h3>
						<p className='hi' style={{marginLeft:'180px', paddingTop:'20px'}}>
							Hillwood Rialto & Sycamore là dự án hợp tác giữa
							<br />
							Trung tâm Khu vực CMB và Hillwood
							<br />
							Development- top 10 công ty phát triển bất động
							<br />
							sản hàng đầu tại Mỹ. CMB và Hillwood có lịch sử
							<br />
							hợp tác lâu năm với những thành công vang dội
							<br />
							đã được minh chứng qua 23 Hợp danh CMB EB-5
							<br />
							khác nhau, trong đó bao gồm dự án nhóm 64.
							<br />
							Tính đến thời điểm hiện nay, đơn I-526 của 17
							<br />
							trong số 23 Hợp danh này đã được chấp thuận.
						</p>
						<img
												src="https://usis.us/timthumb.php?src=https://usis.us/uploads/thumbnail/project/c4e2daaef10602-hillwoodyorkwestdeptford1.jpg&w=360&h=479&zc=1&q=100&s=1"
												alt=""
												className="imgEB5"
												width={480}
												height={280}
											/>
					</div>
				</div>
			</section>
		</section>
	);
};

export default CTEB5_details;
