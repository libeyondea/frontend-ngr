import Head from 'next/head';

const Layout = (props) => {
	return (
		<div>
			<Head>
				<title>{props.pageTitle}</title>
			</Head>
			<div className="page-wrapper">{props.children}</div>
			<script src="/assets/plugins/bootstrap/jquery.min.js"></script>
			<script src="/assets/plugins/bootstrap/bootstrap.min.js"></script>
		</div>
	);
};

export default Layout;
