import React from 'react';
import Layout from '../components/Layout';
import NavOne from '../components/NavOne';
import PageHeader from '../components/PageHeader';
import Footer from '../components/Footer';
import SpeakingClub from '../components/SPEAKING-CLUB/SpeakingClub';

const CoursesPage = () => {
	return (
		<Layout pageTitle="Tân Con Đường Vàng | Tuyển Dụng">
			<NavOne />
			{/* <PageHeader title="Tuyển Dụng" /> */}
			<SpeakingClub />
			<Footer />
		</Layout>
	);
};

export default CoursesPage;
