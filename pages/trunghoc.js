import React from 'react';
import Layout from '../components/Layout';
import NavOne from '../components/NavOne';
import PageHeader from '../components/PageHeader';
import Footer from '../components/Footer';
import TrungHoc from '../components/Trunghoc';

const trunghoc = () => {
	return (
		<Layout pageTitle="Tân Con Đường Vàng | Trung Học Canada">
			<NavOne />		
			<TrungHoc/>
			<Footer />
		</Layout>
	);
};

export default trunghoc;
