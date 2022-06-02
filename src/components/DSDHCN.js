import React from 'react';
const DSDHCN = ({ posts }) => {
	return (
		<div className="col mb-4">
			<div className="card-school h-100">
				<a href={`/p/${posts.slug}`}>
					<img src={`${posts.image_url}`} className="card-img-top" alt="Trường Bodwell High School" />
				</a>
				<div className="card-body">
					<a href={`/p/${posts.slug}`} className="card-link">
						<h5 className="card-title" style={{ color: 'black' }}>
							{posts.title}{' '}
						</h5>
					</a>
				</div>
			</div>
		</div>
	);
};
export default DSDHCN;
