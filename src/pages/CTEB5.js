import React from 'react';
import Layout from '../components/Layout';
import NavOne from '../components/NavOne';
import PageHeader from '../components/PageHeader';
import Footer from '../components/Footer';
import CTEB5 from '../components/CTEB5';

const TeachersPage = () => {
	return (
		<Layout pageTitle="Tân Con Đường Vàng | Định Cư">
			<NavOne />
			<PageHeader title="Chương Trình EB-5" />
			<CTEB5 />
			<Footer />
		</Layout>
	);
};

export default TeachersPage;
