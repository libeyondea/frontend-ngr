import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, { forwardRef } from 'react';

<<<<<<< HEAD
const Link = forwardRef(({ children, disabled, current, label, ...props }, ref) => {
	const cx = classNames('fa fa-angle-double-left');
=======
const Link = forwardRef(({ children, active, disabled, current, label, ...props }, ref) => {
	const cx = classNames(``, {
		disabled: disabled,
		active: active
	});
>>>>>>> b843cffe532d87e3790017093809ef169b2232c5
	return (
		<a className={cx} aria-label={label} aria-current={current} aria-disabled={disabled} ref={ref} {...props}>
			{children}
		</a>
	);
});

Link.displayName = 'Link';

Link.propTypes = {
	children: PropTypes.node.isRequired,
	current: PropTypes.string,
	disabled: PropTypes.bool,
	label: PropTypes.string.isRequired
};

export default Link;
