import Head from 'next/head';
import Script from 'next/script';
import Chat from './Chat';

const Layout = (props) => {
	return (
		<div>
			<Head>
				<title>{props.pageTitle}</title>
			</Head>
			<div className="page-wrapper">{props.children}</div>
			<Chat />
			<Script src="/assets/plugins/bootstrap/jquery.min.js" strategy="beforeInteractive" />
			<Script src="/assets/plugins/bootstrap/bootstrap.min.js" strategy="beforeInteractive" />
			<Script src="https://sp.zalo.me/plugins/sdk.js" strategy="afterInteractive" />
		</div>
	);
};

export default Layout;
