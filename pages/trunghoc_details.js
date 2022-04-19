import React from 'react';
import Layout from '../components/Layout';
import NavOne from '../components/NavOne';
import PageHeader from '../components/PageHeader';
import Footer from '../components/Footer';
import TrungHoc_details from '../components/Trunghoc_details';

const trunghoc_details = () => {
	return (
		<Layout pageTitle="Tân Con Đường Vàng | Trung Học Canada">
			<NavOne />		
			<TrungHoc_details/>
			<Footer />
		</Layout>
	);
};

export default trunghoc_details;
