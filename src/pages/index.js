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
import http from '../utils/http';
import pageNumber from '../utils/pageNumber';

const HomePageTwo = ({ posts, fbkh, khdh, dtdh }) => {
	console.log('fbkh', fbkh);
	return (
		<Layout pageTitle="Du Học Tân Con Đường Vàng">
			<NavOne />
			{/* <SliderTwo /> */}
			<SliderBanner />
			<Flag />
			<Video />
			<Customer khdh={khdh} />
			<Event posts={posts} />
			<FormSignup />
			<charts />
			<TestimonialOne fbkh={fbkh} />
			<Partner dtdh={dtdh} />
			<Footer />
		</Layout>
	);
};
export async function getServerSideProps({ query }) {
	try {
		const [resPost1, resPost2, resPost3, resPost4] = await Promise.all([
			http.get({
				url: `/posts?category=tin-tuc`,
				params: {
					page: pageNumber(query.page),
					page_size: 6
				}
			}),
			http.get({
				url: `/feedback`,
				params: {
					page: pageNumber(query.page),
					page_size: 6
				}
			}),
			http.get({
				url: `/feedback`,
				params: {
					page: pageNumber(query.page),
					page_size: 4
				}
			}),
			http.get({
				url: `/posts?category=doi-tac`,
				params: {
					page: pageNumber(query.page),
					page_size: 10
				}
			})
		]);
		console.log('resPost1', resPost1);
		return {
			props: {
				posts: resPost1.data,
				fbkh: resPost2.data,
				khdh: resPost3.data,
				dtdh: resPost4.data
			}
		};
	} catch (err) {
		return {
			notFound: true
		};
	}
}

export default HomePageTwo;
