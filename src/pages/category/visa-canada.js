import React from 'react';
import Layout from '../../components/Layout';
import NavOne from '../../components/NavOne';
import PageHeader from '../../components/PageHeader';
import Footer from '../../components/Footer';
import Visa from '../../components/Visa';
import pageNumber from '../../utils/pageNumber';
import http from '../../utils/http';

const VisaCa = ({ posts }) => {
	return (
		<Layout pageTitle="Tân Con Đường Vàng | Visa Canada">
			<NavOne />
			<Visa posts={posts} />
			<Footer />
		</Layout>
	);
};
export async function getServerSideProps({ query }) {
	try {
		const resPost = await http.get({
			url: `/posts?category=visa-canada`,
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

export default VisaCa;
