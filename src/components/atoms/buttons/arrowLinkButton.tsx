import ArrowLink, {Decoration} from './arrowLink'
import {COLORS} from '../../../utils/constants'

interface Props {
	label: string
	href: string
	ariaLabel?: string
}

const ArrowLinkButton = ({label, href, ariaLabel}: Props) => {
	return (
		<ArrowLink
			label={label}
			href={href}
			ariaLabel={ariaLabel || label}
			color={'white'}
			decoration={Decoration.none}
			style={{
				background: COLORS.blue,
				padding: `11px 17px`,
				borderRadius: 6
			}}
		/>
	)
}

export default ArrowLinkButton