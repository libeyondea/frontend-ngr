import React from 'react';
import Layout from '../components/Layout';
import NavOne from '../components/NavOne';
import Footer from '../components/Footer';
import DuHocCacNuoc from '../components/DuHocCacNuoc';
import http from '../utils/http';
import pageNumber from '../utils/pageNumber';
import PageHeader from '../components/PageHeader';

const DuHocCanada = () => {
	console.log('DuHocCanada');
	return (
		<Layout pageTitle="Các Trường Đại Học Và Cao Đẳng">
			<NavOne />
			<DuHocCacNuoc />
			<Footer />
		</Layout>
	);
};

export default DuHocCanada;
