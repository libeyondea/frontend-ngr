import React from 'react';
const DSKH = ({ post }) => {
	console.log(post);
	return (
		<div className="col-xl-3 col-lg-6 col-md-6 col-sm-12">
			<div className="team-one__single">
				<div className="team-one__image">
					<img className="img-kh" src={`${post.image_url}`} alt="" />
				</div>
				<div className="team-one__content">
					<h2 className="team-one__name">
						<a className="tenkh">{post.title}</a>
					</h2>
					<p className="team-one__designation">{post.title}</p>
					<p className="team-one__text">{post.excerpt}</p>
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
export default DSKH;
