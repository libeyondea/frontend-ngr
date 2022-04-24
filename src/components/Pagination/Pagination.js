import React from 'react';
import Item from './Item';
import NextLink from 'next/link';
import List from './List';

import { MdChevronLeft } from '@react-md/icon';
import Link from './Link';
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
			</List>
		</div>
	);
};
export default Pagination;
