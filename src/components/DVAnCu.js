import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import Image from './Image';

const ModalVideo = dynamic(() => import('react-modal-video'), { ssr: false });
const DVAnCu = () => {
	const [isOpen, setisopen] = useState(false);
	const openModal = () => {
		setisopen(true);
	};
	return (
		<div style={{ backgroundColor: 'white', background: 'url(/assets/images/DinhCuMy/bg.png) no-repeat left 400px' }}>
			<section className="inner-banner-DVAC">
				<div className="container">
					<ul className="list-unstyled thm-breadcrumb">
						<li>
							<a href="/">Trang Chủ</a>
						</li>
						<li className="active">
							<a href="#">Chi Tiết Về Định Cư</a>
						</li>
					</ul>
					<h2 className="inner-banner-DVAC__title">ĐỊNH CƯ MỸ</h2>
				</div>
			</section>
			<div id="breaking-news" className="breaking-school" style={{ color: 'color: #E4EAE3' }}>
				<span className="breaking-news-title">
					<span>TIN MỚI NHẤT</span>
				</span>
				<ul className="innerFade" style={{ position: 'relative', height: 32 }}>
					<li style={{ display: 'block', zIndex: 10, position: 'absolute' }}>
						<a
							href="https://newgoldenroad.com/du-hoc-uc-sophia-nhi-do-tot-nghiep-truong-woodcroft-college-du-hoc-tan-con-duong-vang/"
							title="[DU HỌC ÚC] – Du học sinh Sophia Nhi Đỗ vừa tốt nghiệp trường Woodcroft College – Du học Úc – Du học Tân Con Đường Vàng"
						>
							[DU HỌC ÚC] – Du học sinh Sophia Nhi Đỗ vừa tốt nghiệp trường Woodcroft College – Du học Úc – Du học
							Tân Con Đường Vàng
						</a>
					</li>
				</ul>
			</div>
			<div id="crumbs" className="crumbss-school" style={{ paddingTop: '10px' }}>
				<span typeof="v:Breadcrumb">
					<a className="crumbs-home" href="https://newgoldenroad.com">
						Trang Chủ
					</a>
				</span>
				&nbsp;&nbsp;
				<span className="delimiter">/</span>
				&nbsp;&nbsp;
				<span typeof="v:Breadcrumb">
					<a href="https://newgoldenroad.com/chuyen-muc/hoat-dong-cong-ty/" style={{ color: '#81868a' }}>
						Định Cư Mỹ
					</a>
				</span>
				&nbsp;&nbsp;
				<span className="delimiter">/</span>
				&nbsp;&nbsp;
				<span className="current">[Dịch Vụ An Cư]</span>
			</div>
			<h3
				style={{
					color: '#ff944d',
					textAglin: 'center',
					fontSize: '35px',
					textAlign: 'center',
					fontWeight: 'bold',
					marginTop: '50px',
					marginBottom: '50px',
					marginLeft: '75px'
				}}
			>
				DỊCH VỤ AN CƯ MỸ
			</h3>
			<div>
				<div className="noidung">
					<div className="row">
						<div className="col-6">
							<div className="nd-DVAC">
								<p>
									<i
										className="fa fa-check"
										style={{ color: 'red', fontSize: '18px', marginLeft: '-30px', marginRight: '15px' }}
									/>
									Tân con Đường Vàng (NRG) luôn tự hào là đơn vị đầu tiên và duy nhất có văn phòng tại Mỹ và có
									dịch vụ an cư tại Mỹ dành cho tất cả khách hàng. Không chỉ đồng hành trên con đường lấy thẻ
									xanh cho cả gia đình, Tân con Đường Vàng (NRG) còn bên cạnh khách hàng khi ổn định cuộc sống
									tại đất nước cờ hoa này. Văn phòng Tân con Đường Vàng (NRG) tại Mỹ sẽ hỗ trợ, tư vấn một cách
									tận tâm nhất ngay khi gia đình bạn vừa đặt chân xuống nước Mỹ từ việc đưa đón tại sân bay cho
									đến việc chọn nhà ở, chọn trường cho con, ổn định công việc kinh doanh… Tương lai và hạnh phúc
									của gia đình bạn cũng chính là niềm vui và trách nhiệm cao cả của Tân con Đường Vàng (NRG).
								</p>
								<p>
									<i
										className="fa fa-check"
										style={{ color: 'red', fontSize: '18px', marginLeft: '-30px', marginRight: '15px' }}
									/>
									Để hỗ trợ khách hàng một cách hoàn hảo nhất, Tân con Đường Vàng (NRG) luôn xây dựng và phát
									triển một đội ngũ chuyên nghiệp, hợp tác cùng những đơn vị uy tín, với nhiều kinh nghiệm cũng
									như có nhiều năm sinh sống tại Mỹ, hiểu rõ văn hóa, con người, luật pháp Mỹ.
								</p>
							</div>
						</div>
						<div className="col-6">
							<div className="video">
								<div className="my-auto">
									<ModalVideo
										channel="youtube"
										isOpen={isOpen}
										videoId="Zknga9ite-4"
										onClose={() => setisopen(false)}
									/>
									<div onClick={openModal} className="media-play-icon-DVAC">
										<i className="fas fa-play media-icon" />
									</div>
								</div>
							</div>
						</div>
						<div className="hinhvideoDVAC">
							<img src="/assets/images/DinhCuMy/ancu.jpg" width={550} height={390} />
						</div>
					</div>
					<div className="DoiNgu">
						<h2 className="Phan_DoiNgu">ĐỘI NGŨ</h2>
						<div className="card-deck" style={{ width: '80%', marginLeft: '120px' }}>
							<div className="card">
								<img src="/assets/images/DinhCuMy/Cathy.jpg" className="card-img-top" alt="..." />
								<div className="card-body">
									<h5 className="card-title">Cathy Lê</h5>
									<p className="card-text">
										This is a wider card with supporting text below as a natural lead-in to additional
										content. This content is a little bit longer.
									</p>
								</div>
								<div className="card-footer">
									<small className="text-muted">Cập nhật 3 phút trước</small>
								</div>
							</div>
							<div className="card">
								<img src="/assets/images/DinhCuMy/gam.jpg" className="card-img-top" alt="..." />
								<div className="card-body">
									<h5 className="card-title">Edna Lee</h5>
									<p className="card-text">
										This card has supporting text below as a natural lead-in to additional content.
									</p>
								</div>
								<div className="card-footer">
									<small className="text-muted">Cập nhật 3 phút trước</small>
								</div>
							</div>
							<div className="card">
								<img src="/assets/images/DinhCuMy/avatar.jpg" className="card-img-top" alt="..." />
								<div className="card-body">
									<h5 className="card-title">Trâm Julie</h5>
									<p className="card-text">
										This is a wider card with supporting text below as a natural lead-in to additional
										content. This card has even longer content than the first to show that equal height
										action.
									</p>
								</div>
								<div className="card-footer">
									<small className="text-muted">Cập nhật 3 phút trước</small>
								</div>
							</div>
						</div>
					</div>
					<div className="HDAC">
						<h2 className="Phan_HDAC">HOẠT ĐỘNG AN CƯ</h2>
						<div className="row">
							<div className="col-6">
								<div className="nd-SOCVH1">
									<p>
										<i
											className="fa fa-check"
											style={{ color: 'red', fontSize: '18px', marginLeft: '-30px', marginRight: '15px' }}
										/>
										<span>THAY ĐỔI MỘT SỐ THÓI QUEN THỜI GIAN TRONG SINH HOẠT HÀNG NGÀY</span> <br />
										“Cao su thời gian” là điều rất hay gặp ở học sinh Việt Nam nói riêng và châu Á nói chung.
										Trừ trường hợp bất khả kháng như ốm nặng phải đi cấp cứu hay tang thương mới có thể được
										chấp nhận là lý do để trễ hẹn. Sắp xếp thời gian sinh hoạt và học tập hợp lý, bắt đầu công
										việc và bài tập ngay lúc được giao và cố gắng hoàn thành công việc sớm nhất có thể chính
										là những biện pháp để bạn có thể làm chủ được thời gian và hoàn thành công việc đúng thời
										gian. CHỦ ĐỘ
									</p>
									<p>
										<i
											className="fa fa-check"
											style={{ color: 'red', fontSize: '18px', marginLeft: '-30px', marginRight: '15px' }}
										/>
										<span>CHỦ ĐỘNG TÌM TÒI, HỌC HỎI VĂN HÓA MỸ</span> <br />
										Mỹ là quốc gia đa sắc tộc cùng với nền lịch sử và văn hóa rất hấp dẫn. Chính vì lẽ đó khá
										nhiều bạn du học sinh cảm thấy bị lạc lõng trên nước Mỹ rộng lớn. Làm thế nào để vượt qua
										điều này? Rất đơn giản, chấp nhận và học hỏi những điều mới lạ. Các bạn cũng nên đơn giản
										hóa những điều mà mình không thể hiểu được (ví dụ như chuyện cười), chịu khó quan sát,
										lắng nghe cũng như cảm nhận những nền văn hóa khác nhau trên đất Mỹ. Bổ sung những kiến
										thức về văn hóa Mỹ qua trường lớp, phim ảnh và bạn bè hay tham gia những câu lạc bộ trong
										và ngoài trường là những điều nên làm để làm quen và thích nghi với văn hóa Mỹ.
									</p>
									<p>
										<i
											className="fa fa-check"
											style={{ color: 'red', fontSize: '18px', marginLeft: '-30px', marginRight: '15px' }}
										/>
										<span>KHOẢNG CÁCH CÁ NHÂN LÀ ĐIỀU VÔ CÙNG QUAN TRỌNG </span>
										<br />
										Mỹ rất tôn trọng sự tự do, chính vì thế duy trì khoảng cách giữa bạn và người khác là điều
										cần phải chú ý. Khi nói chuyện với ai đó, không nên đứng quá gần họ. Khoảng cách tiếp xúc
										quá gần làm cho người đối diện cảm thấy không thoải mái và họ có thể cho rằng bạn đang xâm
										phạm không gian cá nhân của họ. Không chỉ trong giao tiếp mà ngay cả những tình huống hàng
										ngày như xếp hàng nơi công cộng hay đi bộ trên vỉa hè, duy trì khoảng cách cũng là điều vô
										cùng quan trọng.
									</p>
									<p>
										<i
											className="fa fa-check"
											style={{ color: 'red', fontSize: '18px', marginLeft: '-30px', marginRight: '15px' }}
										/>
										<span>THAM GIA CÁC CÂU LẠC BỘ, HỘI NHÓM</span> <br />
										Đây là cơ hội tốt nhất cho du học sinh tìm hiểu về các truyền thống của trường, làm quen
										với bạn bè quốc tế cũng như người bản xứ. Bạn sẽ tìm hiểu được mọi thông tin về các câu
										lạc bộ, hội nhóm phù hợp với bạn. Không gì có thể dễ dàng và đơn giản hơn việc làm quen
										với những người bạn mới khi tham gia các câu lạc bộ ngoại khoá của trường, tại đây, họ đa
										phần sẽ là những người có cùng sở thích và mối quan tâm giống với bạn.
									</p>
								</div>
							</div>
							<div className="col-6">
								<div className="video">
									<div className="my-auto">
										<ModalVideo
											channel="youtube"
											isOpen={isOpen}
											videoId="Zknga9ite-4"
											onClose={() => setisopen(false)}
										/>
										<div onClick={openModal} className="media-play-icon-DVAC">
											<i className="fas fa-play media-icon" />
										</div>
									</div>
								</div>
								<div className="nd-SOCVH2">
									
									<p>
										<i
											className="fa fa-check"
											style={{ color: 'red', fontSize: '18px', marginLeft: '-30px', marginRight: '15px' }}
										/>
										<span>KHOẢNG CÁCH CÁ NHÂN LÀ ĐIỀU VÔ CÙNG QUAN TRỌNG </span>
										<br />
										Mỹ rất tôn trọng sự tự do, chính vì thế duy trì khoảng cách giữa bạn và người khác là điều
										cần phải chú ý. Khi nói chuyện với ai đó, không nên đứng quá gần họ. Khoảng cách tiếp xúc
										quá gần làm cho người đối diện cảm thấy không thoải mái và họ có thể cho rằng bạn đang xâm
										phạm không gian cá nhân của họ. Không chỉ trong giao tiếp mà ngay cả những tình huống hàng
										ngày như xếp hàng nơi công cộng hay đi bộ trên vỉa hè, duy trì khoảng cách cũng là điều vô
										cùng quan trọng.
									</p>
									<p>
										<i
											className="fa fa-check"
											style={{ color: 'red', fontSize: '18px', marginLeft: '-30px', marginRight: '15px' }}
										/>
										<span>THAM GIA CÁC CÂU LẠC BỘ, HỘI NHÓM</span> <br />
										Đây là cơ hội tốt nhất cho du học sinh tìm hiểu về các truyền thống của trường, làm quen
										với bạn bè quốc tế cũng như người bản xứ. Bạn sẽ tìm hiểu được mọi thông tin về các câu
										lạc bộ, hội nhóm phù hợp với bạn. Không gì có thể dễ dàng và đơn giản hơn việc làm quen
										với những người bạn mới khi tham gia các câu lạc bộ ngoại khoá của trường, tại đây, họ đa
										phần sẽ là những người có cùng sở thích và mối quan tâm giống với bạn.
									</p>
								</div>
							</div>
							<div className="hinhvideoSOCVH">
								<img src="/assets/images/DinhCuMy/shockvanhoa.jpg" width={550} height={390} />
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="share-post" style={{ marginBottom: '20px' }}>
				<span className="share-textt">Chia Sẻ</span>
				<ul className="flat-social">
					<li>
						<a
							xlms="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
							href="http://www.facebook.com/sharer.php?u=https://newgoldenroad.com/?p=42100"
							className="social-facebook"
							rel="external noreferrer"
							target="_blank"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="16"
								height="16"
								fill="currentColor"
								className="bi bi-facebook"
								viewBox="0 0 16 16"
								style={{ marginBottom: '5px', marginRight: '5px' }}
							>
								<path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
							</svg>
							{''}
							<span>Facebook</span>
						</a>
					</li>
					<li>
						<a
							href="https://twitter.com/intent/tweet?text=Tr%C6%B0%E1%BB%9Dng+Alberta+University+%E2%80%93+Du+h%E1%BB%8Dc+Canada+%E2%80%93+Du+h%E1%BB%8Dc+T%C3%A2n+Con+%C4%90%C6%B0%E1%BB%9Dng+V%C3%A0ng&url=https://newgoldenroad.com/?p=42100"
							className="social-twitter"
							rel="external noreferrer"
							target="_blank"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="16"
								height="16"
								fill="currentColor"
								className="bi bi-twitter"
								viewBox="0 0 16 16"
								style={{ marginBottom: '5px', marginRight: '5px' }}
							>
								<path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
							</svg>{' '}
							<span>Twitter</span>
						</a>
					</li>
					<li>
						<a
							href="https://plusone.google.com/_/+1/confirm?hl=en&url=https://newgoldenroad.com/?p=42100&name=Tr%C6%B0%E1%BB%9Dng+Alberta+University+%E2%80%93+Du+h%E1%BB%8Dc+Canada+%E2%80%93+Du+h%E1%BB%8Dc+T%C3%A2n+Con+%C4%90%C6%B0%E1%BB%9Dng+V%C3%A0ng"
							className="social-google-plus"
							rel="external noreferrer"
							target="_blank"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="16"
								height="16"
								fill="currentColor"
								className="bi bi-google"
								viewBox="0 0 16 16"
								style={{ marginBottom: '5px', marginRight: '5px' }}
							>
								<path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" />
							</svg>{' '}
							<span>Google +</span>
						</a>
					</li>

					<li>
						<a
							href="http://www.linkedin.com/shareArticle?mini=true&url=https://newgoldenroad.com/?p=42100&title=Tr%C6%B0%E1%BB%9Dng+Alberta+University+%E2%80%93+Du+h%E1%BB%8Dc+Canada+%E2%80%93+Du+h%E1%BB%8Dc+T%C3%A2n+Con+%C4%90%C6%B0%E1%BB%9Dng+V%C3%A0ng"
							className="social-linkedin"
							rel="external noreferrer"
							target="_blank"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="16"
								height="16"
								fill="currentColor"
								className="bi bi-linkedin"
								viewBox="0 0 16 16"
								style={{ marginBottom: '5px', marginRight: '5px' }}
							>
								<path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
							</svg>{' '}
							<span>LinkedIn</span>
						</a>
					</li>
					<li>
						<a
							href="http://pinterest.com/pin/create/button/?url=https://newgoldenroad.com/?p=42100&description=Tr%C6%B0%E1%BB%9Dng+Alberta+University+%E2%80%93+Du+h%E1%BB%8Dc+Canada+%E2%80%93+Du+h%E1%BB%8Dc+T%C3%A2n+Con+%C4%90%C6%B0%E1%BB%9Dng+V%C3%A0ng&media=https://newgoldenroad.com/wp-content/uploads/2021/06/du-hoc-tan-con-duong-vang-alberta-university-655x330.png"
							className="social-pinterest"
							rel="external noreferrer"
							target="_blank"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="16"
								height="16"
								fill="currentColor"
								className="bi bi-pinterest"
								viewBox="0 0 16 16"
								style={{ marginBottom: '5px', marginRight: '5px' }}
							>
								<path d="M8 0a8 8 0 0 0-2.915 15.452c-.07-.633-.134-1.606.027-2.297.146-.625.938-3.977.938-3.977s-.239-.479-.239-1.187c0-1.113.645-1.943 1.448-1.943.682 0 1.012.512 1.012 1.127 0 .686-.437 1.712-.663 2.663-.188.796.4 1.446 1.185 1.446 1.422 0 2.515-1.5 2.515-3.664 0-1.915-1.377-3.254-3.342-3.254-2.276 0-3.612 1.707-3.612 3.471 0 .688.265 1.425.595 1.826a.24.24 0 0 1 .056.23c-.061.252-.196.796-.222.907-.035.146-.116.177-.268.107-1-.465-1.624-1.926-1.624-3.1 0-2.523 1.834-4.84 5.286-4.84 2.775 0 4.932 1.977 4.932 4.62 0 2.757-1.739 4.976-4.151 4.976-.811 0-1.573-.421-1.834-.919l-.498 1.902c-.181.695-.669 1.566-.995 2.097A8 8 0 1 0 8 0z" />
							</svg>{' '}
							<span>Pinterest</span>
						</a>
					</li>
				</ul>
				<div className="clear" />
			</div>
		</div>
	);
};

export default DVAnCu;
