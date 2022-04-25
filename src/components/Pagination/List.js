import PropTypes from 'prop-types';
import React from 'react';

const List = ({ children }) => {
	return <div className={`post-pagination flex-wrap mb-0`}>{children}</div>;
};

List.propTypes = {
	children: PropTypes.node.isRequired
};

export default List;
