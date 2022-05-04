import React from 'react';
import Layout from '../../components/Layout';
import NavOne from '../../components/NavOne';
import Footer from '../../components/Footer';
import ChuongTrinhL1 from '../../components/ChuongTrinhL1';

const chuongtrinhL1 = () => {
	console.log('chuongtrinhL1');
	return (
		<Layout pageTitle="Chương Trình L1">
			<NavOne />
			<ChuongTrinhL1 />
			<Footer />
		</Layout>
	);
};

export default chuongtrinhL1;
