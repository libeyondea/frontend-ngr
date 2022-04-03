import '../node_modules/react-modal-video/scss/modal-video.scss';
import 'swiper/css/swiper.css';
import Script from 'next/script';

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
