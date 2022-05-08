import React, {Children, useContext, useState} from 'react'
import Indicators from './indicators'
import Title from '../../atoms/typography/title'
import {Footer, Header, Layout, Main, NavLeft, NavRight} from './layout'
import ChevronButton, {Direction} from '../../atoms/buttons/chevronButton'
import ArrowLinkButton from '../../atoms/buttons/arrowLinkButton'
import Slider from './slider'
import IsMobile from '../../../context'

interface Props {
	children: JSX.Element[]
	itemsPerPage: number
	title: string
	link: {
		label: string
		href: string
	}
}

const Carousel = ({children, itemsPerPage, title, link}: Props) => {
	const id = title.toLowerCase().replaceAll(' ', '-')
	const isMobile = useContext(IsMobile)
	const [page, setPage] = useState(0)
	const count = Children.count(children)
	const pageCount = Math.ceil(count / Math.floor(itemsPerPage)) // ceil for if last page isn't full
	const indicators = [...Array(pageCount).keys()] // array of indexes for each page to use as iterator

	const changePage = (page: number) => {
		if (page < 0) return setPage(pageCount - 1) // flip to end
		if (page >= pageCount) return setPage(0) // flip to start
		setPage(page)
	}

	return (
		<Layout role={'region'} aria-labelledby={id}>
			<Header>
				<Title role={'heading'} id={id}>{title}</Title>
				{!isMobile && (
					<ArrowLinkButton
						href={link.href}
						label={link.label}
					/>
				)}
			</Header>
			{!isMobile && (
				<NavLeft>
					<ChevronButton
						onClick={() => changePage(page - 1)}
						direction={Direction.left}
						ariaLabel={'previous page'}
					/>
				</NavLeft>
			)}
			<Main>
				<Slider
					itemsPerPage={itemsPerPage}
					page={page}
					changePage={changePage}
				>
					{children}
				</Slider>
			</Main>
			{!isMobile && (
				<NavRight>
					<ChevronButton
						onClick={() => changePage(page + 1)}
						direction={Direction.right}
						ariaLabel={'next page'}
					/>
				</NavRight>
			)}
			<Footer>
				<Indicators
					indicators={indicators}
					activeIndicator={page}
					onClick={changePage}
				/>
				{isMobile && (
					<ArrowLinkButton
						href={link.href}
						label={link.label}
					/>
				)}
			</Footer>
		</Layout>
	)
}

export default Carousel