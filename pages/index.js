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

const HomePageTwo = () => {
	return (
		<Layout pageTitle="Du Học Tân Con Đường Vàng">
			<NavOne />
			<SliderTwo />
			<Flag />
			<Video />
			<Customer />
			<Event />
			<FormSignup />
			<TestimonialOne />
			<Partner />
			<Footer />
			<Chat />
		</Layout>
	);
};

export default HomePageTwo;
