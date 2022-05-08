/**
 * @jest-environment jsdom
 */
import {fireEvent, render} from '@testing-library/react'
import '@testing-library/jest-dom'
import ArticleCard from '../../../components/molecules/articleCard'
import Carousel from '../../../components/molecules/carousel'
import testArticles from './testArticles.json'

const renderCarouselMobile = () => render(<Carousel
	title={'More from Axios.com'}
	link={{
		label: 'Visit axios.com',
		href: 'https://www.axios.com'
	}}
	itemsPerPage={1.5}
>
	{
		testArticles.map(article => (
			<ArticleCard
				key={article.id}
				article={article}
			/>
		))
	}
</Carousel>)

describe('Carousel mobile', () => {
	it('renders correctly', () => {
		const carousel = renderCarouselMobile()
		expect(carousel).toMatchSnapshot()
	})

	it('changes pages on indicator press', () => {
		renderCarouselMobile()
		const buttons = document.querySelectorAll('button')
		expect(buttons.length).toBe(9)
		expect(buttons[0]).toHaveAttribute('aria-selected', 'true')
		expect(buttons[1]).toHaveAttribute('aria-selected', 'false')
		fireEvent(
			buttons[1],
			new MouseEvent('click', {
				bubbles: true,
				cancelable: true,
			}),
		)
		expect(buttons[0]).toHaveAttribute('aria-selected', 'false')
		expect(buttons[1]).toHaveAttribute('aria-selected', 'true')
		//@todo test slider transform pos
	})

	//@todo change pages on swipe test
})