import Ract from 'react';
import Link from './Pagination/Link';
const DSDTCN = ({ post }) => {
	return (
		<div className="col-xl-3 col-lg-6 col-md-6 col-sm-12">
			<div className="team-one__single">
				<div className="team-one__image">
					{/* <img className="img-kh" src="/assets/images/Doitac/Vincent-school.png" alt="" /> */}
					<img className="img-kh" src={`${post.image_url}`} alt="" />
				</div>
				<div className="team-one__content">
					<h2 className="team-one__name">
						<Link href="/chi-tiet-doi-tac-nuoc-my">
							<a>{post.title}</a>
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
	);
};
export default DSDTCN;
