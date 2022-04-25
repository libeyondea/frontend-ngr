<<<<<<< HEAD
import React from 'react';
import Item from './Item';
import NextLink from 'next/link';
import List from './List';

import { MdChevronLeft } from '@react-md/icon';
import Link from './Link';
=======
import { isEmpty, pickBy } from 'lodash';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import queryString from 'query-string';
import React from 'react';
import { MdMoreHoriz } from 'react-icons/md';
import { FaAngleDoubleLeft, FaAngleDoubleRight } from 'react-icons/fa';

import getPageNumbers from '../../utils/getPageNumbers';
import pageNumber from '../../utils/pageNumber';

import Link from './Link';
import List from './List';

>>>>>>> b843cffe532d87e3790017093809ef169b2232c5
const Pagination = ({ total, limit, classNameContainer }) => {
	const router = useRouter();

	if (total <= limit) return null;

	const query = pickBy({ ...(router.query || {}) }, (q) => !isEmpty(q));

	const currentPage = pageNumber(query.page);

	const isLastPage = currentPage * limit >= total;

	const pageNumbers = getPageNumbers({ currentPage, limit, total });

	const url = (page) =>
		`?${queryString.stringify({
			...query,
			page
		})}`;
<<<<<<< HEAD
	return (
		<div className="post-pagination">
			<List>
				{currentPage !== 1 ? (
					<Item>
						<NextLink href={url(currentPage - 1)} passHref scroll={false}>
							<Link label="Previous page">
								<i className="fa fa-angle-double-left"></i>
								<MdChevronLeft />
							</Link>
						</NextLink>
					</Item>
				) : (
					<Item>
						<NextLink href={url(currentPage - 1)} passHref scroll={false}>
							<Link label="No previous page available" disabled>
								<i className="fa fa-angle-double-left"></i>
								<MdChevronLeft />
							</Link>
						</NextLink>
					</Item>
				)}
				<a className="active" href="#">
					1
				</a>
				<a href="#">2</a>
				<a href="#">3</a>
				<a href="#">4</a>
				<a href="#">
					<i className="fa fa-angle-double-right"></i>
				</a>
=======

	return (
		<div className={classNameContainer || ''}>
			<List>
				{currentPage !== 1 ? (
					<NextLink href={url(currentPage - 1)} passHref scroll={false}>
						<Link label="Previous page">
							<FaAngleDoubleLeft />
						</Link>
					</NextLink>
				) : (
					<Link label="No previous page available" disabled>
						<FaAngleDoubleLeft />
					</Link>
				)}
				{pageNumbers.map((pageNumber, i) =>
					pageNumber === '...' ? (
						<Link label="ellipsis" key={`${pageNumber}${i}`}>
							<MdMoreHoriz />
						</Link>
					) : pageNumber === currentPage ? (
						<Link label={`Page ${pageNumber}`} current="Page" key={pageNumber} active>
							{pageNumber}
						</Link>
					) : (
						<NextLink href={url(pageNumber)} passHref scroll={false} key={pageNumber}>
							<Link label={`Page ${pageNumber}`}>{pageNumber}</Link>
						</NextLink>
					)
				)}
				{!isLastPage ? (
					<NextLink href={url(currentPage + 1)} passHref scroll={false}>
						<Link label="Next page">
							<FaAngleDoubleRight />
						</Link>
					</NextLink>
				) : (
					<Link label="No next page available" disabled>
						<FaAngleDoubleRight />
					</Link>
				)}
>>>>>>> b843cffe532d87e3790017093809ef169b2232c5
			</List>
		</div>
	);
};
<<<<<<< HEAD
=======

Pagination.propTypes = {
	total: PropTypes.number.isRequired,
	limit: PropTypes.number.isRequired
};

Pagination.defaultProps = {
	total: 0
};

>>>>>>> b843cffe532d87e3790017093809ef169b2232c5
export default Pagination;
