import React from 'react';
import Layout from '../components/Layout';
import NavOne from '../components/NavOne';
import Footer from '../components/Footer';
import DTSlide from '../components/Doitac-Slide';
import Details_dt from '../components/Details-dt';

const Detailspartner = ({ posts }) => {
	return (
		<Layout pageTitle="Tân Con Đường Vàng | Đối Tác">
			<NavOne />
			<DTSlide />
			<Details_dt posts={posts} />
			<Footer />
		</Layout>
	);
};

export default Detailspartner;
