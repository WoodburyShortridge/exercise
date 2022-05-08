import styled from 'styled-components'
import {BREAKPOINT, COLORS} from '../../../utils/constants'

const Title = styled.h1`
  font-family: 'NB International Pro', sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 32px;
  line-height: 125%;
  color: ${COLORS.darkGray};
  margin: 0;

  @media (min-width: ${BREAKPOINT}px) {
    font-size: 48px;
  }
`

export default Title