import React from 'react';
import Layout from '../../components/Layout';
import NavOne from '../../components/NavOne';
import PageHeader from '../../components/PageHeader';
import Footer from '../../components/Footer';
import DinhCuCanada from '../../components/DinhCuCanada';

const TeachersPage = () => {
	return (
		<Layout pageTitle="Tân Con Đường Vàng | Định Cư">
			<NavOne />
			<PageHeader title="Định Cư Canada" />
			<DinhCuCanada />
			<Footer />
		</Layout>
	);
};

export default TeachersPage;
