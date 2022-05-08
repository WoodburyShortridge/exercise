import {memo, useContext} from 'react'
import Image from 'next/image'
import {formatDate} from '../../../utils/formatting'
import ArrowLink from '../../atoms/buttons/arrowLink'
import PlaceholderImage from '../../atoms/placeholderImage'
import {Article, Body, Date, Footer, Headline, Tag, Link} from './styles'
import IsMobile from '../../../context'
import {Article as ArticleType} from '../../../utils/api'

interface Props {
	article: ArticleType
}

// see figma https://www.figma.com/file/UpnImtkeDJSr21eFjxAoLN/Exercise---Horizontal-Scroll?node-id=0%3A1
const responsiveStyles = (isMobile: boolean) => ({
	body: {
		marginTop: isMobile ? 12 : 20
	},
	footer: {marginTop: isMobile ? 12 : 18},
	date: {fontSize: isMobile ? 12 : 14}
})


const aspectRatio = '16x9'

const ArticleCard = ({article}: Props) => {
	const {headline, primary_tag, primary_image, published_date, permalink} = article
	const isMobile = useContext(IsMobile)
	const styles = responsiveStyles(isMobile)
	const imgSrc = primary_image ? primary_image.crops[aspectRatio].url : null
	const date = formatDate(published_date)
	const ariaLabel = headline

	// @todo disable link clicks on desktop when being dragged (it's fine w/ mobile touch events but not mouse)
	return (
		<Article>
			<Link
				href={permalink}
				aria-label={ariaLabel}
				rel={'noopener noreferrer'}
				target={'_blank'}
			>
				{imgSrc ?
					<Image
						src={imgSrc}
						alt={primary_image?.alt_text}
						width={16}
						height={9}
						layout="responsive"
						draggable={false}
					/>
					:
					<PlaceholderImage />
				}
			</Link>
			<Body style={styles.body}>
				{!isMobile && <Tag>{primary_tag.name}</Tag>}
				<Link
					href={permalink}
					rel={'noopener noreferrer'}
					target={'_blank'}
				>
					<Headline>{headline}</Headline>
				</Link>
			</Body>
			<Footer style={styles.footer}>
				<Date style={styles.date}>{date}{isMobile && ` - ${primary_tag.name}`}</Date>
				{!isMobile && <ArrowLink href={permalink} label={'Go deeper'} ariaLabel={ariaLabel}/>}
			</Footer>
		</Article>
	)
}

// parent slider re-renders frequently on drag
// just need a simple comp here since nested article items don't change
const propsAreEqual = (prevArticleCard: Props, nextArticleCard: Props) => {
	return !!prevArticleCard.article === !!nextArticleCard.article
}

export default memo(ArticleCard, propsAreEqual)