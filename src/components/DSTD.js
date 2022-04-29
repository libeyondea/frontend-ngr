import React from 'react';
import Link from 'next/link';
const DSTD = ({ post }) => {
	return (
		<div className="card-TH">
			<div className="card-header">
				<p className="card-header-TD">{post.title}</p>
			</div>
			<div className="card-body">
				<p className="img-card-TH">
					<img src="/assets/images/TuyenDung/td4.jpg" alt="Vị trí biên dịch" />
				</p>

				<p className="card-text-TH">{post.excerpt}</p>
				<Link href="/td-details">
					<a className="btn btn-primary">Đọc Thêm</a>
				</Link>
			</div>
		</div>
	);
};
export default DSTD;
