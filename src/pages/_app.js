import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/animate.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '../styles/style-icon.css';
import '../styles/style.css';
import '../styles/daotao.scss';
import '../styles/new.css';
import '../styles/kh.css';
import '../styles/TD.css';
/* import '../styles/dtc.css'; */
import '../styles/pagination.css';
import '../styles/responsive.css';
import 'react-modal-video/scss/modal-video.scss';
import 'react-slideshow-image/dist/styles.css';
import '../styles/banner.scss';
import Head from 'next/head';
import { SWRConfig } from 'swr';
import fetcher from '../utils/fetcher';

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			</Head>
			<SWRConfig
				value={{
					fetcher: fetcher,
					onError: (error, key) => {
						console.log(error, key);
						return error.response;
					},
					shouldRetryOnError: false
				}}
			>
				<Component {...pageProps} />
			</SWRConfig>
		</>
	);
}

export default MyApp;
