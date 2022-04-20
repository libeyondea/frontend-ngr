import React from 'react';
import Layout from '../components/Layout';
import NavOne from '../components/NavOne';
import PageHeader from '../components/PageHeader';
import Footer from '../components/Footer';
import DinhCuMy from '../components/DinhCuMy';

const TeachersPage = () => {
	return (
		<Layout pageTitle="Tân Con Đường Vàng | Định Cư">
			<NavOne />
			<PageHeader title="Định Cư Mỹ" />
			<DinhCuMy />
			<Footer />
		</Layout>
	);
};

export default TeachersPage;
