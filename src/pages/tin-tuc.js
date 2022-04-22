import React from 'react';
import Layout from '../components/Layout';
import NavOne from '../components/NavOne';
import PageHeader from '../components/PageHeader';
import Footer from '../components/Footer';
import News from '../components/News';

const NewsPage = () => {
	return (
		<Layout pageTitle="Tân Con Đường Vàng | News">
			<NavOne />
			<PageHeader title="News" />
			{posts.data.length && posts.data.map((post, index) => <News post={post} key={index} />)}
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

export default NewsPage;
