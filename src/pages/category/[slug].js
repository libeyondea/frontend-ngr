import React from 'react';
import Layout from '../../components/Layout';
import NavOne from '../../components/NavOne';
import PageHeader from '../../components/PageHeader';
import Footer from '../../components/Footer';
import NewsDetails from '../../components/NewsDetails';
import http from '../../utils/http';
import DuHocCacNuoc from '../../components/DuHocCacNuoc';

const GalleryPage = ({ posts, query }) => {
	return (
		<Layout pageTitle="Tân Con Đường Vàng | News Details">
			<NavOne />

			<DuHocCacNuoc posts={posts} />
			<Footer />
		</Layout>
	);
};
export async function getServerSideProps({ query }) {
	try {
		const resPost = await http.get({
			url: `/posts?category=${query.slug}`
		});
		return {
			props: {
				posts: resPost.data,
				query: query
			}
		};
	} catch (err) {
		return {
			notFound: true
		};
	}
}

export default GalleryPage;
