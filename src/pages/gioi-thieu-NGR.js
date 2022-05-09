import React from 'react';
import Layout from '../components/Layout';
import NavOne from '../components/NavOne';
import Footer from '../components/Footer';
import GioiThieuNGR from '../components/GioiThieuNGR';
import http from '../utils/http';
const Gioi_Thieu_NGR = ({posts}) => {
	console.log('Gioi_Thieu_NGR');
	return (
		<Layout pageTitle="Giới Thiệu Về New Golden Road">
			<NavOne />
			<GioiThieuNGR/>
			<Footer />
		</Layout>
	);
};

export default Gioi_Thieu_NGR;