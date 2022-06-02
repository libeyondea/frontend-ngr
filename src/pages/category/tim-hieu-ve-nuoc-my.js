import React from 'react';
import Layout from '../../components/Layout';
import NavOne from '../../components/NavOne';
import PageHeader from '../../components/PageHeader';
import Footer from '../../components/Footer';
import DAEB5 from '../../components/DAEB5';

const TeachersPage = ({ posts }) => {
	return (
		<Layout pageTitle="Tân Con Đường Vàng | Định Cư">
			<NavOne />
			<PageHeader title="Tìm Hiểu Về Nước Mỹ" />
			<DAEB5 posts={posts} />
			<Footer />
		</Layout>
	);
};
export async function getServerSideProps({ query }) {
	try {
		const resPost = await http.get({
			url: `posts`,
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
export default TeachersPage;
