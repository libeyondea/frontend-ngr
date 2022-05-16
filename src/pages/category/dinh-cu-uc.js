import React from 'react';
import Layout from '../../components/Layout';
import NavOne from '../../components/NavOne';
import PageHeader from '../../components/PageHeader';
import Footer from '../../components/Footer';
import DinhCuUc from '../../components/DinhCuUc';

const dinh_cu_uc = () => {
	return (
		<Layout pageTitle="Tân Con Đường Vàng | Định Cư">
			<NavOne />
			<DinhCuUc />
			<Footer />
		</Layout>
	);
};

export default dinh_cu_uc;
