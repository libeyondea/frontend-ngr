import React from 'react';
import Layout from '../components/Layout';
import NavOne from '../components/NavOne';
import Footer from '../components/Footer';
import CacTruongCanada1 from '../components/CacTruongCanada1';

const DuHocCanada = () => {
	console.log('DuHocCanada');
	return (
		<Layout pageTitle="Du Học Canada">
			<NavOne />
			<CacTruongCanada1 />
			<Footer />
		</Layout>
	);
};

export default DuHocCanada;