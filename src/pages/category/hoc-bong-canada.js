import React from 'react';
import Layout from '../../components/Layout';
import NavOne from '../../components/NavOne';
import PageHeader from '../../components/PageHeader';
import Footer from '../../components/Footer';
import HocBongCanada from '../../components/HocBong/HB-Canada';
import http from '../../utils/http';

const GalleryPage = ({ post }) => {
	console.log(post);
	return (
		<Layout pageTitle="Tân Con Đường Vàng | Gallery">
			<NavOne />
			<PageHeader title="Học Bổng Canada" />
			<HocBongCanada post={post} />
			<Footer />
		</Layout>
	);
};

export async function getServerSideProps({ query }) {
	try {
		const resPost = await http.get({
			url: `/posts?category=hoc-bong-canada`
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
