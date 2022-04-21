import React from 'react';
import Layout from '../components/Layout';
import NavOne from '../components/NavOne';
import PageHeader from '../components/PageHeader';
import Footer from '../components/Footer';
import HocBongCanada from '../components/HocBong/HocBongCanada';

const GalleryPage = () => {
	return (
		<Layout pageTitle="Tân Con Đường Vàng | Gallery">
			<NavOne />
			<PageHeader title="Du Học Canada" />
			<HocBongCanada />
			<Footer />
		</Layout>
	);
};

export default GalleryPage;
