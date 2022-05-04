import React from 'react';
import Layout from '../../components/Layout';
import NavOne from '../../components/NavOne';
import PageHeader from '../../components/PageHeader';
import Footer from '../../components/Footer';
import NewsDetails from '../../components/NewsDetails';
import http from '../../utils/http';
import DuHocCacNuoc from '../../components/DuHocCacNuoc';
import HocBongCanada from '../../components/HocBong/HocBongCanada';

const GalleryPage = ({ posts, query }) => {
	return (
		<Layout pageTitle="Tân Con Đường Vàng | News Details">
			<NavOne />
			{query.slug === 'hoc-bong' ||
			query.slug === 'hoc-bong-canada' ||
			query.slug === 'hoc-bong-anh' ||
			query.slug === 'hoc-bong-my' ||
			query.slug === 'hoc-bong-uc' ||
			query.slug === 'hoc-bong-zealand' ||
			query.slug === 'hoc-bong-singapore' ||
			query.slug === 'hoc-bong-phan-lan' ||
			query.slug === 'hoc-bong-ha-lan' ||
			query.slug === 'hoc-bong-thuy-si' ||
			query.slug === 'hoc-bong-anh' ||
			query.slug === 'hoc-bong-anh' ||
			query.slug === 'hoc-bong-anh' ||
			query.slug === 'hoc-bong-anh' ||
			query.slug === 'hoc-bong-anh' ||
			query.slug === 'hoc-bong-anh' ||
			query.slug === 'hoc-bong-anh' ? (
				<HocBongCanada />
			) : (
				<DuHocCacNuoc posts={posts} />
			)}
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
