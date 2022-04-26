import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import { Slide } from 'react-slideshow-image';
const ModalVideo = dynamic(() => import('react-modal-video'), { ssr: false });

const CTEB5 = () => {
	const [isOpen, setisopen] = useState(false);
	const openModal = () => {
		setisopen(true);
	};

	const properties = {
		duration: 3000,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		indicators: false,
		arrows: false,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3
				}
			},
			{
				breakpoint: 500,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2
				}
			}
		]
	};

	return (
		<section>
			<section className="inner-banner-DCMYEB5">
				<div className="container">
					<ul className="list-unstyled thm-breadcrumb">
						<li>
							<a href="/">Trang Chủ</a>
						</li>
						<li className="active">
							<a href="#">Chi Tiết Về Định Cư</a>
						</li>
					</ul>
					<h2 className="inner-banner-DCMYEB5__title">ĐỊNH CƯ MỸ</h2>
				</div>
			</section>
		<section className="team-one team-page">
			<div className="phan-dau">
				<a href="/" className="card-link">
					<h5 lassName="card-title" style={{ color: 'red', fontSize: '16px', marginLeft: '30px' }}>
						<p> Trang Chủ </p>
					</h5>
				</a>
				<p className="card-title-tt" style={{ margintop: '-42px', marginLeft: '105px', color: 'red', fontsize: '15px' }}>
					{' '}
					/ ĐẦU TƯ ĐỊNH CƯ MỸ THEO CHƯƠNG TRÌNH EB-5
				</p>
			</div>
			<h1 className="card-title-dong1"> ĐẦU TƯ ĐỊNH CƯ MỸ THEO CHƯƠNG TRÌNH EB-5</h1>
			<h3 className="card-title-dong2">EB-5 là chương trình gì?</h3>
			<div className="row">
				<div className="col-6">
					<div className="nd-CTEB5">
						<p>
							<i
								className="fa fa-check"
								style={{ color: 'red', fontSize: '18px', marginLeft: '-30px', marginRight: '15px' }}
							/>
							Chương trình EB-5 (viết tắt của Employment Base Fifth) là chương trình xin Thẻ xanh Mỹ an toàn và
							nhanh nhất dành cho người nước ngoài đến Mỹ theo hình thức đầu tư.
						</p>

						<p>
							<i
								className="fa fa-check"
								style={{ color: 'red', fontSize: '18px', marginLeft: '-30px', marginRight: '15px' }}
							/>
							Chương trình được Chính phủ Mỹ khởi xướng từ năm 1990 và đã giúp cải thiện kinh tế và công việc nhiều
							địa phương ở Mỹ, nơi có tỷ lệ thất nghiệp cao hoặc kinh tế chậm phát triển.
						</p>

						<p>
							<i
								className="fa fa-check"
								style={{ color: 'red', fontSize: '18px', marginLeft: '-30px', marginRight: '15px' }}
							/>
							Năm 1992, Quốc hội thành lập Chương trình Nhà đầu tư Nhập cư, còn được gọi là Chương trình Trung tâm
							Vùng (Regional Centers), dành thị thực EB-5 cho những người tham gia đầu tư vào các doanh nghiệp
							thương mại liên kết với các trung tâm khu vực đã được Sở Di trú & Nhập tịch Mỹ phê duyệt dựa trên các
							đề xuất thúc đẩy tăng trưởng kinh tế. Cho phép các dự án nằm trong khu vực khuyến khích đầu tư (TEA)
							thu hút vốn đầu tư từ nhiều quốc gia trên thế giới, trong đó có Việt Nam.
						</p>

						<p>
							<i
								className="fa fa-check"
								style={{ color: 'red', fontSize: '18px', marginLeft: '-30px', marginRight: '15px' }}
							/>
							Mỗi năm, Chính phủ Mỹ cấp 10.000 visa theo diện EB-5, trong đó có 3.000 visa theo diện đầu tư uỷ thác
							thông qua Regional Centers (vốn đầu tư 800 ngàn USD/suất).
						</p>

						<p>
							<i
								className="fa fa-check"
								style={{ color: 'red', fontSize: '18px', marginLeft: '-30px', marginRight: '15px' }}
							/>
							Thời gian chấp nhận đơn EB-5 và cấp Thẻ xanh Mỹ cho nhà đầu tư: khoảng 3 - 4 năm.
						</p>

						<p>
							<i
								className="fa fa-check"
								style={{ color: 'red', fontSize: '18px', marginLeft: '-30px', marginRight: '15px' }}
							/>
							Sau 02 năm có Thẻ xanh có điều kiện, Luật sư USIS sẽ giúp nhà đầu tư làm đơn nộp lên Sở Di trú và Nhập
							tịch Mỹ xin xóa điều kiện để được cấp Thẻ xanh Mỹ vĩnh viễn.
						</p>
					</div>
				</div>
				<div className="col-6">
					<div className="video">
						<div className="my-auto">
							<ModalVideo
								channel="youtube"
								isOpen={isOpen}
								videoId="IOGn-QmVc8k"
								onClose={() => setisopen(false)}
							/>
							<div onClick={openModal} className="media-play-icon">
								<i className="fas fa-play media-icon" />
							</div>
						</div>
					</div>
				</div>
				<div className="hinhvideo">
					<img src="https://i.ytimg.com/vi_webp/IOGn-QmVc8k/maxresdefault.webp" width={550} height={390} />
				</div>
			</div>
			<h1 className="card-title-dong3" style={{ TextAlign: 'center' }}>
				Lợi ích từ chương trình EB-5?
			</h1>
			<div className="row">
				<div className="row-nd">
					<div className="col-4">
						<div className="hinhPP">
							<img src="assets/images/anhPassPort.png" width={390} height={690} />
						</div>
					</div>
					<div className="col-4">
						<div className="CO">
							<h3 className="namco">5 CÓ</h3>
							<div>
								<p style={{ fontSize: '16px' }}>
									<i
										className="fa fa-check"
										style={{ color: 'white', fontSize: '16px', marginLeft: '20px', marginRight: '15px' }}
									></i>
									Mức đầu tư thấp nhất
								</p>
								<p style={{ fontSize: '16px' }}>
									<i
										className="fa fa-check"
										style={{ color: 'white', fontSize: '16px', marginLeft: '20px', marginRight: '15px' }}
									></i>
									Chi phí hợp lý nhất (thấp hơn du học)
								</p>
								<p style={{ fontSize: '16px' }}>
									<i
										className="fa fa-check"
										style={{ color: 'white', fontSize: '16px', marginLeft: '20px', marginRight: '15px' }}
									></i>
									Thời gian nhận Thẻ Xanh nhanh chóng
									<br />
									<a className="chu" style={{ marginLeft: '50px' }}>
										(khoảng 3 - 4 năm)
									</a>
								</p>
								<p style={{ fontSize: '16px' }}>
									<i
										className="fa fa-check"
										style={{ color: 'white', fontSize: '16px', marginLeft: '20px', marginRight: '15px' }}
									></i>
									Tỉ lệ chấp thuận cao nhất hiện nay so
									<br />
									<a className="chu" style={{ marginLeft: '50px' }}></a> với các chương trình định cư khác (92%)
								</p>
								<p style={{ fontSize: '16px' }}>
									<i
										className="fa fa-check"
										style={{ color: 'white', fontSize: '16px', marginLeft: '20px', marginRight: '15px' }}
									></i>
									Thủ tục đơn giản và nhanh nhất
								</p>
							</div>
						</div>
					</div>
					<div className="col-4">
						<div className="K">
							<h3 className="namK">5 KHÔNG</h3>
							<div>
								<p>
									<i
										className="fa fa-times"
										aria-hidden="true"
										style={{ color: 'white', fontSize: '16px', marginLeft: '20px', marginRight: '15px' }}
									></i>
									Không yêu cầu tiếng Anh
								</p>
								<p>
									<i
										className="fa fa-times"
										aria-hidden="true"
										style={{ color: 'white', fontSize: '16px', marginLeft: '20px', marginRight: '15px' }}
									></i>
									Không yêu cầu kinh nghiệm kinh doanh
								</p>
								<p>
									<i
										className="fa fa-times"
										aria-hidden="true"
										style={{ color: 'white', fontSize: '16px', marginLeft: '20px', marginRight: '15px' }}
									></i>
									Không xét trình độ học vấn
								</p>
								<p>
									<i
										className="fa fa-times"
										aria-hidden="true"
										style={{ color: 'white', fontSize: '16px', marginLeft: '20px', marginRight: '15px' }}
									></i>
									Không ràng buộc sinh sống tại Mỹ
								</p>
								<p>
									<i
										className="fa fa-times"
										aria-hidden="true"
										style={{ color: 'white', fontSize: '16px', marginLeft: '20px', marginRight: '15px' }}
									></i>
									Không yêu cầu trực tiếp điều hành kinh doanh
								</p>
							</div>
						</div>
					</div>
					<div>
						<h3 className="chu9d" style={{ marginTop: '25px' }}>
							{' '}
							9 ĐƯỢC{' '}
						</h3>
					</div>
					<div className="row-9d">
						<div className="col-6">
							<div className="chindT" style={{ marginTop: '25px' }}>
								<a style={{ fontSize: '16px' }}>
									<i
										className="fa fa-check"
										style={{ color: 'red', fontSize: '16px', marginLeft: '20px', marginRight: '15px' }}
									></i>
									Tự do sinh sống, làm việc, kinh doanh
									<br />
									<a className="chu" style={{ marginLeft: '50px' }}></a> bất cứ nơi nào tại Mỹ
								</a>
								<br />
								<a style={{ fontSize: '16px' }}>
									<i
										className="fa fa-check"
										style={{ color: 'red', fontSize: '16px', marginLeft: '20px', marginRight: '15px' }}
									></i>
									Tự do ra vào Mỹ
								</a>
								<br />
								<a style={{ fontSize: '16px' }}>
									<i
										className="fa fa-check"
										style={{ color: 'red', fontSize: '16px', marginLeft: '20px', marginRight: '15px' }}
									></i>
									Có song tịch
								</a>
								<br />
								<a style={{ fontSize: '16px' }}>
									<i
										className="fa fa-check"
										style={{ color: 'red', fontSize: '16px', marginLeft: '20px', marginRight: '15px' }}
									></i>
									Bảo lãnh người thân
								</a>
								<br />
								<a style={{ fontSize: '16px' }}>
									<i
										className="fa fa-check"
										style={{ color: 'red', fontSize: '16px', marginLeft: '20px', marginRight: '15px' }}
									></i>
									Hoàn vốn 100% sau 05 năm
								</a>
							</div>
						</div>
						<div className="col-6">
							<div className="chindP" style={{ marginTop: '-205px' }}>
								<a style={{ fontSize: '16px' }}>
									<i
										className="fa fa-check"
										style={{ color: 'red', fontSize: '16px', marginLeft: '20px', marginRight: '15px' }}
									></i>
									Duy trì công việc và tài sản tại Việt Nam
								</a>
								<br />
								<a style={{ fontSize: '16px' }}>
									<i
										className="fa fa-check"
										style={{ color: 'red', fontSize: '16px', marginLeft: '20px', marginRight: '15px' }}
									></i>
									Miễn học phí tiểu học & trung học, <br />
									<a className="chu" style={{ marginLeft: '50px' }}></a>học phí đại học bằng 1/3 so với du học
									sinh
								</a>
								<br />
								<a style={{ fontSize: '16px' }}>
									<i
										className="fa fa-check"
										style={{ color: 'red', fontSize: '16px', marginLeft: '20px', marginRight: '15px' }}
									></i>
									Cơ hội kinh doanh rộng mở
								</a>
								<br />
								<a style={{ fontSize: '16px' }}>
									<i
										className="fa fa-check"
										style={{ color: 'red', fontSize: '16px', marginLeft: '20px', marginRight: '15px' }}
									></i>
									Hưởng mọi quyền lợi của một công dân Mỹ
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="row">
				<div className="col-6">
					<div className="rowT">
						<div className="block_img ">
							<img alt className="img-loaded" src="assets/images/DinhCuMy/img-14.jpg" />
						</div>
						<h2 className="DTDT">ĐỐI TƯỢNG ĐẦU TƯ</h2>
						<div className="block_desc">
							<p>
								Tất cả các nhà đầu tư có khả năng tài chính, có nhu cầu định
								<br /> cư Mỹ
								<br />
								Không giới hạn về độ tuổi
								<br />
								Không yêu cầu ngoại ngữ
								<br />
								Không yêu cầu có công ty kinh doanh hoặc kinh nghiệm quản
								<br /> lý doanh nghiệp
								<br />
								Không cần trực tiếp quản lý công việc đầu tư hàng ngày.
							</p>
						</div>
					</div>
				</div>
				<div className="col-6">
					<div className="rowP">
						<div className="block_img ">
							<img alt className="img-loaded" src="assets/images/DinhCuMy/img-15.jpg" />
						</div>
						<h2 className="DKDT">ĐIỀU KIỆN ĐẦU TƯ</h2>
						<p style={{ marginLeft: '80px' }}>
							Chứng minh nguồn gốc số tiền đầu tư (800,000 USD/suất đầu
							<br /> tư trong vùng TEA; hoặc 1,050,000 USD/suất đầu tư ngoài
							<br /> vùng TEA) từ:
						</p>
						<div className="bacham" style={{ marginLeft: '110px' }}>
							<p style={{ fontSize: '16px' }}>
								<i
									className="fa fa-circle"
									aria-hidden="true"
									style={{ color: 'white', fontSize: '10px', marginLeft: '20px', marginRight: '15px' }}
								></i>
								Thu nhập từ lợi nhuận doanh nghiệp
							</p>
							<p style={{ fontSize: '16px' }}>
								<i
									className="fa fa-circle"
									aria-hidden="true"
									style={{ color: 'white', fontSize: '10px', marginLeft: '20px', marginRight: '15px' }}
								></i>
								Thu nhập cá nhân: tiền lương, tặng, cho, thừa kế…
							</p>
							<p style={{ fontSize: '16px' }}>
								<i
									className="fa fa-circle"
									aria-hidden="true"
									style={{ color: 'white', fontSize: '10px', marginLeft: '20px', marginRight: '15px' }}
								></i>
								Từ bán bất động sản, chứng khoán, cổ phiếu…
							</p>
						</div>
					</div>
				</div>
			</div>
			<div>
				<h2 className="LoaiHinhDT" style={{ color: 'black', textAlign: 'center', padding: '100px' }}>
					CÁC LOẠI HÌNH ĐẦU TƯ
				</h2>
				<p className="dautu" style={{ color: 'black', marginLeft: '395px', marginTop: '-70px' }}>
					<i
						className="fa fa-circle"
						aria-hidden="true"
						style={{ color: 'black', fontSize: '8px', marginLeft: '20px', marginRight: '15px' }}
					></i>
					Đầu tư uỷ thác (gián tiếp): Thông qua Trung tâm Vùng (Regional Centers), Nhà đầu tư đầu tư
					<br />
					<a className="congty" style={{ marginLeft: '43px' }}>
						vào công ty hoặc dự án được sự chấp thuận của Chính phủ Mỹ với vốn đầu tư 800,000 USD/suất
						<br />{' '}
					</a>
					</p>
					<p
						className="card-title-tt"
						style={{ margintop: '-42px', marginLeft: '105px', color: 'red', fontsize: '15px' }}
					>
						{' '}
						/ ĐẦU TƯ ĐỊNH CƯ MỸ THEO CHƯƠNG TRÌNH EB-5
					</p>
				</div>
				<h1 className="card-title-dong1"> ĐẦU TƯ ĐỊNH CƯ MỸ THEO CHƯƠNG TRÌNH EB-5</h1>
				<h3 className="card-title-dong2">EB-5 là chương trình gì?</h3>
				<div className="row">
					<div className="col-6">
						<div className="nd-CTEB5">
							<p>
								<i
									className="fa fa-check"
									style={{ color: 'red', fontSize: '18px', marginLeft: '-30px', marginRight: '15px' }}
								/>
								Chương trình EB-5 (viết tắt của Employment Base Fifth) là chương trình xin Thẻ xanh Mỹ an toàn và
								nhanh nhất dành cho người nước ngoài đến Mỹ theo hình thức đầu tư.
							</p>

							<p>
								<i
									className="fa fa-check"
									style={{ color: 'red', fontSize: '18px', marginLeft: '-30px', marginRight: '15px' }}
								/>
								Chương trình được Chính phủ Mỹ khởi xướng từ năm 1990 và đã giúp cải thiện kinh tế và công việc
								nhiều địa phương ở Mỹ, nơi có tỷ lệ thất nghiệp cao hoặc kinh tế chậm phát triển.
							</p>

							<p>
								<i
									className="fa fa-check"
									style={{ color: 'red', fontSize: '18px', marginLeft: '-30px', marginRight: '15px' }}
								/>
								Năm 1992, Quốc hội thành lập Chương trình Nhà đầu tư Nhập cư, còn được gọi là Chương trình Trung
								tâm Vùng (Regional Centers), dành thị thực EB-5 cho những người tham gia đầu tư vào các doanh
								nghiệp thương mại liên kết với các trung tâm khu vực đã được Sở Di trú & Nhập tịch Mỹ phê duyệt
								dựa trên các đề xuất thúc đẩy tăng trưởng kinh tế. Cho phép các dự án nằm trong khu vực khuyến
								khích đầu tư (TEA) thu hút vốn đầu tư từ nhiều quốc gia trên thế giới, trong đó có Việt Nam.
							</p>

							<p>
								<i
									className="fa fa-check"
									style={{ color: 'red', fontSize: '18px', marginLeft: '-30px', marginRight: '15px' }}
								/>
								Mỗi năm, Chính phủ Mỹ cấp 10.000 visa theo diện EB-5, trong đó có 3.000 visa theo diện đầu tư uỷ
								thác thông qua Regional Centers (vốn đầu tư 800 ngàn USD/suất).
							</p>

							<p>
								<i
									className="fa fa-check"
									style={{ color: 'red', fontSize: '18px', marginLeft: '-30px', marginRight: '15px' }}
								/>
								Thời gian chấp nhận đơn EB-5 và cấp Thẻ xanh Mỹ cho nhà đầu tư: khoảng 3 - 4 năm.
							</p>

							<p>
								<i
									className="fa fa-check"
									style={{ color: 'red', fontSize: '18px', marginLeft: '-30px', marginRight: '15px' }}
								/>
								Sau 02 năm có Thẻ xanh có điều kiện, Luật sư USIS sẽ giúp nhà đầu tư làm đơn nộp lên Sở Di trú và
								Nhập tịch Mỹ xin xóa điều kiện để được cấp Thẻ xanh Mỹ vĩnh viễn.
							</p>
						</div>
					</div>
					<div className="col-6">
						<div className="video">
							<div className="my-auto">
								<ModalVideo
									channel="youtube"
									isOpen={isOpen}
									videoId="IOGn-QmVc8k"
									onClose={() => setisopen(false)}
								/>
								<div onClick={openModal} className="media-play-icon">
									<i className="fas fa-play media-icon" />
								</div>
							</div>
						</div>
					</div>
					<div className="hinhvideo">
						<img src="https://i.ytimg.com/vi_webp/IOGn-QmVc8k/maxresdefault.webp" width={550} height={390} />
					</div>
				</div>
				<h1 className="card-title-dong3" style={{ TextAlign: 'center' }}>
					Lợi ích từ chương trình EB-5?
				</h1>
				<div className="row">
					<div className="row-nd">
						<div className="col-4">
							<div className="hinhPP">
								<img src="assets/images/anhPassPort.png" width={390} height={690} />
							</div>
						</div>
						<div className="col-4">
							<div className="CO">
								<h3 className="namco">5 CÓ</h3>
								<div>
									<p style={{ fontSize: '16px' }}>
										<i
											className="fa fa-check"
											style={{ color: 'white', fontSize: '16px', marginLeft: '20px', marginRight: '15px' }}
										></i>
										Mức đầu tư thấp nhất
									</p>
									<p style={{ fontSize: '16px' }}>
										<i
											className="fa fa-check"
											style={{ color: 'white', fontSize: '16px', marginLeft: '20px', marginRight: '15px' }}
										></i>
										Chi phí hợp lý nhất (thấp hơn du học)
									</p>
									<p style={{ fontSize: '16px' }}>
										<i
											className="fa fa-check"
											style={{ color: 'white', fontSize: '16px', marginLeft: '20px', marginRight: '15px' }}
										></i>
										Thời gian nhận Thẻ Xanh nhanh chóng
										<br />
										<a className="chu" style={{ marginLeft: '50px' }}>
											(khoảng 3 - 4 năm)
										</a>
									</p>
									<p style={{ fontSize: '16px' }}>
										<i
											className="fa fa-check"
											style={{ color: 'white', fontSize: '16px', marginLeft: '20px', marginRight: '15px' }}
										></i>
										Tỉ lệ chấp thuận cao nhất hiện nay so
										<br />
										<a className="chu" style={{ marginLeft: '50px' }}></a> với các chương trình định cư khác
										(92%)
									</p>
									<p style={{ fontSize: '16px' }}>
										<i
											className="fa fa-check"
											style={{ color: 'white', fontSize: '16px', marginLeft: '20px', marginRight: '15px' }}
										></i>
										Thủ tục đơn giản và nhanh nhất
									</p>
								</div>
							</div>
						</div>
						<div className="col-4">
							<div className="K">
								<h3 className="namK">5 KHÔNG</h3>
								<div>
									<p>
										<i
											className="fa fa-times"
											aria-hidden="true"
											style={{ color: 'white', fontSize: '16px', marginLeft: '20px', marginRight: '15px' }}
										></i>
										Không yêu cầu tiếng Anh
									</p>
									<p>
										<i
											className="fa fa-times"
											aria-hidden="true"
											style={{ color: 'white', fontSize: '16px', marginLeft: '20px', marginRight: '15px' }}
										></i>
										Không yêu cầu kinh nghiệm kinh doanh
									</p>
									<p>
										<i
											className="fa fa-times"
											aria-hidden="true"
											style={{ color: 'white', fontSize: '16px', marginLeft: '20px', marginRight: '15px' }}
										></i>
										Không xét trình độ học vấn
									</p>
									<p>
										<i
											className="fa fa-times"
											aria-hidden="true"
											style={{ color: 'white', fontSize: '16px', marginLeft: '20px', marginRight: '15px' }}
										></i>
										Không ràng buộc sinh sống tại Mỹ
									</p>
									<p>
										<i
											className="fa fa-times"
											aria-hidden="true"
											style={{ color: 'white', fontSize: '16px', marginLeft: '20px', marginRight: '15px' }}
										></i>
										Không yêu cầu trực tiếp điều hành kinh doanh
									</p>
								</div>
							</div>
						</div>
						<div>
							<h3 className="chu9d" style={{ marginTop: '25px' }}>
								{' '}
								9 ĐƯỢC{' '}
							</h3>
						</div>
						<div className="row-9d">
							<div className="col-6">
								<div className="chindT" style={{ marginTop: '25px' }}>
									<a style={{ fontSize: '16px' }}>
										<i
											className="fa fa-check"
											style={{ color: 'red', fontSize: '16px', marginLeft: '20px', marginRight: '15px' }}
										></i>
										Tự do sinh sống, làm việc, kinh doanh
										<br />
										<a className="chu" style={{ marginLeft: '50px' }}></a> bất cứ nơi nào tại Mỹ
									</a>
									<br />
									<a style={{ fontSize: '16px' }}>
										<i
											className="fa fa-check"
											style={{ color: 'red', fontSize: '16px', marginLeft: '20px', marginRight: '15px' }}
										></i>
										Tự do ra vào Mỹ
									</a>
									<br />
									<a style={{ fontSize: '16px' }}>
										<i
											className="fa fa-check"
											style={{ color: 'red', fontSize: '16px', marginLeft: '20px', marginRight: '15px' }}
										></i>
										Có song tịch
									</a>
									<br />
									<a style={{ fontSize: '16px' }}>
										<i
											className="fa fa-check"
											style={{ color: 'red', fontSize: '16px', marginLeft: '20px', marginRight: '15px' }}
										></i>
										Bảo lãnh người thân
									</a>
									<br />
									<a style={{ fontSize: '16px' }}>
										<i
											className="fa fa-check"
											style={{ color: 'red', fontSize: '16px', marginLeft: '20px', marginRight: '15px' }}
										></i>
										Hoàn vốn 100% sau 05 năm
									</a>
								</div>
							</div>
							<div className="col-6">
								<div className="chindP" style={{ marginTop: '-205px' }}>
									<a style={{ fontSize: '16px' }}>
										<i
											className="fa fa-check"
											style={{ color: 'red', fontSize: '16px', marginLeft: '20px', marginRight: '15px' }}
										></i>
										Duy trì công việc và tài sản tại Việt Nam
									</a>
									<br />
									<a style={{ fontSize: '16px' }}>
										<i
											className="fa fa-check"
											style={{ color: 'red', fontSize: '16px', marginLeft: '20px', marginRight: '15px' }}
										></i>
										Miễn học phí tiểu học & trung học, <br />
										<a className="chu" style={{ marginLeft: '50px' }}></a>học phí đại học bằng 1/3 so với du
										học sinh
									</a>
									<br />
									<a style={{ fontSize: '16px' }}>
										<i
											className="fa fa-check"
											style={{ color: 'red', fontSize: '16px', marginLeft: '20px', marginRight: '15px' }}
										></i>
										Cơ hội kinh doanh rộng mở
									</a>
									<br />
									<a style={{ fontSize: '16px' }}>
										<i
											className="fa fa-check"
											style={{ color: 'red', fontSize: '16px', marginLeft: '20px', marginRight: '15px' }}
										></i>
										Hưởng mọi quyền lợi của một công dân Mỹ
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
				<section className="u011 block2 wow">
					<div className="block">
						<div className="block_item block_item_left">
							<div className="block_img ">
								<img alt className="img-loaded" src="assets/images/DinhCuMy/img-14.jpg" />
							</div>
							<div className="display-table">
								<div className="table-cell" style={{ height: 405 }}>
									<div className="block_text">
										<h2 className="block_title">Đối tượng đầu tư</h2>
										<div className="block_desc">
											Tất cả các nhà đầu tư có khả năng tài chính, có nhu cầu định cư Mỹ
											<br />
											Không giới hạn về độ tuổi
											<br />
											Không yêu cầu ngoại ngữ
											<br />
											Không yêu cầu có công ty kinh doanh hoặc kinh nghiệm quản lý doanh nghiệp
											<br />
											Không cần trực tiếp quản lý công việc đầu tư hàng ngày.
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="block_item block_item_right">
							<div className="block_img ">
								<img alt className="img-loaded" src="assets/images/DinhCuMy/img-15.jpg" />
							</div>
							<div className="display-table">
								<div className="table-cell" style={{ height: 405 }}>
									<div className="block_text">
										<h2 className="block_title">Điều kiện đầu tư</h2>
										<div className="block_desc entry-content">
											Chứng minh nguồn gốc số tiền đầu tư (500 ngàn USD hoặc 1 triệu USD) từ:
											<ul>
												<li>Thu nhập từ lợi nhuận doanh nghiệp</li>
												<li>Thu nhập cá nhân: tiền lương, tặng, cho, thừa kế…</li>
												<li>Từ bán bất động sản, chứng khoán, cổ phiếu…</li>
											</ul>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				<div>
					<h2 className="LoaiHinhDT" style={{ color: 'black', textAlign: 'center', padding: '100px' }}>
						CÁC LOẠI HÌNH ĐẦU TƯ
					</h2>
					<p className="dautu" style={{ color: 'black', marginLeft: '395px', marginTop: '-70px' }}>
						<i
							className="fa fa-circle"
							aria-hidden="true"
							style={{ color: 'black', fontSize: '8px', marginLeft: '20px', marginRight: '15px' }}
						></i>
						Đầu tư uỷ thác (gián tiếp): Thông qua Trung tâm Vùng (Regional Centers), Nhà đầu tư đầu tư
						<br />
						<a className="congty" style={{ marginLeft: '43px' }}>
							vào công ty hoặc dự án được sự chấp thuận của Chính phủ Mỹ với vốn đầu tư 800,000 USD/suất
							<br />{' '}
						</a>
						<a className="congty" style={{ marginLeft: '43px' }}>
							đầu tư trong vùng TEA; 1,050,000 USD/suất đầu tư ngoài vùng TEA.
						</a>
					</p>
					<h2 className="DKTT" style={{ color: 'black', textAlign: 'center', padding: '70px' }}>
						ĐIỀU KIỆN THƯỜNG TRÚ
					</h2>
					<p className="dautu" style={{ color: 'black', marginLeft: '395px', marginTop: '-40px' }}>
						<a>
							<i
								className="fa fa-circle"
								aria-hidden="true"
								style={{ color: 'black', fontSize: '8px', marginLeft: '20px', marginRight: '15px' }}
							></i>
							Thẻ Xanh được cấp cho cả gia đình lần đầu có giá trị 2 năm
						</a>
						<br />
						<a>
							<i
								className="fa fa-circle"
								aria-hidden="true"
								style={{ color: 'black', fontSize: '8px', marginLeft: '20px', marginRight: '15px' }}
							></i>
							Hưởng quyền lợi như một thường trú nhân
						</a>
						<br />
						<a>
							<i
								className="fa fa-circle"
								aria-hidden="true"
								style={{ color: 'black', fontSize: '8px', marginLeft: '20px', marginRight: '15px' }}
							></i>
							Sau 1 năm 9 tháng, Luật sư USIS sẽ đại diện Nhà đầu tư nộp đơn I-829 xoá bỏ điều kiện của Thẻ
							<br />
							<a className="xanh" style={{ marginLeft: '42px' }}>
								Xanh để xin Thẻ Xanh vĩnh viễn. Sau 4 năm 9 tháng, Nhà đầu tư có Thẻ Xanh sẽ được nhập tịch Mỹ.
							</a>
						</a>
					</p>
				</div>
				<div className="cuoi">
					<p className="vietnam" style={{ marginLeft: '40px', marginTop: '7px' }}>
						Tại Việt Nam, USIS Group là
						<a className="donvi" style={{ color: '#b22222' }}>
							{' '}
							Đơn vị đầu tiên có khách hàng được nhận hoàn vốn 100% từ chương trình đầu tư định cư Mỹ EB-5
						</a>
					</p>
					<p className="ngay" style={{ marginLeft: '40px' }}>
						Ngày 5.5.2019, tại Washington, Mỹ, USIS Group đã chính thức nhận giải thưởng
						<a className="donvi" style={{ color: '#b22222' }}>
							Đơn vị tư vấn EB-5 xuất sắc nhất toàn cầu - International Champion
							<br />
							Award
						</a>{' '}
						- do tổ chức IIUSA (Hiệp hội Đầu tư Mỹ - một tổ chức phi lợi nhuận, uy tín và chính thống nhất của ngành
						EB-5 tại Mỹ) trao tặng.
					</p>
				</div>
				<div className="DuAn">
					<h1
						className="DA"
						style={{
							color: 'black',
							display: 'block',
							textAlign: 'center',
							paddingTop: '50px',
							marginBottom: '50px'
						}}
					>
						DỰ ÁN
					</h1>
					<div className="testimonials-one__carousel">
						<Slide {...properties}>
							<div className="item mr-4">
								<div className="testimonials-one__single">
									<div className="imgDA" style={{ marginTop: '-50px' }}>
										<img
											src="https://usis.us/timthumb.php?src=https://usis.us/uploads/thumbnail/project/c4e2daaef10602-hillwoodyorkwestdeptford1.jpg&w=360&h=479&zc=1&q=100&s=1"
											alt=""
											className="imgDA"
											width={480}
											height={580}
										/>
									</div>
								</div>
								<div className="chuDA" style={{ marginTop: '-225px', marginLeft: '10px', color: 'white' }}>
									<h5>Dự án CMB-64 Hillwood Rialto & Sycamore </h5>
									<p>
										{' '}
										Hillwood Rialto & Sycamore là dự án hợp tác giữa Trung tâm Khu vực CMB và Hillwood
										Development- top 10 công ty phát triển bất động sản hàng đầu tại Mỹ.{' '}
									</p>
								</div>
							</div>
							<div className="item mr-4">
								<div className="testimonials-one__single">
									<div className="imgDA" style={{ marginTop: '-50px' }}>
										<img
											src="https://usis.us/timthumb.php?src=https://usis.us/uploads/thumbnail/project/0be73d834504f8-cangbaihaiquansteiner1.png&w=360&h=479&zc=1&q=100&s=1"
											alt=""
											className="imgDA"
											width={480}
											height={580}
										/>
									</div>
								</div>
								<div className="chuDA" style={{ marginTop: '-225px', marginLeft: '10px', color: 'white' }}>
									<h5>Dự Án CMB Nhóm 55 – Hillwood York & West Deptford </h5>
									<p>
										{' '}
										Hillwood Development, LLC: là một trong mười công ty bất động sản hàng đầu tại Hoa Kỳ,
										được ghi nhận qua các dự án tầm cỡ và các quỹ đầu tư công-tư.{' '}
									</p>
								</div>
							</div>
							<div className="item mr-4">
								<div className="testimonials-one__single">
									<div className="imgDA" style={{ marginTop: '-50px' }}>
										<img
											src="https://usis.us/timthumb.php?src=https://usis.us/uploads/thumbnail/project/97e516508a48fd-stillwaterdeepellum1.png&w=360&h=479&zc=1&q=100&s=1"
											alt=""
											className="imgDA"
											width={480}
											height={580}
										/>
									</div>
								</div>
								<div className="chuDA" style={{ marginTop: '-225px', marginLeft: '10px', color: 'white' }}>
									<h5>Dự Án Tái Phát Triển Steiner (Giai Đoạn III) </h5>
									<p>
										{' '}
										Dự án tái phát triển Steiner (giai đoạn 3) nằm trong Cảng Bãi Hải Quân Brooklyn (là dự án
										chính phủ Mỹ) nhằm tái phát triển khu vực phía tây nam của Cảng thành một trung tâm
										thương...{' '}
									</p>
								</div>
							</div>
							<div className="item mr-4">
								<div className="testimonials-one__single">
									<div className="imgDA" style={{ marginTop: '-50px' }}>
										<img
											src="https://usis.us/timthumb.php?src=https://usis.us/uploads/thumbnail/project/1db87fc13872c6-hiltonchicagorockfordcityhub.jpg&w=360&h=479&zc=1&q=100&s=1"
											alt=""
											className="imgDA"
											width={480}
											height={580}
										/>
									</div>
								</div>
								<div className="chuDA" style={{ marginTop: '-225px', marginLeft: '10px', color: 'white' }}>
									<h5>Dự án CMB Nhóm 65 - Stillwater Deep Ellum </h5>
									<p>
										{' '}
										Trung tâm khu vực CMB một lần nữa có cơ hội hợp tác với đơn vị phát triển bất động sản
										hàng đầu Texas, là Stillwater Capital Investments, LLC{' '}
									</p>
								</div>
							</div>
							<div className="item mr-4">
								<div className="testimonials-one__single">
									<div className="imgDA" style={{ marginTop: '-50px' }}>
										<img
											src="https://usis.us/timthumb.php?src=https://usis.us/uploads/thumbnail/project/d89b5f23b8ccee-duanlinknyc1.jpg&w=360&h=479&zc=1&q=100&s=1"
											alt=""
											className="imgDA"
											width={480}
											height={580}
										/>
									</div>
								</div>
								<div className="chuDA" style={{ marginTop: '-225px', marginLeft: '10px', color: 'white' }}>
									<h5>
										Dự án Khách sạn và Trung tâm Hội nghị Hilton Chicago-Rockford CityHub (Warren Buffett ){' '}
									</h5>
									<p>
										{' '}
										Công ty Gorman vinh dự nhận giải thưởng AHF - top 50 Doanh nghiệp phát triển của nước Mỹ
										năm 2011, 2012, 2013, 2014 và 2015 (xếp thứ 17 năm 2015){' '}
									</p>
								</div>
							</div>
							<div className="item mr-4">
								<div className="testimonials-one__single">
									<div className="imgDA" style={{ marginTop: '-50px' }}>
										<img
											src="https://usis.us/timthumb.php?src=https://usis.us/uploads/thumbnail/project/90c4c76b4d29f8-group48centuryplaza.jpg&w=360&h=479&zc=1&q=100&s=1"
											alt=""
											className="imgDA"
											width={480}
											height={580}
										/>
									</div>
								</div>
								<div className="chuDA" style={{ marginTop: '-225px', marginLeft: '10px', color: 'white' }}>
									<h5>Tổng quan Dự án LinkNYC - Giai đoạn II với sự đầu tư của Google </h5>
									<p>
										{' '}
										Là một trong những sáng kiến công nghệ đột phá và quan trọng nhất từng được chính quyền
										New York thực hiện, dự án LinkNYC Phase II là giai đoạn tiếp theo của chiến lược phát...{' '}
									</p>
								</div>
							</div>
							<div className="item mr-4">
								<div className="testimonials-one__single">
									<div className="imgDA" style={{ marginTop: '-50px' }}>
										<img
											src="https://usis.us/timthumb.php?src=https://usis.us/uploads/thumbnail/project/9e3ebdf63405e9-denvercoloradogroup415.jpg&w=360&h=479&zc=1&q=100&s=1"
											alt=""
											className="imgDA"
											width={480}
											height={580}
										/>
									</div>
								</div>
								<div className="chuDA" style={{ marginTop: '-225px', marginLeft: '10px', color: 'white' }}>
									<h5>Dự án đầu tư cơ sở hạ tầng Texas CMB 53, l.p. </h5>
									<p>
										{' '}
										Tập đoàn Hillwood Development Company đã ủy thác cho CMB gây quỹ lên đến 48 triệu đô la
										tiền vốn EB-5 làm khoản cho vay cho Dự án Group 53.{' '}
									</p>
								</div>
							</div>
							<div className="item mr-4">
								<div className="testimonials-one__single">
									<div className="imgDA" style={{ marginTop: '-50px' }}>
										<img
											src="https://usis.us/timthumb.php?src=https://usis.us/uploads/thumbnail/project/e852400822e15d-quangtruongkynguyen2.jpg&w=360&h=479&zc=1&q=100&s=1"
											alt=""
											className="imgDA"
											width={480}
											height={580}
										/>
									</div>
								</div>
								<div className="chuDA" style={{ marginTop: '-225px', marginLeft: '10px', color: 'white' }}>
									<h5>Dự án đầu tư cơ sở hạ tầng Texas CMB 49 </h5>
									<p>
										{' '}
										Harwood NO10 là dự án văn phòng cao tầng tùy chỉnh xây dựng trên khu vực rông 1,06 mẫu tọa
										lạc ở nửa phía bắc của khối đô thị tiếp giáp với North Harwood Street, Randall Street,...{' '}
									</p>
								</div>
							</div>
							<div className="item mr-4">
								<div className="testimonials-one__single">
									<div className="imgDA" style={{ marginTop: '-50px' }}>
										<img
											src="https://usis.us/timthumb.php?src=https://usis.us/uploads/thumbnail/project/8a4f40b4437379-nycrcfdiibrochurevietnamese21111.jpg&w=360&h=479&zc=1&q=100&s=1"
											alt=""
											className="imgDA"
											width={480}
											height={580}
										/>
									</div>
								</div>
								<div className="chuDA" style={{ marginTop: '-225px', marginLeft: '10px', color: 'white' }}>
									<h5>Dự án CMB nhóm 67 - Great Wolf Lodge Arizona </h5>
									<p>
										{' '}
										Dự án là khu nghỉ dưỡng gồm: Công viên nước trong nhà, các nhà hàng, cửa hàng đồ lưu niệm,
										dịch vụ spa, trung tâm thể dục, khu vực vui chơi của trẻ em và nhiều dịch vụ khác…{' '}
									</p>
								</div>
							</div>
						</Slide>
					</div>
				</div>
			</section>
		</section>
	);
};

export default CTEB5;
