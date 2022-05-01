import React from 'react';
import Link from 'next/link';

const ThongTinCa = () => {
	return (
		<div>
			<section className="inner-banner-CD">
				<div className="container">
					<h2 className="inner-banner-CD__title">THÔNG TIN CANADA</h2>
				</div>
			</section>
			<div id="breaking-news" className="breaking-news">
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
			<div id="crumbs" className="crumbss" style={{ paddingTop: '10px' }}>
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
						Thông tin Canada
					</a>
				</span>
				&nbsp;&nbsp;
				<span className="delimiter">/</span>
				&nbsp;&nbsp;
				<span className="current">
					[IELTS INDICATOR] – Phương pháp thi IELTS trực tuyến tại nhà cùng với Du học Tân Con Đường Vàng
				</span>
			</div>

			<h2 className="tieu-de"> TẠI SAO LẠI CHỌN NƯỚC CANADA ?</h2>
			<div className="container">
				<div className="row">
					<p className="tai-sao">
						Nền giáo dục Canada thuộc top 3 thế giới và có rất nhiều lí do để học sinh và gia đình chọn làm điểm đến
						du học và sau đây là các lí do chính mà học sinh của NEW GOLDEN ROAD đã chọn:
					</p>
					<div className="row no-gutters">
						<div className="col-lg-6">
							<div className="faq-one__single">
								<div className="faq-one__icon">
									<span>
										<i className="fas fa-car"></i>
									</span>
								</div>
								<div className="faq-one__content">
									<h2 className="faq-one__title">Giao Thông</h2>
									<p className="faq-one__text">
										Canada là một quốc gia rộng lớn, có địa hình đa dạng. Giao thông bao gồm nhiều loại hình
										vận chuyển khác nhau - đường hàng không, đường sắt, đường hàng hải, đường bộ. Tất cả thành
										phố và đô thị chính ở Canada đều có hệ thống giao thông công cộng phát triển với một trong
										những hình thức di chuyển như: xe buýt, tàu điện ngầm, đường sắt hạng nhẹ, xe điện. Trong
										đó, xe buýt là phương tiện phổ biến nhất. Ở Canada đường sá thông thoáng, hạ tầng chất
										lượng nên thời gian di chuyển của các phương tiện là tương đối chính xác.
									</p>
								</div>
							</div>
						</div>
						<div className="col-lg-6">
							<div className="faq-one__single">
								<div className="faq-one__icon">
									<span>
										<i className="fas fa-cloud-sun"></i>
									</span>
								</div>
								<div className="faq-one__content">
									<h2 className="faq-one__title">Thời Tiết</h2>
									<p className="faq-one__text">
										Thời tiết Canada không hẳn chỉ gắn liền với “lạnh giá” và “băng tuyết”. Trên thực tế, khí
										hậu rất đa dạng như phong cảnh đất nước. Nhìn chung, người dân Canada tận hưởng bốn mùa rõ
										rệt với các hoạt động trải nghiệm phong phú quanh năm. Vào mùa hè, nhiệt độ ban ngày có
										thể đến 35 ° C và cao hơn. Mùa xuân và mùa thu mát mẻ. Mùa đông thường khá lạnh về phía
										Bắc và ôn hòa hơn về các tỉnh phía Nam và cực Tây. Một số thành phố cũng đã lắp đặt hệ
										thống sưởi ở các lối đi bộ đến và đi từ các tòa nhà trong trường học.{' '}
									</p>
								</div>
							</div>
						</div>
						<div className="col-lg-6">
							<div className="faq-one__single">
								<div className="faq-one__icon">
									<span>
										<i className="fab fa-odnoklassniki"></i>
									</span>
								</div>
								<div className="faq-one__content">
									<h2 className="faq-one__title">Con Người</h2>
									<p className="faq-one__text">
										Phần lớn người dân Canada có nguồn gốc châu Âu trước khi chứng kiến sự gia tăng người nhập
										cư từ châu Á, Caribbean và châu Phi. Cộng đồng dân cư có sự pha trộn hơn 260 nguồn gốc dân
										tộc khác nhau, cùng chia sẻ những giá trị quan trọng như niềm tự hào, niềm tin vào sự bình
										đẳng - đa dạng và tôn trọng mọi cá nhân. Chính những giá trị này làm cho Canada trở thành
										một nơi thân thiện, yêu chuộng hòa bình và an toàn để sống, học tập và làm việc.
									</p>
								</div>
							</div>
						</div>
						<div className="col-lg-6">
							<div className="faq-one__single">
								<div className="faq-one__icon">
									<span>
										<i className="fas fa-vote-yea"></i>
									</span>
								</div>
								<div className="faq-one__content">
									<h2 className="faq-one__title">Cơ hội việc làm, định cư</h2>
									<p className="faq-one__text">
										Canada có chính sách việc làm, định cư cởi mở nhằm thu hút và giữ chân lao động nước
										ngoài. Sinh viên tốt nghiệp là đối tượng chính của nhiều chương trình nhập cư.
										<br />
										Với bằng cấp, kinh nghiệm và khả năng tiếng Anh sau khi hoàn tất khóa học, giấc mơ xin
										thường trú nhân của bạn trong tầm tay. Năm 2019 đã có 54.000 sinh viên tốt nghiệp xin định
										cư thành công.
									</p>
								</div>
							</div>
						</div>
						<div className="col-lg-6" style={{ paddingBottom: `0px`, borderBottom: `0px none` }}>
							<div className="faq-one__single">
								<div className="faq-one__icon">
									<span>
										<i className="fas fa-search-dollar"></i>
									</span>
								</div>
								<div className="faq-one__content">
									<h2 className="faq-one__title">Chi phí học tập hợp lý</h2>
									<p className="faq-one__text">
										So với những quốc gia nói tiếng Anh khác, chi phí du học Canada hợp lý và có phần phải
										chăng hơn. Sinh viên quốc tế không bị giới hạn cơ hội học ở các trường công lập vốn được
										Chính phủ Canada tài trợ.
										<br />
										Sinh viên có thể vừa học vừa làm giúp trang trải một phần chi phí, hơn hết để tích lũy vốn
										sống, kinh nghiệm làm việc. Ngoài ra, sinh viên có cơ hội xin các suất học bổng giá trị.
									</p>
								</div>
							</div>
						</div>
						<div className="col-lg-6" style={{ paddingBottom: `0px`, borderBottom: `0px none` }}>
							<div className="faq-one__single">
								<div className="faq-one__icon">
									<span>
										<i className="fas fa-address-card"></i>
									</span>
								</div>
								<div className="faq-one__content">
									<h2 className="faq-one__title">Visa SDS</h2>
									<p className="faq-one__text">
										Canada là một trong số ít quốc gia có chính sách visa miễn chứng minh tài chính SDS, là
										giải pháp hiệu quả giúp:
										<br />
										<li>
											{' '}
											Tinh giản thủ tục và đơn giản hóa khâu chứng minh tài chính phức tạp.
											<br />
										</li>
										<li>
											{' '}
											Rút ngắn thời gian xét duyệt và gia tăng cơ hội visa du học Canada.
											<br />
										</li>
										<li> Tiết kiệm thời gian, công sức, tiền bạc cho sinh viên và gia đình.</li>
									</p>
								</div>
							</div>
						</div>		
						</div>
										
								
					<div className="cau-hoi">

						<div className=" col-md-12 col-sm-12"></div>
					</div>
				</div>
				<div className="accordion" id="accordionExample">
				<h2 className="tieu-de">CÁC CÂU HỎI THƯỜNG GẶP KHI DU HỌC CANADA </h2>
					<p className="tai-sao">
						Cùng NEW GOLDEN ROAD giải đáp “tất tần tật” các câu hỏi thường gặp về du học Canada, bạn nhé!
					</p>
					<div className="card">
						<div className="card-header" id="headingOne">
							<h2 className="mb-0">
								<button
									className="btn btn-link btn-block text-left"
									type="button"
									data-toggle="collapse"
									data-target="#collapseOne"
									aria-expanded="true"
									aria-controls="collapseOne"
								>
									Du học Canada có giới hạn độ tuổi không?
								</button>
							</h2>
						</div>
						<div id="collapseOne" className="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
							<div className="card-body">
								Nguyện vọng đi học là lý do chính đáng. Canada không khống chế tuổi theo học các chương trình sau
								phổ thông miễn sinh viên đủ điều kiện về sức khỏe, năng lực học tập đáp ứng được yêu cầu của ngành
								nghề và đủ khả năng tài chính thì đều được phép đăng ký học.
							</div>
						</div>
					</div>
					<div className="card">
						<div className="card-header" id="headingTwo">
							<h2 className="mb-0">
								<button
									className="btn btn-link btn-block text-left collapsed"
									type="button"
									data-toggle="collapse"
									data-target="#collapseTwo"
									aria-expanded="false"
									aria-controls="collapseTwo"
								>
									Du học sinh ở Canada có được làm thêm không?
								</button>
							</h2>
						</div>
						<div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
							<div className="card-body">
								Canada cho phép sinh viên quốc tế làm thêm tối đa 20 giờ/tuần trong khi học và toàn thời gian (40
								giờ/tuần) vào các kỳ nghỉ với điều kiện sinh viên chu toàn việc học. Khi hoàn thành một chương
								trình bằng cấp, sinh viên được phép ở lại từ 1 - 3 năm tùy theo độ dài khóa học chính trước đó.
							</div>
						</div>
					</div>
					<div className="card">
						<div className="card-header" id="headingThree">
							<h2 className="mb-0">
								<button
									className="btn btn-link btn-block text-left collapsed"
									type="button"
									data-toggle="collapse"
									data-target="#collapseThree"
									aria-expanded="false"
									aria-controls="collapseThree"
								>
									Du học Canada có cần chứng minh tài chính không?
								</button>
							</h2>
						</div>
						<div
							id="collapseThree"
							className="collapse"
							aria-labelledby="headingThree"
							data-parent="#accordionExample"
						>
							<div className="card-body">
								Canada linh động cho phép sinh viên từ Việt Nam có thể:
								<br />
								<ul>
									<li className="list">
										{' '}
										Xin visa diện thông thường: Bắt buộc chứng minh tài chính với quy trình xét duyệt, cấp
										visa trong khoảng thời gian trung bình là 11 tuần.
									</li>
									<li className="list">
										{' '}
										Xin visa diện miễn chứng minh tài chính SDS (Study Direct Stream): Sinh viên phải mua Giấy
										chứng nhận đầu tư đảm bảo (GIC) trị giá 10.000 CAD, đồng thời phải có chứng chỉ IELTS tối
										thiểu 6.0 ở tất cả các kỹ năng.
									</li>
								</ul>
							</div>
						</div>
					</div>
					<div className="card">
						<div className="card-header" id="headingFour">
							<h2 className="mb-0">
								<button
									className="btn btn-link btn-block text-left collapsed"
									type="button"
									data-toggle="collapse"
									data-target="#collapseFour"
									aria-expanded="false"
									aria-controls="collapseFour"
								>
									Xin visa du học Canada có khó không?
								</button>
							</h2>
						</div>
						<div id="collapseFour" className="collapse" aria-labelledby="headingFour" data-parent="#accordionExample">
							<div className="card-body">
								Xin visa du học Canada sẽ cần chứng minh được ý định du học Canada nghiêm túc, có lộ trình học hợp
								lý, khả năng tài chính đảm bảo chi trả toàn bộ khóa học… Do đó, việc xin visa khó hay dễ là còn
								tùy thuộc vào tình trạng thực tế của mỗi học sinh và gia đình. Cái khó của nhiều học sinh là không
								thu thập được tài liệu chứng minh được nguồn tài chính bảo trợ vì không phải gia đình nào cũng có
								thu nhập chịu thuế. Ngoài ra là không xây dựng được lộ trình học hợp lý do không hiểu rõ chương
								trình học, yêu cầu của Lãnh sự quán…
							</div>
						</div>
					</div>
					<div className="card">
						<div className="card-header" id="headingFive">
							<h2 className="mb-0">
								<button
									className="btn btn-link btn-block text-left collapsed"
									type="button"
									data-toggle="collapse"
									data-target="#collapseFive"
									aria-expanded="false"
									aria-controls="collapseFive"
								>
									Xin visa du học Canada mất bao lâu?
								</button>
							</h2>
						</div>
						<div id="collapseFive" className="collapse" aria-labelledby="headingFive" data-parent="#accordionExample">
							<div className="card-body">
								Tùy thuộc vào chương trình visa và lưu lượng hồ sơ xin visa tại thời điểm bạn nộp hồ sơ mà thời
								gian xét duyệt visa sẽ nhanh hoặc chậm. Với chương trình visa diện thông thường (có chứng minh tài
								chính) thì tùy mỗi thời điểm trung bình xét từ 3 – 8 tuần. Với chương trình visa SDS (miễn chứng
								minh tài chính), thời gian xét (trong điều kiện bình thường) tối đa 45 ngày làm việc và có thể
								nhanh hơn là sau 2 ngày.
							</div>
						</div>
					</div>
					<div className="card">
						<div className="card-header" id="headingSix">
							<h2 className="mb-0">
								<button
									className="btn btn-link btn-block text-left collapsed"
									type="button"
									data-toggle="collapse"
									data-target="#collapseSix"
									aria-expanded="false"
									aria-controls="collapseSix"
								>
									Ở Canada có những loại hình cư trú nào cho sinh viên?
								</button>
							</h2>
						</div>
						<div id="collapseSix" className="collapse" aria-labelledby="headingSix" data-parent="#accordionExample">
							<div className="card-body">
								Sinh viên quốc tế có nhiều lựa chọn loại hình cư trú ở Canada: homestay – ở cùng gia đình bản xứ,
								ký túc xá trong khuôn viên trường, thuê nhà/phòng bên ngoài trường. Riêng các học sinh trung học
								dưới 18 tuổi thì đều yêu cầu phải có người giám hộ nên thường chỉ được chọn hình thức ở nội trú
								hoặc homestay hoặc ở với người thân, người quen nếu có.
							</div>
						</div>
					</div>
				</div>
				
			</div>
			<div className="share-post">
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

export default ThongTinCa;
