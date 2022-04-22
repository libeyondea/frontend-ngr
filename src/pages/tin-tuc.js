import React from 'react';
import Layout from '../components/Layout';
import NavOne from '../components/NavOne';
import PageHeader from '../components/PageHeader';
import Footer from '../components/Footer';
import News from '../components/News';
import http from '../utils/http';

const NewsPage = ({ posts }) => {
	return (
		<Layout pageTitle="Tân Con Đường Vàng | News">
			<NavOne />
			<PageHeader title="News" />
			<News posts={posts} />
			<Footer />
		</Layout>
	);
};

export async function getServerSideProps({ query }) {
	try {
		const resPost = await http.get({
			url: `/posts`
		});
		return {
			props: {
				posts: resPost.data
			}
		};
	} catch (err) {
		return {
			notFound: true
		};
	}
}

export default NewsPage;
