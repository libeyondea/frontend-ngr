import React, { useState } from 'react';
import dynamic from 'next/dynamic';
const ModalVideo = dynamic(() => import('react-modal-video'), { ssr: false });

const CTEB5 = () => {
	const [isOpen, setisopen] = useState(false);
	const openModal = () => {
		setisopen(true);
	};
	return (
		<section className="team-one team-page">
			<div className="phan-dau">
				<a href="/" className="card-link">
					<h5 lassName="card-title" style={{ color: 'red', fontSize: '15px', marginLeft: '30px' }}>
						{' '}
						<p> Trang Chủ </p>{' '}
					</h5>
				</a>
				<p className="card-title-tt"> / ĐẦU TƯ ĐỊNH CƯ MỸ THEO CHƯƠNG TRÌNH EB-5</p>
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
							<i className="fa fa-check" style={{ color: 'red', fontSize: '18px', marginLeft: '-30px', marginRight: '15px' }}/>
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
			<h1 className="card-title-dong3">Lợi ích từ chương trình EB-5?</h1>
			<div className="row">
				<div className='row-nd'>
					<div className="col-4">
						<div className="hinhPP">
							<img src="assets/images/anhPassPort.png" width={390} height={690} />
						</div>
					</div>
					<div className="col-4">
						<div className="CO">
							<h3 className='namco'>5 CÓ</h3>
							<div>
								<p style={{fontSize: '16px'}}>
									<i className="fa fa-check" style={{ color: 'white', fontSize: '16px', marginLeft: '20px', marginRight: '15px' }}></i>
									Mức đầu tư thấp nhất
								</p>
								<p style={{fontSize: '16px'}}>
									<i className="fa fa-check" style={{ color: 'white', fontSize: '16px', marginLeft: '20px', marginRight: '15px' }}></i>
									Chi phí hợp lý nhất (thấp hơn du học)
								</p>
								<p style={{fontSize: '16px'}}>
									<i className="fa fa-check" style={{ color: 'white', fontSize: '16px', marginLeft: '20px', marginRight: '15px' }}></i>
									Thời gian nhận Thẻ Xanh nhanh chóng<br/><a className='chu' style={{marginLeft: '50px'}}>(khoảng 3 - 4 năm)</a>
								</p>
								<p style={{fontSize: '16px'}}>
									<i className="fa fa-check" style={{ color: 'white', fontSize: '16px', marginLeft: '20px', marginRight: '15px' }}></i>
									Tỉ lệ chấp thuận cao nhất hiện nay so<br/><a className='chu' style={{ marginLeft: '50px' }}></a> với các chương trình định cư khác (92%)
								</p>
								<p style={{fontSize: '16px'}}>
									<i className="fa fa-check" style={{ color: 'white', fontSize: '16px', marginLeft: '20px', marginRight: '15px' }}></i>
									Thủ tục đơn giản và nhanh nhất
								</p>
							</div>
						</div>
					</div>
					<div className="col-4">
						<div className="K">
							<h3 className='namK'>5 KHÔNG</h3>
							<div>
								<p>
									<i className="fa fa-times" aria-hidden="true" style={{ color: 'white', fontSize: '16px', marginLeft: '20px', marginRight: '15px' }}></i>
									Không yêu cầu tiếng Anh
								</p>
								<p>
									<i className="fa fa-times" aria-hidden="true" style={{ color: 'white', fontSize: '16px', marginLeft: '20px', marginRight: '15px' }}></i>
									Không yêu cầu kinh nghiệm kinh doanh
								</p>
								<p>
									<i className="fa fa-times" aria-hidden="true" style={{ color: 'white', fontSize: '16px', marginLeft: '20px', marginRight: '15px' }}></i>
									Không xét trình độ học vấn
								</p>
								<p>
									<i className="fa fa-times" aria-hidden="true" style={{ color: 'white', fontSize: '16px', marginLeft: '20px', marginRight: '15px' }}></i>
									Không ràng buộc sinh sống tại Mỹ
								</p>
								<p>
									<i className="fa fa-times" aria-hidden="true" style={{ color: 'white', fontSize: '16px', marginLeft: '20px', marginRight: '15px' }}></i>
									Không yêu cầu trực tiếp điều hành kinh doanh
								</p>
							</div>
						</div>
					</div>
					<div>
						<h3 className='chu9d'> 9 ĐƯỢC </h3>
					</div>
					<div className='row-9d'>
						<div className="col-6">
							<div className='chindT'>
								<p style={{fontSize: '16px'}}>
									<i className="fa fa-check" style={{ color: 'red', fontSize: '16px', marginLeft: '20px', marginRight: '15px' }}></i>
									Tự do sinh sống, làm việc, kinh doanh<br/><a className='chu' style={{ marginLeft: '50px' }}></a> bất cứ nơi nào tại Mỹ
								</p>
								<p style={{fontSize: '16px'}}>
									<i className="fa fa-check" style={{ color: 'red', fontSize: '16px', marginLeft: '20px', marginRight: '15px' }}></i>
									Tự do ra vào Mỹ
								</p>
								<p style={{fontSize: '16px'}}>
									<i className="fa fa-check" style={{ color: 'red', fontSize: '16px', marginLeft: '20px', marginRight: '15px' }}></i>
									Có song tịch
								</p>
								<p style={{fontSize: '16px'}}>
									<i className="fa fa-check" style={{ color: 'red', fontSize: '16px', marginLeft: '20px', marginRight: '15px' }}></i>
									Bảo lãnh người thân
								</p>
								<p style={{fontSize: '16px'}}>
									<i className="fa fa-check" style={{ color: 'red', fontSize: '16px', marginLeft: '20px', marginRight: '15px' }}></i>
									Hoàn vốn 100% sau 05 năm
								</p>
							</div>
						</div>
						<div className="col-6">
							<div className='chindP'>
								<p style={{fontSize: '16px'}}>
									<i className="fa fa-check" style={{ color: 'red', fontSize: '16px', marginLeft: '20px', marginRight: '15px' }}></i>
									Duy trì công việc và tài sản tại Việt Nam
								</p>
								<p style={{fontSize: '16px'}}>
									<i className="fa fa-check" style={{ color: 'red', fontSize: '16px', marginLeft: '20px', marginRight: '15px' }}></i>
									Miễn học phí tiểu học & trung học, <br/><a className='chu' style={{ marginLeft: '50px' }}></a>học phí đại học bằng 1/3 so với du học sinh
								</p>
								<p style={{fontSize: '16px'}}>
									<i className="fa fa-check" style={{ color: 'red', fontSize: '16px', marginLeft: '20px', marginRight: '15px' }}></i>
									Cơ hội kinh doanh rộng mở
								</p>
								<p style={{fontSize: '16px'}}>
									<i className="fa fa-check" style={{ color: 'red', fontSize: '16px', marginLeft: '20px', marginRight: '15px' }}></i>
									Hưởng mọi quyền lợi của một công dân Mỹ
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className='row'>
				<div className='col-6'>
					<div className='rowT'>
						<h2 className='DTDT'>ĐỐI TƯỢNG ĐẦU TƯ</h2>
						<div className='block_desc'>
							<p>Tất cả các nhà đầu tư có khả năng tài chính, có nhu cầu định<br/> cư Mỹ<br/>
							Không giới hạn về độ tuổi<br/>
							Không yêu cầu ngoại ngữ<br/>
							Không yêu cầu có công ty kinh doanh hoặc kinh nghiệm quản<br/> lý doanh nghiệp<br/>
							Không cần trực tiếp quản lý công việc đầu tư hàng ngày.</p>
						</div>
					</div>
				</div>
				<div className='col-6'>
					<div className='rowP'>
						<h2 className='DKDT'>ĐIỀU KIỆN ĐẦU TƯ</h2>
						<p style={{marginLeft: '80px'}}>Chứng minh nguồn gốc số tiền đầu tư (800,000 USD/suất đầu<br/> tư trong vùng TEA; hoặc 1,050,000 USD/suất đầu tư ngoài<br/> vùng TEA) từ:</p>
						<div className='bacham' style={{marginLeft:'110px'}}>
							<p style={{fontSize: '16px'}}>
								<i className="fa fa-circle" aria-hidden="true" style={{ color: 'white', fontSize: '10px', marginLeft: '20px', marginRight: '15px' }}></i>
								Thu nhập từ lợi nhuận doanh nghiệp
							</p>
							<p style={{fontSize: '16px'}}>
								<i className="fa fa-circle" aria-hidden="true" style={{ color: 'white', fontSize: '10px', marginLeft: '20px', marginRight: '15px' }}></i>
								Thu nhập cá nhân: tiền lương, tặng, cho, thừa kế…
							</p>
							<p style={{fontSize: '16px'}}>
								<i className="fa fa-circle" aria-hidden="true" style={{ color: 'white', fontSize: '10px', marginLeft: '20px', marginRight: '15px' }}></i>
								Từ bán bất động sản, chứng khoán, cổ phiếu…
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default CTEB5;
