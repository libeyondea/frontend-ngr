import React from 'react';
import Layout from '../components/Layout';
import NavOne from '../components/NavOne';
import PageHeader from '../components/PageHeader';
import Footer from '../components/Footer';
import Test from '../components/Test';

const Test1 = () => {
	return (
		<Layout pageTitle="Tân Con Đường Vàng | Test">
			<NavOne />
			<PageHeader title="Test" />
			<Test />
			<Footer />
		</Layout>
	);
};

export default Test1;
