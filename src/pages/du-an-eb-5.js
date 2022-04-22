import React from 'react';
import Layout from '../components/Layout';
import NavOne from '../components/NavOne';
import PageHeader from '../components/PageHeader';
import Footer from '../components/Footer';
import DAEB5 from '../components/DAEB5';

const daeb5 = () => {
	return (
		<Layout pageTitle="Tân Con Đường Vàng | DỰ ÁN ĐẦU TƯ EB-5">
			<NavOne />		
			<DAEB5/>
			<Footer />
		</Layout>
	);
};

export default daeb5;
