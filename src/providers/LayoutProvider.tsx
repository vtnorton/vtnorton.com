import React, { createContext, useContext, useState, ReactNode } from 'react'
import { SidebarOptions, SideBarStateOptions } from '../components/Sidepane/SidebarTypes'


type LayoutContextType = {
	sidepane: SidebarOptions
}

const LayoutContext = createContext<LayoutContextType | undefined>(undefined)

export const LayoutProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
	const [sidepaneState, setSidePaneState] = useState<SideBarStateOptions>('collapsed')
	const [isPinned, setIsPinned] = useState(false)
	const [autoExpandBreakpoint, setAutoExpandBreakpoint] = useState(1500)
	const [isWidgetHovered, setWidgetHovered] = useState(false)

	const sidepane = {
		state: sidepaneState,
		isPinned,
		autoExpandBreakpoint,
		explodeIt: () => setSidePaneState('exploded'),
		expand: () => setSidePaneState('expanded'),
		collapse: () => setSidePaneState('collapsed'),
		pin: () => setIsPinned(true),
		unpin: () => setIsPinned(false),
		setAutoExpandBreakpoint,
		isWidgetHovered,
		setWidgetHovered,
	}

	return (
		<LayoutContext.Provider value={{
			sidepane,
		}}>
			{children}
		</LayoutContext.Provider>
	)
}

export const useLayout = () => {
	const context = useContext(LayoutContext)
	if (!context) throw new Error('useLayout must be used within a LayoutProvider')
	return context
}