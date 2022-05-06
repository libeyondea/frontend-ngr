import Link from 'next/link';
import Image from './Image';

const Test = ({ post }) => {
	return (
		<div className="col-lg-4">
			<div className="blog-one__single">
				<div className="blog-one__image">
					<img src="/assets/images/New/du-hoc-tan-con-duong-vang-5-dieu-can-biet-khi-du-hoc-my-310x165.jpg" alt="" />

					<a className="blog-one__plus" href="/news-details">
						<i className="kipso-icon-plus-symbol"></i>
					</a>
				</div>
				<div className="blog-one__content text-center">
					<div className="blog-one__meta">
						<a data-toggle="tooltip" data-placement="top" title="" href="#" data-original-title="Posted On Jan 19">
							<i className="fa fa-calendar-alt"></i>
						</a>
						<a data-toggle="tooltip" data-placement="top" title="" href="#" data-original-title="No Comments">
							<i className="fa fa-comments"></i>
						</a>
						<a data-toggle="tooltip" data-placement="top" title="" href="#" data-original-title="Posted By Admin">
							<i className="fa fa-user"></i>
						</a>
					</div>
					<h2 className="blog-one__title">
						<a href="/news-details">{post.translations[0].title}</a>
					</h2>
					<p className="blog-one__text">
						CẦN CHUẨN BỊ GÌ KHI DU HỌC MỸ ? Cần chuẩn bị gì khi đi du học Mỹ? hay Du học Mỹ cần mang theo gì? Đây là
						những từ khoá được gõ nhiều nhất khi các bậc phụ huynh hoặc các bạn học sinh sinh viên muốn tìm hiểu …
					</p>
					<a className="blog-one__link" href="/news-details">
						dd dddđdđđâsdasdgit pull --rebase git pull --rebase
					</a>
				</div>
			</div>
		</div>
		/* https://backend-ngr.herokuapp.com/api/posts?category=khach-hang */
	);
};

export default Test;
