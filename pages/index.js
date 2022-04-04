import React from 'react';
import Layout from '../components/Layout';
import NavOne from '../components/NavOne';
import SliderTwo from '../components/SliderTwo';
import Footer from '../components/Footer';
import CourseCatTwo from '../components/CourseCatTwo';
import AboutOne from '../components/AboutOne';
import CourseTwo from '../components/CourseTwo';
import TeamOne from '../components/TeamOne';
import Pricing from '../components/Pricing';
import MeetingOne from '../components/MeetingOne';
import CallToActionTwo from '../components/CallToActionTwo';
import BlogThree from '../components/BlogThree';
import TestimonialOne from '../components/TestimonialOne';
import Video from '../components/Video';
import Flag from '../components/Flag';
import Customer from '../components/Customer';
import Partner from '../components/Partner';
import Event from '../components/Event';
import FormSignup from '../components/FormSignup';

const HomePageTwo = () => {
	return (
		<Layout pageTitle="Kipso | Home 2">
			<NavOne />
			<SliderTwo />
			<Flag />
			<Video />
			<Customer />
			<Event />
			<FormSignup />
			{/* <CourseTwo />
			<TeamOne />
			<Pricing />
			<MeetingOne />
			<CallToActionTwo />
			<BlogThree /> */}
			<TestimonialOne />
			<Partner />
			<Footer />
		</Layout>
	);
};

export default HomePageTwo;
