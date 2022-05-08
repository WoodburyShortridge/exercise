import {createContext} from 'react'

/**
 * Multiple components using the breakpoint flag so using context
 * instead of prop drill or adding listeners.
 */
const IsMobile = createContext(true)
export const IsMobileProvider = IsMobile.Provider
export default IsMobile