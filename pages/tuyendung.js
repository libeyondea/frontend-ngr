import React from 'react';
import Layout from '../components/Layout';
import NavOne from '../components/NavOne';
import PageHeader from '../components/PageHeader';
import Footer from '../components/Footer';
import TuyenDung from '../components/TuyenDung';

const CoursesPage = () => {
	return (
		<Layout pageTitle="Tân Con Đường Vàng | Tuyển Dụng">
			<NavOne />
			<PageHeader title="Tuyển Dụng" />
			<TuyenDung />
			<Footer />
		</Layout>
	);
};

export default CoursesPage;
