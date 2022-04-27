import React from 'react';
import Link from './Pagination/Link';
const DSDT = ({ posts }) => {
	return (
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
		</div>
	);
};
export default DSDT;
