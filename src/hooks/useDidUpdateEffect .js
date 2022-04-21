import { useEffect, useRef } from 'react';

const useDidUpdateEffect = (effect, deps) => {
	const mounted = useRef(false);

	useEffect(() => {
		if (!mounted.current) {
			// didMount
			mounted.current = true;
		} else {
			// didUpdate
			effect();
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, deps);
};

export default useDidUpdateEffect;
