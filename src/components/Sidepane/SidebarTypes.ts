export type SideBarStateOptions = 'expanded' | 'collapsed' | 'exploded'

export type SidebarOptions = {
	state: SideBarStateOptions
	isPinned: boolean
	autoExpandBreakpoint: number
	explodeIt: () => void
	expand: () => void
	collapse: () => void
	pin: () => void
	unpin: () => void
	setAutoExpandBreakpoint: (breakpoint: number) => void
	isWidgetHovered: boolean
	setWidgetHovered: (hovered: boolean) => void
}
