import React from 'react';
import Layout from '../../components/Layout';
import NavOne from '../../components/NavOne';
import PageHeader from '../../components/PageHeader';
import Footer from '../../components/Footer';
import Visa_details from '../../components/Visa_details';

const VisaCa_details = () => {
	return (
		<Layout pageTitle="Tân Con Đường Vàng | Visa Canada">
			<NavOne />
			<Visa_details />
			<Footer />
		</Layout>
	);
};

export default VisaCa_details;
