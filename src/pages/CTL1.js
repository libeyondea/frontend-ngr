import React from 'react';
import Layout from '../components/Layout';
import NavOne from '../components/NavOne';
import PageHeader from '../components/PageHeader';
import Footer from '../components/Footer';
import CTL1 from '../components/CTL1';

const TeachersPage = () => {
	return (
		<Layout pageTitle="Tân Con Đường Vàng | Định Cư">
			<NavOne />
			<PageHeader title="Chương Trình L-1" />
			<CTL1 />
			<Footer />
		</Layout>
	);
};

export default TeachersPage;
