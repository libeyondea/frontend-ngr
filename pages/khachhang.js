import React from 'react';
import Layout from '../components/Layout';
import NavOne from '../components/NavOne';
import PageHeader from '../components/PageHeader';
import Footer from '../components/Footer';
import CallToActionTwo from '../components/CallToActionTwo';
import Khachhang from '../components/Khachhang';

const TeachersPage = () => {
	return (
		<Layout pageTitle="Tân Con Đường Vàng | Khách Hàng">
			<NavOne />
			<PageHeader title="Khách Hàng" />
			<Khachhang />
			<CallToActionTwo />
			<Footer />
		</Layout>
	);
};

export default TeachersPage;
