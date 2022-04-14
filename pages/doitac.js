import React from 'react';
import Layout from '../components/Layout';
import NavOne from '../components/NavOne';
import PageHeader from '../components/PageHeader';
import Footer from '../components/Footer';
import CallToActionTwo from '../components/CallToActionTwo';
import Khachhang from '../components/Khachhang';

const DoitacPage = () => {
	return (
		<Layout pageTitle="Tân Con Đường Vàng | Doitac">
			<NavOne />
			<PageHeader title="Đối Tác" />
			<Khachhang />
			<CallToActionTwo />
			<Footer />
		</Layout>
	);
};
export default DoitacPage;
