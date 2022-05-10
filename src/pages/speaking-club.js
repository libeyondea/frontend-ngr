import React from 'react';
import Layout from '../components/Layout';
import NavOne from '../components/NavOne';
import PageHeader from '../components/PageHeader';
import Footer from '../components/Footer';
import SpeakingClub from '../components/SPEAKING-CLUB/SpeakingClub';
import SpeakingSlide from '../components/SPEAKING-CLUB/speakingSlide';

const CoursesPage = () => {
	return (
		<Layout pageTitle="Tân Con Đường Vàng | Tuyển Dụng">
			<NavOne />
			<SpeakingSlide title="Khách Hàng" />
			{/* <PageHeader title="Tuyển Dụng" /> */}
			<SpeakingClub />
			<Footer />
		</Layout>
	);
};

export default CoursesPage;
