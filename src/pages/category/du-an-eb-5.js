import React from 'react';
import Layout from '../../components/Layout';
import NavOne from '../../components/NavOne';
import PageHeader from '../../components/PageHeader';
import Footer from '../../components/Footer';
import DAEB5 from '../../components/DAEB5';
import http from '../../utils/http';
import pageNumber from '../../utils/pageNumber';

const daeb5 = ({ posts }) => {
	return (
		<Layout pageTitle="Tân Con Đường Vàng | DỰ ÁN ĐẦU TƯ EB-5">
			<NavOne />
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

export default daeb5;
