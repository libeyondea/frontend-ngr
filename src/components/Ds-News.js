import React from 'react';
const DS_NEWS = ({ post }) => {
	return (
		<>
			<div className="col-lg-4">
				<div className="blog-one__single">
					<div className="blog-one__image">
						<img src={`${post.image_url}`} alt="" />

						<a className="blog-one__plus" href={`/p/${post.slug}`}>
							<i className="kipso-icon-plus-symbol"></i>
						</a>
					</div>
					<div className="blog-one__content text-center">
						<div className="blog-one__meta">
							<a
								data-toggle="tooltip"
								data-placement="top"
								title=""
								href="#"
								data-original-title="Posted On Jan 19"
							>
								<i className="fa fa-calendar-alt"></i>
							</a>
							<a data-toggle="tooltip" data-placement="top" title="" href="#" data-original-title="No Comments">
								<i className="fa fa-comments"></i>
							</a>
							<a data-toggle="tooltip" data-placement="top" title="" href="#" data-original-title="Posted By Admin">
								<i className="fa fa-user"></i>
							</a>
						</div>
						<h2 className="blog-one__title">
							<a href={`/p/${post.slug}`}>{post.title}</a>
						</h2>
						<p className="blog-one__text">{post.excerpt}</p>
						<a className="blog-one__link" href={`/p/${post.slug}`}>
							Read More
						</a>
					</div>
				</div>
			</div>
		</>
	);
};
export default DS_NEWS;
