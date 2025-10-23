export type SideBarStateOptions = 'expanded' | 'collapsed' | 'exploded'

export type SidebarOptions = {
	state: SideBarStateOptions
	explodeIt: () => void
	expand: () => void
	collapse: () => void
}
