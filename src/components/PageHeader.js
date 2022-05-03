import React from 'react';
import Link from 'next/link';

const PageHeader = (props) => {
	console.log('PageHeader', props);
	return (
		<section className="inner-banner">
			<div className="container">
				<ul className="list-unstyled thm-breadcrumb"></ul>
				<h2 className="inner-banner-THOC__title">{props.title}</h2>
			</div>
		</section>
	);
};

export default PageHeader;
