import DotButton from '../../atoms/buttons/dotButton'
import {IndicatorList} from './styles'

interface Props {
	indicators: number[]
	activeIndicator: number
	onClick: (indicator: number) => void
}

const Indicators = ({indicators, onClick, activeIndicator}: Props) => {
	return (
		<IndicatorList>
			{
				indicators.map(indicator => (
						<li key={indicator}>
							<DotButton
								ariaLabel={`page ${indicator + 1}`}
								active={indicator === activeIndicator}
								onClick={() => onClick(indicator)}
							/>
						</li>
					)
				)
			}
		</IndicatorList>
	)
}

export default Indicators