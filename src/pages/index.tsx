import {useContext, useState} from 'react'
import Carousel from '../components/molecules/carousel'
import ArticleCard from '../components/molecules/articleCard'
import useLatestArticles from '../utils/hooks/useLatestArticles'
import IsMobile from '../context'

const Index = () => {
  const isMobile = useContext(IsMobile)
  const {articles, loading} = useLatestArticles()
  const [isDragging, setIsDragging] = useState(false)

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
            isDragging={isDragging}
            setIsDragging={setIsDragging}
          >
            {
              articles.map(article => (
                <ArticleCard
                  key={article.id}
                  article={article}
                  isDragging={isDragging}
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