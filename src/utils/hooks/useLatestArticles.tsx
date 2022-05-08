/**
 * Articles fetching helper to request all recent articles and async loading state
 *
 * @return {articles, loading}
 */
import {useEffect, useState} from 'react'
import {Article, getAllArticles, getStream} from '../api'

const useLatestArticles = () => {
	const [articles, setArticles] = useState<Article[]>([])
	const [loading, setLoading] = useState(true)
	useEffect(() => {
		const fetch = async () => {
			const stream = await getStream();
			return await getAllArticles(stream.results)
		}
		fetch().then((res) => { // @todo handle err for end-user
			res = res.filter(r => !!r.headline && !!r.published_date && !!r.permalink && !!r.primary_tag) // @todo handle some articles missing required fields?
			setArticles(res)
			setLoading(false)
		});
	}, [])
	return { articles, loading }
}

export default useLatestArticles