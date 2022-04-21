import React from 'react';
import Layout from '../components/Layout';
import NavOne from '../components/NavOne';
import SliderTwo from '../components/SliderTwo';
import Flag from '../components/Flag';
import Video from '../components/Video';
import Customer from '../components/Customer';
import Event from '../components/Event';
import FormSignup from '../components/FormSignup';
import TestimonialOne from '../components/TestimonialOne';
import Partner from '../components/Partner';
import Footer from '../components/Footer';
import Chat from '../components/Chat';
import SliderBanner from '../components/SliderBanner';

const HomePageTwo = () => {
	return (
		<Layout pageTitle="Du Học Tân Con Đường Vàng">
			<NavOne />
			{/* <SliderTwo /> */}
			<SliderBanner />
			<Flag />
			<Video />
			<Customer />
			<Event />
			<FormSignup />
			<TestimonialOne />
			<Partner />
			<Footer />
		</Layout>
	);
};

export default HomePageTwo;
