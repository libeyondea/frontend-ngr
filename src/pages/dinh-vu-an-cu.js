import React from 'react';
import Layout from '../components/Layout';
import NavOne from '../components/NavOne';
import PageHeader from '../components/PageHeader';
import Footer from '../components/Footer';
import DVAnCu from '../components/DVAnCu';

const TeachersPage = () => {
	return (
		<Layout pageTitle="Tân Con Đường Vàng | Định Cư">
			<NavOne />
			<PageHeader title="Dịch Vụ An Cư" />
			<DVAnCu />
			<Footer />
		</Layout>
	);
};

export default TeachersPage;
