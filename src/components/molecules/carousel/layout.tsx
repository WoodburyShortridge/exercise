import styled from 'styled-components'
import {BREAKPOINT, GUTTERS} from '../../../utils/constants'

const Layout = styled.section`
  display: grid;
  grid-template-columns: repeat(24, [carousel-col-start] 1fr);
  gap: 5px;
`

const Header = styled.div`
  grid-column: carousel-col-start 1 / span 24;
  padding: 40px ${GUTTERS.mobile}px 30px ${GUTTERS.mobile}px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (min-width: ${BREAKPOINT}px) {
    grid-column: carousel-col-start 2 / span 22;
    padding: ${GUTTERS.desktop}px 50px 45px ${GUTTERS.desktop}px;
  }
`

const NavLeft = styled.div`
  grid-column: carousel-col-start 1 / span 1;
  grid-row: 2;
`

const NavRight = styled.div`
  grid-column: carousel-col-start 24 / span 1;
  grid-row: 2;
`

const Main = styled.div`
  grid-column: carousel-col-start 1 / span 24;
  @media (min-width: ${BREAKPOINT}px) {
    grid-column: carousel-col-start 2 / span 22;
  }
  grid-row: 2;
`

const Footer = styled.div`
  grid-column: carousel-col-start 1 / span 24;
  grid-row: 3;
  padding: 35px ${GUTTERS.mobile}px 24px ${GUTTERS.mobile}px;
  display: flex;
  flex-direction: column;
  @media (min-width: ${BREAKPOINT}px) {
    padding: 55px ${GUTTERS.desktop};
  }
`

export {Layout, Header, Main, NavLeft, NavRight, Footer}