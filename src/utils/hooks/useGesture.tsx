/**
 * Handler to track mouse and touch events on a ref object
 * Returns the movement delta and calls swipe left/right events
 *
 * @param r (ref object to track gesture on)
 * @param opts (callbacks for swipe events)
 * @return delta
 */
import React, {RefObject, useEffect, useRef, useState} from 'react'

const threshold = 50

const useGesture = (r: RefObject<HTMLElement | null>, opts: {onSwipeRight: () => void, onSwipeLeft: () => void, onDrag: (b: boolean) => void}) => {
	const start = useRef<number | null>(null)
	const ref = useRef<HTMLElement | null>(null)
	const [delta, setDelta] = useState(0)

	useEffect(() => {
		if (!r) return
		ref.current = r.current
		const onTouchStart = (e: TouchEvent) => {
			start.current = e.touches[0].clientX
		}
		const onMouseStart = (e: MouseEvent) => {
			e.preventDefault()
			start.current = e.x
		}
		const onTouchMove = (e: TouchEvent) => {
			if (!start.current) return
			onMove(start.current, e.touches[0].clientX)
		}
		const onMouseMove = (e: MouseEvent) => {
			if (!start.current) return
			onMove(start.current, e.x)
		}
		const onMove = (prevPos: number, pos: number,) => {
			if (delta === 0 && opts.onDrag) opts.onDrag(true)
			setDelta(pos - prevPos)
		}
		const onTouchEnd = (e: TouchEvent) => {
			if (!start.current) return
			onEnd(start.current, e.changedTouches[0].clientX)
		}
		const onMouseEnd = (e: MouseEvent) => {
			if (!start.current) return
			onEnd(start.current, e.x)
		}
		const onEnd = (prevPos: number, pos: number) => {
			if (!start.current) return
			const diff = pos - prevPos

			if (diff > threshold) {
				if (opts.onSwipeRight) opts.onSwipeRight()
			} else if (diff < -threshold) {
				if (opts.onSwipeLeft) opts.onSwipeLeft()
			}

			setDelta(0)
			start.current = null
			if (opts.onDrag) opts.onDrag(false)
		}

		if (ref.current) {
			ref.current.addEventListener('touchstart', onTouchStart, false)
			ref.current.addEventListener('touchmove', onTouchMove, false)
			ref.current.addEventListener('touchend', onTouchEnd, false)

			ref.current.addEventListener('mousedown', onMouseStart, false)
			ref.current.addEventListener('mousemove', onMouseMove, false)
			ref.current.addEventListener('mouseup', onMouseEnd, false)
			ref.current.addEventListener('mouseleave', onMouseEnd, false)
		}

		return () => {
			if (ref.current) {
				ref.current.removeEventListener('touchstart', onTouchStart, false)
				ref.current.removeEventListener('touchmove', onTouchMove, false)
				ref.current.removeEventListener('touchend', onTouchEnd, false)

				ref.current.removeEventListener('mousedown', onMouseStart, false)
				ref.current.removeEventListener('mousemove', onMouseMove, false)
				ref.current.removeEventListener('mouseup', onMouseEnd, false)
				ref.current.removeEventListener('mouseleave', onMouseEnd, false)
			}
		}
	}, [r, ref, opts])

	return delta
}

export default useGesture