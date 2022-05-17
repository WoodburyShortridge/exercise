import {useContext} from 'react'
import Carousel from '../components/molecules/carousel'
import ArticleCard from '../components/molecules/articleCard'
import useLatestArticles from '../utils/hooks/useLatestArticles'
import {IsMobile} from '../context'

const Index = () => {
  const isMobile = useContext(IsMobile)
  const {articles, loading} = useLatestArticles()

  return (
    <>
      {
        !loading && ( //@todo loading ui
          <Carousel
            title={'More from Axios.com'}
            link={{
              label: 'Visit axios.com',
              href: 'https://www.axios.com'
            }}
            itemsPerPage={isMobile ? 1.5 : 3}
          >
            {
              articles.map(article => (
                <ArticleCard
                  key={article.id}
                  article={article}
                />
              ))
            }
          </Carousel>
        )
      }
    </>
  )
}

export default Index