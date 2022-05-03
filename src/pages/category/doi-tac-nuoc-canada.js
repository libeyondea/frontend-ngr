import React from 'react';
import Layout from '../components/Layout';
import NavOne from '../components/NavOne';
import Footer from '../components/Footer';
import CallToActionTwo from '../components/CallToActionTwo';
import DTSlide from '../components/Doitac-Slide';
import DoiTacCacNuoc from '../components/DoiTacCacNuoc';

const DoiTacNuocCanada = () => {
	return (
		<Layout pageTitle="Tân Con Đường Vàng | Đối Tác">
			<NavOne />
			<DTSlide />
			<DoiTacCacNuoc />
			<CallToActionTwo />
			<Footer />
		</Layout>
	);
};

export default DoiTacNuocCanada;
