/**
 * Helper return width of ref object
 * and recalculate on window resize
 *
 * @param ref (ref object to track width changes)
 * @return width
 */
import React, {useState, useEffect, RefObject} from 'react'

const useElementWidth = (ref: RefObject<HTMLElement | null>) => {
	const [width, setWidth] = useState((ref?.current && ref.current.offsetWidth) || 0)

	useEffect(() => {
		const getWidth = () => (ref?.current && ref.current.offsetWidth) || 0
		const onChange = () => {
			setWidth(getWidth())
		}
		if (ref.current) {
			setWidth(getWidth())
		}
		window.addEventListener('resize', onChange)
		return () => {
			window.removeEventListener('resize', onChange)
		}
	}, [ref])

	return width
}

export default useElementWidth