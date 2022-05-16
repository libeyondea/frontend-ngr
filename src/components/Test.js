import Link from 'next/link';
import Image from './Image';
import React from 'react';
const Test = () => {
	return (
		<div className="wrapper" style={{ backgroundImage: 'url("images/bg-registration-form-2.jpg")' }}>
			<div className="inner">
				<form action>
					<h3>Registration Form</h3>
					<div className="form-group">
						<div className="form-wrapper">
							<label htmlFor>First Name</label>
							<input type="text" className="form-control" />
						</div>
						<div className="form-wrapper">
							<label htmlFor>Last Name</label>
							<input type="text" className="form-control" />
						</div>
					</div>
					<div className="form-wrapper">
						<label htmlFor>Email</label>
						<input type="text" className="form-control" />
					</div>
					<div className="form-wrapper">
						<label htmlFor>Password</label>
						<input type="password" className="form-control" />
					</div>
					<div className="form-wrapper">
						<label htmlFor>Confirm Password</label>
						<input type="password" className="form-control" />
					</div>
					<div className="checkbox">
						<label>
							<input type="checkbox" /> I caccept the Terms of Use &amp; Privacy Policy.
							<span className="checkmark" />
						</label>
					</div>
					dd
					<button>Register Now</button>
				</form>
			</div>
		</div>

		/* https://backend-ngr.herokuapp.com/api/posts?category=khach-hang */
	);
};

export default Test;
