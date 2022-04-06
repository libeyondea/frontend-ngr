import React from 'react';
import Layout from '../components/Layout';
import NavOne from '../components/NavOne';
import Footer from '../components/Footer';
import CacTruongCanada from '../components/CacTruongCanada';

const DuHocCanada = () => {
	console.log('DuHocCanada');
	return (
		<Layout pageTitle="Du Học Canada">
			<NavOne />
			<CacTruongCanada />
			<Footer />
		</Layout>
	);
};

export default DuHocCanada;