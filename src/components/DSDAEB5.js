import React from 'react';
const DSDAEB5= ({post})=>{
    return(
<div className="col mb-4">
					<div className="card-school h-100">
					<a href='/daeb5_details'><img
							src="assets/images/DAEB5/da2.jpg"
							className="card-img-top"
							alt="Trường Bodwell High School"
						/></a>
						<div className="card-body">
							<a href="/daeb5_details" className="card-link">
								<h5 className="card-title" style={{ color: 'black' }}>
								{post.title}{' '}
								</h5>
							</a>
						</div>
					</div>
				</div>
    );
};
export default DSDAEB5;