import React from 'react';
import Layout from '../../components/Layout';
import NavOne from '../../components/NavOne';
import PageHeader from '../../components/PageHeader';
import Footer from '../../components/Footer';
import NewsDetails from '../../components/NewsDetails';
import http from '../../utils/http';
const GalleryPage = ({ post }) => {
	return (
		<Layout pageTitle="Tân Con Đường Vàng | News Details">
			<NavOne />
			<PageHeader title="News Details" />
			<NewsDetails post={post} />
			<Footer />
		</Layout>
	);
};
export async function getServerSideProps({ query }) {
	try {
		const resPost = await http.get({
			url: `/posts/${query.slug}`
		});
		return {
			props: {
				post: resPost.data
			}
		};
	} catch (err) {
		return {
			notFound: true
		};
	}
}

export default GalleryPage;
