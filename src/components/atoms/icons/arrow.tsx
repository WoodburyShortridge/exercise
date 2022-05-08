import {CSSProperties} from 'react'
import {COLORS} from '../../../utils/constants'

interface Props {
	width?: number,
	height?: number,
	fill?: string,
	style?: CSSProperties
}

const Arrow = ({width = 25, height = 9, fill = COLORS.blue, style = {}}: Props) => (
	<svg
		width={width}
		height={height}
		viewBox="0 0 25 9"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		style={style}
	>
		<path
			d="M24.3536 4.85355C24.5488 4.65829 24.5488 4.34171 24.3536 4.14645L21.1716 0.964466C20.9763 0.769204 20.6597 0.769204 20.4645 0.964466C20.2692 1.15973 20.2692 1.47631 20.4645 1.67157L23.2929 4.5L20.4645 7.32843C20.2692 7.52369 20.2692 7.84027 20.4645 8.03553C20.6597 8.2308 20.9763 8.2308 21.1716 8.03553L24.3536 4.85355ZM0 5H24V4H0V5Z"
			fill={fill}
		/>
	</svg>
)

export default Arrow