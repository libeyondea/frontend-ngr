import React from 'react';
import Layout from '../components/Layout';
import NavOne from '../components/NavOne';
import PageHeader from '../components/PageHeader';
import Footer from '../components/Footer';
import BLTNMy from '../components/BLTNMy';

const TeachersPage = () => {
	return (
		<Layout pageTitle="Tân Con Đường Vàng | Định Cư">
			<NavOne />
			<PageHeader title="Bảo Lãnh Thân Nhân" />
			<BLTNMy />
			<Footer />
		</Layout>
	);
};

export default TeachersPage;
