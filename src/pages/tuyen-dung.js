import React from 'react';
import Layout from '../components/Layout';
import NavOne from '../components/NavOne';
import PageHeader from '../components/PageHeader';
import Footer from '../components/Footer';
import TuyenDung from '../components/TuyenDung';
import http from '../utils/http';
import pageNumber from '../utils/pageNumber';

const CoursesPage = ({ posts }) => {
	return (
		<Layout pageTitle="Tân Con Đường Vàng | Tuyển Dụng">
			<NavOne />
			<PageHeader title="Tuyển Dụng" />
			<TuyenDung posts={posts} />
			<Footer />
		</Layout>
	);
};

export async function getServerSideProps({ query }) {
	try {
		const resPost = await http.get({
			url: `/posts?category=tuyen-dung`,
			params: {
				page: pageNumber(query.page),
				page_size: 6
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
export default CoursesPage;
