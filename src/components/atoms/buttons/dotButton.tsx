import styled from 'styled-components'
import {COLORS} from '../../../utils/constants'

interface Props {
	ariaLabel: string
	active: boolean
	onClick: () => void
}

const DotButton = ({ariaLabel, active, onClick}: Props) => {
	return (
		<Button
			aria-label={ariaLabel}
			aria-selected={active}
			onClick={onClick}
		>
			<Icon
				active={active}
			/>
		</Button>
	)
}

const Button = styled.button`
  width: 20px;
  height: 20px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  background: transparent;
  border: none;
`

const Icon = styled.div<{active: boolean}>`
  width: 8px;
  height: 8px;
  background: ${props => props.active ? COLORS.darkGray : COLORS.lightGray};
  border-radius: 8px;
`

export default DotButton