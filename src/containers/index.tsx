import {createGlobalStyle} from 'styled-components'
import useIsMobile from '../utils/hooks/useIsMobile'
import {IsMobileProvider} from '../context'

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: NB International Pro; // font grabbed from axios.com
    src: url('https://static.axios.com/fonts/axios-site/nb_international_pro_book.woff2');
  }

  body {
    margin: 0;
  }
`

const Layout = ({children}: {children: JSX.Element}) => {
	const isMobile = useIsMobile()

	return (
		<IsMobileProvider value={isMobile}>
			<GlobalStyle/>
			{children}
		</IsMobileProvider>
	)
}

export default Layout