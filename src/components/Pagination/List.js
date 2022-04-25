import PropTypes from 'prop-types';
import React from 'react';

const List = ({ children }) => {
<<<<<<< HEAD
	return <ul className={`pagination flex-wrap mb-0`}>{children}</ul>;
=======
	return <div className={`post-pagination flex-wrap mb-0`}>{children}</div>;
>>>>>>> b843cffe532d87e3790017093809ef169b2232c5
};

List.propTypes = {
	children: PropTypes.node.isRequired
};

export default List;
