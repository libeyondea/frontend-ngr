import Link from 'next/link';
import Image from '../components/Image';

const Customer = ({ khdh }) => {
	console.log('khdh', khdh);
	return (
		<div>
			<section className="course-one__top-title home-two">
				<div className="container">
					<div className="block-title mb-0">
						<h2 className="block-title__title">KHÁCH HÀNG TẠI DU HỌC TÂN CON ĐƯỜNG VÀNG</h2>
					</div>
				</div>
			</section>
			<section className="course-one course-one__teacher-details home-one">
				<div className="container">
					<div className="course-one__carousel">
						<div className="row">
							{khdh.data.length &&
								khdh.data.map((khdh, index) => (
									<div className="col-12 col-md-3" key={index}>
										<div className="card">
											<Image
												src={`${khdh.avatar_url}`}
												className="card-img-top"
												alt="..."
												isBlur
												width={300}
												height={300}
											/>
											<div className="card-body">
												<div className="card-text">{khdh.content}</div>
											</div>
										</div>
									</div>
								))}
							{/* <div className="col-12 col-md-3">
								<div className="card">
									<Image
										src="/assets/images/kh4.jpg"
										className="card-img-top"
										alt="..."
										isBlur
										width={300}
										height={300}
									/>

									<div className="card-body">
										<div className="card-text">
											Khách hàng đậu Visa định cư Mỹ tại Du học Tân Con Đường Vàng.
										</div>
									</div>
								</div>
							</div>
							<div className="col-12 col-md-3">
								<div className="card">
									<Image
										src="/assets/images/kh5.jpg"
										className="card-img-top"
										alt="..."
										isBlur
										width={300}
										height={300}
									/>

									<div className="card-body">
										<div className="card-text">
											Khách hàng đậu Visa định cư Mỹ tại Du học Tân Con Đường Vàng.
										</div>
									</div>
								</div>
							</div>
							<div className="col-12 col-md-3">
								<div className="card">
									<Image
										src="/assets/images/kh6.jpg"
										className="card-img-top"
										alt="..."
										isBlur
										width={300}
										height={300}
									/>

									<div className="card-body">
										<div className="card-text">
											Khách hàng đậu Visa định cư Mỹ tại Du học Tân Con Đường Vàng.
										</div>
									</div>
								</div>
							</div> */}
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};
export default Customer;
