import Link from 'next/link';
import http from '../utils/http';
import Image from './Image';

const Test = ({ posts, query }) => {
	console.log(query);
	return (
		<div className="col-lg-4">
			{/* {posts.map((post, index) => ( */}
			<div className="blog-one__single" /* key={index} */>
				<div className="blog-one__image">
					<img src="/assets/images/New/du-hoc-tan-con-duong-vang-5-dieu-can-biet-khi-du-hoc-my-310x165.jpg" alt="" />
					<Link href="/news-details">
						<a className="blog-one__plus">
							<i className="kipso-icon-plus-symbol"></i>
						</a>
					</Link>
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
						<Link href="/news-details">
							<a>[DU HỌC MỸ] – Cần chuẩn bị gì khi du học Mỹ – Du học Mỹ – Du học Tân Con Đường Vàng</a>
						</Link>
					</h2>
					<p className="blog-one__text">
						CẦN CHUẨN BỊ GÌ KHI DU HỌC MỸ ? Cần chuẩn bị gì khi đi du học Mỹ? hay Du học Mỹ cần mang theo gì? Đây là
						những từ khoá được gõ nhiều nhất khi các bậc phụ huynh hoặc các bạn học sinh sinh viên muốn tìm hiểu …
					</p>
					<Link href="/news-details">
						<a className="blog-one__link">Read More</a>
					</Link>
				</div>
			</div>
			{/* ))} */}
		</div>
	);
};

export async function getServerSideProps({ query }) {
	try {
		const resPost = await http.get({
			url: `/posts`
		});
		console.log(resPost);
		return {
			props: {
				posts: resPost.data,
				query: query
			}
		};
	} catch (err) {
		return {
			notFound: true
		};
	}
}

export default Test;
