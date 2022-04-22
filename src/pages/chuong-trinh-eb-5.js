import React from 'react';
import Layout from '../components/Layout';
import NavOne from '../components/NavOne';
import PageHeader from '../components/PageHeader';
import Footer from '../components/Footer';
import DAEB5 from '../components/DAEB5';

const TeachersPage = () => {
	return (
		<Layout pageTitle="Tân Con Đường Vàng | Định Cư">
			<NavOne />
			<PageHeader title="Dự Án EB-5" />
			<DAEB5 />
			<Footer />
		</Layout>
	);
};

export default TeachersPage;
