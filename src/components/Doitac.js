import React from 'react';
import Link from 'next/link';
import DSDT from './DSDT';
import Pagination from './Pagination';

const Doitac = ({ posts }) => {
	return (
		<section className="team-one team-page">
			<div className="container">
				<h3 className="titles-com">
					<span className="titles-holder">ĐỐI TÁC NEW GOLDEN ROAD</span>
				</h3>
				<div className="row">
					{posts.data.length && posts.data.map((post, index) => <DSDT post={post} key={index} />)}
					{/* 	<div className="col-xl-3 col-lg-6 col-md-6 col-sm-12">
						<div className="team-one__single">
							<div className="team-one__image">
								<img className="img-kh" src="/assets/images/Doitac/Vincent-school.png" alt="" />
							</div>
							<div className="team-one__content">
								<h2 className="team-one__name">
									<Link href="/details-dt">
										<a>St Patrick - St Vincent High School</a>
									</Link>
								</h2>
								<p className="team-one__designation">Đối Tác</p>
								<p className="team-one__text">St Patrick - St Vincent High School.</p>
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
								<img className="img-kh" src="/assets/images/Doitac/bishop-montgomery.jpg" alt="" />
							</div>
							<div className="team-one__content">
								<h2 className="team-one__name">
									<Link href="/details-dt">
										<a>Bishop Montgomery High School</a>
									</Link>
								</h2>
								<p className="team-one__designation">Đối Tác</p>
								<p className="team-one__text">Bishop Montgomery High School.</p>
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
								<img className="img-kh" src="/assets/images/Doitac/mater-dei.jpeg" alt="" />
							</div>
							<div className="team-one__content">
								<h2 className="team-one__name">
									<Link href="/details-dt">
										<a>Mater Dei Catholic High School</a>
									</Link>
								</h2>
								<p className="team-one__designation">Đối Tác</p>
								<p className="team-one__text">Mater Dei Catholic High School.</p>
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
								<img className="img-kh" src="/assets/images/Doitac/cretin-derham.webp" alt="" />
							</div>
							<div className="team-one__content">
								<h2 className="team-one__name">
									<Link href="/details-dt">
										<a>Cretin-Derham Hall High School</a>
									</Link>
								</h2>
								<p className="team-one__designation">Đối Tác</p>
								<p className="team-one__text">Cretin-Derham Hall High Schoo.</p>
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
								<img className="img-kh" src="/assets/images/Doitac/carmel-catholic-highschool.webp" alt="" />
							</div>
							<div className="team-one__content">
								<h2 className="team-one__name">
									<Link href="/details-dt">
										<a>Carmel Catholic High School</a>
									</Link>
								</h2>
								<p className="team-one__designation">Đối Tác</p>
								<p className="team-one__text">Carmel Catholic High School.</p>
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
								<img className="img-kh" src="/assets/images/Doitac/red-bank-catholic.webp" alt="" />
							</div>
							<div className="team-one__content">
								<h2 className="team-one__name">
									<Link href="/details-dt">
										<a>Red Bank Catholic High School</a>
									</Link>
								</h2>
								<p className="team-one__designation">Đối Tác</p>
								<p className="team-one__text">Red Bank Catholic High School.</p>
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
								<img className="img-kh" src="/assets/images/Doitac/st-pius.jpg" alt="" />
							</div>
							<div className="team-one__content">
								<h2 className="team-one__name">
									<Link href="/details-dt">
										<a>St Pius X High School</a>
									</Link>
								</h2>
								<p className="team-one__designation">Đối Tác</p>
								<p className="team-one__text">St Pius X High School.</p>
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

export default Doitac;
