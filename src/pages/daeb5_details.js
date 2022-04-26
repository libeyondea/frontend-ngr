import React from 'react';
import Layout from '../components/Layout';
import NavOne from '../components/NavOne';
import PageHeader from '../components/PageHeader';
import Footer from '../components/Footer';
import DAEB5_details from '../components/DAEB5_details';

const daeb5_details = () => {
	return (
		<Layout pageTitle="Tân Con Đường Vàng | DỰ ÁN ĐẦU TƯ EB-5">
			<NavOne />		
			<DAEB5_details/>
			<Footer />
		</Layout>
	);
};

export default daeb5_details;
