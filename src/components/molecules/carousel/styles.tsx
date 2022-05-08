import {RefObject} from 'react'
import styled from 'styled-components'
import {BREAKPOINT, COLORS, GUTTERS} from '../../../utils/constants'

const Container = styled.div<{ref: RefObject<HTMLDivElement | null>}>`
  overflow: hidden;
  padding-left: ${GUTTERS.mobile / 2}px;
  @media (min-width: ${BREAKPOINT}px) {
    padding-left: 0;
  }
`

const Inner = styled.ul`
  white-space: nowrap;
  transition: transform 500ms;
  display: flex;
  user-select: none;
	padding: 0;
	margin: 0;
`

const Item = styled.li`
  display: flex;
  justify-content: center;
  color: ${COLORS.white};
  box-sizing: border-box;
  flex-shrink: 0;
  align-items: flex-start;
  padding: 0 ${GUTTERS.mobile / 2}px;
  @media (min-width: ${BREAKPOINT}px) {
    padding: 0 ${GUTTERS.desktop}px;
  }
`

const IndicatorList = styled.ol`
  list-style-type: none;
  margin: 0 0 24px;
  padding: 0;
  overflow: hidden;
  display: flex;
  justify-content: center;
`

export {Container, Inner, Item, IndicatorList}