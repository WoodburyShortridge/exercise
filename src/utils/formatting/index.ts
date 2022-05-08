/**
 * Helper format ios date strings into human-readable e.g. 'Oct 2, 2021'
 *
 * @param str (ios date string from api)
 * @return formatted date string e.g. 'Oct 2, 2021'
 */
export const formatDate = (str: string) => {
	return new Date(str).toLocaleString('en-us',{month:'short', day: 'numeric', year:'numeric'})
}