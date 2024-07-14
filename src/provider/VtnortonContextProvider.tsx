import React, { Dispatch, SetStateAction, createContext, useState } from 'react'

export const VtnortonContext = createContext<{
	relatedPostVisibility: boolean
	setRelatedPostVisibility: Dispatch<SetStateAction<boolean>>
	showLogo: boolean
	setShowLogo: Dispatch<SetStateAction<boolean>>
}>({
	relatedPostVisibility: false,
	setRelatedPostVisibility: () => { },
	showLogo: true,
	setShowLogo: () => { },
})

export const VtnortonContextProvider = ({ children }: any) => {
	const [relatedPostVisibility, setRelatedPostVisibility] = useState(false)
	const [showLogo, setShowLogo] = useState(true)

	return <VtnortonContext.Provider value={{ relatedPostVisibility, setRelatedPostVisibility, showLogo, setShowLogo }}>{children}</VtnortonContext.Provider>
}
