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
			<PageHeader title="Tìm Hiểu Về Nước Mỹ" />
			<DAEB5 />
			<Footer />
		</Layout>
	);
};

export default TeachersPage;