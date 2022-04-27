import React from 'react';
const DSCTRG = ({posts})=>{
    return(
<div className="col mb-4">
					<div className="card-school h-100">
					<a href='/DuHocCanada-details'><img
							src="assets/images/TruongHoc/ALBER.png"
							className="card-img-top"
							alt="Trường Bodwell High School"
						/></a>
						<div className="card-body">
							<a href="/DuHocCanada-details" className="card-link">
								<h5 className="card-title" style={{ color: 'black' }}>
                                Trường Alberta University{' '}
								</h5>
							</a>
						</div>
					</div>
				</div>
    );
};
export default DSCTRG;