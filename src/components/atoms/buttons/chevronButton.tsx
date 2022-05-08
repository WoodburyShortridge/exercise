import styled from 'styled-components'
import Chevron from '../icons/chevron'
import {COLORS} from '../../../utils/constants'

export enum Direction {
	left = 'left',
	right = 'right'
}

interface Props {
	onClick: () => void
	ariaLabel: string
	direction: Direction
}

const styleMap = {
	[Direction.left]: {
		justify: 'flex-end',
		transform: 'rotate(0deg)'
	},
	[Direction.right]: {
		justify: 'flex-start',
		transform: 'rotate(180deg)'
	}
}

const ChevronButton = ({onClick, ariaLabel, direction = Direction.left}: Props) => {
	return (
		<Button
			onClick={onClick}
			aria-label={ariaLabel}
			justify={styleMap[direction].justify}
		>
			<Chevron style={{transform: styleMap[direction].transform}}/>
		</Button>
	)
}

const Button = styled.button<{justify: string}>`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: ${props => props.justify};
  padding: 0;
  background: transparent;
  border: none;

  &:hover {
    svg path {
      stroke: ${COLORS.blue};
    }
  }
`
export default ChevronButton