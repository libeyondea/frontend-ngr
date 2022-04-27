import React from 'react';
import DSCTRG from './DSCTRG';
import Image from './Image';
import Pagination from './Pagination';
const CacTruongDuHoc = ({posts}) => {
	return (
		<div style={{ backgroundColor: '#7FCA6E' }}>
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
						Du Học Canada
					</a>
				</span>
				&nbsp;&nbsp;
				<span className="delimiter">/</span>
				&nbsp;&nbsp;
				<span className="current">[Các Trường Đại Học Và Cao Đẳng Canada]</span>
			</div>
			<h3 className="title-comm">
				<span className="title-holder">MỘT SỐ TRƯỜNG ĐẠI HỌC &amp; CAO ĐẲNG</span>
			</h3>

			<div className="row row-cols-1 row-cols-md-4 g-3" style={{ margin: '50px 150px' }}>
			{posts.data.length && posts.data.map((post, index) => <DSCTRG post={post} key={index} />)}
			</div>	

			<Pagination total={posts?.pagination?.total} limit={6} />	
		</div>
	);
};
export default CacTruongDuHoc;
