import React from 'react';
import Layout from '../components/Layout';
import NavOne from '../components/NavOne';
import Footer from '../components/Footer';
import DuHoc_details from '../components/DuHoc_details';

const DuHocCanada_details = () => {
	return (
		<Layout pageTitle="Chi Tiết Các Trường">
			<NavOne />
			<DuHoc_details />
			<Footer />
		</Layout>
	);
};

export default DuHocCanada_details;