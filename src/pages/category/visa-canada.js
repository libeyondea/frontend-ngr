import React from 'react';
import Layout from '../../components/Layout';
import PageHeader from '../../components/PageHeader';
import Footer from '../../components/Footer';
import Visa from '../../components/Visa';
import pageNumber from '../../utils/pageNumber';
import http from '../../utils/http';
import NavOne1 from '../../components/Nav0ne1';

const VisaCa = ({ posts }) => {
	return (
		<Layout pageTitle="Tân Con Đường Vàng | Visa Canada">
			<NavOne1 />
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
