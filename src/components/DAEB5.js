import React, { useState } from 'react';
import DSDAEB5 from './DSDAEB5';
import Image from './Image';
import Pagination from './Pagination';
const DAEB5 = ({posts}) => {
	return (
		<div style={{ backgroundColor: '#7FCA6E' }}>
			<section className="inner-banner-DABE5">
				<div className="container">
					<h2 className="inner-banner-DABE5__title">DỰ ÁN ĐẦU TƯ EB-5</h2>
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
			<div id="crumbs" className="crumbss-school" style={{ paddingTop: '10px', color: '#E2E9E1' }}>
				<span typeof="v:Breadcrumb">
					<a className="crumbs-home" href="https://newgoldenroad.com" style={{ color: '#E2E9E1' }}>
						Trang Chủ
					</a>
				</span>
				&nbsp;&nbsp;
				<span className="delimiter">/</span>
				&nbsp;&nbsp;
				<span typeof="v:Breadcrumb">
					<a href="https://newgoldenroad.com/chuyen-muc/hoat-dong-cong-ty/" style={{ color: '#E2E9E1' }}>
					DỰ ÁN ĐẦU TƯ EB-5
					</a>
				</span>
				&nbsp;&nbsp;
				<span className="delimiter">/</span>
				&nbsp;&nbsp;
				<span className="current">[Các Trường Trung Học Canada]</span>
			</div>
			<h1 className="card-title-duan"> DỰ ÁN ĐẦU TƯ EB-5</h1>
			<h3 className="card-title-duan1">Với kinh nghiệm làm việc lâu năm trong lĩnh vực đầu tư EB-5 và có CEO từng làm<br/>
			 việc trên 25 năm ở Mỹ - NEW GOLDEN ROAD sẽ lựa chọn những dự án đầu tư EB-5 tốt nhất, khả<br/> năng hoàn vốn cao nhất cho nhà đầu tư.</h3>
		
			 <div className="row row-cols-1 row-cols-md-4 g-3" style={{ margin: '50px 150px' }}>
			{posts.data.length && posts.data.map((post, index) => <DSDAEB5 post={post} key={index} />)}
			</div>	

			<Pagination total={posts?.pagination?.total} limit={6} />	
		</div>
	);
};
export default DAEB5;
