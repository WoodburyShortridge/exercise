import {CSSProperties} from 'react'
import styled from 'styled-components'
import Arrow from '../icons/arrow'
import {COLORS} from '../../../utils/constants'

export enum Decoration {
	underline = 'underline',
	none = 'none'
}

interface Props {
	label: string
	href: string
	decoration?: Decoration
	ariaLabel?: string
	color?: string
	style?:  CSSProperties
}

const ArrowLink = ({label, href, ariaLabel, decoration = Decoration.underline, color = COLORS.blue, style = {}}: Props) => {
	return (
		<Link
			href={href}
			aria-label={ariaLabel || label}
			rel={'noopener noreferrer'}
			target={'_blank'}
			color={color}
			decoration={decoration}
			style={style}
		>
			{label}
			<Arrow fill={color} style={{marginLeft: 12}}/>
		</Link>
	)
}

const Link = styled.a<{decoration: string}>`
  font-family: 'NB International Pro', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  text-align: center;
  line-height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  color: ${props => props.color};

  &:hover, &:focus {
    text-decoration: ${props => props.decoration};
  }
`

export default ArrowLink