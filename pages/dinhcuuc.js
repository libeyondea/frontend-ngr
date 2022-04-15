import React from 'react';
import Layout from '../components/Layout';
import NavOne from '../components/NavOne';
import PageHeader from '../components/PageHeader';
import Footer from '../components/Footer';
import CallToActionTwo from '../components/CallToActionTwo';
import Doitac from '../components/Doitac';

const TeachersPage = () => {
	return (
		<Layout pageTitle="Tân Con Đường Vàng | Định Cư">
			<NavOne />
			<PageHeader title="Định Cư Úc" />
			<Doitac />
			<CallToActionTwo />
			<Footer />
		</Layout>
	);
};

export default TeachersPage;
