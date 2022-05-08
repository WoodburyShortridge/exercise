import styled from 'styled-components'
import {COLORS} from '../../../utils/constants'

interface Props {
	aspectRatio?: string
}

const PlaceholderImage = ({aspectRatio = '16/9'}: Props) => {
	return <Placeholder style={{aspectRatio}}/>
}

const Placeholder = styled.div`
  background-color: ${COLORS.lightGray};
  width: 100%;
`

export default PlaceholderImage