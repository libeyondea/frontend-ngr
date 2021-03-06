import React from 'react';
import Layout from '../components/Layout';
import NavOne from '../components/NavOne';
import PageHeader from '../components/PageHeader';
import Footer from '../components/Footer';
import TrungHoc_details from '../components/Trunghoc_details';
import pageNumber from '../utils/pageNumber';
import http from '../utils/http';

const trunghoc_details = ({posts}) => {
	return (
		<Layout pageTitle="Tân Con Đường Vàng | Trung Học Canada">
			<NavOne />		
			<TrungHoc_details posts={posts} />
			<Footer />
		</Layout>
	);
};
export async function getServerSideProps({ query }) {
	try {
		const resPost = await http.get({
			url: `/posts?category=trung-hoc-canada`,
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
export default trunghoc_details;
