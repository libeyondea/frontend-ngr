import React from 'react';
import Layout from '../components/Layout';
import NavOne from '../components/NavOne';
import Footer from '../components/Footer';
import CacTruongDuHoc from '../components/CacTruongDuHoc';
import http from '../utils/http';
import pageNumber from '../utils/pageNumber';
const CacTruongDHCD = ({posts}) => {
	console.log('DuHocCanada');
	return (
		<Layout pageTitle="Các Trường Đại Học Và Cao Đẳng">
			<NavOne />
			<CacTruongDuHoc posts={posts} />
			<Footer />
		</Layout>
	);
};
export async function getServerSideProps({ query }) {
	try {
		const resPost = await http.get({
			url: `/posts?category=cac-truong-dai-hoc-va-cao-dang-canada`,
			params: {
				page: pageNumber(query.page),
				page_size: 8
			}
		});
		return {
			props: {
				posts: resPost.data
			}
		};
	} catch (err) {
		console.log(err);
		return {
			notFound: true
		};
	}
}

export default CacTruongDHCD;
