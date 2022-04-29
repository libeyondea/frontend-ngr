import React from 'react';
import Layout from '../components/Layout';
import NavOne from '../components/NavOne';
import Footer from '../components/Footer';
import DinhCuBritish from '../components/DinhCuBritish';

const dinhcubritish = () => {
	return (
		<Layout pageTitle="Định cư bang British- Canada ">
			<NavOne />
			<DinhCuBritish />
			<Footer />
		</Layout>
	);
};

export default dinhcubritish;
