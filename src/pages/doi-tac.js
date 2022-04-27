import React from 'react';
import Layout from '../components/Layout';
import NavOne from '../components/NavOne';
import PageHeader from '../components/PageHeader';
import Footer from '../components/Footer';
import CallToActionTwo from '../components/CallToActionTwo';
import Doitac from '../components/Doitac';
import DTSlide from '../components/Doitac-Slide';
import http from '../utils/http';
import pageNumber from '../utils/pageNumber';

const TeachersPage = ({ posts }) => {
	return (
		<Layout pageTitle="Tân Con Đường Vàng | Đối Tác">
			<NavOne />
			<DTSlide />
			<Doitac posts={posts} />
			<CallToActionTwo />
			<Footer />
		</Layout>
	);
};
export async function getServerSideProps({ query }) {
	try {
		const resPost = await http.get({
			url: `/posts`,
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

export default TeachersPage;
