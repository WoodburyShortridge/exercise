import {CSSProperties} from 'react'
import {COLORS} from '../../../utils/constants'

interface Props {
	width?: number,
	height?: number,
	stroke?: string,
	style?: CSSProperties
}

const Chevron = ({width = 28, height = 52, stroke = COLORS.lightGray, style = {}}: Props) => (
	<svg
		width={width}
		height={height}
		viewBox="0 0 28 52"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		style={style}
	>
		<path
			d="M26 50.2963L2 26L26 1.7037"
			stroke={stroke}
			strokeWidth="3"
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
	</svg>
)

export default Chevron