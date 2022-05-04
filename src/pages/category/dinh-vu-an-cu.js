import React from 'react';
import Layout from '../components/Layout';
import NavOne from '../components/NavOne';
import PageHeader from '../components/PageHeader';
import Footer from '../components/Footer';
import DVAnCu from '../components/DVAnCu';

const DichVuAnCu = () => {
	return (
		<Layout pageTitle="Tân Con Đường Vàng | Định Cư">
			<NavOne />
			<DVAnCu />
			<Footer />
		</Layout>
	);
};

export default DichVuAnCu ;
