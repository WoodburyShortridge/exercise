/**
 * @jest-environment jsdom
 */
import {fireEvent, render} from '@testing-library/react'
import {act} from 'react-dom/test-utils'
import '@testing-library/jest-dom'
import {formatDate} from '../../utils/formatting'
import useIsMobile from '../../utils/hooks/useIsMobile'

// dumb helper to await next event loop @todo something better
const rest = async () => await new Promise((r) => setTimeout(r, 1))

test('formats date', () => {
	const dateString = new Date('05 October 2011 14:48 UTC').toISOString()
	const date = formatDate(dateString)
	expect(date).toEqual('Oct 5, 2011')
})

test('use is mobile', async () => {
	const TestElement = ({isMobileCb}: { isMobileCb: (isMobile: boolean) => void }) => {
		const isMobile = useIsMobile()
		isMobileCb(isMobile)
		return null
	}

	const isMobileCb = jest.fn()
	render(<TestElement isMobileCb={isMobileCb}/>)
	await act(async () => {
		Object.defineProperty(window, 'innerWidth', {
			writable: true,
			configurable: true,
			value: 375
		})
		fireEvent(window, new Event('resize'))
		await rest()
		expect(isMobileCb).toBeCalledWith(true)
	})

	await act(async () => {
		Object.defineProperty(window, 'innerWidth', {
			writable: true,
			configurable: true,
			value: 1440
		})
		fireEvent(window, new Event('resize'))
		await rest()
		expect(isMobileCb).toBeCalledWith(false)
	})
})

// @todo use is mobile test
// @todo use gesture tests
// @todo use latest articles test