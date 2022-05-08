export interface Stream {
	count: number
	next: string | null
	previous: string | null
	results: string[]
}

export interface PrimaryTag {
	id: string
	name: string
}

export interface PrimaryImage {
	alt_text: string
	crops: {
		'16x9': {
			url: string
		}
	}
}

export interface Article {
	slug: string
	id: string
	headline: string
	published_date: string
	primary_tag: PrimaryTag
	permalink: string
	primary_image: PrimaryImage | null
}

export const getStream = async (): Promise<Stream> => {
	try {
		const res = await fetch(`https://api.axios.com/api/render/stream/content`);
		return await res.json()
	} catch (e) {
		throw Error('Get stream failed') // @todo handle err for end-user
	}
}

export const getArticle = async (id: string): Promise<Article> => {
	try {
		const res = await fetch(`https://api.axios.com/api/render/content/${id}`);
		return await res.json()
	} catch (e) {
		throw Error('Get content failed') // @todo handle err for end-user
	}
}

export const getAllArticles = async (ids: string[]): Promise<Article[]> => {
	try {
		const res = await Promise.all(ids.map(id => getArticle(id)));
		return res.flat();
	} catch {
		throw Error('Promise failed') // @todo handle err for end-user
	}
}