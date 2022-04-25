import React from 'react';
import Layout from '../components/Layout';
import NavOne from '../components/NavOne';
import Footer from '../components/Footer';
import CallToActionTwo from '../components/CallToActionTwo';
import Khachhang from '../components/Khachhang';
import DTSlide from '../components/Doitac-Slide';

const TeachersPage = () => {
	return (
		<Layout pageTitle="Tân Con Đường Vàng | Khách Hàng">
			<NavOne />
			<DTSlide title="Khách Hàng" />
			<Khachhang />
			<CallToActionTwo />
			<Footer />
		</Layout>
	);
};
export default TeachersPage;
