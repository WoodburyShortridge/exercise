import {createContext} from 'react'

/**
 * Multiple components using the breakpoint flag so using context
 * instead of prop drill or adding listeners.
 */
export const IsMobile = createContext(true)
export const IsMobileProvider = IsMobile.Provider

export const IsDragging = createContext({
	isDragging: false,
	setIsDragging: (prev: boolean) => {},
})
export const IsDraggingProvider = IsDragging.Provider