import React from 'react';
import Layout from '../../components/Layout';
import Footer from '../../components/Footer';
import CallToActionTwo from '../../components/CallToActionTwo';
import Khachhang from '../../components/Khachhang';
import DTSlide from '../../components/Doitac-Slide';
import http from '../../utils/http';
import pageNumber from '../../utils/pageNumber';
import NavOne1 from '../../components/Nav0ne1';

const TeachersPage = ({ posts }) => {
	return (
		<Layout pageTitle="Tân Con Đường Vàng | Khách Hàng">
			<NavOne1 />
			<DTSlide title="Khách Hàng" />
			<Khachhang posts={posts} />
			<CallToActionTwo />
			<Footer />
		</Layout>
	);
};
export async function getServerSideProps({ query }) {
	try {
		const resPost = await http.get({
			url: `/feedback`,
			params: {
				page: pageNumber(query.page),
				page_size: 8
			}
		});
		console.log(resPost.data);
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
