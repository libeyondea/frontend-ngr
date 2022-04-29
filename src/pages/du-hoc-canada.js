import React from 'react';
import Layout from '../components/Layout';
import NavOne from '../components/NavOne';
import Footer from '../components/Footer';
import DuHocCacNuoc from '../components/DuHocCacNuoc';
import http from '../utils/http';
import pageNumber from '../utils/pageNumber';
import PageHeader from '../components/PageHeader';


const DuHocCanada = ({posts}) => {
	console.log('DuHocCanada');
	return (
		<Layout pageTitle="Các Trường Đại Học Và Cao Đẳng">
			<NavOne />
			<DuHocCacNuoc posts={posts} />
			<Footer />
		</Layout>
	);
};
export async function getServerSideProps({ query }) {
	try {
		const resPost = await http.get({
			url: `/posts?category=du-hoc-canada`,
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

export default DuHocCanada;
