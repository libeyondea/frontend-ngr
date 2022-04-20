import React from 'react';
import Layout from '../components/Layout';
import NavOne from '../components/NavOne';
import Footer from '../components/Footer';
import CacTruongDuHoc from '../components/CacTruongDuHoc';

const CacTruongDHCD = () => {
	console.log('DuHocCanada');
	return (
		<Layout pageTitle="Các Trường Đại Học Và Cao Đẳng">
			<NavOne />
			<CacTruongDuHoc />
			<Footer />
		</Layout>
	);
};

export default CacTruongDHCD;
