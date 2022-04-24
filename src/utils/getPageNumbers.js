const getPageNumbers = ({ currentPage, limit, total, pageNumbersToShow = 3 }) => {
	const lastPageNumber = Math.ceil(total / limit);
	const currentPageNumber = currentPage <= lastPageNumber ? currentPage : lastPageNumber;
	const maxPagesBeforeCurrentPage = Math.floor(pageNumbersToShow / 2);
	const maxPagesAfterCurrentPage = Math.ceil(pageNumbersToShow / 2) - 1;
	let startPage = 1;
	let endPage = lastPageNumber;

	if (lastPageNumber <= 1) {
		return []; // Don't show numbers if there's only 1 page
	}

	if (currentPageNumber <= maxPagesBeforeCurrentPage) {
		// near the start
		startPage = 1;
		endPage = pageNumbersToShow;
	} else if (currentPageNumber + maxPagesAfterCurrentPage >= lastPageNumber) {
		// near the end
		startPage = lastPageNumber - pageNumbersToShow + 1;
	} else {
		// somewhere in the middle
		startPage = currentPageNumber - maxPagesBeforeCurrentPage;
		endPage = currentPageNumber + maxPagesAfterCurrentPage;
	}

	let pageNumbers = Array.from(Array(endPage + 1 - startPage).keys())
		.map((pageNumber) => startPage + pageNumber)
		.filter((pageNumber) => pageNumber <= lastPageNumber && pageNumber > 0);

	if (pageNumbers[0] > 1) {
		if (pageNumbers[0] <= 2) {
			pageNumbers = [1, ...pageNumbers];
		} else {
			const ellipsis = pageNumbers[0] > 3 ? '...' : 2;
			pageNumbers = [1, ellipsis, ...pageNumbers];
		}
	}

	if (pageNumbers[pageNumbers.length - 1] !== lastPageNumber) {
		if (pageNumbers[pageNumbers.length - 1] === lastPageNumber - 1) {
			pageNumbers = [...pageNumbers, lastPageNumber];
		} else {
			const ellipsis = pageNumbers[pageNumbers.length - 1] < lastPageNumber - 2 ? '...' : lastPageNumber - 1;
			pageNumbers = [...pageNumbers, ellipsis, lastPageNumber];
		}
	}

	return pageNumbers;
};

export default getPageNumbers;
