import React from 'react';
import Layout from '../components/Layout';
import NavOne from '../components/NavOne';
import PageHeader from '../components/PageHeader';
import Footer from '../components/Footer';
import Daotaochinh from '../components/daotao/daotao';


const daotao_chinh = () => {
	return (
		<Layout pageTitle="Tân Con Đường Vàng | DỰ ÁN ĐẦU TƯ EB-5">
			<NavOne />		
			<Daotaochinh/>
			<Footer />
		</Layout>
	);
};

export default daotao_chinh;
