import React, {Children, useContext, useEffect, useRef} from 'react'
import {Container, Inner, Item} from './styles'
import useElementWidth from '../../../utils/hooks/useElementWidth'
import useGesture from '../../../utils/hooks/useGesture'
import {COLORS} from '../../../utils/constants'
import IsMobile from '../../../context'

interface Props {
	children: JSX.Element[]
	itemsPerPage: number
	page: number
	changePage: (page: number) => void
}

const dragSpeed = 2

const Slider = ({ children, itemsPerPage, page, changePage, isDragging, setIsDragging }: Props) => {
	const ref = useRef<HTMLDivElement | null>(null)
	const isMobile = useContext(IsMobile)
	const carouselWidth = useElementWidth(ref)
	const itemWidth = carouselWidth / itemsPerPage

	const delta = useGesture(ref, {
		onSwipeLeft: () => changePage(page + 1),
		onSwipeRight: () => changePage(page - 1),
	})
	const drag = delta * dragSpeed

	useEffect(() => {
		setTimeout(() => {
			console.log(drag !== 0)
			setIsDragging(drag !== 0)
		}, 1000)
	}, [drag !== 0])

	// floor so drag/swipe snaps to the nearest item start
	const translate = (page * (Math.floor(itemsPerPage) * itemWidth)) - drag

	return (
		<Container
			ref={ref}
		>
			<Inner
				style={{
					transform: `translateX(-${translate}px)`,
				}}
			>
				{Children.map(children, (child, index) => {
					// hide separator on mobile and last item
					const hideBoarder = isMobile || index === page * itemsPerPage
					return (
						<Item
							style={{
								width: itemWidth,
								borderLeft: hideBoarder ? 'none' : `1px solid ${COLORS.offWhite}`
							}}
						>
							{React.cloneElement(child)}
						</Item>
					)
				})}
			</Inner>
		</Container>
	)
}

export default Slider