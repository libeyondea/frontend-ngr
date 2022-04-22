import React from 'react';
import Layout from '../components/Layout';
import NavOne from '../components/NavOne';
import Footer from '../components/Footer';
import DinhCuNewBrunswich from '../components/DinhCuNewBrunswick';

const dinhcunewbrunswick = () => {
	console.log('DuHocCanada');
	return (
		<Layout pageTitle="Định cư bang New Brunswick- Canada ">
			<NavOne />
            <DinhCuNewBrunswich />
			<Footer />
		</Layout>
	);
};

export default dinhcunewbrunswick;
