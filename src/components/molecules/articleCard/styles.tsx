import styled from 'styled-components'
import {COLORS} from '../../../utils/constants'

const Article = styled.article`
  width: 100%;
`

const Headline = styled.h3`
  font-family: 'NB International Pro', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 125%;
  color: ${COLORS.darkGray};
  white-space: break-spaces;
  margin: 0;
  display: -webkit-box;
  -webkit-line-clamp: 2; // @todo this doesn't have IE support maybe move to js?
  -webkit-box-orient: vertical;
  overflow: hidden;
  min-height: calc((18px * 1.25) * 2); // twice the line height
`

const Tag = styled.p`
  font-family: 'NB International Pro', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 150%;
  color: ${COLORS.mustard};
  margin: 0 0 8px 0;
`

const Date = styled.p`
  font-family: 'NB International Pro', sans-serif;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  color: ${COLORS.gray};
  margin: 0;
`

const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Link = styled.a`
  text-decoration: none;
  color: unset;
`

const Body = styled.div`
`

export {Article, Headline, Tag, Date, Footer, Body, Link}