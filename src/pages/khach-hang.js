import React from 'react';
import Layout from '../components/Layout';
import NavOne from '../components/NavOne';
import Footer from '../components/Footer';
import CallToActionTwo from '../components/CallToActionTwo';
import Khachhang from '../components/Khachhang';
import DTSlide from '../components/Doitac-Slide';

const TeachersPage = () => {
	return (
		<Layout pageTitle="Tân Con Đường Vàng | Khách Hàng">
			<NavOne />
			<DTSlide title="Khách Hàng" />
			<Khachhang />
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
