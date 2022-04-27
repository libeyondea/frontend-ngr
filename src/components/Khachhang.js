import React from 'react';
import Link from 'next/link';
import DSKH from './DSKH';
import Pagination from './Pagination';

const Khachhang = ({ posts }) => {
	return (
		<section className="team-one team-page">
			<div className="container">
				<h3 className="titles-com">
					<span className="titles-holder">KHÁCH HÀNG NEW GOLDEN ROAD</span>
				</h3>
				<div className="row">
					{posts.data.length && posts.data.map((posts, index) => <DSKH post={posts} key={index} />)}
					{/* <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12">
						<div className="team-one__single">
							<div className="team-one__image">
								<img className="img-kh" src="/assets/images/KH_NGR/kh7.jpg" alt="" />
							</div>
							<div className="team-one__content">
								<h2 className="team-one__name">
									<a className="tenkh">Đan Vy</a>
								</h2>
								<p className="team-one__designation">Khách hàng</p>
								<p className="team-one__text">Đang học James Cook University tại Brisbane, Úc.</p>
							</div>
							<div className="team-one__social">
								<a href="#">
									<i className="fab fa-twitter"></i>
								</a>
								<a href="#">
									<i className="fab fa-facebook-square"></i>
								</a>
								<a href="#">
									<i className="fab fa-pinterest-p"></i>
								</a>
								<a href="#">
									<i className="fab fa-instagram"></i>
								</a>
							</div>
						</div>
					</div>
					<div className="col-xl-3 col-lg-6 col-md-6 col-sm-12">
						<div className="team-one__single">
							<div className="team-one__image">
								<img className="img-kh" src="/assets/images/KH_NGR/kh8.jpg" alt="" />
							</div>
							<div className="team-one__content">
								<h2 className="team-one__name">
									<a>Ngân Nguyễn</a>
								</h2>
								<p className="team-one__designation">Khách hàng</p>
								<p className="team-one__text">Đang học Đại Học Le Cordon Bleu tại Adelaide, Úc.</p>
							</div>
							<div className="team-one__social">
								<a href="#">
									<i className="fab fa-twitter"></i>
								</a>
								<a href="#">
									<i className="fab fa-facebook-square"></i>
								</a>
								<a href="#">
									<i className="fab fa-pinterest-p"></i>
								</a>
								<a href="#">
									<i className="fab fa-instagram"></i>
								</a>
							</div>
						</div>
					</div>
					<div className="col-xl-3 col-lg-6 col-md-6 col-sm-12">
						<div className="team-one__single">
							<div className="team-one__image">
								<img className="img-kh" src="/assets/images/KH_NGR/kh9.jpg" alt="" />
							</div>
							<div className="team-one__content">
								<h2 className="team-one__name">
									<a>Linda Đặng</a>
								</h2>
								<p className="team-one__designation">Khách hàng</p>
								<p className="team-one__text">There are many varia of passages of lorem.</p>
							</div>
							<div className="team-one__social">
								<a href="#">
									<i className="fab fa-twitter"></i>
								</a>
								<a href="#">
									<i className="fab fa-facebook-square"></i>
								</a>
								<a href="#">
									<i className="fab fa-pinterest-p"></i>
								</a>
								<a href="#">
									<i className="fab fa-instagram"></i>
								</a>
							</div>
						</div>
					</div>
					<div className="col-xl-3 col-lg-6 col-md-6 col-sm-12">
						<div className="team-one__single">
							<div className="team-one__image">
								<img className="img-kh" src="/assets/images/KH_NGR/kh10.jpg" alt="" />
							</div>
							<div className="team-one__content">
								<h2 className="team-one__name">
									<a>Giang Nguyễn</a>
								</h2>
								<p className="team-one__designation">Khách hàng</p>
								<p className="team-one__text">
									Đã tốt nghiệp Đại Học Le Cordon Bleu hiện đang sống tại Sydney, Úc.
								</p>
							</div>
							<div className="team-one__social">
								<a href="#">
									<i className="fab fa-twitter"></i>
								</a>
								<a href="#">
									<i className="fab fa-facebook-square"></i>
								</a>
								<a href="#">
									<i className="fab fa-pinterest-p"></i>
								</a>
								<a href="#">
									<i className="fab fa-instagram"></i>
								</a>
							</div>
						</div>
					</div>
					<div className="col-xl-3 col-lg-6 col-md-6 col-sm-12">
						<div className="team-one__single">
							<div className="team-one__image">
								<img className="img-kh" src="/assets/images/KH_NGR/kh11.jpg" alt="" />
							</div>
							<div className="team-one__content">
								<h2 className="team-one__name">
									<a>Jessy Huỳnh</a>
								</h2>
								<p className="team-one__designation">Khách hàng</p>
								<p className="team-one__text">
									Đã tốt nghiệp Đại Học Le Cordon Bleu hiện đang làm việc và sinh sống tại Sydney, Úc.
								</p>
							</div>
							<div className="team-one__social">
								<a href="#">
									<i className="fab fa-twitter"></i>
								</a>
								<a href="#">
									<i className="fab fa-facebook-square"></i>
								</a>
								<a href="#">
									<i className="fab fa-pinterest-p"></i>
								</a>
								<a href="#">
									<i className="fab fa-instagram"></i>
								</a>
							</div>
						</div>
					</div>
					<div className="col-xl-3 col-lg-6 col-md-6 col-sm-12">
						<div className="team-one__single">
							<div className="team-one__image">
								<img className="img-kh" src="/assets/images/KH_NGR/kh12.jpg" alt="" />
							</div>
							<div className="team-one__content">
								<h2 className="team-one__name">
									<a>Tân Huỳnh</a>
								</h2>
								<p className="team-one__designation">Khách hàng</p>
								<p className="team-one__text">
									Đã tốt nghiệp Deakin University tại Melbourne hiện đang sinh sống tại Canberra, Úc.
								</p>
							</div>
							<div className="team-one__social">
								<a href="#">
									<i className="fab fa-twitter"></i>
								</a>
								<a href="#">
									<i className="fab fa-facebook-square"></i>
								</a>
								<a href="#">
									<i className="fab fa-pinterest-p"></i>
								</a>
								<a href="#">
									<i className="fab fa-instagram"></i>
								</a>
							</div>
						</div>
					</div>
					<div className="col-xl-3 col-lg-6 col-md-6 col-sm-12">
						<div className="team-one__single">
							<div className="team-one__image">
								<img className="img-kh" src="/assets/images/KH_NGR/kh13.jpg" alt="" />
							</div>
							<div className="team-one__content">
								<h2 className="team-one__name">
									<a>Vy Nguyễn</a>
								</h2>
								<p className="team-one__designation">Khách Hàng</p>
								<p className="team-one__text">
									Hiện đang học lớp 10 trường Forest Lawn High School tại Calgary, Canad.
								</p>
							</div>
							<div className="team-one__social">
								<a href="#">
									<i className="fab fa-twitter"></i>
								</a>
								<a href="#">
									<i className="fab fa-facebook-square"></i>
								</a>
								<a href="#">
									<i className="fab fa-pinterest-p"></i>
								</a>
								<a href="#">
									<i className="fab fa-instagram"></i>
								</a>
							</div>
						</div>
					</div>
					<div className="col-xl-3 col-lg-6 col-md-6 col-sm-12">
						<div className="team-one__single">
							<div className="team-one__image">
								<img className="img-kh" src="/assets/images/KH_NGR/kh14.jpg" alt="" />
							</div>
							<div className="team-one__content">
								<h2 className="team-one__name">
									<a>Đỗ Thị Kim Nhi</a>
								</h2>
								<p className="team-one__designation">Khách Hàng</p>
								<p className="team-one__text">đã tốt nghiệp trường Woodcroft College tại Adelaide, Úc.</p>
							</div>
							<div className="team-one__social">
								<a href="#">
									<i className="fab fa-twitter"></i>
								</a>
								<a href="#">
									<i className="fab fa-facebook-square"></i>
								</a>
								<a href="#">
									<i className="fab fa-pinterest-p"></i>
								</a>
								<a href="#">
									<i className="fab fa-instagram"></i>
								</a>
							</div>
						</div>
					</div> */}
				</div>
			</div>
			<Pagination total={posts?.pagination?.total} limit={6} />
			{/* 	<div className="post-pagination">
				<a href="#">
					<i className="fa fa-angle-double-left"></i>
				</a>
				<a className="active" href="#">
					1
				</a>
				<a href="#">2</a>
				<a href="#">3</a>
				<a href="#">4</a>
				<a href="#">
					<i className="fa fa-angle-double-right"></i>
				</a>
			</div> */}
		</section>
	);
};

export default Khachhang;
