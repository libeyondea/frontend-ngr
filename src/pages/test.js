import React from 'react';
import Layout from '../components/Layout';
import NavOne from '../components/NavOne';
import PageHeader from '../components/PageHeader';
import Footer from '../components/Footer';
import Test from '../components/Test';
import http from '../utils/http';

const Test1 = ({ posts }) => {
	console.log(posts);
	return (
		<Layout pageTitle="Tân Con Đường Vàng | Test">
			<NavOne />
			<PageHeader title="Test" />
			{posts.data.length && posts.data.map((post, index) => <Test post={post} key={index} />)}
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

export default Test1;
