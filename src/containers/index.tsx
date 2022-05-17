import {useState} from 'react'
import {createGlobalStyle} from 'styled-components'
import useIsMobile from '../utils/hooks/useIsMobile'
import {IsMobileProvider, IsDraggingProvider} from '../context'

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
	const [isDragging, setIsDragging] = useState(false)
	const isMobile = useIsMobile()

	return (
		<IsMobileProvider value={isMobile}>
			<IsDraggingProvider
				value={{
					isDragging,
					setIsDragging
				}}
			>
				<GlobalStyle/>
				{children}
			</IsDraggingProvider>
		</IsMobileProvider>
	)
}

export default Layout