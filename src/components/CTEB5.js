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
			<h2 className="card-title-dong3">Lợi ích từ chương trình EB-5?</h2>
			<div className="row">
				<div className='row-nd'>
					<div className="col-4">
						<div className="hinhPP">
							<img src="assets/images/anhPassPort.png" width={390} height={690} />
						</div>
					</div>
					<div className="col-4">
						<div className="CO">
							<h3>5 CÓ</h3>
						</div>
					</div>
					<div className="col-4">
						<div className="K">
							<h3>5 KHÔNG</h3>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default CTEB5;
